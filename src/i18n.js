import { createI18n } from 'vue-i18n';

// Archivos de traducción
const messages = {
  en: {
    about_me: "About me",
    contact: "Contact",
    nameis: "My name is",
    title: "Welcome to my Portfolio",
    description: "I am a Fullstack Developer",
    about: "Experienced front-end and back-end developer proficient                         in deployment technologies like PM2, Nginx, and Linux.                         Knowledgeable in Docker, Kubernetes, and CI/CD using GitHub Actions and Python. Strong problem-solving abilities and proven IT team leadership. Effective team player.",
    contactTitle: "Contact",
    cv_download:"Download my resume",
    mail_text:"Send me a message and I will reply shortly",
    mail_secondary: "Write me and we can arrange a meeting",
    education: "Education"
  },
  es: {
    about_me: "Sobre mi",
    contact: "Contacto",
    nameis: "Mi nombre es",
    about: "Desarrollador con experiencia en front-end y back-end, hábil en implementaciones eficientes con PM2, Nginx y Linux. Con conocimientos en Docker, Kubernetes y CI/CD mediante GitHub Actions y Python. Fuerte en resolución de problemas, liderazgo de equipos de IT y colaboración efectiva en equipo.",
    title: "Bienvenido a mi Portfolio",
    description: "Soy un desarrollador Fullstack",
    contactTitle: "Contacto",
    cv_download:"Descargar mi CV",
    mail_text:"Enviame un mensaje y lo responderé a la brevedad",
    mail_secondary: "Escribeme y podremos coordinar una reunión",
    education: "Educación"
  },
};
const userLang = navigator.language || navigator.userLanguage; // Obtener el idioma del navegador
const language = userLang.includes('es') ? 'es' : 'en'; // Definir el idioma por defecto

const i18n = createI18n({
  legacy: false,  // Usar la API moderna de Composition API
  locale: language,   // Idioma por defecto
  messages,       // Las traducciones
});

export default i18n;
