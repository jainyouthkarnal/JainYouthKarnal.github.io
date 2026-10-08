// Shared header (menu with sub-menus) and footer for every page.
// Edit the MENU below to change the navigation everywhere at once.
(function(){
  const cur=(location.pathname.split('/').pop()||'index').replace(/\.html$/i,'').toLowerCase();

  const MENU=[
    {k:'nav.about',t:'About',href:'index.html#about'},

    {k:'nav.yatra',t:'Yatra',page:'yatra',sub:[
      ['nav.trips','Monthly Trips','yatra.html#trips'],
      ['nav.map','Yatra Map','yatra.html#yatra-map'],
      ['nav.darshan','Darshan','yatra.html#darshan']
    ]},

    {k:'nav.learn',t:'Learn',page:'learn',sub:[
      ['nav.pathshala','Sunday Pathshala','learn.html#pathshala'],
      ['nav.knowledge','Knowledge','learn.html#knowledge']
    ]},

    {k:'nav.bhakti',t:'Bhakti',page:'bhakti',sub:[
      ['nav.bhajans','Bhajan Library','bhakti.html'],
      ['nav.playlist','🎧 Bhakti Playlist','playlist.html']
    ]},

    {k:'nav.community',t:'Community',page:'community',sub:[
      ['nav.calendar','Calendar','community.html#calendar'],
      ['nav.events','Events','community.html#events'],
      ['nav.mandirMap','Our Mandir','community.html#mandir-location'],
      ['nav.follow','Follow Us','community.html#follow'],
      ['nav.announcements','Announcements','index.html#announcements']
    ]}
  ];

  const nav=MENU.map(m=>{
    const here=m.page===cur?' current':'';

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

      <a class="brand" href="index.html">
        <img src="assets/circular-logo.png"
             alt="Jin Shasan Prabhavna Sangh — Jain Youth Karnal">
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

  const footer=`<footer class="footer">
    <div class="container footer-grid">

      <div>
        <img src="assets/logo.png"
             alt="Jin Shasan Prabhavna Sangh — Jain Youth Karnal"
             class="footer-logo">

        <p>
          Jain Youth Karnal<br>
          Jin Shasan Prabhavna Sangh
        </p>
      </div>

      <div>
        <p class="footer-title" data-i18n="footer.explore">Explore</p>

        <a href="yatra.html#trips" data-i18n="nav.trips">
          Monthly Trips
        </a>

        <a href="community.html#mandir-location" data-i18n="nav.mandirMap">
          Our Mandir
        </a>

        <a href="yatra.html#yatra-map" data-i18n="nav.map">
          Yatra Map
        </a>

        <a href="community.html#calendar" data-i18n="nav.calendar">
          Calendar
        </a>

        <a href="index.html#announcements" data-i18n="nav.announcements">
          Announcements
        </a>

        <a href="learn.html#pathshala" data-i18n="nav.pathshala">
          Sunday Pathshala
        </a>

        <a href="community.html#events" data-i18n="nav.events">
          Events
        </a>

        <a href="learn.html#knowledge" data-i18n="nav.knowledge">
          Knowledge
        </a>

        <a href="bhakti.html" data-i18n="nav.bhajans">
          Bhajan Library
        </a>

        <a href="playlist.html" data-i18n="nav.playlist">
          🎧 Bhakti Playlist
        </a>

        <a href="yatra.html#darshan" data-i18n="nav.darshan">
          Darshan
        </a>
      </div>

      <div>
        <p class="footer-title" data-i18n="footer.connect">
          Connect
        </p>

        <div class="footer-socials">

          <a class="footer-social"
             href="https://www.instagram.com/jainyouth.karnal/"
             target="_blank"
             rel="noopener"
             aria-label="Instagram — @jainyouth.karnal"
             title="Instagram — @jainyouth.karnal">

            <img src="assets/social/instagram.png"
                 alt="Instagram">

            <span class="social-text">
              <small>Instagram</small>
              <b>@jainyouth.karnal</b>
            </span>

          </a>

          <a class="footer-social"
             href="https://www.youtube.com/@jainyouth.karnal"
             target="_blank"
             rel="noopener"
             aria-label="YouTube — @jainyouth.karnal"
             title="YouTube — @jainyouth.karnal">

            <img src="assets/social/youtube.png"
                 alt="YouTube">

            <span class="social-text">
              <small>YouTube</small>
              <b>@jainyouth.karnal</b>
            </span>

          </a>

        </div>

        <a class="footer-email"
           href="mailto:jainyouthkarnal@gmail.com">
          jainyouthkarnal@gmail.com
        </a>
      </div>

    </div>

    <div class="container copyright">
      © <span id="year"></span> Jain Youth Karnal.
      <span data-i18n="footer.rights">
        All rights reserved.
      </span>
    </div>

  </footer>`;

  const put=(id,html)=>{
    const el=document.getElementById(id);
    if(el)el.outerHTML=html;
  };

  put('site-header',header);
  put('site-footer',footer);

})();