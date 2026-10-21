# Website Update Guide

## Where to edit

| Task | File or folder |
|---|---|
| Shared header, menu and footer | `layout.js` |
| Home page and hero | `index.html` |
| Knowledge Library | `learn.html` |
| 24 Tirthankara Arghya | `arghya.html` |
| Bhajan cards and categories | `bhakti.html` |
| Full lyrics and language selector | `lyrics.html` |
| Yatra cards and map | `yatra.html` |
| Community information | `community.html` |
| Connect form | `join.html` |
| Calendar events | `data/calendar-events.json` |
| Yatra places, dates and coordinates | `data/yatra-data.json` |
| Trip image manifest | `data/trip-media.json` |
| Playlist data | `data/bhakti-playlist.json` |
| Main styling | `styles.css` |
| Motion effects | `animations.css`, `animations.js` |
| Tirthankara data/rendering | `tirthankaras.js` |
| Generated Knowledge catalogue | `data/knowledge-index.json` — do not edit manually |

## Shared menu and footer

Edit `layout.js` for shared navigation/footer changes rather than editing every page. Test desktop and mobile, and check multiple pages after publishing. Bhajan Playlist is intentionally absent from the shared menu/footer; `playlist.html` remains for direct links and bookmarks.

## Calendar

Add calendar-only events to `data/calendar-events.json` using its existing schema and `YYYY-MM-DD` dates. Keep calendar-only events distinct from trips. Validate JSON after editing.

## Yatra and trip media

Use `data/yatra-data.json` for confirmed trip details and actual coordinates. Keep actual `coordinates` separate from visual `mapPosition.left` and `mapPosition.top`. Never change real coordinates just to reposition a visual pin. Update `data/trip-media.json` when photo references change.

## Bhakti Sangeet and lyrics

The lyrics page supports **हिंदी**, **English** (Roman transliteration) and **Both**. Both is the default. Keep the two-card layout and matching line height. English mode is pronunciation/transliteration, not translation. Follow an existing entry's structure when adding a bhajan, preserve supplied Hindi text, and check transliteration, tags and media paths.

## Assets and animations

Preserve the supplied logo and existing `assets/` directory; do not replace them with a partial update bundle. `animations.css` holds animation styles and `animations.js` holds behaviour including the petal effect. Retain both files and their `<link>`/`<script>` references unless removal is explicitly requested. Prefer targeted merges over replacing a newer file with an older copy. Test the home hero after publishing and respect reduced-motion settings.

## Knowledge Library

Add files under `knowledge/articles/`, `knowledge/pdfs/`, `knowledge/images/` or `knowledge/resources/`. Push to GitHub and check the catalogue workflow. See `KNOWLEDGE-HUB-SETUP.md`.

## Publishing checklist

- [ ] Preserve assets and logo files.
- [ ] Validate JSON and confirm dates/coordinates.
- [ ] Check shared menu/footer on multiple pages.
- [ ] Test Hindi, English and Both lyrics views.
- [ ] Confirm animations remain.
- [ ] Confirm new Knowledge resources appear after workflow completion.
- [ ] Test mobile and desktop and check GitHub Actions.
