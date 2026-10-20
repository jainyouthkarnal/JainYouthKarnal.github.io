Jain Youth Karnal website files

This ZIP includes the website source files available in the project Library at the time it was assembled. The revised styles.css and script.js are included.

Note: This package contains the available root-level files only. Referenced folders/assets (for example images under assets/) and a standalone lyrics.html were not present in the available file set, so add those from your original website project if applicable before deployment.


Rename and link updates in this revision:
- kalyanak.html was renamed to jain-knowledge.html.
- The page title, description, breadcrumb, and return link were updated.
- Shared header/footer Knowledge links now point to jain-knowledge.html.
- Bhakti language selector styling is set to match the rounded green pill controls used for lyrics language selection.

Known project files not present in the supplied set: assets/ (including logo/social images), lyrics.html, learn.html, and yatra.html. Some existing links still point to those missing pages/assets and need the original project assets/pages to make the package complete.

Shared footer update: layout.js now loads footer.html into the site-footer placeholder. Bhakti uses the shared footer component rather than a separate footer definition. Since footer.html is loaded with fetch(), run the site through a local/web server (not by opening HTML directly as file://).
