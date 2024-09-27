import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Definimos las traducciones
const resources = {
  en: {
    translation: {
      "welcome": "Welcome to Robot Adoption",
      "logout": "Logout",
      "login": "Login",
      "yearOfManufacture": "Year of Manufacture",
      "processingCapacity": "Processing Capacity",
      "humor": "Humor",
      "username": "Username",
      "password": "Password",
      "submit": "Submit",
      "email": "Email",
      "cancel": "Cancel",
      "Adopt a Robot with Robot Lovers!": "Adopt a Robot with Robot Lovers!",
      "Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers": "Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers",
      "robotAdoption": "Adopt a Robot with Robot Lovers!",
      "id": "ID",
      "name": "Name",
      "model": "Model",
      "manufacturer": "Manufacturer",
      "humor_pedrito": "Like a small puppy, always seeking attention and wagging its robotic 'tail'.",
      "humor_ironchef": "Fan of cooking, always making food jokes and recommending recipes.",
      "humor_chispita": "Playful and cheerful, with the behavior of a curious kitten.",
      "humor_calculin": "Serious but sarcastic, with math-related jokes.",
      "humor_doctorabot": "Strict doctor with dry humor, always reminding you to wash your hands.",
      "humor_zumbatron": "Energetic dance lover, always motivating people to move."
    }
  },
  es: {
    translation: {
      "welcome": "Bienvenido a la Adopción de Robots",
      "logout": "Cerrar sesión",
      "login": "Iniciar sesión",
      "yearOfManufacture": "Año de Fabricación",
      "processingCapacity": "Capacidad de Procesamiento",
      "humor": "Humor",
      "username": "Nombre de usuario",
      "password": "Contraseña",
      "submit": "Enviar",
      "email": "Correo electrónico",
      "cancel": "Cancelar",
      "Adopt a Robot with Robot Lovers!": "Adopta un Robot con Robot Lovers!",
      "Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers": "Contáctanos: +57 3102105253 - info@robot-lovers.com - @robot-lovers",
      "robotAdoption": "Adopta un Robot con Robot Lovers!",
      "id": "ID",
      "name": "Nombre",
      "model": "Modelo",
      "manufacturer": "Empresa Fabricante",
      "humor_pedrito": "Como un perrito pequeño, siempre buscando atención y moviendo su 'cola' robótica.",
      "humor_ironchef": "Fanático de la cocina, siempre bromeando con chistes de comida y recomendando recetas.",
      "humor_chispita": "Alegre y juguetón, con comportamiento como un gatito curioso.",
      "humor_calculin": "Serio pero sarcástico, con chistes de matemáticas.",
      "humor_doctorabot": "Doctora estricta con humor seco, siempre recordando que te laves las manos.",
      "humor_zumbatron": "Energético amante del baile, siempre motivando a moverse."
    }
  }
};

// Configuramos i18n
i18n
  .use(initReactI18next)
  .init({
    resources, // Pasamos las traducciones
    lng: 'en', // Idioma por defecto, puedes cambiarlo por 'es' si lo prefieres
    fallbackLng: 'en', // Si el idioma seleccionado no está disponible, se usa el inglés
    interpolation: {
      escapeValue: false // React ya hace el escape de las variables
    }
  });

export default i18n;
