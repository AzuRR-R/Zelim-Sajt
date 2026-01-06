# 🚀 Vaš Sajt je Spreman za Online!

## ✅ Šta je Urađeno

1. ✅ Portfolio slika premještena u `images/` folder
2. ✅ Putanje u `index.html` ažurirane
3. ✅ `.gitignore` fajl kreiran
4. ✅ `robots.txt` za SEO
5. ✅ `sitemap.xml` za Google
6. ✅ Deployment uputstva kreirana
7. ✅ Git commit-ovi spremni

## 🎯 Sljedeći Koraci

### Opcija 1: NAJBRŽE - Netlify Drop (2 minuta)

1. **Otvorite**: https://app.netlify.com/drop
2. **Selektujte sve fajlove** u ovom folderu
3. **Prevucite** ih u Netlify prozor
4. **Gotovo!** Dobićete link tipa: `https://random-name-123.netlify.app`

📖 **Detaljno uputstvo**: Otvorite `BRZI-DEPLOYMENT.md`

---

### Opcija 2: GitHub Pages (10 minuta)

1. **Kreirajte GitHub repozitorijum**:
   - Idite na https://github.com/new
   - Ime: `zelim-sajt`
   - Public
   - Create repository

2. **Povežite i push-ujte**:
   ```bash
   git remote remove origin
   git remote add origin https://github.com/VASE-IME/zelim-sajt.git
   git branch -M main
   git push -u origin main
   ```

3. **Aktivirajte GitHub Pages**:
   - Settings > Pages
   - Source: main branch
   - Save

4. **Link**: `https://VASE-IME.github.io/zelim-sajt/`

📖 **Detaljno uputstvo**: Otvorite `DEPLOYMENT-UPUTSTVO.md`

---

### Opcija 3: Netlify sa Git-om (Automatski deployment)

1. **Push na GitHub** (kao Opcija 2, koraci 1-2)
2. **Povežite Netlify**:
   - https://app.netlify.com
   - New site from Git
   - Izaberite GitHub
   - Izaberite repozitorijum
   - Deploy

3. **Automatski deployment**: Svaki git push automatski ažurira sajt!

---

## 📋 Post-Deployment Checklist

Nakon što je sajt online:

### 1. Testirajte Sajt ✅
- [ ] Otvorite link u browseru
- [ ] Provjerite sve sekcije
- [ ] Testirajte na mobilnom
- [ ] Provjerite da slike rade

### 2. Konfigurirajte EmailJS 📧
- [ ] Napravite nalog na https://www.emailjs.com
- [ ] Pratite `EMAILJS-SETUP.md`
- [ ] Ažurirajte `js/emailjs-config.js`
- [ ] Re-deploy sajt
- [ ] Testirajte kontakt formu

### 3. SEO Optimizacija 🔍
- [ ] Ažurirajte `robots.txt` sa pravim domenom
- [ ] Ažurirajte `sitemap.xml` sa pravim domenom
- [ ] Registrujte sajt na Google Search Console
- [ ] Submit sitemap

### 4. Analytics (Opciono) 📊
- [ ] Dodajte Google Analytics
- [ ] Pratite posjete

### 5. Custom Domen (Opciono) 🌐
- [ ] Kupite domen (npr. zelimsajt.com)
- [ ] Povežite sa hosting platformom
- [ ] Sačekajte DNS propagaciju (24-48h)

---

## 📁 Struktura Projekta

```
TVOJ SAJT/
├── index.html                    # Glavna stranica
├── css/
│   └── style.css                # Svi stilovi
├── js/
│   ├── script.js                # Glavna logika
│   └── emailjs-config.js        # EmailJS konfiguracija
├── images/
│   ├── logo.svg                 # Logo
│   ├── favicon.svg              # Favicon
│   └── Portofolio Slika.png     # Portfolio slika
├── robots.txt                    # SEO - robots
├── sitemap.xml                   # SEO - sitemap
├── .gitignore                    # Git ignore fajl
├── README.md                     # Glavni README
├── DEPLOYMENT-UPUTSTVO.md        # Detaljno deployment uputstvo
├── BRZI-DEPLOYMENT.md            # Brzi deployment vodič
├── EMAILJS-SETUP.md              # EmailJS uputstvo
└── TODO.md                       # Lista zadataka
```

---

## 🔄 Kako Ažurirati Sajt

### Ako koristite Netlify Drop:
1. Napravite promjene lokalno
2. Testirajte (otvorite `index.html`)
3. Prevucite fajlove ponovo na Netlify

### Ako koristite Git:
```bash
# 1. Napravite promjene
# 2. Testirajte lokalno
# 3. Commit i push:
git add .
git commit -m "Opis promjena"
git push
```

---

## 💡 Savjeti

1. **Backup**: Git automatski čuva sve verzije
2. **Testiranje**: Uvijek testirajte lokalno prije deployment-a
3. **EmailJS**: Konfigurirajte što prije za funkcionalnu kontakt formu
4. **Mobile**: Testirajte na različitim uređajima
5. **SEO**: Ažurirajte meta tagove po potrebi

---

## 🆘 Pomoć

Ako imate problema, pogledajte:

1. **BRZI-DEPLOYMENT.md** - Najbrži način
2. **DEPLOYMENT-UPUTSTVO.md** - Detaljno uputstvo
3. **EMAILJS-SETUP.md** - Konfiguracija kontakt forme

Ili kontaktirajte:
- Email: azurfaic006@gmail.com
- Telefon: +387 60 300 5224

---

## 🎉 Čestitamo!

Vaš profesionalni sajt je spreman za lansiranje! 🚀

**Sljedeći korak**: Otvorite `BRZI-DEPLOYMENT.md` i pratite korake!

---

Made with ❤️ using modern web technologies
