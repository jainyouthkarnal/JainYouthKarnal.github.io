JAIN YOUTH KARNAL — GAMES PAGE UPDATE

Files included:
- games.html
- games.css
- games.js

What changed:
1. The Find Tirthankars word-search now uses a larger 20x20 grid and bounded puzzle-generation retries, avoiding the recursive retry loop that could stop the game from rendering.
2. The grid layout now follows its actual size and is adjusted for smaller screens.
3. The Word Challenge shows a clue before the answer. After a correct answer, it displays a short explanation of the Jain term. The clues and explanations are available in English and Hindi.
4. Game headings, controls, instructions, feedback and quiz content are connected to the site's existing English/Hindi language preference (jyk-language). Changing the site's language toggle should refresh the game in that language.

INSTALLATION
1. Upload/replace these three files in the root of the GitHub Pages repository.
2. Keep the site's existing styles.css, layout.js and script.js in place. The page uses them for the shared header/footer and language toggle.
3. Commit and push the changes.
4. Open games.html and hard-refresh with Ctrl+F5 if the old version is cached.

Note: The site language toggle is read from localStorage key "jyk-language" and supports "en" and "hi". The word-search letters and Tirthankar spellings stay in Roman letters so the names match the letters in the puzzle, even when the interface is in Hindi.
