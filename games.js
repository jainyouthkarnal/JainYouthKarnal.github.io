/* Jain Youth Karnal — five lightweight, client-side educational games */
(() => {
  "use strict";
  const panel = document.getElementById("gamePanel");
  const tabs = [...document.querySelectorAll(".game-tab")];
  const TIRTHANKARS = [
    ["Rishabhdev","Bull"],["Ajitnath","Elephant"],["Sambhavnath","Horse"],["Abhinandannath","Monkey"],
    ["Sumatinath","Curlew"],["Padmaprabhu","Red lotus"],["Suparshvanath","Swastika"],["Chandraprabhu","Crescent moon"],
    ["Pushpadant","Crocodile"],["Sheetalnath","Shrivatsa"],["Shreyansnath","Rhinoceros"],["Vasupujya","Buffalo"],
    ["Vimalnath","Boar"],["Anantnath","Falcon"],["Dharmanath","Vajra"],["Shantinath","Deer"],
    ["Kunthunath","Goat"],["Aranath","Fish"],["Mallinath","Water pot"],["Munisuvrat","Tortoise"],
    ["Naminath","Blue lotus"],["Neminath","Conch"],["Parshvanath","Serpent"],["Mahavir","Lion"]
  ];
  const QUIZ = [
    {q:"How many Tirthankars are recognised in the current time cycle of Jain tradition?",a:["12","18","24","28"],c:2,e:"Jain tradition recognises 24 Tirthankars in the current time cycle."},
    {q:"Which Tirthankar is traditionally identified as the 24th?",a:["Rishabhdev","Parshvanath","Neminath","Mahavir Swami"],c:3,e:"Mahavir Swami is the 24th Tirthankar."},
    {q:"What does Ahimsa mean?",a:["Non-violence","Possession","Pride","Ritual"],c:0,e:"Ahimsa means non-violence or non-harming."},
    {q:"Which is one of the Three Jewels (Ratnatraya) of Jainism?",a:["Right faith","Royal power","Fasting only","Pilgrimage only"],c:0,e:"The Three Jewels are right faith, right knowledge and right conduct."},
    {q:"What is the Jain principle of Aparigraha commonly understood as?",a:["Non-attachment / non-possessiveness","Victory","Offering flowers","Silence only"],c:0,e:"Aparigraha encourages non-possessiveness and limiting attachment."},
    {q:"Which symbol is commonly associated with Parshvanath?",a:["Lion","Serpent","Bull","Elephant"],c:1,e:"Parshvanath is commonly associated with the serpent emblem."},
    {q:"What is Samyak Darshan?",a:["Right faith or right perception","A festival meal","A temple bell","A pilgrimage route"],c:0,e:"Samyak Darshan is commonly translated as right faith or right perception."},
    {q:"Which set names the five great vows (Mahavrat)?",a:["Ahimsa, truth, non-stealing, celibacy, non-possession","Prayer, travel, music, art, service","Food, water, sleep, study, work","Faith, wealth, fame, power, success"],c:0,e:"The five vows are non-violence, truth, non-stealing, celibacy/chastity and non-possession."}
  ];
  const WORDS = [
    {word:"AHIMSA",hint:"The principle of non-violence"},
    {word:"JIVA",hint:"A living soul"},
    {word:"KARMA",hint:"Actions and their consequences in Jain thought"},
    {word:"SAMYAK",hint:"A word used in the Three Jewels, meaning right or proper"},
    {word:"TIRTHANKAR",hint:"A spiritual teacher who establishes a ford across the cycle of rebirth"},
    {word:"APARIGRAHA",hint:"Non-possessiveness and non-attachment"},
    {word:"RATNATRAYA",hint:"The Three Jewels"},
    {word:"MOKSHA",hint:"Liberation"}
  ];
  const SYMBOLS = [
    ["Rishabhdev","🐂 Bull"],["Ajitnath","🐘 Elephant"],["Sambhavnath","🐎 Horse"],
    ["Parshvanath","🐍 Serpent"],["Mahavir","🦁 Lion"],["Neminath","🐚 Conch"],
    ["Shantinath","🦌 Deer"],["Munisuvrat","🐢 Tortoise"]
  ];
  const state = {game:"wordsearch", found:new Set(), grid:[], words:[], start:null, selected:null, guessIndex:0, guessScore:0, wordIndex:0, wordScore:0, matchPairs:[], matchSelection:null, matchScore:0, quizIndex:0, quizScore:0, quizOrder:[]};
  const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const shuffle = arr => [...arr].sort(() => Math.random() - .5);
  const btn = (text, action, secondary=false) => `<button type="button" class="game-btn${secondary?" secondary":""}" data-action="${action}">${text}</button>`;
  function heading(title,desc,actions=""){return `<div class="game-heading"><div><h2>${title}</h2><p>${desc}</p></div><div class="game-actions">${actions}</div></div>`;}
  function render() {
    tabs.forEach(t=>{const on=t.dataset.game===state.game;t.classList.toggle("active",on);t.setAttribute("aria-selected",String(on));});
    ({wordsearch:renderWordsearch,guess:renderGuess,unscramble:renderUnscramble,match:renderMatch,quiz:renderQuiz}[state.game])();
  }
  // Word search generator: all 24 names, placed in eight directions in a roomy 20x20 grid.
  function makePuzzle() {
    const size=20;
    let grid, placed;
    const words=TIRTHANKARS.map(x=>x[0].toUpperCase().replace(/[^A-Z]/g,"")).sort((a,b)=>b.length-a.length);
    const dirs=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
    for(let round=0;round<12;round++){
      grid=Array.from({length:size},()=>Array(size).fill("")); placed=[];
      for(const word of words){
        let success=false;
        for(let attempt=0;attempt<2200&&!success;attempt++){
          const [dr,dc]=dirs[Math.floor(Math.random()*dirs.length)];
          const r=Math.floor(Math.random()*size),c=Math.floor(Math.random()*size);
          const er=r+dr*(word.length-1),ec=c+dc*(word.length-1);
          if(er<0||er>=size||ec<0||ec>=size)continue;
          let ok=true;
          for(let i=0;i<word.length;i++){const ch=grid[r+dr*i][c+dc*i];if(ch&&ch!==word[i]){ok=false;break;}}
          if(!ok)continue;
          const cells=[];
          for(let i=0;i<word.length;i++){grid[r+dr*i][c+dc*i]=word[i];cells.push(`${r+dr*i},${c+dc*i}`);}
          placed.push({word,cells});success=true;
        }
        if(!success)break;
      }
      if(placed.length===words.length)break;
    }
    // The 20x20 layout normally fits every name. Never recurse endlessly on a rare crowded layout.
    if(!grid || placed.length!==words.length){
      grid=Array.from({length:size},()=>Array(size).fill("")); placed=[];
      words.forEach((word,i)=>{const r=Math.floor(i/2),c=(i%2===0?0:size-word.length),cells=[];for(let j=0;j<word.length;j++){grid[r][c+j]=word[j];cells.push(`${r},${c+j}`);}placed.push({word,cells});});
    }
    for(let r=0;r<size;r++)for(let c=0;c<size;c++)if(!grid[r][c])grid[r][c]="ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random()*26)];
    state.grid=grid;state.words=placed;state.found=new Set();state.start=null;state.selected=null;
  }
  function renderWordsearch(){
    if(!state.grid.length)makePuzzle();
    const foundCount=state.found.size;
    panel.innerHTML=heading("Find the Tirthankars","Find all 24 names hidden horizontally, vertically and diagonally. Tap a starting letter, then tap the ending letter.",btn("New puzzle","new-puzzle",true))+
      `<div class="game-status"><span class="status-pill">🪷 Found: <b>${foundCount}/24</b></span><span class="status-pill">Names may run in either direction</span></div>
      <div class="word-layout"><div><div class="letter-grid" aria-label="Word search grid" style="--grid-size:${state.grid.length}">${state.grid.map((row,r)=>row.map((ch,c)=>{
        const key=`${r},${c}`,isFound=[...state.found].some(w=>state.words.find(x=>x.word===w)?.cells.includes(key));
        return `<button class="letter${isFound?" found":""}${state.selected===key?" selected":""}" data-cell="${key}" aria-label="Row ${r+1}, column ${c+1}, ${ch}">${ch}</button>`;
      }).join("")).join("")}</div><p class="game-feedback" id="gameFeedback">${foundCount===24?"Wonderful! You found all 24 Tirthankars.":""}</p></div>
      <aside class="side-card"><h3>Names to find</h3><ul class="name-list">${TIRTHANKARS.map(([n])=>`<li class="${state.found.has(n.toUpperCase().replace(/[^A-Z]/g,""))?"found":""}">${esc(n)}</li>`).join("")}</ul><p style="font-size:.8rem;color:#817461;margin-bottom:0">Tip: tap one letter, then the last letter of the name. A correct line will be highlighted.</p></aside></div>`;
  }
  function cellTap(key){
    if(!state.start){state.start=key;state.selected=key;renderWordsearch();return;}
    const [r1,c1]=state.start.split(",").map(Number),[r2,c2]=key.split(",").map(Number);
    const dr=Math.sign(r2-r1),dc=Math.sign(c2-c1);
    const straight=(r1===r2||c1===c2||Math.abs(r2-r1)===Math.abs(c2-c1));
    let letters=[],cells=[];
    if(straight){let r=r1,c=c1;while(true){letters.push(state.grid[r][c]);cells.push(`${r},${c}`);if(r===r2&&c===c2)break;r+=dr;c+=dc;}}
    const candidate=letters.join("");
    const reverse=candidate.split("").reverse().join("");
    const match=state.words.find(w=>(w.word===candidate||w.word===reverse)&&!state.found.has(w.word));
    if(match){state.found.add(match.word);state.start=null;state.selected=null;renderWordsearch();if(state.found.size===24)document.getElementById("gameFeedback").textContent="Wonderful! You found all 24 Tirthankars. 🙏";}
    else if(key===state.start){state.start=null;state.selected=null;renderWordsearch();}
    else{state.start=key;state.selected=key;renderWordsearch();const f=document.getElementById("gameFeedback");if(f)f.textContent="Not a complete name yet — try another ending letter.";}
  }
  function renderGuess(){
    if(state.guessIndex>=TIRTHANKARS.length)state.guessIndex=0;
    const item=TIRTHANKARS[state.guessIndex];
    const clueSets=[
      ["I am the first Tirthankar.","My emblem is the bull."],["I am the second Tirthankar.","My emblem is the elephant."],
      ["I am the third Tirthankar.","My emblem is the horse."],["I am the 23rd Tirthankar.","My emblem is the serpent."],
      ["I am the 24th Tirthankar.","My emblem is the lion."]
    ];
    const idx=state.guessIndex;
    const clues=idx===0?clueSets[0]:idx===1?clueSets[1]:idx===2?clueSets[2]:idx===22?clueSets[3]:idx===23?clueSets[4]:[`My traditional emblem is the ${item[1].toLowerCase()}.`,`I am Tirthankar number ${idx+1}.`];
    const options=shuffle([item[0],...shuffle(TIRTHANKARS.filter(x=>x[0]!==item[0]).map(x=>x[0])).slice(0,3)]);
    const imageSlug = item[0].toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
    panel.innerHTML=heading("Guess the Tirthankar","Look at the image, read the clues and choose the correct name.",`<span class="status-pill">Score: ${state.guessScore}</span> ${btn("Next question","guess-next",true)}`)+
      `<div class="clue-card guess-card"><div class="guess-image-wrap"><img class="guess-tirthankar-image" id="guessTirthankarImage" src="Assets/tirthankar/${imageSlug}.jpg" alt="Image of a Tirthankar" loading="lazy"><p class="image-caption">Who is this Tirthankar?</p></div><span class="clue-number">Mystery Tirthankar • ${idx+1} of 24</span><h3>Who am I?</h3><p>${clues.map(esc).join("<br>")}</p></div><div class="answer-grid">${options.map(o=>`<button class="answer-option" data-guess="${esc(o)}">${esc(o)}</button>`).join("")}</div><p class="game-feedback" id="gameFeedback"></p>`;
    // Support common image formats. Keep filenames lowercase and hyphenated, e.g. mahavir.jpg.
    const guessImage = document.getElementById("guessTirthankarImage");
    const imageExtensions = ["jpg","jpeg","png","webp"];
    let extensionIndex = 0;
    guessImage.addEventListener("error", function tryNextImage() {
      extensionIndex += 1;
      if (extensionIndex < imageExtensions.length) {
        guessImage.src = `Assets/tirthankar/${imageSlug}.${imageExtensions[extensionIndex]}`;
      } else {
        guessImage.alt = `Image for ${item[0]} not found in Assets/tirthankar`;
        guessImage.classList.add("image-missing");
        guessImage.replaceWith(Object.assign(document.createElement("div"), {
          className: "guess-image-placeholder",
          textContent: `Add ${imageSlug}.jpg (or .png, .jpeg, .webp) to Assets/tirthankar`
        }));
      }
    });
  }
  function renderUnscramble(){
    const item=WORDS[state.wordIndex%WORDS.length];
    let scrambled=shuffle(item.word.split(""));if(scrambled.join("")===item.word)scrambled=shuffle(item.word.split(""));
    state.scrambled=scrambled;
    panel.innerHTML=heading("Unscramble the Jain Word","Put the letters in the right order and learn a Jain term.",`<span class="status-pill">Score: ${state.wordScore}</span> ${btn("Another word","word-next",true)}`)+
      `<div class="clue-card"><span class="clue-number">Clue</span><h3>${esc(item.hint)}</h3><p>Rearrange these letters:</p><div class="word-challenge">${scrambled.map(ch=>`<span class="word-chip">${ch}</span>`).join("")}</div></div>
      <form id="wordForm"><label for="wordAnswer"><strong>Your answer</strong></label><br><input class="game-input" id="wordAnswer" autocomplete="off" autocapitalize="characters" maxlength="18" placeholder="Type the word" required><div style="margin-top:.8rem">${btn("Check answer","word-check")}</div></form><p class="game-feedback" id="gameFeedback"></p>`;
  }
  function renderMatch(){
    if(!state.matchPairs.length)state.matchPairs=shuffle(SYMBOLS.slice(0,6)).map(([name,symbol])=>({name,symbol,matched:false}));
    const names=shuffle(state.matchPairs.map(p=>p.name));
    const symbols=shuffle(state.matchPairs.map(p=>p.symbol));
    state.matchNames=names;state.matchSymbols=symbols;state.matchSelection=null;
    panel.innerHTML=heading("Match the Symbol","Choose one Tirthankar name and then choose its traditional emblem.",`<span class="status-pill">Matched: ${state.matchPairs.filter(p=>p.matched).length}/${state.matchPairs.length}</span> ${btn("New round","match-new",true)}`)+
      `<div class="match-grid"><div class="match-column"><h3> Tirthankars</h3>${names.map(n=>{const p=state.matchPairs.find(x=>x.name===n),done=!!p?.matched;return `<button class="match-item ${done?"matched":"pending"}" data-match-name="${esc(n)}" ${done?"disabled":""}><span>${esc(n)}</span><small>${done?"✓ Solved":"○ Pending"}</small></button>`;}).join("")}</div><div class="match-column"><h3>Emblems</h3>${symbols.map(s=>{const p=state.matchPairs.find(x=>x.symbol===s),done=!!p?.matched;return `<button class="match-item ${done?"matched":"pending"}" data-match-symbol="${esc(s)}" ${done?"disabled":""}><span>${esc(s)}</span><small>${done?"✓ Solved":"○ Pending"}</small></button>`;}).join("")}</div></div><p class="game-feedback" id="gameFeedback">Correct matches: ${state.matchScore}</p>`;
  }
  function renderQuiz(){
    if(!state.quizOrder.length)state.quizOrder=shuffle(QUIZ.map((_,i)=>i));
    if(state.quizIndex>=state.quizOrder.length){
      panel.innerHTML=heading("Jain Knowledge Quiz","Your round is complete.")+`<div class="completion-card"><h3>🙏 Well played!</h3><p>You scored <strong>${state.quizScore} out of ${state.quizOrder.length}</strong>.</p><p>Keep learning and exploring Jain wisdom.</p>${btn("Play again","quiz-restart")}</div>`;return;
    }
    const q=QUIZ[state.quizOrder[state.quizIndex]];
    panel.innerHTML=heading("Jain Knowledge Quiz","Test your knowledge of Jain principles and traditions.",`<span class="status-pill">Score: ${state.quizScore}</span>`)+
      `<div class="quiz-progress"><span style="width:${state.quizIndex/state.quizOrder.length*100}%"></span></div><p><strong>Question ${state.quizIndex+1} of ${state.quizOrder.length}</strong></p><div class="clue-card"><h3>${esc(q.q)}</h3></div><div class="answer-grid">${q.a.map((a,i)=>`<button class="answer-option" data-quiz="${i}">${esc(a)}</button>`).join("")}</div><p class="game-feedback" id="gameFeedback"></p>`;
  }
  panel.addEventListener("click",e=>{
    const tab=e.target.closest("[data-game]");if(tab&&tab.classList.contains("game-tab"))return;
    const cell=e.target.closest("[data-cell]");if(cell&&state.game==="wordsearch"){cellTap(cell.dataset.cell);return;}
    const guess=e.target.closest("[data-guess]");if(guess&&state.game==="guess"){
      const right=TIRTHANKARS[state.guessIndex][0];panel.querySelectorAll("[data-guess]").forEach(b=>{b.disabled=true;if(b.dataset.guess===right)b.classList.add("correct");else if(b===guess)b.classList.add("wrong");});
      const f=document.getElementById("gameFeedback");if(guess.dataset.guess===right){state.guessScore++;f.textContent="Correct! "+right+" — well done. 🙏";}else f.textContent=`Not quite. The answer is ${right}. Keep going!`;return;
    }
    const action=e.target.closest("[data-action]")?.dataset.action;
    if(action==="new-puzzle"){makePuzzle();renderWordsearch();}
    if(action==="guess-next"){state.guessIndex=(state.guessIndex+1)%TIRTHANKARS.length;renderGuess();}
    if(action==="word-next"){state.wordIndex=(state.wordIndex+1)%WORDS.length;renderUnscramble();}
    if(action==="word-check"){document.getElementById("wordForm")?.requestSubmit();}
    if(action==="match-new"){state.matchPairs=[];state.matchScore=0;renderMatch();}
    if(action==="quiz-restart"){state.quizIndex=0;state.quizScore=0;state.quizOrder=shuffle(QUIZ.map((_,i)=>i));renderQuiz();}
    const mn=e.target.closest("[data-match-name]");const ms=e.target.closest("[data-match-symbol]");
    if(state.game==="match"&&(mn||ms)){
      if(mn){state.matchSelection={type:"name",value:mn.dataset.matchName};panel.querySelectorAll("[data-match-name]").forEach(b=>b.classList.toggle("selected",b===mn));}
      if(ms&&state.matchSelection?.type==="name"){
        const pair=state.matchPairs.find(p=>p.name===state.matchSelection.value);
        if(pair&&pair.symbol===ms.dataset.matchSymbol&&!pair.matched){pair.matched=true;state.matchScore++;renderMatch();const f=document.getElementById("gameFeedback");if(f)f.textContent=state.matchPairs.every(p=>p.matched)?"All matched — excellent! 🙏":`Correct match! ${pair.name} — ${pair.symbol}`;}
        else{const f=document.getElementById("gameFeedback");if(f)f.textContent="Not quite — try again.";state.matchSelection=null;panel.querySelectorAll(".match-item").forEach(b=>b.classList.remove("selected"));}
      }return;
    }
    const quiz=e.target.closest("[data-quiz]");if(quiz&&state.game==="quiz"){
      const q=QUIZ[state.quizOrder[state.quizIndex]],answer=Number(quiz.dataset.quiz);
      panel.querySelectorAll("[data-quiz]").forEach(b=>{b.disabled=true;if(Number(b.dataset.quiz)===q.c)b.classList.add("correct");else if(b===quiz)b.classList.add("wrong");});
      if(answer===q.c)state.quizScore++;
      document.getElementById("gameFeedback").textContent=(answer===q.c?"Correct! ":"The correct answer is "+q.a[q.c]+". ")+q.e;
      const next=document.createElement("div");next.style.marginTop="1rem";next.innerHTML=btn(state.quizIndex===state.quizOrder.length-1?"See results":"Next question","quiz-next");panel.appendChild(next);return;
    }
    if(action==="quiz-next"){state.quizIndex++;renderQuiz();}
  });
  panel.addEventListener("submit",e=>{
    if(e.target.id!=="wordForm")return;e.preventDefault();
    const answer=document.getElementById("wordAnswer").value.trim().toUpperCase().replace(/[^A-Z]/g,"");
    const expected=WORDS[state.wordIndex%WORDS.length].word;
    const f=document.getElementById("gameFeedback");
    if(answer===expected){state.wordScore++;f.textContent="Correct! "+expected+" — beautifully solved. 🙏";document.getElementById("wordAnswer").disabled=true;}
    else f.textContent="Not quite. Check the clue and try again.";
  });
  tabs.forEach(t=>t.addEventListener("click",()=>{
    state.game=t.dataset.game;
    if(state.game==="wordsearch"&&!state.grid.length)makePuzzle();
    if(state.game==="match"&&!state.matchPairs.length)state.matchPairs=shuffle(SYMBOLS.slice(0,6)).map(([name,symbol])=>({name,symbol,matched:false}));
    render();
  }));
  makePuzzle();
  render();
})();
