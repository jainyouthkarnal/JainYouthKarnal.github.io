# Jain Youth Karnal — Website Update Guide

## 0. Page map (the site is now split into pages)

Where to edit what:

| I want to change... | Edit this file |
|---|---|
| Header menu, sub-menus, footer | `layout.js` (shared by all pages) |
| About, Announcements, Home hero / stats | `index.html` |
| Monthly Trip cards, Yatra Map section, Darshan gallery | `yatra.html` |
| Sunday Pathshala, Knowledge hub | `learn.html` |
| Bhajans (add / edit lyrics) | `bhakti.html` |
| Events, Our Mandir, Follow (Instagram / YouTube), YouTube channel ID | `community.html` |
| Calendar Kalyanak / yatra dates | `script.js` (`kalyanakEvents`, `tripEvents`) |
| Join form | `join.html` |
| Yatra map data | `data/yatra-data.json` (unchanged) |

Everywhere below that says `index.html`, use the page from this table instead (for example bhajans are now in `bhakti.html`).


This file is a quick reference for keeping the website easy to update in GitHub.

## 1. Most important files

### Yatra map data
**File:** `data/yatra-data.json`

This is the main source of truth for Monthly Yatra locations.

Update this file when adding or changing:
- Yatra place
- Date
- Temple name
- Exact temple coordinates
- Visual map pin position
- Home mandir location

The website reads this data automatically. You normally do **not** need to edit `index.html` or `script.js` for a normal Yatra-map update.

### Website content / structure
**File:** `index.html`

Use this for major page content such as:
- About Us
- Announcements
- Sunday Pathshala
- Static section text
- Navigation labels

### Website behaviour
**File:** `script.js`

Use this for interactive features and data-driven behaviour such as:
- Calendar logic
- Language toggle
- Yatra map rendering
- Interactive controls

Avoid editing this file for a simple Yatra-location update if `data/yatra-data.json` is sufficient.

### Website styling
**File:** `styles.css`

Use this for visual/design changes only.

---

## 2. Current home mandir

**Shree Digamber Jain Mandir — Karnal**

Coordinates:
`29.6824999, 76.9909295`

This is stored under `homeMandir` in `data/yatra-data.json`.

The home mandir is separate from the Monthly Yatra destinations.

---

## 3. Current Monthly Yatra data

| # | Place | Date | Temple | Coordinates |
|---|---|---|---|---|
| 1 | Ranila Ji | 22 March 2026 | Shri 1008 Bhagwan Adinath Digambar Jain Atishay Kshetra, Ranila | 28.7090507, 76.3325388 |
| 2 | Jalabaad | 5 April 2026 | Shri 1008 Parasnath Digamber Jain Mandir | 29.6158372, 77.4360981 |
| 3 | Hastinapur | 9 May 2026 | Digamber Jain Bada Mandir | 29.1613343, 78.0010909 |
| 4 | Sonipat | 14 June 2026 | Shanti Nath Atishya Kshetra | 29.0004214, 77.0151195 |
| 5 | Hansi | 18 July 2026 | Shri Digamber Jain Panchayati Mandir | 29.1009391, 75.9636061 |
| 6 | Vehlana Ji | 16 August 2026 | Vehalna Digambar Jain Temple Atishaya Kshetra | 29.4285143, 77.6854437 |
| 7 | Gannaur | 7 September 2026 | Gupti Dhaam Digamber Jain Mandir | 29.1412698, 77.0371692 |
| 8 | Badegaon | 4 October 2026 | Trilok Teerth Dham; Shri 1008 Bhagwan Parshwanath Atishay Shetra Prachin Digamber Jain Temple; Shri Digamber Jain Bahubali Jinbimb Mandir | 28.8776725, 77.3152324 |

**Rule:** For the Yatra Map, the coordinates represent the **actual temple location visited**. Do not replace them with a general city/destination coordinate unless specifically requested.

---

## 4. How to add the next Monthly Yatra

Open:

`data/yatra-data.json`

Inside the `trips` array, add a new trip using the same structure as the existing entries.

Required information:
1. Unique `id`
2. `place`
3. `date` in `YYYY-MM-DD`
4. Exact `temple` name
5. Exact `[latitude, longitude]`
6. `mapPosition` (`left` and `top`) for the visual pin on the India map

Example:

```text
{
  "id": "new-place",
  "place": "New Place",
  "date": "2026-11-15",
  "temple": "Exact Temple Name",
  "coordinates": [28.1234567, 77.1234567],
  "mapPosition": {
    "left": 31.0,
    "top": 29.0
  }
}
```

Do not copy these example values as real data. Replace them with the actual information.

**Optional: where Prakshal was done.** If the group did Prakshal at one of the mandirs, add one more line to the trip in `data/yatra-data.json`:

`"prakshal": "Exact Temple Name",`

The name must match one of the names in `temple`. A gold "Prakshal" tag then appears next to that mandir on the Yatra Map list and in the map popup. For the trip card in `yatra.html`, mark the same mandir like this:

`<li class="prakshal">Exact Temple Name<span class="prakshal-tag" data-i18n="trip.prakshal">Prakshal</span></li>`

Also keep the built-in copy (`YATRA_FALLBACK` in `script.js`) in sync if you want the tag to show when the JSON file cannot be loaded.

---

## 5. Getting exact coordinates

Use Google Maps and identify the **exact temple location**.

Coordinates should be stored as:

`latitude, longitude`

Example:

`29.4285143, 77.6854437`

Do not include Google Maps zoom/elevation text such as `656m` in the coordinate array.

