/* Jain Youth Karnal — bilingual Tirthankara reference. Details are based on the supplied community list. */
(function(){
'use strict';
const en=[
['Rishabhdev Swami','Bull','Banyan tree','Uttarashada','Marudevi','Nabhiraja'],
['Ajitnath Swami','Elephant','Sarparna tree','Rohini','Vijaya','Jitashatru'],
['Sambhavnath Swami','Horse','Shala tree','Purvashada','Sena','Jitari'],
['Abhinandannath Swami','Monkey','Devadaru tree','Punarvasu','Siddharthi','Samvar'],
['Sumatinath Swami','Curlew','Priyangu tree','Magha','Sumangala','Meghaprabha'],
['Padmaprabhu Swami','Lotus','Priyangu tree','Chitra','Susima','Dharan'],
['Suparshvanath Swami','Swastika','Shirish tree','Vishakha','Prithvi','Supratishtha'],
['Chandraprabhu Swami','Moon','Naga tree','Anuradha','Lakshmana','Mahasena'],
['Pushpadanta (Suvidhinath) Swami','Crocodile','Sal tree','Mula','Rama','Sugriva'],
['Sheetalnath Swami','Shrivatsa','Laksha tree','Purvashada','Sunanda','Dridharatha'],
['Shreyansnath Swami','Rhinoceros','Tenduka tree','Vana','Vishnu','Vishnuraj'],
['Vasupujya Swami','Buffalo','Patala tree','Shatabhisha','Jaya','Vasupujya'],
['Vimalnath Swami','Boar','Jambu tree','Uttarabhadrapada','Shyama','Kritavarma'],
['Anantnath Swami','Bear','Peepal tree','Revati','Suyashya','Simhasena'],
['Dharmanath Swami','Vajradanda','Dadhparna tree','Pushya','Suvrata','Bhanuraja'],
['Shantinath Swami','Deer','Nanda tree','Bharani','Airani','Vishvasen'],
['Kunthunath Swami','Goat','Tilaka tree','Krittika','Shridevi','Surya'],
['Aranath Swami','Fish','Mango tree','Rohini','Miya','Sudarshan'],
['Mallinath Swami','Water pot','Kumbha Ashoka tree','Ashwini','Rakshita','Kumbha'],
['Munisuvratnath Swami','Tortoise','Champaka tree','Shravana','Padmavati','Sumitra'],
['Naminath Swami','Blue lotus','Bakul tree','Ashwini','Vapra','Vijay'],
['Neminath Swami','Conch','Meshasringa tree','Chitra','Shiva','Samudravijaya'],
['Parshvanath Swami','Serpent','Dhava tree','Vishakha','Vamadevi','Ashvasena'],
['Mahavir Swami','Lion','Sal tree','Uttaraphalguni','Trishala','Siddhartha']
];
const hi=[
['ऋषभदेव जी','बैल','वट वृक्ष','उत्तराषाढ़ा','मरुदेवी','नाभिराजा'],
['अजितनाथ जी','हाथी','सर्पपर्ण वृक्ष','रोहिणी','विजया','जितशत्रु'],
['सम्भवनाथ जी','घोड़ा','शाल वृक्ष','पूर्वाषाढ़ा','सेना','जितारी'],
['अभिनन्दन जी','बन्दर','देवदार वृक्ष','पुनर्वसु','सिद्धार्थी','संवर'],
['सुमतिनाथ जी','चकवा','प्रियंगु वृक्ष','मघा','सुमंगला','मेघप्रभ'],
['पद्मप्रभु जी','कमल','प्रियंगु वृक्ष','चित्रा','सुसीमा','धरण'],
['सुपार्श्वनाथ जी','साथिया','शिरीष वृक्ष','विशाखा','पृथ्वी','सुप्रतिष्ठ'],
['चन्द्रप्रभु जी','चन्द्रमा','नाग वृक्ष','अनुराधा','लक्ष्मणा','महासेन'],
['पुष्पदन्त जी','मगर','साल वृक्ष','मूल','रामा','सुग्रीव'],
['शीतलनाथ जी','कल्पवृक्ष','लक्ष वृक्ष','पूर्वाषाढ़ा','सुनन्दा','दृढ़रथ'],
['श्रेयांसनाथ जी','गैंडा','तेंदुका वृक्ष','वण','विष्णु','विष्णुराज'],
['वासुपूज्य जी','भैंसा','पाटला वृक्ष','शतभिषा','जया','वासुपूज्य'],
['विमलनाथ जी','शूकर','जम्बू वृक्ष','उत्तराभाद्रपद','श्यामा','कृतवर्मा'],
['अनन्तनाथ जी','सेही','पीपल वृक्ष','रेवती','सुवर्शया','सिंहसेन'],
['धर्मनाथ जी','वज्रदण्ड','दधिपर्ण वृक्ष','पुष्य','सुत्रता','भानुराजा'],
['शांतिनाथ जी','हिरण','नन्द वृक्ष','भरणी','ऐरणी','विश्वसेन'],
['कुन्थुनाथ जी','बकरा','तिलक वृक्ष','कृत्तिका','श्रीदेवी','सूर्य'],
['अरहनाथ जी','मछली','आम्र वृक्ष','रोहिणी','मिया','सुदर्शन'],
['मल्लिनाथ जी','कलश','कुम्भअशोक वृक्ष','अश्विनी','रक्षिता','कुम्भ'],
['मुनिसुव्रतनाथ जी','कछुवा','चम्पक वृक्ष','श्रवण','पद्मावती','सुमित्र'],
['नमिनाथ जी','नीलकमल','बकुल वृक्ष','अश्विनी','वप्रा','विजय'],
['नेमिनाथ जी','शंख','मैषश्रृंग वृक्ष','चित्रा','शिवा','समुद्रविजय'],
['पार्श्वनाथ जी','सर्प','धव वृक्ष','विशाखा','वामादेवी','अश्वसेन'],
['महावीर जी','सिंह','साल वृक्ष','उत्तराफाल्गुनी','त्रिशला','सिद्धार्थ']
];
const labels={en:['Symbol','Renunciation tree','Birth nakshatra','Mother','Father','shown'],hi:['चिह्न','वैराग्य वृक्ष','जन्म नक्षत्र','माता','पिता','दिखाए गए']};
const ui={en:{search:'Search by name, symbol, parent or nakshatra',none:'No Tirthankaras match your search.',eyebrow:'JAIN KNOWLEDGE',title:'The 24 Tirthankaras',intro:'Explore the names, symbols, renunciation trees, birth nakshatras, and parents of the 24 Tirthankaras.',count:'24 Tirthankaras',note:'Names and traditional details are presented as a community learning reference; spellings and some details may vary by Jain tradition and source.'},hi:{search:'नाम, चिह्न, माता-पिता या नक्षत्र से खोजें',none:'आपकी खोज से कोई तीर्थंकर नहीं मिला।',eyebrow:'जैन ज्ञान',title:'24 तीर्थंकर',intro:'24 तीर्थंकरों के नाम, चिह्न, वैराग्य वृक्ष, जन्म नक्षत्र और माता-पिता के बारे में जानें।',count:'24 तीर्थंकर',note:'नाम और पारंपरिक विवरण सामुदायिक अध्ययन के लिए दिए गए हैं; जैन परंपरा और स्रोत के अनुसार वर्तनी या कुछ विवरण भिन्न हो सकते हैं।'}};
const root=document.getElementById('tirthankara-grid'); if(!root)return;
const search=document.getElementById('tirth-search'); const count=document.getElementById('tirth-count');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function render(){const lang=(localStorage.getItem('jyk-language')==='hi')?'hi':'en';const data=lang==='hi'?hi:en;const L=labels[lang];const q=(search.value||'').trim().toLocaleLowerCase();let visible=0;root.innerHTML=data.map((r,i)=>{const all=(r.join(' ')+' '+en[i].join(' ')+' '+hi[i].join(' ')).toLocaleLowerCase();if(q&&!all.includes(q))return '';visible++;return `<article class="tirth-card"><div class="tirth-card-top"><span class="tirth-num">${String(i+1).padStart(2,'0')}</span><div><h3>${esc(r[0])}</h3>${lang==='en'?`<div class="tirth-hindi">${esc(hi[i][0])}</div>`:`<div class="tirth-hindi">${esc(en[i][0])}</div>`}</div></div><dl><dt>${L[0]}</dt><dd>${esc(r[1])}</dd><dt>${L[1]}</dt><dd>${esc(r[2])}</dd><dt>${L[2]}</dt><dd>${esc(r[3])}</dd><dt>${L[3]}</dt><dd>${esc(r[4])}</dd><dt>${L[4]}</dt><dd>${esc(r[5])}</dd></dl></article>`;}).join('');if(!visible)root.innerHTML=`<div class="tirth-empty">${esc(ui[lang].none)}</div>`;count.textContent=lang==='hi'?`${visible} / 24 दिखाए गए`:`${visible} of 24 shown`;document.querySelectorAll('[data-i18n^="tirth."]').forEach(el=>{const key=el.dataset.i18n.slice(6);if(ui[lang][key])el.textContent=ui[lang][key];});search.placeholder=ui[lang].search;}
search.addEventListener('input',render);
const oldSetLanguage=window.setLanguage;if(typeof oldSetLanguage==='function'){window.setLanguage=function(lang){oldSetLanguage(lang);render();};}
document.addEventListener('click',e=>{if(e.target.closest('.site-lang'))setTimeout(render,0);});
render();
})();
