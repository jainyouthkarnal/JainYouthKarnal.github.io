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
