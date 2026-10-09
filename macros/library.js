/* Wretcluse macro library: data in macro-data.js, no external libraries or backend. */
(() => {
  'use strict';
  const data = Array.isArray(window.WRETCLUSE_MACROS) ? window.WRETCLUSE_MACROS : [];
  const $ = (selector) => document.querySelector(selector);
  const ui = {
    search: $('#search'), filters: $('#filters'), character: $('#character'),
    purpose: $('#purpose'), reset: $('#reset'), results: $('#results'),
    summary: $('#summary'), none: $('#none'), more: $('#more'), announcer: $('#announcer')
  };
  const el = (tag, text, cls) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };
  const distinct = (items) => [...new Set(items.filter(Boolean))].sort((a,b) => a.localeCompare(b));
  const classes = distinct(data.map(m => m.class));
  const purposes = distinct(data.map(m => m.purpose));
  const characters = distinct(data.map(m => m.character));
  let chosenClass = 'all';
  let page = 24;
  const classButtons = new Map();
  const cardCache = new Map();

  function addOption(select, value, caption) {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = caption;
    select.append(option);
  }
  addOption(ui.character, 'account-wide', 'Account-wide only');
  characters.forEach(character => addOption(ui.character, character, character));
  purposes.forEach(p => addOption(ui.purpose, p, p));

  function makeClass(name, number) {
    const button = el('button', `${name}  ${number}`, 'filter');
    button.type = 'button';
    button.setAttribute('aria-pressed', String(name === 'all'));
    button.addEventListener('click', () => {
      chosenClass = name;
      page = 24;
      update();
    });
    classButtons.set(name, button);
    ui.filters.append(button);
  }
  makeClass('all', data.length);
  classes.forEach(className => makeClass(className, data.filter(m => m.class === className).length));
  // Labels are presentation only; keys remain literal class names.
  classButtons.get('all').textContent = `All classes  ${data.length}`;

  function getMatches() {
    const q = ui.search.value.trim().toLowerCase();
    const person = ui.character.value;
    const whichPurpose = ui.purpose.value;
    return data.filter(m => {
      if (chosenClass !== 'all' && m.class !== chosenClass) return false;
      if (person === 'account-wide' && m.scope !== 'Account-wide') return false;
      if (person !== 'all' && person !== 'account-wide' && m.character !== person) return false;
      if (whichPurpose !== 'all' && m.purpose !== whichPurpose) return false;
      if (!q) return true;
      return [m.title,m.name,m.class,m.purpose,m.character,m.realm,m.description,
        m.scope,m.id,m.code,...(m.tags || [])].some(v => String(v || '').toLowerCase().includes(q));
    });
  }

  async function copyText(button, macro) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(macro.code);
      } else {
        const field = el('textarea', macro.code);
        field.style.cssText='position:fixed;left:-9999px;opacity:0';
        document.body.append(field);
        field.select();
        const okay = document.execCommand('copy');
        field.remove();
        if (!okay) throw new Error('Clipboard unsupported');
      }
      button.textContent='Copied ✓';
      ui.announcer.textContent=macro.title+' copied';
      setTimeout(()=> { button.textContent='Copy macro ↗'; },1600);
    } catch (_) {
      ui.announcer.textContent='Copy unavailable. Select the macro text to copy.';
      button.textContent='Select text to copy';
    }
  }
  function macroCard(m) {
    if (cardCache.has(m.key)) return cardCache.get(m.key);
    const article = el('article',null,'card');
    const head=el('div',null,'card-head');
    head.append(el('span',m.class,'category'),el('span',m.scope==='Account-wide'?'Account-wide':`${m.character} · ${m.realm}`,'source'));
    article.append(head,el('h3',m.title));
    article.append(el('p',m.description,'description'));
    const meta=el('div',null,'meta');
    meta.append(el('span',m.purpose,'purpose'),el('span',`ID ${m.id}`,'id'));
    article.append(meta);
    article.append(el('pre',m.code,'code'));
    const bottom=el('div',null,'card-foot');
    const copy=el('button','Copy macro ↗','copy'); copy.type='button';
    copy.addEventListener('click',()=>copyText(copy,m));
    bottom.append(copy,el('span',`${m.code.length} characters`,'length'));
    article.append(bottom);
    cardCache.set(m.key,article);
    return article;
  }

  function update() {
    const matches=getMatches();
    const visible=matches.slice(0,page);
    ui.results.replaceChildren(...visible.map(macroCard));
    ui.none.hidden=matches.length!==0;
    ui.summary.textContent=`SHOWING ${visible.length} / ${matches.length} · ${data.length} TOTAL`;
    ui.more.hidden=visible.length>=matches.length;
    for (const [className,button] of classButtons) button.setAttribute('aria-pressed',String(className===chosenClass));
  }
  for (const field of [ui.search,ui.character,ui.purpose]) {
    field.addEventListener(field===ui.search?'input':'change',()=>{page=24;update();});
  }
  ui.more.addEventListener('click',()=>{page+=24;update();});
  ui.reset.addEventListener('click',()=>{
    chosenClass='all'; ui.search.value='';ui.character.value='all';ui.purpose.value='all';page=24;update();
  });
  update();
})();
