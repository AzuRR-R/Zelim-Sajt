# EmailJS Podešavanje - Uputstvo

Kontakt forma na sajtu koristi EmailJS servis za direktno slanje emailova na vašu adresu bez potrebe za backend serverom.

## Koraci za podešavanje:

### 1. Kreirajte EmailJS nalog
1. Idite na https://www.emailjs.com/
2. Kliknite na "Sign Up" i kreirajte besplatan nalog
3. Verifikujte vaš email

### 2. Dodajte Email Servis
1. Nakon prijave, idite na "Email Services"
2. Kliknite "Add New Service"
3. Izaberite vaš email provider (Gmail, Outlook, itd.)
4. Pratite uputstva za povezivanje vašeg email naloga
5. Sačuvajte **Service ID** (npr. "service_abc123")

### 3. Kreirajte Email Template
1. Idite na "Email Templates"
2. Kliknite "Create New Template"
3. Kopirajte sledeći template:

```
Subject: Novi upit sa sajta - {{service}}

Od: {{from_name}}
Email: {{from_email}}
Telefon: {{phone}}
Usluga: {{service}}

Poruka:
{{message}}

---
Ova poruka je poslata sa kontakt forme na sajtu.
```

4. Sačuvajte **Template ID** (npr. "template_xyz789")

### 4. Dobijte Public Key
1. Idite na "Account" > "General"
2. Pronađite **Public Key** (npr. "abcdefghij123456")

### 5. Ažurirajte Konfiguraciju
Otvorite fajl `js/emailjs-config.js` i zamenite placeholder vrednosti sa vašim ključevima:

```javascript
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'VAŠ_PUBLIC_KEY',      // Zamenite sa vašim Public Key
    SERVICE_ID: 'VAŠ_SERVICE_ID',      // Zamenite sa vašim Service ID
    TEMPLATE_ID: 'VAŠ_TEMPLATE_ID'     // Zamenite sa vašim Template ID
};
```

### Primer:
```javascript
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'abcdefghij123456',
    SERVICE_ID: 'service_abc123',
    TEMPLATE_ID: 'template_xyz789'
};
```

## Testiranje

1. Otvorite sajt u browseru
2. Popunite kontakt formu
3. Kliknite "Pošalji Poruku"
4. Trebalo bi da vidite poruku "Poruka je uspešno poslata!"
5. Proverite vaš email inbox - trebalo bi da stigne email

## Fallback Opcija

Ako EmailJS nije konfigurisan (placeholder vrednosti nisu zamenjene), forma će automatski koristiti `mailto:` link koji otvara email klijent korisnika. Ovo je manje elegantno rešenje, ali i dalje funkcionalno.

## Besplatni Plan Limiti

EmailJS besplatni plan dozvoljava:
- 200 emailova mesečno
- 2 email servisa
- Neograničen broj template-a

Za više informacija, posetite: https://www.emailjs.com/pricing/

## Podrška

Ako imate problema sa podešavanjem, kontaktirajte EmailJS podršku ili proverite njihovu dokumentaciju:
https://www.emailjs.com/docs/
