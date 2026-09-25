/* ═══════════════════════════════════════════
   Sultan Uyar — Portfolyo · app.js
   ═══════════════════════════════════════════ */
(function () {
  'use strict';

  /* ─────────────────────────────────────────
     PROJE VERİSİ
     Yeni proje eklemek için bu diziye bir nesne ekle.
     tags: 'backend' | 'ai' | 'web'  (birden fazla olabilir)
              'web' filtresi arayüzde "Web & Mobil" olarak görünür.
     repo / demo alanları boş bırakılırsa bağlantı gösterilmez.
     ───────────────────────────────────────── */
  var PROJECTS = [
    {
      icon: '🛡️',
      title: 'PriceGuard',
      kind: 'Fiyat takibi + KVKK uyum platformu',
      tag: 'Öne çıkan',
      featured: true,
      tags: ['backend', 'web'],
      desc: 'Pazaryeri fiyatlarını izleyip kullanıcı alarmlarına göre bildirim gönderen platform. ' +
            'Fiyat takibi işin kendisi, KVKK ise etrafındaki uyum katmanı: her alarm bir rıza kaydına bağlı.',
      points: [
        'Clean Architecture — Domain / Application / Infrastructure / API katmanları',
        'İş kuralları zengin domain modelinde; MediatR ile CQRS, FluentValidation ile doğrulama',
        'Versiyonlu açık rıza, PII şifreleme, denetim izi, saklama süresi ve veri sahibi hakları',
        '139 otomatik test (82 domain + 57 uygulama/entegrasyon)'
      ],
      stack: ['.NET 8', 'ASP.NET Core', 'EF Core 8', 'PostgreSQL 16', 'MediatR', 'Serilog', 'xUnit', 'React 19', 'TypeScript', 'Docker'],
      repo: 'https://github.com/sultanuyarr'
    },
    {
      icon: '💬',
      title: 'WhatsApp Business Agent',
      kind: 'Agentic AI · Hibrit RAG · Müşteri hizmetleri',
      tag: 'Öne çıkan',
      featured: true,
      tags: ['backend', 'ai'],
      desc: 'Türkçe konuşan, araç kullanan bir WhatsApp müşteri hizmetleri asistanı. ' +
            'LLM konuşmayı yürütüyor, n8n orkestrasyonu yapıyor, klasik ML her mesajı milisaniyeler içinde sınıflandırıyor.',
      points: [
        'Niyet / duygu / insana aktarım kararı lojistik regresyonla ~2 ms — LLM\'e sormak yerine',
        'Hibrit RAG: pgvector + tam metin arama, RRF ile birleştirme; politikalar prompt\'ta değil Markdown\'da',
        'Sipariş, kargo, randevu, iade için 10 araçlı agentic döngü',
        'Müşteri kimliği webhook\'tan gelir — model başka numaranın verisini isterse `unauthorized` döner',
        'Redis ile hız limiti ve idempotency; maliyet ve gecikme kaydı'
      ],
      stack: ['Python', 'FastAPI', 'n8n', 'PostgreSQL 17', 'pgvector', 'Redis', 'scikit-learn', 'Docker'],
      repo: 'https://github.com/sultanuyarr'
    },
    {
      icon: '⚽',
      title: 'Süper Lig Tahmin Sistemi',
      kind: 'Uçtan uca ML · Maç sonucu ve oyuncu performansı',
      tag: 'Öne çıkan',
      featured: true,
      tags: ['ai', 'backend'],
      desc: 'Veri toplama → özellik mühendisliği → model eğitimi → zaman serisi doğrulama → REST API → panel. ' +
            '1994–2026 arası 9.900 maç, 33 sezon, 63 kulüp ve 13.119 oyuncu-sezon kaydı.',
      points: [
        'Sistematik karşılaştırma basit modelin kazandığını gösterdi: Elo-lojistik (log loss 0.9733) 87 özellikli LightGBM\'i (0.9812) geçti',
        '10 sezonluk yürüyen pencere backtest\'i aynı sıralamayı bağımsız doğruladı',
        'Üç tuzak yakalandı: zaman kayması, aşırı uyum, küçük örneklemde kalibrasyon',
        'Veri doğrulaması futbolun bilinen istatistikleriyle örtüşüyor — 0-0 skoru Poisson\'un öngördüğünden %28 daha sık'
      ],
      stack: ['Python 3.13', 'pandas', 'scikit-learn', 'LightGBM', 'Optuna', 'MLflow', 'FastAPI', 'Streamlit', 'Docker'],
      repo: 'https://github.com/sultanuyarr'
    },
    {
      icon: '🧬',
      title: 'AI Body Scanner',
      kind: 'TÜBİTAK 2209-A destekli · Mobil sağlık uygulaması',
      tag: 'TÜBİTAK',
      tags: ['ai', 'backend', 'web'],
      desc: '2D fotoğraftan yapay zekâ destekli vücut kompozisyonu analizi yapan mobil sağlık uygulamasının ' +
            'backend geliştiricisiyim.',
      points: [
        'Python/FastAPI ile MediaPipe tabanlı analiz API\'si',
        'Firebase ile veri katmanının kurulması',
        'Flutter entegrasyonu; backend ve cihaz testlerinin yürütülmesi',
        'Kişiselleştirilmiş sağlık önerileri üreten değerlendirme akışı'
      ],
      stack: ['Python', 'FastAPI', 'MediaPipe', 'Firebase', 'Flutter']
    },
    {
      icon: '🧠',
      title: 'Geri Bildirimli Duygu Analizi',
      kind: 'NLP · Akademik çalışma',
      tag: 'Yayın',
      tags: ['ai'],
      desc: 'Engelli bireylerde psikolojik durumun erken tespitine yönelik doğal dil işleme çalışması. ' +
            'Sonuçlar akademik makaleye dönüştü.',
      points: [
        'Kaggle veri setlerinin TF-IDF ile vektörleştirilmesi',
        'Naive Bayes, LSTM ve SVM ile duygu sınıflandırması',
        'Makine öğrenmesi ve derin öğrenme yaklaşımlarının karşılaştırmalı değerlendirmesi'
      ],
      stack: ['Python', 'TF-IDF', 'Naive Bayes', 'LSTM', 'SVM', 'Weka'],
      demo: 'https://www.kaggle.com/sultanuyar',
      demoLabel: 'Kaggle'
    },
    {
      icon: '📊',
      title: 'Fiyat Karşılaştırma Uygulaması',
      kind: 'Java / Spring Boot · Test otomasyonu',
      tags: ['backend', 'web'],
      desc: 'Eşik uyarıları içeren bir Spring Boot fiyat karşılaştırma web uygulaması. ' +
            'Projenin ağırlık merkezi test piramidinin tamamını kurmaktı.',
      points: [
        'JaCoCo ile %80\'in üzerinde kod kapsamı',
        'Birim, entegrasyon, kullanıcı arayüzü, regresyon ve uçtan uca testler',
        'Kullanıcı tanımlı fiyat eşiklerinde uyarı üretimi'
      ],
      stack: ['Java', 'Spring Boot', 'Spring Web MVC', 'JUnit', 'JaCoCo', 'MySQL']
    },
    {
      icon: '🏆',
      title: 'Başarı Sıralaması',
      kind: 'Yetenek sıralama platformu',
      tags: ['web', 'ai'],
      desc: 'İnsanların başarılarına göre sıralandığı bir yetenek platformu. Aday CV\'sini yükler, ' +
            'başarıları 1000 puan üzerinden altı eksende ölçülür, kendi kategorisindeki rakipleri arasında sıra alır.',
      points: [
        '10 sektör, 63 kategori — her sektör kendi kuyruğunda yarışır',
        'Altı eksenli puanlama: deneyim, eğitim, sertifika, proje ölçeği, liderlik, etki',
        'Her eksenin kendi tavanı var; tek güçlü yön diğer boşlukları kapatamıyor',
        'Şirket panelinde sıra atlamak gerekçe ister ve kayda geçer',
        'pdf.js ile CV okuma; hiçbir veri sunucuya gitmiyor'
      ],
      stack: ['JavaScript', 'pdf.js', 'localStorage', 'HTML/CSS']
    },
    {
      icon: '🥗',
      title: 'Makro Defteri',
      kind: 'Kalori ve makro takip uygulaması',
      tags: ['web'],
      desc: 'Boy, kilo, yaş ve hareket düzeyine göre günlük kalori hedefini Mifflin-St Jeor formülüyle hesaplayan; ' +
            'yenilenler eklendikçe kalan protein, yağ ve karbonhidratı gösteren Türkçe uygulama.',
      points: [
        '161 Türk yemeği ve temel gıdadan oluşan gömülü veritabanı, porsiyon bazlı',
        'Öğün öğün günlük kayıt, kalan makro göstergeleri, su takibi',
        'Son 14 günün kalori geçmişi ve kilo eğilim grafiği',
        'Çevrimdışı çalışır, ana ekrana eklenebilir'
      ],
      stack: ['JavaScript', 'HTML/CSS', 'localStorage', 'GitHub Pages'],
      repo: 'https://github.com/sultanuyarr/makro-defteri',
      demo: 'https://sultanuyarr.github.io/makro-defteri/',
      demoLabel: 'Canlı demo'
    },
    {
      icon: '💗',
      title: 'Sevdiklerim',
      kind: 'Kişisel bilgi defteri · Next.js',
      tags: ['web', 'backend'],
      desc: 'Sevdiğin insanların doğum gününü, sevdiği çiçeği, ölçülerini ve aklında tutmak istediğin her şeyi ' +
            'sakladığın kişisel defter. Hem sunucusuz hem veritabanlı sürümü var.',
      points: [
        'Next.js + Prisma + SQLite ile veritabanına kaydeden sürüm',
        'Tek dosyalık, kurulum gerektirmeyen localStorage sürümü',
        'Doğum gününden yaş ve burç otomatik hesaplanır; özel günlere geri sayım',
        'JSON yedek alma ve geri yükleme; fotoğraflar 520 piksele küçültülüp gömülür'
      ],
      stack: ['Next.js', 'TypeScript', 'Prisma', 'SQLite', 'Tailwind CSS']
    },
    {
      icon: '⚡',
      title: 'EFKA',
      kind: 'E-ticaret · Atölye malzeme mağazası',
      tags: ['web'],
      desc: 'Elektrik-Elektronik Teknolojisi 1. sınıf atölye malzemelerinin satıldığı alışveriş sitesi. ' +
            'Kurulum, sunucu ve internet gerektirmiyor.',
      points: [
        'Türkçe karakter duyarsız arama — "role" yazınca "röle" de bulunur',
        'Favoriler, çoklu ürün sepeti, adet değiştirme, ürün detay tablosu',
        'WhatsApp üzerinden hazır mesajla sipariş',
        'Şifre korumalı admin paneli: ürün, stok ve fiyat yönetimi'
      ],
      stack: ['JavaScript', 'HTML/CSS', 'localStorage']
    }
  ];

  /* ─── Yardımcılar ─── */
  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  function esc(str) {
    return String(str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  var ICON_REPO = '<svg viewBox="0 0 24 24" class="fill" aria-hidden="true"><path d="M12 1.8a10.2 10.2 0 0 0-3.23 19.88c.51.1.7-.22.7-.49l-.01-1.9c-2.84.62-3.44-1.2-3.44-1.2-.47-1.18-1.14-1.5-1.14-1.5-.93-.63.07-.62.07-.62 1.03.07 1.57 1.06 1.57 1.06.91 1.57 2.4 1.12 2.99.85.09-.66.36-1.11.65-1.37-2.27-.26-4.66-1.14-4.66-5.06 0-1.12.4-2.03 1.05-2.75-.1-.26-.45-1.3.1-2.71 0 0 .86-.28 2.81 1.05a9.7 9.7 0 0 1 5.12 0c1.95-1.33 2.8-1.05 2.8-1.05.56 1.41.21 2.45.11 2.71.65.72 1.04 1.63 1.04 2.75 0 3.93-2.39 4.8-4.67 5.05.37.32.7.94.7 1.9l-.01 2.81c0 .27.18.6.71.49A10.2 10.2 0 0 0 12 1.8z"/></svg>';
  var ICON_LINK = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 10.5a4.3 4.3 0 0 0-6.1 0l-2.6 2.6a4.3 4.3 0 0 0 6.1 6.1l1.3-1.3"/><path d="M10.5 13.5a4.3 4.3 0 0 0 6.1 0l2.6-2.6a4.3 4.3 0 1 0-6.1-6.1l-1.3 1.3"/></svg>';

  /* ─── Projeleri bas ─── */
  function renderProjects() {
    var host = $('#projects');
    if (!host) return;

    host.innerHTML = PROJECTS.map(function (p) {
      var points = (p.points || []).map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('');
      var stack  = (p.stack  || []).map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('');

      var links = '';
      if (p.repo) {
        links += '<a href="' + esc(p.repo) + '" target="_blank" rel="noopener noreferrer">' +
                 ICON_REPO + 'Kaynak kod</a>';
      }
      if (p.demo) {
        links += '<a href="' + esc(p.demo) + '" target="_blank" rel="noopener noreferrer">' +
                 ICON_LINK + esc(p.demoLabel || 'Canlı demo') + '</a>';
      }

      return '' +
        '<article class="pcard reveal' + (p.featured ? ' featured' : '') + '" data-tags="' + esc((p.tags || []).join(' ')) + '">' +
          '<div class="pcard-top">' +
            '<span class="pcard-ic" aria-hidden="true">' + p.icon + '</span>' +
            '<div class="pcard-head">' +
              '<h3>' + esc(p.title) + '</h3>' +
              '<p class="pcard-kind">' + esc(p.kind) + '</p>' +
            '</div>' +
            (p.tag ? '<span class="pcard-tag">' + esc(p.tag) + '</span>' : '') +
          '</div>' +
          '<p class="pcard-desc">' + esc(p.desc) + '</p>' +
          (points ? '<ul class="pcard-points">' + points + '</ul>' : '') +
          '<div class="pcard-foot">' +
            '<ul class="chips">' + stack + '</ul>' +
            (links ? '<div class="pcard-links">' + links + '</div>' : '') +
          '</div>' +
        '</article>';
    }).join('');
  }

  /* ─── Filtre ─── */
  function initFilters() {
    var bar = $('#filters');
    if (!bar) return;

    bar.addEventListener('click', function (e) {
      var btn = e.target.closest('.filter');
      if (!btn) return;

      $$('.filter', bar).forEach(function (b) {
        var on = b === btn;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-selected', on ? 'true' : 'false');
      });

      var want = btn.dataset.filter;
      $$('.pcard').forEach(function (card) {
        var has = want === 'all' || card.dataset.tags.split(' ').indexOf(want) !== -1;
        card.classList.toggle('hidden', !has);
      });
    });
  }

  /* ─── Tema ─── */
  function initTheme() {
    var btn = $('#themeBtn');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem('su-theme', next); } catch (e) {}
    });
  }

  /* ─── Mobil menü ─── */
  function initMenu() {
    var btn = $('#menuBtn');
    var links = $('#navLinks');
    if (!btn || !links) return;

    function close() {
      links.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }

    btn.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function (e) { if (e.target.tagName === 'A') close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
    window.addEventListener('resize', function () { if (window.innerWidth > 860) close(); });
  }

  /* ─── Nav gölgesi + yukarı çık ─── */
  function initScroll() {
    var nav = $('#nav');
    var top = $('#toTop');

    function onScroll() {
      var y = window.scrollY;
      if (nav) nav.classList.toggle('scrolled', y > 12);
      if (top) top.classList.toggle('show', y > 620);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (top) {
      top.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  /* ─── Aktif bölüm takibi ─── */
  function initSpy() {
    var links = $$('.nav-links a');
    var map = {};
    var sections = [];

    links.forEach(function (a) {
      var id = a.getAttribute('href').slice(1);
      var sec = document.getElementById(id);
      if (sec) { map[id] = a; sections.push(sec); }
    });
    if (!sections.length || !('IntersectionObserver' in window)) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) { a.classList.remove('active'); });
        var a = map[en.target.id];
        if (a) a.classList.add('active');
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(function (s) { io.observe(s); });
  }

  /* ─── Görünüme girince canlanma ─── */
  function initReveal() {
    var items = $$('.section > .wrap > *, .pcard, .skill-card, .cert, .tl-item, .ccard');
    items.forEach(function (el) { el.classList.add('reveal'); });

    if (!('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('in'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en, i) {
        if (!en.isIntersecting) return;
        var el = en.target;
        setTimeout(function () { el.classList.add('in'); }, Math.min(i, 6) * 55);
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });

    items.forEach(function (el) { io.observe(el); });

    // Güvenlik ağı: gözlemci herhangi bir sebeple tetiklenmezse
    // içerik gizli kalmasın.
    setTimeout(function () {
      items.forEach(function (el) { el.classList.add('in'); });
    }, 4000);
  }

  /* ─── Sayaçlar ─── */
  function initCounters() {
    var nums = $$('.count');
    if (!nums.length) return;

    var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced || !('IntersectionObserver' in window)) {
      nums.forEach(function (n) { n.textContent = n.dataset.to; });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        io.unobserve(el);

        var to = parseInt(el.dataset.to, 10) || 0;
        var dur = 1100;
        var t0 = null;

        function step(ts) {
          if (t0 === null) t0 = ts;
          var k = Math.min((ts - t0) / dur, 1);
          var eased = 1 - Math.pow(1 - k, 3);
          el.textContent = Math.round(to * eased);
          if (k < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.4 });

    nums.forEach(function (n) { io.observe(n); });
  }

  /* ─── İletişim formu (mailto) ─── */
  function initForm() {
    var form = $('#contactForm');
    if (!form) return;
    var status = $('#formStatus');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name  = $('#cf-name').value.trim();
      var email = $('#cf-email').value.trim();
      var msg   = $('#cf-msg').value.trim();
      var ok = true;

      [['#cf-name', name], ['#cf-email', email], ['#cf-msg', msg]].forEach(function (pair) {
        var field = $(pair[0]).closest('.field');
        var bad = !pair[1];
        field.classList.toggle('invalid', bad);
        if (bad) ok = false;
      });

      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        $('#cf-email').closest('.field').classList.add('invalid');
        ok = false;
      }

      if (!ok) {
        status.textContent = 'Lütfen tüm alanları doğru şekilde doldurun.';
        status.className = 'form-status err';
        return;
      }

      var subject = 'Portfolyo üzerinden mesaj — ' + name;
      var body = name + ' (' + email + ') yazıyor:\n\n' + msg;
      window.location.href = 'mailto:sultanuyar04@gmail.com' +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);

      status.textContent = 'E-posta uygulamanız açılıyor…';
      status.className = 'form-status ok';
    });

    form.addEventListener('input', function (e) {
      var field = e.target.closest('.field');
      if (field) field.classList.remove('invalid');
    });
  }

  /* ─── Başlat ─── */
  function init() {
    var y = $('#year');
    if (y) y.textContent = new Date().getFullYear();

    renderProjects();
    initFilters();
    initTheme();
    initMenu();
    initScroll();
    initSpy();
    initCounters();
    initForm();
    initReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
