# Sultan Uyar — Portfolyo

Kişisel portfolyo web sitesi. Derleme adımı, bağımlılık ve sunucu gerektirmez —
üç dosyadan ibaret statik bir site.

## Çalıştırma

En basiti: `index.html` dosyasına çift tıkla.

Yerel sunucuyla açmak istersen (yazı tipleri ve CV indirme daha doğru davranır):

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Dosyalar

| Dosya | Ne işe yarar |
|---|---|
| `index.html` | Sayfa yapısı — tüm bölümlerin metni burada |
| `styles.css` | Tema, düzen ve duyarlı tasarım |
| `app.js` | Proje verisi, filtreleme, tema değişimi, form |
| `assets/sultan-uyar.png` | Profil fotoğrafı |
| `assets/Sultan-Uyar-CV.pdf` | "CV indir" butonunun verdiği dosya |

## İçerik nasıl güncellenir

**Proje eklemek / düzenlemek** — `app.js` içindeki `PROJECTS` dizisine bir nesne ekle:

```js
{
  icon: '🚀',
  title: 'Proje adı',
  kind: 'Kısa alt başlık',
  tag: 'Öne çıkan',        // isteğe bağlı rozet
  featured: true,          // isteğe bağlı — kenarlığı vurgular
  tags: ['backend', 'ai'], // filtre: 'backend' | 'ai' | 'web'
  desc: 'Bir iki cümlelik özet.',
  points: ['Madde 1', 'Madde 2'],
  stack: ['Python', 'FastAPI'],
  repo: 'https://github.com/...',      // yoksa bağlantı çıkmaz
  demo: 'https://...',                 // yoksa bağlantı çıkmaz
  demoLabel: 'Canlı demo'
}
```

Kart sırası dizideki sıradır. Yeni bir filtre kategorisi istersen `index.html`
içindeki `.filters` bloğuna bir buton ekleyip `data-filter` değerini
projelerin `tags` alanıyla eşleştir.

**Deneyim, eğitim, sertifikalar, beceriler** — doğrudan `index.html` içinde,
ilgili `<section>` bloklarında düzenlenir.

**CV'yi yenilemek** — yeni PDF'i `assets/Sultan-Uyar-CV.pdf` üzerine yaz.

## Tema

Koyu tema varsayılan; sağ üstteki düğme ile açık temaya geçilir ve tercih
tarayıcıda (`localStorage`) saklanır. İlk ziyarette işletim sisteminin tercihi
dikkate alınır.

Renkleri değiştirmek için `styles.css` başındaki `:root` değişkenleri yeterli —
`--accent` ana vurgu rengidir, açık tema karşılığı `:root[data-theme='light']`
bloğunda durur.

## İletişim formu

Form sunucuya istek atmaz; doğrulamadan sonra ziyaretçinin e-posta uygulamasını
hazır bir `mailto:` mesajıyla açar. Gerçek bir form servisi istersen
(Formspree, Web3Forms vb.) `app.js` içindeki `initForm` fonksiyonundaki
`window.location.href = 'mailto:...'` satırını bir `fetch` çağrısıyla değiştirmek yeterli.

## Yayına alma

Statik olduğu için her yerde çalışır:

- **GitHub Pages** — depoya it, Settings → Pages → branch `main` / kök klasör
- **Netlify / Vercel** — klasörü sürükle bırak; derleme komutu yok, yayın klasörü kök
- **cPanel / paylaşımlı hosting** — dosyaları `public_html` içine kopyala

`sultanuyar.com.tr` alan adına alırken `index.html`, `styles.css`, `app.js` ve
`assets/` klasörünün aynı dizinde kalmasına dikkat et.

## Notlar

- Yazı tipleri Google Fonts'tan çekilir; internet yoksa sistem yazı tipine düşer.
- Sayfa klavyeyle gezilebilir, `prefers-reduced-motion` tercihine uyar ve
  yazdırma için sadeleşmiş bir düzeni vardır.
