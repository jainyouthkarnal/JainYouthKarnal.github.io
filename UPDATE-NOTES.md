# Jain Youth Karnal — Improvement Update

## Included
- Added Kundalpur Yatra to `data/calendar-events.json` for 29 November 2026, with English/Hindi titles and event note.
- Calendar event synchronization now merges event details with existing yatra entries instead of blindly replacing them.
- Bhajan cards navigate to `lyrics.html?id=N` when the full card or its Read Full Lyrics link is selected; keyboard Enter/Space is supported.
- Homepage Bhajans Shared statistic is recalculated from the number of cards in `bhakti.html`.
- Prakshal activity now uses `assets/prakshal-icon.png` in monthly trip cards and the label is simply “Prakshal” / “प्रक्षाल”.
- Public pages use the shared header/footer injected by `layout.js`.
- Yatra map layout updated for a clearer map-plus-visit-timeline presentation, more readable temple activity cards, and responsive mobile layout.
- Join form is prepared for a Google Forms URL through `data-google-form-url`; the real Google Form URL is still needed before submissions can be connected. Until then, it uses the existing email fallback.

## Publish notes
- Merge these source files into the existing GitHub repository; preserve the existing `assets/` directory.
- Ensure `assets/prakshal-icon.png` and `assets/logo.png` exist in the repository.
- To connect Google Forms, provide the published form URL and decide whether the site should embed it or redirect users to it. The URL was not supplied, so no fake endpoint has been configured.
- Test the November calendar, clicking any bhajan card, mobile map layout, and the footer on each public page after deployment.


## Google Form integration
- Connected the Join / Connect With Us section to the supplied responder link: https://forms.gle/t2QjVZ3bt2XhPxVV7
- Added an embedded form area plus an “Open Form in a New Tab” fallback link. Verify the embed in the deployed site; if Google redirects the short URL in a way that prevents embedding, replace the iframe URL with the official Google Forms embed URL generated from Send > Embed HTML.


## Lyrics page refinement
- Updated `lyrics.html` to show two distinct language cards: Hindi and English transliteration.
- Replaced the three-option view selector with a clearer two-option Hindi / English toggle centered above the cards.
- Matched the English text line-height to the Hindi card for a more consistent reading rhythm.
- On desktop, both language cards appear side by side; selecting Hindi or English shows only that language. On mobile, cards stack vertically when both are visible.


### Lyrics language selector update
- The full lyrics page now offers three language modes: Hindi, English, and Both.
- Both is the default view and displays the two language cards together; the selected preference is saved locally.


### Lyrics card heading cleanup
- Removed the redundant Hindi and English headings from inside the lyric cards; the language is already identified by the selector at the top.
- Kept the three selector options (हिंदी, English, Both), the two-card layout, and existing line-height styling.


## 20 October 2026 — Bhakti language toggle
- Updated the Bhakti Sangeet language selector to match the dedicated lyrics page styling.
- Toggle order is now Hindi, English, Both; Both remains the default.
- Added matching pill-shaped active state, hover/focus styling, responsive sizing, and aria-pressed state updates.
