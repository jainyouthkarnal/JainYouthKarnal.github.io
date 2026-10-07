# Jain Youth Karnal — Bilingual GitHub Pages Website

## Website
- English / हिंदी toggle across the complete website; preference is saved in the browser.
- Home, About, Monthly Trips, Sunday Pathshala, Events, Jain Knowledge, Bhakti, Jin Darshan Diaries and Join Us.
- Badegaon trip updated with all three supplied temple names.
- Bhajans support optional poster artwork and an external audio/listen link.

## Asset folder structure

```text
jyk-bilingual/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── logo.png
    ├── circular-logo.png
    ├── darshan-01.jpg ... darshan-04.jpg
    │
    ├── karnal-mandir/
    │   └── [Karnal Mandir photos]  ← all general Karnal Mandir photography
    │
    ├── trips/
    │   ├── 01-Ranila-Ji/
    │   │   ├── mandir/       ← temple/place photos from the trip
    │   │   └── group/             ← group photos from the trip
    │   ├── 02-Jalabaad/
    │   │   ├── mandir/
    │   │   └── group/
    │   ├── 03-Hastinapur/
    │   │   ├── mandir/
    │   │   └── group/
    │   ├── 04-Sonipat/
    │   │   ├── mandir/
    │   │   └── group/
    │   ├── 05-Hansi/
    │   │   ├── mandir/
    │   │   └── group/
    │   ├── 06-Vehlana-Ji/
    │   │   ├── mandir/
    │   │   └── group/
    │   ├── 07-Gannaur/
    │   │   ├── mandir/
    │   │   └── group/
    │   └── 08-Badegaon/
    │       ├── mandir/
    │       └── group/
    │
    └── bhajans/
        ├── 01-Jahan-Yaad-Karo-Mahavir-Wahin/
        │   ├── poster/           ← bhajan poster image
        │   └── audio/            ← optional audio file if hosted in repo
        └── 02-Naam-Hai-Tera-Taran-Hara/
            ├── poster/
            └── audio/
```

### Important distinction for trips
**mandir/** and **group/** are intentionally separate.
- `mandir/` = temple, architecture, idol, journey/location photographs.
- `group/` = photos showing the Jain Youth Karnal group/community.

This lets the website later show separate sections such as *Darshan / Places* and *Community Memories / Group Photos*.

## Bhajan media
Each bhajan has two optional media areas:
1. **Poster** — place the poster in that bhajan's `poster/` folder.
2. **Audio** — the website has a Listen / Audio option. Add the audio URL in the corresponding `data-audio-url` attribute in `index.html`; this can point to YouTube, Google Drive, another hosted audio page, or a GitHub Pages audio file.

For a locally hosted audio file, place it in the bhajan's `audio/` folder and use its relative GitHub Pages path as the `data-audio-url`.

## Naming recommendation
Use simple lowercase or kebab-case filenames, e.g.
- `temple-01.jpg`
- `trilok-teerth-dham.jpg`
- `group-01.jpg`
- `group-02.jpg`
- `poster.jpg`
- `audio.mp3`

Do not replace or edit locked logo/reference assets. Add new photographs around the existing structure.

## 2026 trips
- Ranila Ji — 22 March 2026
- Jalabaad — 5 April 2026
- Hastinapur — 9 May 2026
- Sonipat — 14 June 2026 — Shantinath Temple
- Hansi — 18 July 2026
- Vehlana Ji — 16 August 2026
- Gannaur — 7 September 2026 — Guptidham and Ancient Temple
- Badegaon — 4 October 2026 — Trilok Teerth Dham; Shri 1008 Parshvanath Digambar Jain Atishay Kshetra; Shri Digamber Jain Bahubali Jinbimb Mandir

## GitHub Pages
Upload the contents of this folder to `JainYouthKarnal.github.io`, commit and push to `main`, then enable GitHub Pages from the `main` branch / root folder.


## Trip media structure
Each monthly trip has three separate media folders:
- `mandir/` — temple, idol, darshan and architecture photographs
- `group/` — Jain Youth Karnal/community group photographs
- `memories/` — journey, candid, activity and other trip memories

Example: `assets/trips/08-Badegaon/{mandir,group,memories}/`

## Bhajan media
Each bhajan has separate `poster/` and `audio/` folders. Audio can also be supplied as an external URL through the bhajan card's audio link.
