JAIN YOUTH KARNAL — WEBSITE UPDATE

Included files to replace/add at the root of the GitHub Pages repository:
- games.js, games.css: match-game solved/pending visual states and a more robust 20x20 word-search grid.
- colouring.html, colouring.js: adds a Jain Flag drawing to the online colouring studio.
- yatra.html, script.js, yatra-media.css: Badegaon trip activities are grouped under Prakshal then Darshan; trip photos display inline as small previews when listed in data/trip-media.json, and clicking a preview opens the full image in a new tab. Existing Darshan gallery images continue to open in the site's full-screen image viewer.
- join.html, join.css, join.js: adds dedicated styling and reliable mailto form behavior to the Join the Community page, while retaining the shared site styles and script.

INSTALLATION
1. Make a backup of your current files.
2. Copy the included files into the repository root, replacing files with the same names.
3. The included join(7).html has been named join.html in this ZIP to match the site's normal page URL.
4. Commit and push to GitHub Pages, then hard-refresh the pages (Ctrl+F5).

TRIP PHOTO PREVIEWS
The current trip-media manifest may have empty photo lists. To show trip thumbnails, add each photo filename to data/trip-media.json under the correct trip folder and category (mandir, group, memories), and upload the corresponding images into assets/trips/<trip-folder>/<category>/. The existing Darshan gallery uses the image paths already present in yatra.html.

NOTES
- Do not replace shared styles.css or layout.js; this update uses the existing shared files.
- The Join form opens the visitor's default email app with the request prefilled. A real submission endpoint such as a Google Form can be configured later if desired.
