# Jain Youth Karnal — Project structure

```text
/
├── index.html                 Home page
├── learn.html                 Sunday Pathshala + Knowledge Hub/library
├── arghya.html                Choubis Tirthankara Arghya page
├── bhakti.html                Bhajan library
├── lyrics.html                Individual bhajan lyrics page
├── yatra.html                 Monthly trips, map and darshan
├── community.html             Calendar, events and community details
├── join.html                  Connect form
├── playlist.html              Legacy page; removed from shared menu/footer
├── layout.js                  Shared navigation and footer
├── script.js                  Shared site interactions/translations
├── styles.css                 Main visual styling
├── animations.css             Dedicated motion effects; preserve on updates
├── animations.js              Floating petals for the home hero
├── tirthankaras.js            Tirthankara reference data/rendering
├── data/
│   ├── calendar-events.json
│   ├── trip-media.json
│   ├── yatra-data.json
│   ├── bhakti-playlist.json
│   └── knowledge-index.json   Generated; do not edit manually
├── knowledge/
│   ├── articles/              Markdown, HTML and text articles
│   ├── pdfs/                  PDFs
│   ├── images/                Images for the library
│   └── resources/             Other supported resources
├── scripts/
│   └── build_knowledge_index.py
├── .github/workflows/
│   └── knowledge-catalogue.yml
└── assets/                    Existing logo, icons, photos and trip media
```

The root-level HTML pages are intentionally kept at the root so their existing relative links and shared navigation continue to work. The Arghya page is therefore kept as `arghya.html` and listed in the generated Knowledge catalogue; the `knowledge/` folders are for files you add to the library.
