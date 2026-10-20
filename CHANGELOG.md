# Changelog

A concise summary of notable user-facing updates, not a replacement for Git history.

## Knowledge Hub and navigation

- Organised a Knowledge Library structure for articles, PDFs, images and other resources.
- Documented the catalogue workflow for `data/knowledge-index.json`.
- Kept `learn.html` as the Knowledge Hub landing page.
- Kept `arghya.html` at the repository root to preserve relative paths; it can be linked from Knowledge.
- Removed Bhajan Playlist from shared navigation/footer while retaining `playlist.html` for direct links.

## Animations

- Separated motion effects into `animations.css` and `animations.js` to make them easier to preserve.
- Retained the petal effect and documented that animation files and their page references must remain.
- Motion should respect reduced-motion preferences.

## Bhakti Sangeet and lyrics

- Lyrics page supports Hindi, English transliteration and Both, with Both as the default.
- Retained the two-card layout and aligned English transliteration line height with Hindi.
- Removed redundant language headings inside lyric cards while keeping the top toggle.

## Shared layout, Yatra and calendar

- Shared navigation and footer are managed in `layout.js`.
- Yatra information and coordinates are maintained in `data/yatra-data.json`; trip media references are in `data/trip-media.json`.
- Calendar-only events are maintained in `data/calendar-events.json`.

## Connect form

- The Join / Connect With Us page was prepared to link to the supplied Google Form, with a fallback link for opening it in a new tab. Test the embed on the published site; if the short link does not embed, use the official Google Forms embed URL.

## Documentation policy

Use `README.md`, `WEBSITE-UPDATE-GUIDE.md` and `KNOWLEDGE-HUB-SETUP.md` for current instructions. Keep this file concise and chronological. Archive old update notes after checking that no scripts, workflows or links depend on them.
