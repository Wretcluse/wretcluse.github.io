/* Wretcluse macro library — display and search, no external dependencies. */
(() => {
  "use strict";
  const data = Array.isArray(window.WRETCLUSE_MACROS) ? window.WRETCLUSE_MACROS : [];
  const allCats = [...new Set(data.map(x => x.category))];
  const preferred = ["General / Utility", "Rogue", "Warrior", "Demon Hunter", "Druid", "Evoker", "Hunter", "Mage", "Warlock", "Racial"];
  const cats = preferred.filter(x => allCats.includes(x)).concat(allCats.filter(x => !preferred.includes(x)));
  const counts = new Map(cats.map(c => [c, data.filter(m => m.category === c).length]));
  const elements = {
    filter: document.querySelector('#filters'), search: document.querySelector('#search'),
    results: document.querySelector('#results'), none: document.querySelector('#none'),
    summary: document.querySelector('#summary'), more: document.querySelector('#more'),
    announcer: document.querySelector('#announcer')
  };
  let selected = "All", visibleCount = 24;
  const safeText = (tag, value, css) => { const e = document.createElement(tag); if (css) e.className = css; e.textContent = value; return e; };
  function makeFilter(name, count) {
    const button = safeText('button', `${name}  ${count}`, 'filter');
    button.type = 'button'; button.setAttribute('aria-pressed', String(name === selected));
    button.addEventListener('click', () => { selected = name; visibleCount = 24; render(); updateButtons(); });
    return button;
  }
  elements.filter.append(makeFilter('All', data.length));
  cats.forEach(c => elements.filter.append(makeFilter(c, counts.get(c))));
  function updateButtons() {
    [...elements.filter.children].forEach(button => {
      button.setAttribute('aria-pressed', String(button.textContent.startsWith(selected + '  ')));
    });
  }
  function card(m) {
    const el = safeText('article', null, 'card');
    const head = safeText('div', null, 'card-head');
    head.append(safeText('span', m.category, 'category'));
    head.append(safeText('span', `ID ${m.id}`, 'id'));
    el.append(head, safeText('h3', m.name));
    el.append(safeText('pre', m.code, 'code'));
    const foot = safeText('div', null, 'card-foot');
    const copy = safeText('button', 'Copy macro ↗', 'copy');copy.type = 'button';
    copy.addEventListener('click', async () => {
      try {
        if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(m.code);
        else {
          const t = safeText('textarea', m.code);t.style.cssText='position:fixed;left:-9999px;opacity:0';
          document.body.append(t);t.select();const ok=document.execCommand('copy');t.remove();if (!ok) throw Error('copy not supported');
        }
        copy.textContent='Copied ✓'; elements.announcer.textContent=m.name+' copied';
        window.setTimeout(() => {copy.textContent='Copy macro ↗';},1600);
      } catch (e) { copy.textContent='Select the text above to copy'; elements.announcer.textContent='Automatic copy unavailable'; }
    });
    foot.append(copy, safeText('span', `${m.code.length} characters`, 'length'));
    el.append(foot);return el;
  }
  function render() {
    const query = elements.search.value.toLowerCase().trim();
    const results = data.filter(m => (selected === 'All' || m.category === selected) &&
      (!query || [m.name,m.id,m.category,m.code].some(v=>v.toLowerCase().includes(query))));
    const visible = results.slice(0,visibleCount);
    elements.results.replaceChildren(...visible.map(card));
    elements.none.hidden=results.length>0;
    elements.summary.textContent=`SHOWING ${visible.length} / ${results.length} · ${data.length} TOTAL`;
    elements.more.hidden=visible.length>=results.length;
  }
  elements.more.addEventListener('click',()=>{visibleCount += 24;render();});
  elements.search.addEventListener('input',()=>{visibleCount=24;render();});
  render();
})();
