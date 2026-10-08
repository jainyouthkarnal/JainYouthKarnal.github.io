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
    ├── 02-Naam-Hai-Tera-Taran-Hara/
    │   ├── poster/
    │   └── audio/
    ├── 03-Shri-Shantinath-Chalisa/
    │   ├── poster/
    │   └── audio/
    └── 04-Baje-Kundalpur-Mein-Badhai/
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

## Bhajan display

Bhajans are intentionally NOT translated into English. The original Hindi lyrics remain unchanged. The Bhakti page provides one global **Both / हिंदी / Roman** control for all bhajans (for example, “Jaha yaad kro Mahavir wahi”). The main site English/Hindi language toggle changes the surrounding website interface, not the bhajan meaning.

## Yatra Map
The site now includes an India states/UTs map with eight monthly-yatra pins (Ranila Ji, Jalabaad, Hastinapur, Sonipat, Hansi, Vehlana Ji, Gannaur and Badegaon), plus a visited-place list.

Map source: Wikimedia Commons, “India states and union territories map.svg” by Planemad and subsequent contributors, CC BY-SA 3.0. The map is loaded from Wikimedia Commons and should retain attribution. The pins are illustrative location markers for the Jain Youth Karnal yatra archive.
Source: https://commons.wikimedia.org/wiki/File:India_states_and_union_territories_map.svg

## Calendar
The Community Calendar is interactive and currently includes the 2026 monthly yatra dates and recurring Sunday Pathshala markers. Add future community events to the `tripEvents` data in `script.js` when confirmed.

## Announcements
The Announcements section contains editable cards for regular Pathshala information, the latest completed yatra, and the next-yatra placeholder. Update the announcement text in `index.html` / `script.js` as new information is confirmed.

## Easy Website Updates

See **`WEBSITE-UPDATE-GUIDE.md`** for a simple, maintainable guide covering Yatra data, temple coordinates, media folders, Bhakti content, and the main files to edit in future.

## Easy Yatra Map Updates

All Monthly Yatra map data is stored in:

`data/yatra-data.json`

To add or update a trip in the future, edit only this file. Each trip contains:
- `place` — destination name
- `date` — trip date in `YYYY-MM-DD`
- `temple` — exact temple/temples visited
- `coordinates` — `[latitude, longitude]` for the temple location shown on the map
- `mapPosition` — visual position on the India political map (`left` and `top` percentages)

The website automatically builds the Yatra pins and visited list from this file. Each pin/list entry links to the exact coordinates in Google Maps.

**Important:** `coordinates` are the actual temple coordinates. `mapPosition` controls only the visual placement of the pin on the political map image. When adding a new location, update both.

The fixed home mandir is also stored at the top of `data/yatra-data.json` under `homeMandir`.
