# Jain Youth Karnal Website

GitHub Pages site for **Jain Youth Karnal / Jin Shasan Prabhavna Sangh Karnal**.

## Current package layout

The latest consolidated update package uses this structure. It is a partial update bundle, not a complete copy of the live repository.

```text
/
├── index.html
├── community.html
├── bhakti.html
├── lyrics.html
├── arghya.html
├── knowledge.html
├── tirthankaras.html
├── games.html
├── yatra.html
├── join.html
├── coords-helper.html       # standalone utility
├── layout.js                # shared navigation and footer
├── footer.html              # footer fragment used by the shared layout
├── styles.css               # consolidated styling
├── app.js                   # consolidated site behaviour
├── favicon.svg
├── apple-icon.png
├── data/
│   ├── calendar-events.json
│   ├── knowledge-index.json
│   ├── trip-media.json
│   └── yatra-data.json
├── knowledge/
│   └── articles/             # separate articles: Panch Balyati, Panch Kalyanak, Das Lakshan
├── assets/                   # keep the existing folder and all media/logos
└── .github/workflows/        # keep existing workflows
```

**Important:** The current package uses `knowledge.html`, `app.js` and consolidated `styles.css`. Older notes mention `learn.html`, `script.js`, separate animation files, or separate game CSS/JS; those describe earlier versions and should not be followed blindly. Check the files in the branch that GitHub Pages actually publishes before renaming or deleting anything.

## Where to edit

| Task | File |
|---|---|
| Home page and hero | `index.html` |
| Shared navigation/footer | `layout.js` and the footer fragment it loads |
| Community information | `community.html` |
| Bhakti cards and categories | `bhakti.html` |
| Lyrics and Hindi/Roman transliteration toggle | `lyrics.html` |
| 24 Tirthankara Arghya | `arghya.html` |
| Knowledge Hub landing page | `knowledge.html` in the consolidated package |
| Tirthankara directory | `tirthankaras.html` and its related data/logic in the active JS |
| Jain Games | `games.html` and game logic in the active JS |
| Yatra cards/map | `yatra.html` |
| Join/Connect form | `join.html` |
| Calendar-only events | `data/calendar-events.json` |
| Yatra places, dates and real coordinates | `data/yatra-data.json` |
| Trip photo manifest | `data/trip-media.json` |
| Knowledge catalogue | `data/knowledge-index.json` — generated catalogue; do not hand-edit if the catalogue workflow is active |
| Main styling | `styles.css` |
| Shared site interactions | `app.js` |

## Data and content rules

- Keep calendar-only events separate from Yatra trips.
- Use `YYYY-MM-DD` for event dates and validate JSON after editing.
- Preserve actual map coordinates separately from visual map-pin positions.
- Use confirmed temple names, dates and coordinates; do not guess.
- Trip image references in `data/trip-media.json` only work if the referenced image files exist in the matching `assets/trips/...` folders. The data manifest does not contain the image files.
- The current data package includes eight Yatra entries and a Kundalpur Yatra calendar event. Confirm the live repository data before assuming it has not changed.
- On the lyrics page, **English means Roman transliteration**, not an English translation. The default view is Both; preserve the supplied Hindi text and check transliteration and media paths.
- Preserve the existing Jain Youth Karnal logo, `assets/` directory, images and other data files. Do not overwrite the repository with this partial package or delete files simply because they are not included here.

## Knowledge articles included in this pack

The three topics are separate articles and should remain separate in the Knowledge Hub:

- `knowledge/articles/panch-balyati.md` — the five Balyati Tirthankaras, traditional verse and associated mantra.
- `knowledge/articles/panch-kalyanak.md` — the five auspicious events in a Tirthankara’s life.
- `knowledge/articles/das-lakshan-parva.md` — the ten supreme virtues and related observances.

After adding these files to the repository, let the active catalogue workflow regenerate `data/knowledge-index.json`. Do not manually edit the generated catalogue if that workflow is active. Check the live catalogue builder and published Knowledge Hub to confirm that Markdown articles are supported and appear as expected.

## Knowledge Hub: adding a resource

1. Add the resource to the appropriate folder: `knowledge/articles/`, `knowledge/pdfs/`, `knowledge/images/` or `knowledge/resources/`.
2. Use a clear filename.
3. Check the active catalogue builder and its supported-extension allowlist. The documented workflow uses `scripts/build_knowledge_index.py` and `.github/workflows/knowledge-catalogue.yml`; verify that these files exist in the publishing branch before relying on automation.
4. Commit and push to the branch watched by the workflow.
5. Check GitHub Actions and confirm the generated `data/knowledge-index.json` includes the new item.
6. Open the published Knowledge Hub and test the title, category, link and preview/download behaviour.

GitHub Pages does not automatically enumerate repository folders at runtime. A generated catalogue is required if the page reads resources from `data/knowledge-index.json`. If deployment is Actions-based, ensure the generated JSON is included in the published artifact.

## Games and Tirthankara images

- The consolidated package has game logic in `app.js`; older `INSTALLATION.txt` instructions refer to separate `games.css` and `games.js` and may be stale.
- The Guess the Tirthankar game is intended to reuse images from the site's existing Tirthankara assets. Confirm the exact folder casing and filenames used by the active code. GitHub Pages paths are case-sensitive.
- The game uses client-side browser behaviour and does not require a database or API key.
- Have local Jain community reviewers verify religious symbol/name associations before public launch.

## Shared layout, footer and attribution

Make shared navigation/footer changes in `layout.js` and the fragment it uses, rather than editing each page separately. The intended footer credit is:

**Designed, Developed & Managed by Srishti Jain**

Check how `layout.js` loads the footer before editing. If the footer is embedded directly in JavaScript in the published version, editing `footer.html` alone will not change it.

## Safe update and publishing checklist

1. Back up the repository or create a branch.
2. Check GitHub Pages settings to identify the actual publishing branch/folder or Actions workflow.
3. Merge targeted changes; do not replace the whole repository with a partial update ZIP.
4. Preserve `assets/`, the logo, images, unlisted data files and existing workflows.
5. Validate JSON and check dates, coordinates and media paths.
6. Test all pages: Home, Community, Bhakti Sangeet, Lyrics, Arghya, Knowledge Hub, Tirthankaras, Games, Yatra and Join.
7. Test desktop and mobile, shared navigation/footer, language switching, animations/motion preferences, the calendar, Knowledge catalogue, Yatra map/photos, and all games.
8. Check GitHub Actions and the published site.
9. Only remove old CSS/JS files after confirming that no HTML, JavaScript, workflow or external link references them.

## What this package does and does not confirm

The supplied files were reviewed for overlapping documentation and the current consolidated package names. This is not a live browser test of the deployed website. Dynamic features, external form embeds, image availability, catalogue automation and GitHub Pages deployment must still be tested in the actual repository.

## Recent changes retained in this guide

- Knowledge resources are intended to be catalogued through `data/knowledge-index.json`.
- Bhajan Playlist is intentionally absent from shared navigation/footer in the documented design; `playlist.html` may remain available for direct links if it exists in the repository.
- The Join/Connect form was prepared for a supplied Google Form with a fallback link; test the embed on the published site. If a short link does not embed, use the official Google Forms embed URL.
- The consolidated site package combines styling and main JavaScript behaviour to reduce file count. Do not keep both old and consolidated files active unless references require them.
