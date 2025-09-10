(async function(){
  try {
    const res = await fetch('/data/assets/js/config.json', {cache:'no-store'});
    const cfg = await res.json();
    const map = (cfg && cfg.playlists) ? cfg.playlists : {};
    const chapter = document.documentElement.dataset.chapter;
    const url = map[chapter];
    // Fill any blocks marked for podcast
    document.querySelectorAll('[data-podcast-block]').forEach(block => {
      if(!url) return;
      const iframe = document.createElement('iframe');
      iframe.style.borderRadius = '12px';
      iframe.width='100%'; iframe.height='200'; iframe.frameBorder='0'; iframe.loading='lazy';
      iframe.allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
      let embedSrc = url.replace('open.spotify.com/', 'open.spotify.com/embed/');
      iframe.src = embedSrc + (embedSrc.includes('?') ? '&' : '?') + 'utm_source=generator';
      iframe.className = 'podcast-player';
      block.appendChild(iframe);
      const btn = document.createElement('a');
      btn.className='btn mt-3'; btn.textContent='🎧 Meer afleveringen van hoofdstuk 11?';
      btn.href=url; btn.target='_blank'; btn.rel='noopener';
      const wrap=document.createElement('div'); wrap.className='mt-3'; wrap.appendChild(btn);
      block.appendChild(wrap);
    });
  } catch(e){ console.warn('Podcast init failed', e); }
})();