// ===== EMAILJS KONFIGURACIJA =====
// VAŽNO: Zamenite ove vrednosti sa vašim EmailJS ključevima
// Dobijte ih na: https://www.emailjs.com/

const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'YOUR_PUBLIC_KEY_HERE',  // Zamenite sa vašim Public Key
    SERVICE_ID: 'YOUR_SERVICE_ID_HERE',  // Zamenite sa vašim Service ID
    TEMPLATE_ID: 'YOUR_TEMPLATE_ID_HERE' // Zamenite sa vašim Template ID
};

// Inicijalizacija EmailJS
(function() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
        console.log('EmailJS inicijalizovan');
    }
})();
