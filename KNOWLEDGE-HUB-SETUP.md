# Knowledge Hub Setup and Maintenance

The existing `learn.html` page is the Knowledge Hub landing page. A script and GitHub Actions workflow are intended to build a catalogue of resources.

## Folder structure

```text
knowledge/
├── articles/      # Markdown, HTML and text articles
├── pdfs/          # PDF documents
├── images/        # Knowledge images
└── resources/     # Other supported downloads
scripts/build_knowledge_index.py
data/knowledge-index.json  # generated; do not edit manually
.github/workflows/knowledge-catalogue.yml
```

Keep `arghya.html` at the repository root unless its relative paths and links are deliberately updated. It can be linked from the Knowledge Hub without moving the page.

## Add a resource

1. Place the file in the appropriate `knowledge/` folder.
2. Use a descriptive filename, e.g. `five-kalyanaks.md` or `jain-flag-meaning.pdf`.
3. Commit and push to the branch watched by `.github/workflows/knowledge-catalogue.yml`.
4. Open GitHub **Actions** and confirm the catalogue workflow succeeds.
5. Check that `data/knowledge-index.json` includes the item.
6. Open the published `learn.html` page and test its title, category and link.

## Supported formats and automatic detection

The supported extensions are determined by the allowlist in `scripts/build_knowledge_index.py`; check that file before assuming a format is indexed. Update this guide if the allowlist changes. GitHub Pages does not automatically enumerate repository folders at runtime. The workflow generates `data/knowledge-index.json`, and `learn.html` reads that catalogue.

If the website uses a separate Actions-based deployment, ensure the generated JSON is included in the published artifact. If the workflow commits the catalogue back to a branch, check its write permissions and branch settings.

## Troubleshooting

**A resource does not appear:** confirm its folder and extension are supported; confirm it was committed to the watched branch; check the Actions run; confirm the generated JSON includes it; verify the fetch path used by `learn.html`.

**Workflow succeeds but the live site is unchanged:** confirm the JSON reached the branch/folder served by Pages, or include catalogue generation in the separate deployment workflow.

**A listed file does not open:** check its generated URL, filename case and repository path. Regenerate the catalogue after moving or renaming a file.

**A resource has no preview:** some formats are provided as downloads rather than inline previews, depending on browser support.

## Safe maintenance

- Never edit `data/knowledge-index.json` manually.
- Preserve existing assets and logos.
- Do not move root pages without checking links and relative paths.
- Update the builder and this guide together when formats or metadata rules change.
