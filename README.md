# Wretcluse.gg — Draft 0.1

A lightweight, dark-themed personal project archive for World of Warcraft and Minecraft. No frameworks, paid hosting, accounts, databases, or build tools required.

## Preview locally

Double-click `index.html`. All files must stay together in the same folder. The site works without internet access.

## Publish to GitHub Pages

1. Sign into GitHub and create a **Public** repository named `YOUR-USERNAME.github.io` (replace with your actual GitHub username). Check **Add README** when creating it.
2. In your new repository, select **Add file → Upload files**.
3. Open the extracted `wretcluse-site` folder on your computer. Upload the **contents of the folder**, not the ZIP archive or the outer folder: `index.html`, `styles.css`, `site.js`, `content.js`, `favicon.svg`, and `.nojekyll`. You can leave your repository's auto-generated README as-is or replace it with the README from this package.
4. Commit the uploaded files to the `main` branch.
5. Open **Settings → Pages**. Under **Build and deployment**, set **Source: Deploy from a branch**, **Branch: main**, **Folder: / (root)**, then save.
6. Visit `https://YOUR-USERNAME.github.io` when GitHub Pages reports deployment finished. Publication may take several minutes.

Official guide: https://docs.github.com/en/pages/quickstart

## The easiest way to update your site

All project descriptions, labels, macro entries, and download URLs live in **`content.js`**. Edit only this file for ordinary updates:

- **Change an addon description:** edit the `description` for the WretcluseUI project.
- **Publish an addon download:** create a GitHub Release with your ZIP, copy the asset's download link, paste it inside `downloadUrl: "..."`, then commit.
- **Add a macro:** copy an existing entry within the `macros: [...]` array, give it a title, description, category and `code` value, then commit. Multiple lines can be entered between the backticks (`...`) in `code`.
- **Add another project:** copy an entry inside `projects: [...]`. Keep the commas between entries.

Changes committed to `main` republish automatically. The site layout does not need to be rebuilt.

### Avoid broken links

An empty `downloadUrl: ""` intentionally displays **Download coming soon**. Don't fill it until an actual release exists. The draft currently contains **no live downloads**.

### File guide

| File | Purpose |
| --- | --- |
| `index.html` | Homepage structure and section headings |
| `styles.css` | Colors, spacing, responsive layout |
| `content.js` | **Edit this for routine updates** |
| `site.js` | Displays projects/macros, powers Copy Macro buttons |
| `favicon.svg` | Simple W icon in browser tabs |
| `.nojekyll` | Tells GitHub Pages to publish files unchanged |
| `README.md` | Setup and maintenance instructions |

## Notes

- The site is **public**. Do not place passwords, private downloads, real-name details, or access tokens in the repository.
- To keep downloadable addon code separate from the website, use an independent repository for `WretcluseUI` and link its GitHub Releases here.
- No game art, assets, or screenshots are included. Add only material you have permission to share.
- This initial design deliberately has no analytics, paywall, or mailing list. Those can be introduced later if useful.
