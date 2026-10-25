JAIN YOUTH KARNAL — COORDINATED WEBSITE UPDATE

This is a PATCH ZIP, not a complete website. Extract it into the root of the existing GitHub Pages repository and allow folders/files to merge.

UPDATED FILES
- index.html: redesigned homepage using the agreed 10-part structure (header/footer are shared components), Quick Access, KPI strip, next calendar events, journey links, featured learning item, Kids' Corner, community moments and Join CTA.
- yatra.html: compact expandable Monthly Yatra cards, a single-source Kundalpur itinerary card and a nine-location Jain Teerth Directory with maps that load only when opened.
- community.html: retained the Community Calendar page and its shared styles/app references.
- knowledge.html: revised Knowledge Hub with the new topic headings and working shared language toggle integration.
- styles.css: shared responsive styling for homepage, Yatra cards, teerth directory and footer.
- app.js: data-driven KPI counts, upcoming event cards, shared Kundalpur card, expandable trip cards and language-aware calendar data.
- layout.js: shared Explore / Bhakti / Yatra / More navigation and footer language refresh.
- footer.html: shared Explore, Spirituality and Community footer groups.
- data/yatra-data.json: Hansi now records Shri Digamber Jain Panchayati Mandir for Darshan and Punyodaya Tirth Khestra for Prakshal.
- data/calendar-events.json: Kundalpur Yatra record now contains the final itinerary and bilingual labels.
- knowledge/articles/*.md: eight English/Hindi article files for the Knowledge Hub.

KPI COUNTING
- Yatras Organised: counts completed trips in data/yatra-data.json.
- Jain Mandirs Visited: counts unique mandir names recorded in completed trip records. The Hansi Prakshal location adds Punyodaya Tirth Khestra.
- Bhajans Shared: reads bhakti.html and counts only article cards tagged with `bhajan` in data-tags. In the supplied current Bhakti page, there are 16 total devotional entries, of which 6 are tagged as actual bhajans; the other entries include Chalisas and other devotional pieces. Future bhajans should include `bhajan` in data-tags for the KPI to count them.
- Sunday Pathshala is displayed as a recurring schedule, not a numerical KPI.

KUNDALPUR YATRA
The homepage and Yatra page render the same itinerary from data/calendar-events.json. No “tentative” warning remains. The itinerary displays 28–30 November 2026 and the provided final timings.

KEEP THESE EXISTING FILES AND FOLDERS
Do not delete or replace your existing assets/, games.html, colouring.html, colouring.js, colouring.css, tirthankaras.html, arghya.html, bhakti.html, join.html, favicon files, data/knowledge-index.json, data/trip-media.json, or other pages/assets unless you separately intend to update them. The custom PNG upload and Jain Flag colouring additions are intentionally deferred for now.

INSTALL
1. Back up the current repository.
2. Extract this ZIP into the repository root, merging folders.
3. Commit and push the revised files to GitHub Pages.
4. Test English and Hindi toggles, the homepage event cards, the Kundalpur expand/collapse control, all Yatra trip detail accordions, the map cards, the Community Calendar, and the Knowledge Hub article reader.

VALIDATION
JavaScript syntax, JSON parsing, duplicate HTML IDs, current bhajan tags, unique trip/mandir counts and the nine map-card entries were checked. A full live-browser test on GitHub Pages has not been performed.


Latest refinements (25 Oct 2026):
- Teerth Directory cards no longer label Hansi destinations as Darshan/Prakshal and remove the generic Hastinapur/Gannaur trip-recording sentence.
- Monthly Yatra Map now offers per-temple Google Maps embeds, reusing the embed URLs from the Teerth Directory when a matching temple is available; maps load only when expanded. Where a temple has no saved directory embed, an accurate Google Maps search link is shown instead.
- Homepage KPI cards have refreshed visual hierarchy, icons, softer accent colours, improved spacing, hover treatment, and mobile layout.
