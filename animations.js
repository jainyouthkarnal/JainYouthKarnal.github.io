/* Ambient animations live separately so page content/CSS updates do not accidentally remove them. */
(function(){
  'use strict';
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const hero=document.querySelector('.hero');
  if(!hero || hero.querySelector('.jyk-petal-layer')) return;
  const layer=document.createElement('div');
  layer.className='jyk-petal-layer'; layer.setAttribute('aria-hidden','true');
  // A small, restrained set of petals; generated once per page load.
  for(let i=0;i<13;i++){
    const petal=document.createElement('span'); petal.className='jyk-floating-petal';
    petal.style.setProperty('--jyk-left',(4+((i*37)%92))+'%');
    petal.style.setProperty('--jyk-duration',(13+(i%6)*2.1)+'s');
    petal.style.setProperty('--jyk-delay',(-1*(i%13)*1.7)+'s');
    petal.style.setProperty('--jyk-sway',(((i%2)?1:-1)*(18+(i%5)*13))+'px');
    layer.appendChild(petal);
  }
  hero.prepend(layer);
})();
