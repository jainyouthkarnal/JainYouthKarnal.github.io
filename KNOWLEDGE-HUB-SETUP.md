# Jain Youth Karnal — Knowledge Hub & navigation update

## What changed
- Added `knowledge/` folders for articles, PDFs, images, and other resources.
- Added `scripts/build_knowledge_index.py` and `.github/workflows/knowledge-catalogue.yml` to regenerate `data/knowledge-index.json` after supported files are pushed.
- Added a searchable, category-filtered resource library to the existing `learn.html` page.
- Added `arghya.html` to the Knowledge Hub and the shared Learn menu.
- Removed the Bhajan Playlist item from shared navigation and footer. `playlist.html` is retained as an unlinked legacy page so existing direct links/bookmarks are not broken.
- Added separate `animations.css` and `animations.js` files for floating petals and a subtle rotating halo around the home hero image. Existing animation rules in `styles.css` are retained.

## Why animations disappeared before
Some updates replaced `styles.css` or page markup with an older version. That can overwrite animation rules or remove the element that the animation acts on. The new ambient effects live in dedicated `animations.css` / `animations.js` files and are linked separately from the main stylesheet. Keep these files and their `<link>` / `<script>` tags in place when updating the site. Respect for `prefers-reduced-motion` is included.

## Add new Knowledge files
1. Add a file under `knowledge/articles/`, `knowledge/pdfs/`, `knowledge/images/`, or `knowledge/resources/`.
2. Commit and push to `main` or `master`.
3. GitHub Actions runs the catalogue builder and commits the updated `data/knowledge-index.json`.
4. Once GitHub Pages publishes the commit, the new resource appears in `learn.html`'s Knowledge Library.

Supported extensions include PDF, Markdown, HTML, TXT, common image formats, DOC/DOCX, PPT/PPTX, audio/video, EPUB and CSV. Unknown extensions are intentionally skipped. Use descriptive filenames; titles are generated from filenames. Markdown's first ordinary text line is used as its description. Example filenames: `five-kalyanaks.md`, `jain-flag-meaning.pdf`.

## GitHub Pages note
This workflow commits the generated catalogue using `GITHUB_TOKEN`. This works with branch-based GitHub Pages publishing. If the repository instead uses a separate Actions-based deployment workflow, ensure it deploys the generated catalogue commit or merge catalogue generation into that build-and-deploy workflow.

## Structure
- Root HTML pages remain at the repository root to preserve existing relative links and shared navigation.
- `data/` stores JSON data and the generated knowledge index.
- `assets/` stores static media and trip folders.
- `knowledge/` stores new library content; it does not replace existing pages or data.
