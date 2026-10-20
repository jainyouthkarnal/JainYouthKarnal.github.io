# Jain Youth Karnal — UI update notes

- Added `apple-icon.png` (180×180) generated from the supplied `favicon.svg` and linked it on all HTML pages with `<link rel="apple-touch-icon" href="apple-icon.png">`.
- Removed the decorative box/shadow around the header logo.
- Improved responsive navigation, tap targets, cards, map/calendar layout, and small-screen typography.
- Enabled gentle floating petal animations on hero/banner sections; animations respect `prefers-reduced-motion`.
- Changed Yatra trip media from button links to inline photo thumbnails in each trip card. Thumbnails open in the site's lightbox when available.

## Add trip photographs
Place files under `assets/trips/<folder>/<mandir|group|memories>/` and list exact filenames in `data/trip-media.json`. Existing manifest references `assets/trips/08-Badegaon/group/group-01.jpg`, but the actual photo was not included in the uploaded files; the missing image is safely hidden until you add it.

## Deploy
Upload the contents of this folder to the repository root, preserving the `assets/` and `data/` folders. The website has been prepared locally; it has not been deployed to GitHub Pages.


## Bhakti Library update
- Added the requested “मेरे सर पर रख दो दादा” bhajan (number 07) with Hindi and Roman lyrics and the specified audio path.
- Bhajan entries now appear as compact mini-cards; select “Read lyrics” to expand the full lyrics.
- Entries are automatically grouped by content type when tags include aarti, stavan, chalisa, mantra, or bhajan; search and tag filters remain available.
- The audio file itself must be placed at `assets/bhakti/audio/mere-sar-par-rakh-do-dada.mp3` for playback.


## Calendar data synchronization
- Added `data/calendar-events.json` as the canonical source for community calendar events.
- Added Kundalpur Yatra for Sunday, 29 November 2026. The calendar loader now merges calendar events with the yatra history instead of overwriting the community event after JSON loads.
- Updated the homepage Kundalpur announcement date references to 28–30 November and aligned the static About copy with the current English translations.
- Standardized JSON filenames under `data/`: `yatra-data.json`, `trip-media.json`, and `bhakti-playlist.json`.
