(() => {
  'use strict';
  const total = 30;
  const titles = [
    'Sampul','Identitas Bahan Ajar','Daftar Isi','Kata Pengantar','Petunjuk Penggunaan',
    'CP dan TP','Mengenal Dongeng','Unsur-Unsur Dongeng','Hubungan Perbuatan dan Akibat','Permasalahan Menyimak Murid',
    'Strategi Scaffolding','Strategi Scaffolding','Strategi Scaffolding','Strategi Scaffolding','Strategi Scaffolding',
    'Strategi Scaffolding','Tahapan Penerapan Scaffolding','Kegiatan Menyimak Dongeng','Benar','Salah',
    'Kegiatan Menyimak Dongeng: Legenda Gunung Tampomas','Permainan Interaktif: Bagan Sebab-Akibat 1','Permainan Interaktif: Bagan Sebab-Akibat 2','Permainan Interaktif: Bagan Sebab-Akibat 3','LKPD Sebab-Akibat',
    'Refleksi dan Pembelajaran','Rangkuman','Glosarium','Daftar Pustaka','Profil Penyusun'
  ];
  let current = 1;
  const image = document.getElementById('pageImage');
  const title = document.getElementById('pageTitle');
  const indicator = document.getElementById('pageIndicator');
  const count = document.getElementById('contentsCount');
  const progress = document.getElementById('progressBar');
  const list = document.getElementById('pageList');
  const input = document.getElementById('pageInput');
  const contents = document.getElementById('contents');
  const pad = n => String(n).padStart(2, '0');

  function buildList() {
    const fragment = document.createDocumentFragment();
    for (let n = 1; n <= total; n++) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'page-item';
      button.dataset.page = n;
      button.innerHTML = `<img class="thumb" src="assets/pages/page-${pad(n)}.jpg" alt="" loading="lazy"><span class="page-meta"><strong>${pad(n)} · ${titles[n-1]}</strong><small>Halaman ${n}</small></span>`;
      button.addEventListener('click', () => { showPage(n); if (window.innerWidth <= 760) contents.classList.remove('open'); });
      fragment.appendChild(button);
    }
    list.appendChild(fragment);
  }

  function showPage(n) {
    current = Math.min(total, Math.max(1, Number(n) || 1));
    image.src = `assets/pages/page-${pad(current)}.jpg`;
    image.alt = `Halaman ${current}: ${titles[current-1]}`;
    title.textContent = titles[current-1];
    indicator.innerHTML = `${pad(current)} <span>/</span> ${total}`;
    count.textContent = `${pad(current)} / ${total}`;
    progress.style.width = `${current / total * 100}%`;
    input.value = current;
    document.querySelectorAll('.page-item').forEach(el => {
      const active = Number(el.dataset.page) === current;
      el.classList.toggle('active', active);
      if (active) el.setAttribute('aria-current', 'page'); else el.removeAttribute('aria-current');
    });
    document.getElementById('prevPage').disabled = current === 1;
    document.getElementById('prevBottom').disabled = current === 1;
    document.getElementById('nextPage').disabled = current === total;
    document.getElementById('nextBottom').disabled = current === total;
    const active = list.querySelector('.page-item.active');
    if (active && window.innerWidth > 760) active.scrollIntoView({block:'nearest'});
  }
  const prev = () => showPage(current - 1);
  const next = () => showPage(current + 1);
  document.getElementById('prevPage').addEventListener('click', prev);
  document.getElementById('prevBottom').addEventListener('click', prev);
  document.getElementById('nextPage').addEventListener('click', next);
  document.getElementById('nextBottom').addEventListener('click', next);
  document.getElementById('goPage').addEventListener('click', () => showPage(input.value));
  input.addEventListener('keydown', e => { if (e.key === 'Enter') showPage(input.value); });
  document.getElementById('toggleContents').addEventListener('click', e => {
    const open = contents.classList.toggle('open');
    e.currentTarget.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('keydown', e => {
    if (e.target.matches('input')) return;
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  });
  buildList();
  showPage(1);
})();
