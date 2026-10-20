# Jain Youth Karnal — Synchronized files

This bundle uses canonical filenames and keeps JSON files under `data/`.

## Data files
- `data/yatra-data.json`
- `data/trip-media.json`
- `data/bhakti-playlist.json`
- `data/calendar-events.json`

## Calendar change
- Kundalpur Yatra: Sunday, 29 November 2026
- The calendar loader merges `calendar-events.json` with yatra dates, so the event does not disappear when the yatra JSON loads.

## Important
Merge these files into the existing GitHub repository and preserve its existing `assets/` directory. This source bundle does not include all image/audio assets.
