# Sude Demirbaş Diyetisyen Web Sitesi — Tasarım Dokümanı

Tarih: 2026-07-29

## Amaç

Diyetisyen Sude Demirbaş için görsel olarak lüks/şatafatlı, profesyonel çok sayfalı bir tanıtım web sitesi. Saf HTML/CSS/JS ile geliştirilecek, framework kullanılmayacak.

## Kapsam Dışı

- Gerçek form gönderimi / backend entegrasyonu (ileride Formspree/Web3Forms gibi bir servisle eklenebilir)
- Gerçek fotoğraflar (şık placeholder görseller kullanılacak)
- Randevu/ödeme sistemi entegrasyonu
- CMS / blog yazı yönetim sistemi (blog sayfası statik placeholder içerikle gelecek)

## Teknik Yaklaşım

- 5 ayrı HTML sayfası, ortak `css/style.css` ve `js/script.js`
- Framework yok (vanilla HTML/CSS/JS)
- Google Fonts: Playfair Display (başlıklar), Poppins veya Inter (gövde metni)
- Intersection Observer ile scroll animasyonları
- Mobil uyumlu (responsive), hamburger menü

## Görsel Kimlik

**Renk paleti — Zarif Yeşil & Altın:**
- Ana koyu yeşil (zümrüt): `#1B4332`
- İkincil yeşil: `#2D6A4F`
- Altın/bronz vurgu: `#C9A24B`
- Krem/fildişi arka plan: `#FAF6EE`
- Koyu metin: `#2B2B26`

**Tipografi:**
- Başlıklar: Playfair Display (serif, editoryal)
- Gövde: Poppins / Inter (sans-serif, temiz)

**Genel his:** Bol negatif alan, ince altın çizgi ayraçlar, yumuşak köşeli kartlar, hafif gölgeler — butik wellness kliniği havası.

## Bilinen Gerçek Bilgiler

- İsim: Sude Demirbaş
- Telefon: 0535 290 94 43
- Şehir: İstanbul
- (Diğer içerikler — biyografi, hizmet detayları, sosyal medya — placeholder olarak eklenecek, kullanıcı sonradan güncelleyecek)

## Site Yapısı & Navigasyon

**Ortak Header:** Logo ("Sude Demirbaş" + "Diyetisyen" alt etiketi), menü: Anasayfa · Hakkımda · Hizmetler · Blog · İletişim, sağda altın renkli "Randevu Al" butonu (iletişim sayfasına yönlendirir). Sticky header, scroll'da küçülüp gölge alır. Mobilde hamburger menü.

**Ortak Footer:** Logo tekrarı, kısa slogan, iletişim bilgileri (telefon, İstanbul), sosyal medya ikonları (placeholder linkler), telif hakkı satırı.

## Sayfa İçerikleri

### index.html (Anasayfa)
- Hero: büyük başlık, slogan, CTA butonu, placeholder portre görseli
- "Neden Ben?" kısa tanıtım bölümü
- Öne çıkan 3 hizmet kartı
- Danışan yorumları (2-3 alıntı)
- Sayaç animasyonlu istatistikler (yıl deneyim, mutlu danışan sayısı vb.)
- Alt CTA bandı

### hakkimda.html
- Portre + biyografi metni (placeholder: eğitim, deneyim)
- Eğitim/sertifika zaman çizelgesi
- Uzmanlık alanları rozetleri
- Kişisel yaklaşım/felsefe paragrafı

### hizmetler.html
- 5-6 hizmet kartı: Kilo Yönetimi, Sporcu Beslenmesi, Çocuk Beslenmesi, Klinik Beslenme, Online Danışmanlık, Grup Programları
- Her kart: ikon + açıklama + "Detaylı Bilgi" linki

### blog.html
- 4-6 placeholder blog kartı (görsel + başlık + kısa özet + tarih)
- Basit kategori filtre görünümü

### iletisim.html
- Sol: iletişim bilgileri (telefon, İstanbul) + harita placeholder
- Sağ: form (Ad, E-posta, Telefon, Mesaj) — statik arayüz, JS ile basit validasyon ve "Mesajınız alındı" görsel onayı (gerçek gönderim yok)

## Etkileşim & Animasyonlar (JS)

- Scroll'da fade-up animasyonları (Intersection Observer)
- Sticky/küçülen header
- Mobil hamburger menü aç/kapa
- Kart hover: hafif yükselme + altın çerçeve
- Buton hover: dolgu geçiş animasyonu
- Anasayfada sayaç animasyonu
- Form validasyonu (istemci taraflı, gönderim simülasyonu)
- Sayfa içi bağlantılarda smooth scroll

## Dosya Yapısı

```
sudebasitdenemeweb/
├── index.html
├── hakkimda.html
├── hizmetler.html
├── blog.html
├── iletisim.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    └── (placeholder SVG/ikon görselleri)
```
