# Jain Youth Karnal — Bilingual Website

GitHub Pages-ready static website for Jain Youth Karnal / Jin Shasan Prabhavna Sangh Karnal.

## Language

The entire website has an English / हिंदी toggle. The selected language is remembered in the browser.

## Branding

- `assets/circular-logo.png` — supplied circular logo; preserve unchanged.
- `assets/logo.png` — supplied logo; preserve unchanged.
- `favicon.svg` — separate Jain Youth favicon using restrained Jain flag-inspired colours. It is intentionally different from the main logo.

## Media structure

```text
assets/
├── karnal-mandir/
│   └── god-images/
│       ├── god-01.jpg
│       ├── god-02.jpg
│       ├── god-03.jpg
│       ├── god-04.jpg
│       ├── god-05.jpg
│       ├── god-06.jpg
│       ├── god-07.jpg
│       └── god-08.jpg
│
├── trips/
│   ├── 01-Ranila-Ji/
│   │   ├── mandir/
│   │   ├── group/
│   │   └── memories/
│   ├── 02-Jalabaad/
│   ├── 03-Hastinapur/
│   ├── 04-Sonipat/
│   ├── 05-Hansi/
│   ├── 06-Vehlana-Ji/
│   ├── 07-Gannaur/
│   └── 08-Badegaon/
│       ├── mandir/
│       ├── group/
│       └── memories/
│
└── bhajans/
    ├── 01-Jahan-Yaad-Karo-Mahavir-Wahin/
    │   ├── poster/
    │   └── audio/
    └── 02-Naam-Hai-Tera-Taran-Hara/
        ├── poster/
        └── audio/
```

For each trip:
- `mandir/` = temple, Jin Darshan, idols, architecture, Prakshal etc.
- `group/` = Jain Youth Karnal / community group photographs.
- `memories/` = journey, candid moments, activities and other trip memories.

For the Karnal Mandir deity gallery, add the eight images using `god-01.jpg` through `god-08.jpg` inside `assets/karnal-mandir/god-images/`.

For each bhajan, the poster folder is for the bhajan artwork and the audio folder is for an optional local audio file. External audio links can also be attached through the bhajan audio option in the HTML.

## 2026 Trips

Badegaon — 4 October 2026:
- Trilok Teerth Dham
- Shri 1008 Parshvanath Digambar Jain Atishay Kshetra
- Shri Digamber Jain Bahubali Jinbimb Mandir

## GitHub Pages

Repository: `JainYouthKarnal.github.io`

Pages source: `main` branch, root folder.
