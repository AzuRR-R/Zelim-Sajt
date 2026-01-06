# ⚡ Brzi Deployment - Korak po Korak

## 🎯 Najbrža Opcija: Netlify Drop

### 1. Pripremite Fajlove (GOTOVO ✅)
Svi fajlovi su već spremni za deployment!

### 2. Idite na Netlify
1. Otvorite: https://app.netlify.com/drop
2. **NE MORATE** se registrovati za testiranje!

### 3. Drag & Drop
1. Otvorite folder projekta u File Explorer-u
2. Selektujte SVE fajlove i foldere:
   - index.html
   - css/
   - js/
   - images/
   - robots.txt
   - sitemap.xml
   - README.md
   - itd.
3. Prevucite ih u Netlify prozor
4. Sačekajte 10-30 sekundi

### 4. Gotovo! 🎉
- Dobićete link tipa: `https://random-name-123.netlify.app`
- Sajt je ODMAH ONLINE!

---

## 📱 Testiranje

Otvorite link i provjerite:
- ✅ Početna stranica
- ✅ Navigacija
- ✅ Sve sekcije (Usluge, Ponude, Portfolio, Kontakt)
- ✅ Slike se učitavaju
- ✅ Responsive dizajn (smanjite prozor)

---

## 🔧 Konfiguracija EmailJS (Nakon Deployment-a)

1. **Napravite EmailJS nalog**
   - https://www.emailjs.com
   - Sign up besplatno

2. **Dobijte ključeve**
   - Pratite `EMAILJS-SETUP.md`
   - Dobićete 3 ključa

3. **Ažurirajte lokalni fajl**
   - Otvorite `js/emailjs-config.js`
   - Zamijenite placeholder vrednosti

4. **Re-deploy**
   - Ponovo prevucite fajlove na Netlify
   - Ili registrujte se i povežite sa Git-om za automatski deployment

---

## 🌐 Custom Domen (Opciono)

Ako želite svoj domen (npr. `zelimsajt.com`):

1. **Registrujte se na Netlify** (besplatno)
2. **Claim sajt** (kliknite na link koji ste dobili)
3. **Dodajte custom domen**:
   - Site settings > Domain management
   - Add custom domain
4. **Kupite domen** na:
   - Namecheap.com (~$10/godišnje)
   - GoDaddy.com
5. **Povežite domen** (Netlify će vam dati uputstva)

---

## 🔄 Ažuriranje Sajta

### Ako koristite Netlify Drop (bez Git-a):
1. Napravite promjene lokalno
2. Testirajte (otvorite index.html)
3. Prevucite fajlove ponovo na Netlify
4. Gotovo!

### Ako koristite Git + Netlify:
1. Napravite promjene lokalno
2. Testirajte
3. U Command Prompt-u:
   ```bash
   git add .
   git commit -m "Opis promjena"
   git push
   ```
4. Netlify automatski deploy-uje (30 sekundi)

---

## 💡 Savjeti

1. **Testirajte lokalno prvo**
   - Otvorite `index.html` u browseru
   - Provjerite da sve radi

2. **Mobilni test**
   - Otvorite sajt na telefonu
   - Provjerite responsive dizajn

3. **EmailJS**
   - Konfigurirajte što prije
   - Testirajte kontakt formu

4. **Backup**
   - Čuvajte kopiju projekta
   - Git automatski čuva historiju

---

## 🆘 Problemi?

### Slike se ne učitavaju
- Provjerite da li je folder `images/` uključen
- Provjerite putanje u `index.html`

### Kontakt forma ne radi
- EmailJS još nije konfigurisan
- Pratite `EMAILJS-SETUP.md`

### Sajt izgleda čudno
- Očistite browser cache (Ctrl + F5)
- Provjerite da li su CSS i JS fajlovi uključeni

---

## ⏱️ Vremenska Procjena

- **Netlify Drop**: 2 minuta
- **GitHub Pages**: 10 minuta
- **Custom domen**: 15 minuta (+ čekanje DNS propagacije)
- **EmailJS setup**: 10 minuta

---

## 🎊 Čestitamo!

Vaš sajt je sada ONLINE i dostupan svima na internetu! 🌍

Podijelite link sa prijateljima i klijentima! 🚀
