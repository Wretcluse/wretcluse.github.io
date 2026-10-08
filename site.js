/* WRETCLUSE.GG — SITE ENGINE. Normally, you won't need to edit this file. */
(() => {
  'use strict';
  const content = window.WRETCLUSE_CONTENT || { projects: [], macros: [] };
  const projectsContainer = document.querySelector('#projects-list');
  const macrosContainer = document.querySelector('#macros-list');

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  }

  function projectCard(project, index) {
    const card = el('article', `project-card project-${project.type || 'general'}`);
    const visual = el('div', 'project-visual');
    visual.setAttribute('aria-hidden', 'true');
    visual.append(el('span', 'visual-index', `W/0${index + 1}`));
    const symbol = { addon: '</>', housing: '⌂', minecraft: '▦' }[project.type] || '✳';
    visual.append(el('span', 'visual-symbol', symbol));
    visual.append(el('span', 'visual-type', project.type || 'PROJECT'));
    card.append(visual);

    const body = el('div', 'project-body');
    const top = el('div', 'project-topline');
    top.append(el('span', 'project-category', project.category));
    top.append(el('span', 'project-status', project.status));
    body.append(top);
    body.append(el('h3', '', project.title));
    body.append(el('p', 'project-description', project.description));

    const tags = el('div', 'tags');
    for (const tag of project.tags || []) tags.append(el('span', 'tag', tag));
    body.append(tags);

    const bottom = el('div', 'project-bottom');
    bottom.append(el('span', 'project-detail', project.detail));
    if (project.downloadUrl && /^(https?:\/\/|\.\/|\/)/i.test(project.downloadUrl)) {
      const link = el('a', 'project-download', 'Download ↗');
      link.href = project.downloadUrl;
      link.rel = 'noopener noreferrer';
      if (/^https?:\/\//i.test(project.downloadUrl)) link.target = '_blank';
      bottom.append(link);
    } else {
      bottom.append(el('span', 'project-coming', 'Download coming soon'));
    }
    body.append(bottom);
    card.append(body);
    return card;
  }

  function macroCard(macro, index) {
    const card = el('article', 'macro-card');
    const top = el('div', 'macro-card-top');
    top.append(el('span', 'macro-category', macro.category || 'UTILITY'));
    top.append(el('span', 'macro-number', String(index + 1).padStart(2, '0')));
    card.append(top);
    card.append(el('h3', '', macro.title));
    card.append(el('p', 'macro-description', macro.description));
    const codeWrap = el('div', 'macro-codebox');
    codeWrap.append(el('code', '', macro.code));
    card.append(codeWrap);
    const button = el('button', 'copy-button', 'Copy macro ↗');
    button.type = 'button';
    button.addEventListener('click', async () => {
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(macro.code);
        } else {
          const field = el('textarea', '', macro.code);
          field.style.position = 'fixed';
          field.style.opacity = '0';
          document.body.append(field);
          field.select();
          if (!document.execCommand('copy')) throw new Error('Copy unavailable');
          field.remove();
        }
        button.textContent = 'Copied ✓';
        document.querySelector('#copy-announcement').textContent = `${macro.title} copied to clipboard`;
        window.setTimeout(() => { button.textContent = 'Copy macro ↗'; }, 1800);
      } catch (_) {
        button.textContent = 'Select text above to copy';
        document.querySelector('#copy-announcement').textContent = 'Automatic copy failed; select the macro text manually.';
      }
    });
    card.append(button);
    return card;
  }

  if (projectsContainer) {
    projectsContainer.replaceChildren();
    if (Array.isArray(content.projects) && content.projects.length) {
      content.projects.forEach((project, index) => projectsContainer.append(projectCard(project, index)));
    } else projectsContainer.append(el('p', 'empty-message', 'New projects will appear here.'));
  }
  if (macrosContainer) {
    macrosContainer.replaceChildren();
    if (Array.isArray(content.macros) && content.macros.length) {
      content.macros.forEach((macro, index) => macrosContainer.append(macroCard(macro, index)));
    } else macrosContainer.append(el('p', 'empty-message', 'New macros will appear here.'));
    const count = document.querySelector('#macro-count');
    if (count) count.textContent = `MACROS / ${String(content.macros?.length || 0).padStart(2, '0')}`;
  }
})();