**Common mistake:** in a Google Maps link, the numbers after `@` are only the centre of the screen you were looking at, **not the temple**. The exact place is in the part that looks like `!3d29.6824999!4d76.9909295` (latitude first, then longitude).

The easiest way to get this right: open `tools/coords-helper.html` in your browser, paste the full Google Maps link of the temple, and copy the `"coordinates": [...]` line it shows.

---

## 6. Map position vs exact coordinates

These two fields have different purposes:

### `coordinates`
The real geographical location of the temple.

### `mapPosition`
The visual position of the pin on the India political-map graphic.

So:

- **Coordinates = accuracy**
- **mapPosition = visual placement**

If a new pin looks slightly misplaced on the India map, adjust only `mapPosition`. Do not change the real coordinates.

---

## 7. Trip media folders

Each Monthly Yatra has three media folders:

`assets/trips/01-Ranila-Ji/`

- `mandir/` → temple photos, Jin Darshan, idols, architecture, Prakshal
- `group/` → Jain Youth Karnal/community group photos
- `memories/` → journey, candid moments, activities and other trip memories

The same structure exists for all eight current trips.

When adding a new trip, create the same three folders.

**Showing the photos on the website:** the trip cards show no photo buttons until a folder actually has photos. After you add photos to a folder, list their file names in `data/trip-media.json`, for example:

```text
"08-Badegaon": {
  "mandir": [],
  "group": ["group-01.jpg"],
  "memories": ["memory-01.jpg", "memory-02.jpg"]
}
```

The card then shows a "Group (1)" and a "Trip Memories (2)" button that open the photos in a viewer. Categories with no photos stay hidden. For a new trip, copy one of the existing entries in that file and use the new trip's folder name.

---

## 8. Bhakti / Bhajan updates

Bhakti categories include:
- Bhajan
- Chalisa
- Guru Bhakti
- Pooja
- Aarti
- Stavan
- Stotra
- Mantra / Jaap
- Mangal Geet
- Other Bhakti

For Bhajans, the website uses:
- Original Hindi lyrics
- English view = Roman sing-along text
- Poster
- Optional audio

**Important:** The English view is Roman pronunciation/transliteration, **not an English meaning/translation**.

Bhajan media is stored under:

`assets/bhajans/`

---

## 9. Karnal Mandir deity gallery

Deity images belong in:

`assets/karnal-mandir/god-images/`

Use:
- `god-01.jpg`
- `god-02.jpg`
- `god-03.jpg`
- `god-04.jpg`
- `god-05.jpg`
- `god-06.jpg`
- `god-07.jpg`
- `god-08.jpg`

Do not rename or alter locked supplied deity/reference images unless explicitly requested.

---

## 10. Before pushing to GitHub

Quick checklist:

- [ ] Yatra date is correct
- [ ] Temple name is exact
- [ ] Coordinates are exact temple coordinates
- [ ] `mapPosition` places the pin correctly
- [ ] New trip has `mandir`, `group`, and `memories` folders
- [ ] Photos are placed in the correct folder
- [ ] Hindi text has not been changed accidentally
- [ ] Locked logos/images remain unchanged
- [ ] Website opens correctly locally
- [ ] Commit changes in GitHub Desktop
- [ ] Push to `main`

---

## 11. Simple rule to remember

> **For a normal Yatra update, start with `data/yatra-data.json`.**
>
> That is the main file to keep the Yatra Map current.

For major content, layout, styling, or interactive changes, update the appropriate HTML/CSS/JS file instead.

## Bhajans: search, tags and lyrics

Bhajans are kept in **Hindi + Roman** side-by-side. The website does **not** provide an English translation for bhajans.

Each bhajan card uses `data-tags` for filtering/search. Example:

- जहाँ याद करो महावीर वहीं — tags: `mahavir, bhajan`
- नाम है तेरा तारण हारा — tags: `bhajan, god`

To add a new bhajan later:
1. Copy an existing `.bhajan-card` in `index.html`.
2. Update the title, Hindi lyrics, Roman lyrics and `data-tags`.
3. Add any new tags to `data-tags`; the filter buttons are generated automatically.
4. No English translation should be added to the bhajan card.

The Bhakti section includes a search box that searches the title, tags and lyric text, plus clickable tag filters.

### Bhajan display: Hindi + Roman together

The website shows each bhajan as **Hindi + Roman line by line** by default, with buttons to switch to Side by side, Hindi only or Roman only.

For the line-by-line view to work, the Hindi and Roman text of a bhajan must have the **same number of stanzas (`<p>`) and the same number of lines (`<br>`) in each stanza**. If they differ, the card automatically falls back to the side-by-side view.

### Maps

Both maps (Yatra map and Our Mandir) use Leaflet with OpenStreetMap-based tiles, and need an internet connection. If tiles from the first server are blocked, the site automatically switches to a backup tile server.

The Yatra map reads `data/yatra-data.json`. If that file cannot be fetched (for example when `index.html` is opened by double-clicking it), `script.js` falls back to a built-in copy called `YATRA_FALLBACK`. When you add a new trip, update the JSON and, ideally, that copy as well. The best way to test is through GitHub Pages or a local server (`python -m http.server`).

### Instagram and YouTube embeds ("Follow our journey" section)

- **Instagram:** shows the public profile feed for `@jainyouth.karnal`. No setup needed.
- **YouTube:** shows the channel's latest videos once the channel ID is added. In `index.html`, find `id="yt-embed"` and paste your channel ID (it starts with `UC`) into `data-channel-id=""`. You can find it in YouTube Studio > Settings > Channel > Advanced settings. Until then, a "Open YouTube channel" card is shown.
