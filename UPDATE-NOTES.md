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
