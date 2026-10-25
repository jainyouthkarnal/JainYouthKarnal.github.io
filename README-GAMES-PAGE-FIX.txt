Jain Youth Karnal — Games Page Fix

Files included (place all three in the website root):
- games.html: adds the missing styles.css stylesheet reference; keeps layout.js and app.js references.
- styles.css: includes the existing games page styling (.games-page, .games-hero, .game-tabs, .game-panel, and game controls).
- app.js: includes the five client-side games and the current homepage/event updates.

Why the page looked unstyled: games.html did not load styles.css. The five games' JavaScript is embedded in app.js (under the games.js section), so a separate games.js file is not required.

Deployment: upload/replace these files at the same root level as index.html, layout.js, and the other site files. Commit/push to GitHub Pages, then hard-refresh the browser (Ctrl+F5). Do not put these files in a subfolder unless you also change the relative paths.
