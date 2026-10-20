JAIN YOUTH KARNAL — WEBSITE MAINTENANCE NOTES

These notes are for maintainers and belong in documentation, not in the public website interface.

KNOWLEDGE LIBRARY
To add material, place supported files in knowledge/articles/, knowledge/pdfs/, knowledge/images/ or knowledge/resources/, then commit and push them to GitHub. The Knowledge catalogue workflow should regenerate data/knowledge-index.json. Confirm the workflow succeeds and the generated catalogue is published.

ARghya PAGE
The Arghya page contains traditional devotional verses in Devanagari and Roman transliteration. The language switch is provided in the shared site header.

TIRTHANKARA REFERENCE
Names and traditional details are presented as a community learning reference; spellings and some details may vary by Jain tradition and source. Keep this context in maintainer documentation rather than showing it as a public-page disclaimer unless explicitly requested.

ANIMATIONS
Preserve animations.css, animations.js and their references in page markup during future updates. Do not replace the shared stylesheet or page files with older copies without merging the latest changes.
