// Shared header (menu with sub-menus) and footer for every page.
// Edit the MENU below to change the navigation everywhere at once.
(function(){
  const cur=(location.pathname.split('/').pop()||'index').replace(/\.html$/i,'').toLowerCase();

  const MENU=[
    {k:'nav.explore',t:'Explore',page:'index',pages:['index','knowledge','learn','tirthankaras','arghya','games','colouring'],sub:[
      ['nav.about','About Us','index.html#about'],
      ['nav.knowledge','Knowledge Hub','knowledge.html'],
      ['nav.tirthankaras','24 Tirthankaras','tirthankaras.html'],
      ['nav.kids','Kids & Family','index.html#kids-corner']
    ]},
    {k:'nav.bhakti',t:'Bhakti',page:'bhakti',href:'bhakti.html'},
    {k:'nav.yatra',t:'Yatra',page:'yatra',sub:[
      ['nav.trips','Monthly Trips','yatra.html#trips'],
      ['nav.map','Yatra Map','yatra.html#yatra-map'],
      ['nav.directory','Jain Teerth Directory','yatra.html#directory'],
      ['nav.darshan','Darshan','yatra.html#darshan']
    ]},
    {k:'nav.more',t:'More',page:'community',pages:['community','join'],sub:[
      ['nav.calendar','Calendar','community.html#calendar'],
      ['nav.events','Events','community.html#events'],
      ['nav.mandirMap','Our Mandir','community.html#mandir-location'],
      ['nav.follow','Follow Us','community.html#follow']
    ]}
  ];

  const nav=MENU.map(m=>{
    const here=(m.pages||[m.page]).includes(cur)?' current':'';

    if(m.sub){
      return `<div class="nav-item has-sub${here}">
        <button class="nav-trigger" type="button" aria-haspopup="true" aria-expanded="false">
          <span data-i18n="${m.k}">${m.t}</span>
          <i class="caret" aria-hidden="true"></i>
        </button>
        <div class="dropdown">
          ${m.sub.map(s=>`
            <a href="${s[2]}" data-i18n="${s[0]}">${s[1]}</a>
          `).join('')}
        </div>
      </div>`;
    }

    return `<a class="nav-link${here}" href="${m.href}" data-i18n="${m.k}">${m.t}</a>`;
  }).join('')+
  `<a class="nav-cta button primary${cur==='join'?' current':''}" href="join.html" data-i18n="nav.join">Join Us</a>`;

  const header=`<header class="site-header">
    <div class="container nav-wrap">

      <a class="brand" href="index.html" aria-label="Jain Youth Karnal home">
        <img src="apple-icon.png" alt="" width="48" height="48">
        <span>JAIN YOUTH KARNAL</span>
      </a>

      <button class="menu-toggle"
              aria-label="Open navigation"
              aria-expanded="false">☰</button>

      <nav id="nav" class="nav" aria-label="Main">
        ${nav}
      </nav>

      <div class="site-language"
           role="group"
           aria-label="Website language">
        <button class="site-lang active"
                data-lang="en"
                type="button">EN</button>
        <span>/</span>
        <button class="site-lang"
                data-lang="hi"
                type="button">हिंदी</button>
      </div>

    </div>
  </header>`;

  const put=(id,html)=>{
    const el=document.getElementById(id);
    if(el)el.outerHTML=html;
  };

  put('site-header',header);

  const loadSharedFooter=async()=>{
    const target=document.getElementById('site-footer');
    if(!target)return;
    try{
      const response=await fetch('footer.html');
      if(!response.ok)throw new Error(`Could not load footer.html (${response.status})`);
      target.innerHTML=await response.text();
      if(typeof window.setLanguage==='function') window.setLanguage(localStorage.getItem('jyk-language')||'en');
    }catch(error){
      console.error('Unable to load shared footer:',error);
      target.innerHTML='<p class="container">The footer could not be loaded. Please open this site through a web server.</p>';
    }
  };

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',loadSharedFooter,{once:true});
  }else{
    loadSharedFooter();
  }
})();