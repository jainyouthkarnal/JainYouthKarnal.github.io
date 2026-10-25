/* Jain Youth Karnal — five lightweight, client-side educational games */
(() => {
  "use strict";
  const panel = document.getElementById("gamePanel");
  const tabs = [...document.querySelectorAll(".game-tab")];
  const isHindi = () => document.documentElement.lang === "hi" || localStorage.getItem("jyk-language") === "hi";
  const HI = {
    "Find the Tirthankars":"तीर्थंकरों को खोजें", "Find all 24 names hidden horizontally, vertically and diagonally. Tap a starting letter, then tap the ending letter.":"क्षैतिज, लंबवत और तिरछी दिशा में छिपे सभी 24 नाम खोजें। पहले शुरुआती अक्षर और फिर अंतिम अक्षर पर टैप करें।",
    "New puzzle":"नई पहेली", "Found:":"मिल गए:", "Names may run in either direction":"नाम दोनों दिशाओं में हो सकते हैं", "Names to find":"खोजने के नाम", "Tip: tap one letter, then the last letter of the name. A correct line will be highlighted.":"संकेत: पहले एक अक्षर, फिर नाम के अंतिम अक्षर पर टैप करें। सही नाम हाइलाइट हो जाएगा।", "Wonderful! You found all 24 Tirthankars.":"बहुत खूब! आपने सभी 24 तीर्थंकरों को खोज लिया।", "Not a complete name yet — try another ending letter.":"अभी पूरा नाम नहीं बना—किसी दूसरे अंतिम अक्षर को चुनें।",
    "Guess the Tirthankar":"तीर्थंकर पहचानें", "Look at the image, read the clues and choose the correct name.":"चित्र देखें, संकेत पढ़ें और सही नाम चुनें।", "Next question":"अगला प्रश्न", "Who is this Tirthankar?":"ये कौन-से तीर्थंकर हैं?", "Mystery Tirthankar":"रहस्यमय तीर्थंकर", "Who am I?":"मैं कौन हूँ?", "Correct!":"सही जवाब!", "Not quite. The answer is":"सही नहीं। उत्तर है", "Keep going!":"आगे कोशिश करें!",
    "Unscramble the Jain Word":"जैन शब्द को सही क्रम में लगाएँ", "Put the letters in the right order and learn a Jain term.":"अक्षरों को सही क्रम में लगाएँ और जैन शब्द के बारे में जानें।", "Another word":"अगला शब्द", "Clue":"संकेत", "Rearrange these letters:":"इन अक्षरों को सही क्रम में लगाएँ:", "Your answer":"आपका उत्तर", "Type the word":"शब्द लिखें", "Check answer":"उत्तर जाँचें", "Correct answer":"सही उत्तर", "About this word":"इस शब्द के बारे में", "Not quite. Check the clue and try again.":"अभी सही नहीं। संकेत देखें और फिर कोशिश करें।", "beautifully solved.":"बहुत अच्छे से हल किया।",
    "Match the Symbol":"चिह्न का मिलान करें", "Choose one Tirthankar name and then choose its traditional emblem.":"एक तीर्थंकर का नाम चुनें, फिर उनसे जुड़ा पारंपरिक चिह्न चुनें।", "New round":"नया दौर", "Tirthankars":"तीर्थंकर", "Emblems":"चिह्न", "Correct matches:":"सही मिलान:", "All matched — excellent!":"सभी का मिलान हो गया—बहुत खूब!", "Correct match!":"सही मिलान!", "Not quite — try again.":"सही नहीं—फिर कोशिश करें।",
    "I am the first Tirthankar.":"मैं पहले तीर्थंकर हूँ।", "My emblem is the bull.":"मेरा चिह्न बैल है।", "I am the second Tirthankar.":"मैं दूसरे तीर्थंकर हूँ।", "My emblem is the elephant.":"मेरा चिह्न हाथी है।", "I am the third Tirthankar.":"मैं तीसरे तीर्थंकर हूँ।", "My emblem is the horse.":"मेरा चिह्न घोड़ा है।", "I am the 23rd Tirthankar.":"मैं 23वें तीर्थंकर हूँ।", "My emblem is the serpent.":"मेरा चिह्न सर्प है।", "I am the 24th Tirthankar.":"मैं 24वें तीर्थंकर हूँ।", "My emblem is the lion.":"मेरा चिह्न सिंह है।", "My traditional emblem is the ":"मेरा पारंपरिक चिह्न है: ", "I am Tirthankar number ":"मैं क्रमांक ",
    "How many Tirthankars are recognised in the current time cycle of Jain tradition?":"जैन परंपरा के वर्तमान कालचक्र में कितने तीर्थंकर माने जाते हैं?", "Which Tirthankar is traditionally identified as the 24th?":"परंपरा के अनुसार 24वें तीर्थंकर कौन हैं?", "What does Ahimsa mean?":"अहिंसा का क्या अर्थ है?", "Which is one of the Three Jewels (Ratnatraya) of Jainism?":"जैन धर्म के रत्नत्रय में से एक क्या है?", "What is the Jain principle of Aparigraha commonly understood as?":"जैन सिद्धांत अपरिग्रह का सामान्य अर्थ क्या है?", "Which symbol is commonly associated with Parshvanath?":"पार्श्वनाथ से सामान्यतः कौन-सा चिह्न जुड़ा है?", "What is Samyak Darshan?":"सम्यक दर्शन क्या है?", "Which set names the five great vows (Mahavrat)?":"पाँच महाव्रतों का सही समूह कौन-सा है?",
    "Non-violence":"अहिंसा", "Possession":"परिग्रह", "Pride":"अहंकार", "Ritual":"अनुष्ठान", "Right faith":"सम्यक दर्शन", "Royal power":"राजसत्ता", "Fasting only":"केवल उपवास", "Pilgrimage only":"केवल तीर्थयात्रा", "Non-attachment / non-possessiveness":"अनासक्ति / अपरिग्रह", "Victory":"विजय", "Offering flowers":"पुष्प अर्पण", "Silence only":"केवल मौन", "Lion":"सिंह", "Serpent":"सर्प", "Bull":"बैल", "Elephant":"हाथी", "Right faith or right perception":"सम्यक दर्शन", "A festival meal":"पर्व का भोजन", "A temple bell":"मंदिर की घंटी", "A pilgrimage route":"तीर्थयात्रा का मार्ग", "Ahimsa, truth, non-stealing, celibacy, non-possession":"अहिंसा, सत्य, अचौर्य, ब्रह्मचर्य, अपरिग्रह", "Prayer, travel, music, art, service":"प्रार्थना, यात्रा, संगीत, कला, सेवा", "Food, water, sleep, study, work":"भोजन, पानी, नींद, अध्ययन, काम", "Faith, wealth, fame, power, success":"श्रद्धा, धन, प्रसिद्धि, शक्ति, सफलता",
    "Jain Knowledge Quiz":"जैन ज्ञान प्रश्नोत्तरी", "Test your knowledge of Jain principles and traditions.":"जैन सिद्धांतों और परंपराओं के अपने ज्ञान को परखें।", "Your round is complete.":"आपका दौर पूरा हुआ।", "Well played!":"बहुत अच्छा खेला!", "You scored":"आपका स्कोर", "Keep learning and exploring Jain wisdom.":"जैन ज्ञान सीखते और खोजते रहें।", "Play again":"फिर खेलें", "Question":"प्रश्न", "Next question":"अगला प्रश्न", "See results":"परिणाम देखें", "Score:":"स्कोर:", "The correct answer is":"सही उत्तर है"
  };
  const localizePanel = () => {
    if (!panel || !isHindi()) return;
    let html = panel.innerHTML;
    Object.entries(HI).sort((a,b)=>b[0].length-a[0].length).forEach(([en,hi])=>{ html = html.split(en).join(hi); });
    panel.innerHTML = html;
  };
  const updateStaticLanguage = () => {
    const hi = isHindi();
    const staticMap = {
      ".games-hero .eyebrow": ["LEARN • PLAY • DISCOVER", "सीखें • खेलें • जानें"],
      ".games-hero h1": ["Jain <em>Games</em>", "जैन <em>गेम्स</em>"],
      ".games-hero-inner > p:not(.eyebrow)": ["Explore Jain wisdom through little challenges for curious minds of every age.", "रोचक खेलों के माध्यम से जैन ज्ञान को जानें और सीखें।"],
      ".games-hero-badges span:nth-child(1)": ["🪷 Rooted in Jain knowledge", "🪷 जैन ज्ञान पर आधारित"],
      ".games-hero-badges span:nth-child(2)": ["📱 Made for mobile", "📱 मोबाइल के लिए उपयुक्त"],
      ".games-hero-badges span:nth-child(3)": ["✨ Play at your own pace", "✨ अपनी गति से खेलें"],
      ".games-note": ["These games are for learning and enjoyment. Some Jain traditions may use different names or details; please share corrections with the Jain Youth Karnal team.", "ये खेल सीखने और आनंद के लिए हैं। जैन परंपराओं में कुछ नाम या विवरण अलग हो सकते हैं; कृपया सुधार के लिए जैन यूथ करनाल टीम से संपर्क करें।"]
    };
    Object.entries(staticMap).forEach(([sel,values])=>{const el=document.querySelector(sel);if(el)el.innerHTML=values[hi?1:0];});
    const labels = hi ? ["🔎 तीर्थंकर खोजें","🧩 तीर्थंकर पहचानें","🔤 शब्द चुनौती","🪷 चिह्न मिलाएँ","🧠 जैन प्रश्नोत्तरी"] : ["🔎 Find Tirthankars","🧩 Guess the Tirthankar","🔤 Word Challenge","🪷 Match the Symbol","🧠 Jain Quiz"];
    tabs.forEach((tab,i)=>{if(labels[i])tab.textContent=labels[i];});
  };
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
    {word:"AHIMSA",hint:"A principle that asks us not to harm living beings",hintHi:"ऐसा सिद्धांत जो किसी भी जीव को हानि न पहुँचाने की सीख देता है",about:"Ahimsa means non-violence and care for all living beings."},
    {word:"JIVA",hint:"The word for a living soul in Jain philosophy",hintHi:"जैन दर्शन में चेतन आत्मा या जीव के लिए प्रयुक्त शब्द",about:"Jiva refers to a soul or living being, which has consciousness."},
    {word:"KARMA",hint:"Subtle matter associated with actions and their consequences",hintHi:"कर्मों और उनके परिणामों से जुड़ा सूक्ष्म पुद्गल",about:"In Jain philosophy, karma binds to the soul and affects its journey."},
    {word:"SAMYAK",hint:"A word meaning right or proper, used in the Three Jewels",hintHi:"तीन रत्नों में प्रयुक्त शब्द, जिसका अर्थ सही या सम्यक है",about:"Samyak appears in Samyak Darshan, Samyak Gyan and Samyak Charitra—the Three Jewels."},
    {word:"TIRTHANKAR",hint:"An enlightened teacher who shows the path beyond the cycle of rebirth",hintHi:"ऐसे ज्ञानी गुरु जो जन्म-मरण के चक्र से मुक्ति का मार्ग बताते हैं",about:"A Tirthankar renews and teaches the path to liberation in Jain tradition."},
    {word:"APARIGRAHA",hint:"The practice of limiting possessions and attachment",hintHi:"संग्रह और आसक्ति को सीमित रखने का सिद्धांत",about:"Aparigraha encourages non-possessiveness and reducing attachment."},
    {word:"RATNATRAYA",hint:"The collective name for right faith, right knowledge and right conduct",hintHi:"सम्यक दर्शन, सम्यक ज्ञान और सम्यक चरित्र—इन तीन रत्नों का सामूहिक नाम",about:"Ratnatraya means the Three Jewels: Samyak Darshan, Samyak Gyan and Samyak Charitra."},
    {word:"MOKSHA",hint:"The state of liberation from the cycle of birth and rebirth",hintHi:"जन्म-मरण के चक्र से मुक्त होने की अवस्था",about:"Moksha is liberation from karmic bondage and the cycle of rebirth."}
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
    updateStaticLanguage();
    tabs.forEach(t=>{const on=t.dataset.game===state.game;t.classList.toggle("active",on);t.setAttribute("aria-selected",String(on));});
    ({wordsearch:renderWordsearch,guess:renderGuess,unscramble:renderUnscramble,match:renderMatch,quiz:renderQuiz}[state.game])();
    localizePanel();
  }
  // Word search generator: all 24 names, placed in eight directions in a 15x15 grid.
  function makePuzzle() {
    const size=20;
    const words=TIRTHANKARS.map(x=>x[0].toUpperCase().replace(/[^A-Z]/g,"")).sort((a,b)=>b.length-a.length);
    const dirs=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
    // Bounded retries prevent a crowded random layout from causing infinite recursion.
    for(let puzzleTry=0;puzzleTry<35;puzzleTry++){
      const grid=Array.from({length:size},()=>Array(size).fill(""));
      const placed=[]; let allPlaced=true;
      for(const word of words){
        let success=false;
        for(let attempt=0;attempt<3500&&!success;attempt++){
          const [dr,dc]=dirs[Math.floor(Math.random()*dirs.length)];
          const r=Math.floor(Math.random()*size),c=Math.floor(Math.random()*size);
          const er=r+dr*(word.length-1),ec=c+dc*(word.length-1);
          if(er<0||er>=size||ec<0||ec>=size)continue;
          let ok=true;
          for(let i=0;i<word.length;i++){const ch=grid[r+dr*i][c+dc*i];if(ch&&ch!==word[i]){ok=false;break;}}
          if(!ok)continue;
          const cells=[];for(let i=0;i<word.length;i++){grid[r+dr*i][c+dc*i]=word[i];cells.push(`${r+dr*i},${c+dc*i}`);}
          placed.push({word,cells});success=true;
        }
        if(!success){allPlaced=false;break;}
      }
      if(!allPlaced)continue;
      for(let r=0;r<size;r++)for(let c=0;c<size;c++)if(!grid[r][c])grid[r][c]="ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random()*26)];
      state.grid=grid;state.words=placed;state.found=new Set();state.start=null;state.selected=null;return;
    }
    // Defensive fallback: keep the page usable even if a browser cannot generate a full puzzle.
    state.grid=Array.from({length:size},()=>Array.from({length:size},()=>"ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random()*26)]));
    state.words=[];state.found=new Set();state.start=null;state.selected=null;
  }
  function renderWordsearch(){
    if(!state.grid.length)makePuzzle();
    const foundCount=state.found.size;
    panel.innerHTML=heading("Find the Tirthankars","Find all 24 names hidden horizontally, vertically and diagonally. Tap a starting letter, then tap the ending letter.",btn("New puzzle","new-puzzle",true))+
      `<div class="game-status"><span class="status-pill">🪷 Found: <b>${foundCount}/24</b></span><span class="status-pill">Names may run in either direction</span></div>
      ${state.words.length!==24?`<p class="game-feedback">This puzzle could not be generated. Please choose New puzzle.</p>`:""}<div class="word-layout"><div><div class="letter-grid" style="--grid-size:${state.grid.length}" aria-label="Word search grid">${state.grid.map((row,r)=>row.map((ch,c)=>{
        const key=`${r},${c}`,isFound=[...state.found].some(w=>state.words.find(x=>x.word===w)?.cells.includes(key));
        return `<button class="letter${isFound?" found":""}${state.selected===key?" selected":""}" data-cell="${key}" aria-label="Row ${r+1}, column ${c+1}, ${ch}">${ch}</button>`;
      }).join("")).join("")}</div><p class="game-feedback" id="gameFeedback">${foundCount===24?"Wonderful! You found all 24 Tirthankars.":""}</p></div>
      <aside class="side-card"><h3>Names to find</h3><ul class="name-list">${TIRTHANKARS.map(([n])=>`<li class="${state.found.has(n.toUpperCase().replace(/[^A-Z]/g,""))?"found":""}">${esc(n)}</li>`).join("")}</ul><p style="font-size:.8rem;color:#817461;margin-bottom:0">Tip: tap one letter, then the last letter of the name. A correct line will be highlighted.</p></aside></div>`;
  }
  function cellTap(key){
    if(!state.start){state.start=key;state.selected=key;render();return;}
    const [r1,c1]=state.start.split(",").map(Number),[r2,c2]=key.split(",").map(Number);
    const dr=Math.sign(r2-r1),dc=Math.sign(c2-c1);
    const straight=(r1===r2||c1===c2||Math.abs(r2-r1)===Math.abs(c2-c1));
    let letters=[],cells=[];
    if(straight){let r=r1,c=c1;while(true){letters.push(state.grid[r][c]);cells.push(`${r},${c}`);if(r===r2&&c===c2)break;r+=dr;c+=dc;}}
    const candidate=letters.join("");
    const reverse=candidate.split("").reverse().join("");
    const match=state.words.find(w=>(w.word===candidate||w.word===reverse)&&!state.found.has(w.word));
    if(match){state.found.add(match.word);state.start=null;state.selected=null;render();if(state.found.size===24)document.getElementById("gameFeedback").textContent=isHindi()?"बहुत खूब! आपने सभी 24 तीर्थंकरों को खोज लिया। 🙏":"Wonderful! You found all 24 Tirthankars. 🙏";}
    else if(key===state.start){state.start=null;state.selected=null;render();}
    else{state.start=key;state.selected=key;render();const f=document.getElementById("gameFeedback");if(f)f.textContent=isHindi()?"अभी पूरा नाम नहीं बना—किसी दूसरे अंतिम अक्षर को चुनें।":"Not a complete name yet — try another ending letter.";}
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
      `<div class="clue-card"><span class="clue-number">Clue</span><h3>${esc(isHindi()?(item.hintHi||item.hint):item.hint)}</h3><p>Rearrange these letters:</p><div class="word-challenge">${scrambled.map(ch=>`<span class="word-chip">${ch}</span>`).join("")}</div></div>
      <form id="wordForm"><label for="wordAnswer"><strong>Your answer</strong></label><br><input class="game-input" id="wordAnswer" autocomplete="off" autocapitalize="characters" maxlength="18" placeholder="Type the word" required><div style="margin-top:.8rem">${btn("Check answer","word-check")}</div></form><div id="wordExplanation" class="word-explanation" hidden></div><p class="game-feedback" id="gameFeedback"></p>`;
  }
  function renderMatch(){
    if(!state.matchPairs.length)state.matchPairs=shuffle(SYMBOLS.slice(0,6)).map(([name,symbol])=>({name,symbol,matched:false}));
    const names=shuffle(state.matchPairs.map(p=>p.name));
    const symbols=shuffle(state.matchPairs.map(p=>p.symbol));
    state.matchNames=names;state.matchSymbols=symbols;state.matchSelection=null;
    panel.innerHTML=heading("Match the Symbol","Choose one Tirthankar name and then choose its traditional emblem.",`<span class="status-pill">Matched: ${state.matchPairs.filter(p=>p.matched).length}/${state.matchPairs.length}</span> ${btn("New round","match-new",true)}`)+
      `<div class="match-grid"><div class="match-column"><h3> Tirthankars</h3>${names.map(n=>`<button class="match-item" data-match-name="${esc(n)}">${esc(n)}</button>`).join("")}</div><div class="match-column"><h3>Emblems</h3>${symbols.map(s=>`<button class="match-item" data-match-symbol="${esc(s)}">${esc(s)}</button>`).join("")}</div></div><p class="game-feedback" id="gameFeedback">Correct matches: ${state.matchScore}</p>`;
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
      const f=document.getElementById("gameFeedback");if(guess.dataset.guess===right){state.guessScore++;f.textContent=isHindi()?`सही जवाब! ${right} — बहुत खूब। 🙏`:`Correct! ${right} — well done. 🙏`;}else f.textContent=isHindi()?`सही नहीं। उत्तर ${right} है। आगे कोशिश करें!`:`Not quite. The answer is ${right}. Keep going!`;return;
    }
    const action=e.target.closest("[data-action]")?.dataset.action;
    if(action==="new-puzzle"){makePuzzle();render();}
    if(action==="guess-next"){state.guessIndex=(state.guessIndex+1)%TIRTHANKARS.length;render();}
    if(action==="word-next"){state.wordIndex=(state.wordIndex+1)%WORDS.length;render();}
    if(action==="word-check"){document.getElementById("wordForm")?.requestSubmit();}
    if(action==="match-new"){state.matchPairs=[];state.matchScore=0;render();}
    if(action==="quiz-restart"){state.quizIndex=0;state.quizScore=0;state.quizOrder=shuffle(QUIZ.map((_,i)=>i));render();}
    const mn=e.target.closest("[data-match-name]");const ms=e.target.closest("[data-match-symbol]");
    if(state.game==="match"&&(mn||ms)){
      if(mn){state.matchSelection={type:"name",value:mn.dataset.matchName};panel.querySelectorAll("[data-match-name]").forEach(b=>b.classList.toggle("selected",b===mn));}
      if(ms&&state.matchSelection?.type==="name"){
        const pair=state.matchPairs.find(p=>p.name===state.matchSelection.value);
        if(pair&&pair.symbol===ms.dataset.matchSymbol&&!pair.matched){pair.matched=true;state.matchScore++;render();const f=document.getElementById("gameFeedback");if(f)f.textContent=state.matchPairs.every(p=>p.matched)?(isHindi()?"सभी का मिलान हो गया—बहुत खूब! 🙏":"All matched — excellent! 🙏"):(isHindi()?`सही मिलान! ${pair.name} — ${pair.symbol}`:`Correct match! ${pair.name} — ${pair.symbol}`);}
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
    if(action==="quiz-next"){state.quizIndex++;render();}
  });
  panel.addEventListener("submit",e=>{
    if(e.target.id!=="wordForm")return;e.preventDefault();
    const answer=document.getElementById("wordAnswer").value.trim().toUpperCase().replace(/[^A-Z]/g,"");
    const expected=WORDS[state.wordIndex%WORDS.length].word;
    const f=document.getElementById("gameFeedback");
    if(answer===expected){state.wordScore++;f.textContent=(isHindi()?"सही जवाब! ":"Correct! ")+expected+(isHindi()?" — बहुत खूब! 🙏":" — beautifully solved. 🙏");document.getElementById("wordAnswer").disabled=true;const explanation=document.getElementById("wordExplanation");const item=WORDS[state.wordIndex%WORDS.length];explanation.hidden=false;explanation.innerHTML=`<h3>${isHindi()?"इस शब्द के बारे में":"About this word"}</h3><p>${esc(isHindi()?({AHIMSA:"अहिंसा का अर्थ है हिंसा न करना और सभी जीवों के प्रति करुणा रखना।",JIVA:"जीव आत्मा या चेतन प्राणी को कहा जाता है।",KARMA:"जैन दर्शन में कर्म आत्मा से बंधते हैं और उसकी यात्रा को प्रभावित करते हैं।",SAMYAK:"सम्यक दर्शन, सम्यक ज्ञान और सम्यक चरित्र—ये तीन रत्न हैं।",TIRTHANKAR:"तीर्थंकर मुक्ति के मार्ग को पुनः स्थापित कर उसका उपदेश देते हैं।",APARIGRAHA:"अपरिग्रह का अर्थ है संग्रह और आसक्ति को सीमित करना।",RATNATRAYA:"रत्नत्रय के तीन रत्न हैं—सम्यक दर्शन, सम्यक ज्ञान और सम्यक चरित्र।",MOKSHA:"मोक्ष कर्मबंधन और जन्म-मरण के चक्र से मुक्ति है।"}[expected]||item.about):item.about)}</p>`;}
    else f.textContent=isHindi()?"अभी सही नहीं। संकेत देखें और फिर कोशिश करें।":"Not quite. Check the clue and try again.";
  });
  tabs.forEach(t=>t.addEventListener("click",()=>{
    state.game=t.dataset.game;
    if(state.game==="wordsearch"&&!state.grid.length)makePuzzle();
    if(state.game==="match"&&!state.matchPairs.length)state.matchPairs=shuffle(SYMBOLS.slice(0,6)).map(([name,symbol])=>({name,symbol,matched:false}));
    render();
  }));
  makePuzzle();
  render();
  const langObserver = new MutationObserver(() => render());
  langObserver.observe(document.documentElement,{attributes:true,attributeFilter:["lang"]});
  document.addEventListener("click",e=>{if(e.target.closest(".site-lang"))setTimeout(()=>render(),0);});
})();
