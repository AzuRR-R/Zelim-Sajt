# 🚀 Uputstvo za Stavljanje Sajta Online

## Opcija 1: GitHub Pages (Preporučeno - Besplatno)

### Korak 1: Kreiranje GitHub Repozitorijuma

1. **Idite na GitHub**
   - Otvorite https://github.com
   - Prijavite se na vaš nalog

2. **Kreirajte novi repozitorijum**
   - Kliknite na "+" u gornjem desnom uglu
   - Izaberite "New repository"
   - Ime repozitorijuma: `zelim-sajt` (ili bilo koje ime)
   - Opis: "Profesionalna izrada i održavanje web sajtova"
   - Izaberite **Public**
   - **NE** čekirajte "Add a README file"
   - Kliknite "Create repository"

3. **Povežite lokalni projekat sa GitHub-om**
   
   Otvorite Command Prompt u folderu projekta i izvršite:
   
   ```bash
   git remote remove origin
   git remote add origin https://github.com/VASE-KORISNICKO-IME/zelim-sajt.git
   git branch -M main
   git push -u origin main
   ```
   
   **Zamijenite** `VASE-KORISNICKO-IME` sa vašim GitHub korisničkim imenom!

### Korak 2: Aktiviranje GitHub Pages

1. **Idite u Settings repozitorijuma**
   - Na GitHub-u, otvorite vaš repozitorijum
   - Kliknite na "Settings" tab

2. **Aktivirajte GitHub Pages**
   - U lijevom meniju, kliknite na "Pages"
   - Pod "Source", izaberite:
     - Branch: `main`
     - Folder: `/ (root)`
   - Kliknite "Save"

3. **Sačekajte deployment**
   - GitHub će automatski deploy-ovati sajt
   - Nakon 1-2 minuta, vidjet ćete link:
   - `https://VASE-KORISNICKO-IME.github.io/zelim-sajt/`

### Korak 3: Testiranje

1. Otvorite link u browseru
2. Provjerite da li sve radi kako treba
3. Testirajte na mobilnom uređaju

---

## Opcija 2: Netlify (Najjednostavnije - Besplatno)

### Metoda A: Drag & Drop (Bez Git-a)

1. **Idite na Netlify**
   - Otvorite https://www.netlify.com
   - Kliknite "Sign up" (možete se prijaviti sa GitHub nalogom)

2. **Deploy sajta**
   - Kliknite "Add new site" > "Deploy manually"
   - Prevucite cijeli folder projekta u prozor
   - Netlify će automatski deploy-ovati sajt

3. **Dobijte link**
   - Sajt će biti dostupan na: `https://random-name-123.netlify.app`
   - Možete promijeniti ime u Site settings

### Metoda B: Povezivanje sa Git-om

1. **Push kod na GitHub** (kao u Opciji 1, Korak 1)

2. **Povežite Netlify sa GitHub-om**
   - Na Netlify, kliknite "Add new site" > "Import an existing project"
   - Izaberite "GitHub"
   - Autorizujte Netlify
   - Izaberite vaš repozitorijum

3. **Deploy settings**
   - Build command: ostavite prazno
   - Publish directory: ostavite prazno ili stavite `/`
   - Kliknite "Deploy site"

4. **Automatski deployment**
   - Svaki put kada push-ujete promjene na GitHub, Netlify će automatski ažurirati sajt

---

## Opcija 3: Vercel (Brzo - Besplatno)

1. **Idite na Vercel**
   - Otvorite https://vercel.com
   - Prijavite se sa GitHub nalogom

2. **Import projekta**
   - Kliknite "Add New" > "Project"
   - Izaberite vaš GitHub repozitorijum
   - Kliknite "Import"

3. **Deploy**
   - Ostavite sve default settings
   - Kliknite "Deploy"
   - Sajt će biti dostupan na: `https://zelim-sajt.vercel.app`

---

## Custom Domen (Opciono)

### Kupovina Domena

Možete kupiti domen na:
- **Namecheap** (https://www.namecheap.com) - $8-12/godišnje
- **GoDaddy** (https://www.godaddy.com)
- **Google Domains** (https://domains.google)

Preporučeni domeni:
- `zelimsajt.com`
- `zelimsajt.ba`
- `zelimsajt.net`

### Povezivanje Domena sa GitHub Pages

1. **U GitHub repozitorijumu**
   - Settings > Pages
   - Pod "Custom domain", unesite vaš domen
   - Kliknite "Save"

2. **Kod registrara domena**
   - Dodajte CNAME record:
     - Name: `www`
     - Value: `VASE-KORISNICKO-IME.github.io`
   - Dodajte A records:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

### Povezivanje Domena sa Netlify

1. **U Netlify**
   - Site settings > Domain management
   - Kliknite "Add custom domain"
   - Unesite vaš domen

2. **Kod registrara domena**
   - Dodajte Netlify nameservers ili
   - Dodajte CNAME record koji Netlify prikaže

---

## Post-Deployment Checklist

### 1. Konfiguracija EmailJS

Sada kada je sajt online, konfigurirajte EmailJS:

1. Idite na https://www.emailjs.com i napravite nalog
2. Pratite uputstva u `EMAILJS-SETUP.md`
3. Ažurirajte `js/emailjs-config.js` sa pravim ključevima
4. Commit i push promjene:
   ```bash
   git add js/emailjs-config.js
   git commit -m "Konfiguracija EmailJS"
   git push
   ```

### 2. Google Analytics (Opciono)

1. Idite na https://analytics.google.com
2. Kreirajte property za vaš sajt
3. Dobijte tracking ID
4. Dodajte u `<head>` sekciju `index.html`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### 3. SEO Optimizacija

Sajt već ima osnovnu SEO optimizaciju, ali možete dodati:

1. **Google Search Console**
   - Verifikujte sajt na https://search.google.com/search-console
   - Submit sitemap

2. **Sitemap.xml**
   - Kreirajte `sitemap.xml` fajl u root folderu

3. **robots.txt**
   - Kreirajte `robots.txt` fajl u root folderu

### 4. Testiranje

Testirajte sajt na:
- ✅ Desktop browseru (Chrome, Firefox, Edge)
- ✅ Mobilnom uređaju
- ✅ Tablet uređaju
- ✅ Različitim rezolucijama

Provjerite:
- ✅ Sve slike se učitavaju
- ✅ Navigacija radi
- ✅ Kontakt forma radi (nakon EmailJS konfiguracije)
- ✅ Linkovi rade
- ✅ Responsive dizajn

---

## Ažuriranje Sajta

Kada želite da napravite promjene:

1. **Napravite promjene lokalno**
2. **Testirajte lokalno** (otvorite `index.html` u browseru)
3. **Commit promjene**:
   ```bash
   git add .
   git commit -m "Opis promjena"
   git push
   ```
4. **Sačekajte automatski deployment** (1-2 minuta)

---

## Pomoć i Podrška

Ako imate problema:

1. **GitHub Pages dokumentacija**: https://docs.github.com/en/pages
2. **Netlify dokumentacija**: https://docs.netlify.com
3. **Vercel dokumentacija**: https://vercel.com/docs

---

## Preporuka

Za vaš projekat, preporučujem **Netlify** jer:
- ✅ Najjednostavniji za setup
- ✅ Drag & drop opcija (ne morate koristiti Git)
- ✅ Automatski HTTPS
- ✅ Brz deployment
- ✅ Besplatan custom domen
- ✅ Odlična podrška

---

Sretno sa deployment-om! 🚀
