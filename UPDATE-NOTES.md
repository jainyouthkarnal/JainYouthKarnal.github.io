# Jain Youth Karnal website update

## Files to replace/add in the existing GitHub Pages repository
- Replace `bhakti.html` with the included version to add bhajan #07, **मेरे सर पर रख दो दादा**, with Hindi and Roman lyrics and `bhajan` / `guru` tags.
- Replace `learn.html` with the included version to add a searchable 24-Tirthankara knowledge section.
- Add `tirthankaras.js` at the repository root. It renders English details when English is selected and Hindi details when हिंदी is selected. English Tirthankara names end in “Swami”; Hindi names use a space before “जी”.

## Audio file still needed
Place the actual audio recording at:
`assets/bhakti/audio/mere-sar-par-rakh-do-dada.mp3`

The HTML points to this location, but an MP3 was not included with the supplied files. The bhajan lyrics can be displayed without it; the audio control will only work once the recording is added.

## Data note
The supplied English and Hindi lists disagree on a few entries (for example, the symbol for Sheetalnath and Anantnath). The page preserves each language's supplied values rather than silently reconciling those differences. Please verify those details against the Jain reference tradition you want the site to follow before publishing.
