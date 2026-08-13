// Olguín Pickup — JS vanilla, sin dependencias externas

// Año dinámico en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// ---------- Selector de idioma (ES / EN / PT) ----------
// REEMPLAZAR / EXTENDER: agrega o ajusta textos aquí si cambian los contenidos del HTML.
const translations = {
  es: {
    'nav.servicios': 'Servicios',
    'nav.porque': 'Por qué elegirnos',
    'nav.nosotros': 'Nosotros',
    'nav.contacto': 'Contacto',
    'hero.eyebrow': 'Agencia familiar chilena de transporte privado',
    'hero.subtitle': 'Traslados privados con la confianza de una familia y el profesionalismo de un equipo dedicado. Personas, mascotas, equipos y mudanzas, siempre en buenas manos.',
    'hero.cta': 'Cotiza tu traslado por WhatsApp',
    'services.title': '¿Qué ofrecemos?',
    'services.lead': 'Soluciones de transporte a la medida de cada necesidad, con el mismo nivel de cuidado en cada viaje.',
    'service.turistas.title': 'Turistas',
    'service.turistas.text': 'Traslados privados puntuales y cómodos para quienes visitan nuestra región.',
    'service.personas.title': 'Personas',
    'service.personas.text': 'Traslados particulares para el día a día, con atención cercana y directa.',
    'service.mascotas.title': 'Mascotas de gran tamaño',
    'service.mascotas.text': 'Transporte seguro y cuidadoso para mascotas grandes, con el respeto que merecen.',
    'service.eventos.title': 'Equipos de eventos y producciones',
    'service.eventos.text': 'Instrumentos, amplificación y equipamiento técnico para eventos y producciones.',
    'service.deportivos.title': 'Equipos deportivos',
    'service.deportivos.text': 'Bicicletas, motos, tablas de surf y equipo de escalada, listos para la aventura.',
    'service.mudanzas.title': 'Mini mudanzas',
    'service.mudanzas.text': 'Traslados de menor volumen para cambios de casa u oficina, con orden y cuidado.',
    'porque.title': '¿Por qué elegirnos?',
    'reason.atencion.title': 'Atención directa de los dueños',
    'reason.atencion.text': 'Hablas con quienes realmente están a cargo, sin intermediarios.',
    'reason.vehiculos.title': 'Vehículos propios',
    'reason.vehiculos.text': 'Flota propia, conducida y mantenida por nosotros mismos.',
    'reason.profesionalismo.title': 'Profesionalismo',
    'reason.profesionalismo.text': 'Puntualidad, orden y responsabilidad en cada traslado.',
    'reason.confianza.title': 'Confianza familiar',
    'reason.confianza.text': 'Una agencia familiar chilena que trata cada encargo como propio.',
    'posicionamiento.title': 'Una agencia familiar, no un servicio low-cost',
    'posicionamiento.text': 'Somos una agencia familiar chilena dedicada al transporte privado, con un alto nivel de atención en cada detalle del servicio. No buscamos ser la opción más económica: buscamos ser la opción en la que puedas confiar, traslado tras traslado.',
    'posicionamiento.coverage': 'Somos de la Región Metropolitana: hacemos servicios en Santiago y también cubrimos otras regiones, según previa coordinación.',
    'contacto.title': 'Conversemos tu traslado',
    'contacto.lead': 'Escríbenos directamente por WhatsApp y te responderemos a la brevedad para cotizar tu servicio.',
    'contacto.whatsappBtn': '+56 9 7387 3915 · Escríbenos por WhatsApp',
    'footer.tagline': 'Transporte privado familiar',
    waMessage: 'Hola, quiero cotizar un traslado con Olguín Pickup',
  },
  en: {
    'nav.servicios': 'Services',
    'nav.porque': 'Why choose us',
    'nav.nosotros': 'About us',
    'nav.contacto': 'Contact',
    'hero.eyebrow': 'Chilean family-run private transport agency',
    'hero.subtitle': 'Private transfers with the trust of a family and the professionalism of a dedicated team. People, pets, equipment and moves, always in good hands.',
    'hero.cta': 'Get a quote on WhatsApp',
    'services.title': 'What we offer',
    'services.lead': 'Transport solutions tailored to every need, with the same level of care on every trip.',
    'service.turistas.title': 'Tourists',
    'service.turistas.text': 'Punctual, comfortable private transfers for visitors to our region.',
    'service.personas.title': 'People',
    'service.personas.text': 'Private everyday transfers, with close, direct attention.',
    'service.mascotas.title': 'Large pets',
    'service.mascotas.text': 'Safe, careful transport for large pets, with the respect they deserve.',
    'service.eventos.title': 'Event & production equipment',
    'service.eventos.text': 'Instruments, amplification and technical equipment for events and productions.',
    'service.deportivos.title': 'Sports equipment',
    'service.deportivos.text': 'Bikes, motorcycles, surfboards and climbing gear, ready for adventure.',
    'service.mudanzas.title': 'Small moves',
    'service.mudanzas.text': 'Smaller-scale moves for home or office relocations, done with care and order.',
    'porque.title': 'Why choose us',
    'reason.atencion.title': 'Direct attention from the owners',
    'reason.atencion.text': 'You speak directly with the people in charge, no middlemen.',
    'reason.vehiculos.title': 'Our own vehicles',
    'reason.vehiculos.text': 'Our own fleet, driven and maintained by us.',
    'reason.profesionalismo.title': 'Professionalism',
    'reason.profesionalismo.text': 'Punctuality, order and responsibility on every trip.',
    'reason.confianza.title': 'Family trust',
    'reason.confianza.text': 'A Chilean family agency that treats every job as its own.',
    'posicionamiento.title': 'A family agency, not a low-cost service',
    'posicionamiento.text': "We are a Chilean family agency dedicated to private transport, with a high level of attention to every detail of the service. We don't aim to be the cheapest option: we aim to be the one you can trust, trip after trip.",
    'posicionamiento.coverage': "We're based in the Metropolitan Region: we operate in Santiago and also cover other regions, subject to prior coordination.",
    'contacto.title': "Let's talk about your transfer",
    'contacto.lead': "Message us directly on WhatsApp and we'll get back to you shortly to quote your service.",
    'contacto.whatsappBtn': '+56 9 7387 3915 · Message us on WhatsApp',
    'footer.tagline': 'Family private transport',
    waMessage: "Hi, I'd like to get a quote for a transfer with Olguín Pickup",
  },
  pt: {
    'nav.servicios': 'Serviços',
    'nav.porque': 'Por que nos escolher',
    'nav.nosotros': 'Sobre nós',
    'nav.contacto': 'Contato',
    'hero.eyebrow': 'Agência familiar chilena de transporte privado',
    'hero.subtitle': 'Traslados privados com a confiança de uma família e o profissionalismo de uma equipe dedicada. Pessoas, animais de estimação, equipamentos e mudanças, sempre em boas mãos.',
    'hero.cta': 'Cote seu traslado pelo WhatsApp',
    'services.title': 'O que oferecemos?',
    'services.lead': 'Soluções de transporte sob medida para cada necessidade, com o mesmo nível de cuidado em cada viagem.',
    'service.turistas.title': 'Turistas',
    'service.turistas.text': 'Traslados privados pontuais e confortáveis para quem visita nossa região.',
    'service.personas.title': 'Pessoas',
    'service.personas.text': 'Traslados particulares para o dia a dia, com atendimento próximo e direto.',
    'service.mascotas.title': 'Animais de grande porte',
    'service.mascotas.text': 'Transporte seguro e cuidadoso para animais de grande porte, com o respeito que merecem.',
    'service.eventos.title': 'Equipamentos de eventos e produções',
    'service.eventos.text': 'Instrumentos, amplificação e equipamento técnico para eventos e produções.',
    'service.deportivos.title': 'Equipamentos esportivos',
    'service.deportivos.text': 'Bicicletas, motos, pranchas de surfe e equipamento de escalada, prontos para a aventura.',
    'service.mudanzas.title': 'Pequenas mudanças',
    'service.mudanzas.text': 'Traslados de menor volume para mudanças de casa ou escritório, com ordem e cuidado.',
    'porque.title': 'Por que nos escolher',
    'reason.atencion.title': 'Atendimento direto dos donos',
    'reason.atencion.text': 'Você fala diretamente com quem está no comando, sem intermediários.',
    'reason.vehiculos.title': 'Veículos próprios',
    'reason.vehiculos.text': 'Frota própria, conduzida e mantida por nós mesmos.',
    'reason.profesionalismo.title': 'Profissionalismo',
    'reason.profesionalismo.text': 'Pontualidade, organização e responsabilidade em cada traslado.',
    'reason.confianza.title': 'Confiança familiar',
    'reason.confianza.text': 'Uma agência familiar chilena que trata cada serviço como se fosse seu.',
    'posicionamiento.title': 'Uma agência familiar, não um serviço low-cost',
    'posicionamiento.text': 'Somos uma agência familiar chilena dedicada ao transporte privado, com um alto nível de atenção em cada detalhe do serviço. Não buscamos ser a opção mais econômica: buscamos ser a opção em que você pode confiar, traslado após traslado.',
    'posicionamiento.coverage': 'Somos da Região Metropolitana: atendemos em Santiago e também cobrimos outras regiões, mediante coordenação prévia.',
    'contacto.title': 'Vamos conversar sobre seu traslado',
    'contacto.lead': 'Fale conosco diretamente pelo WhatsApp e responderemos em breve para cotar seu serviço.',
    'contacto.whatsappBtn': '+56 9 7387 3915 · Fale conosco pelo WhatsApp',
    'footer.tagline': 'Transporte privado familiar',
    waMessage: 'Olá, gostaria de cotar um traslado com a Olguín Pickup',
  },
};

const langButtons = document.querySelectorAll('.lang-switch__btn');
const i18nElements = document.querySelectorAll('[data-i18n]');
const waLinks = document.querySelectorAll('.js-wa-link');
const WA_NUMBER = '56973873915';

function setLanguage(lang) {
  const dict = translations[lang] || translations.es;

  i18nElements.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });

  waLinks.forEach((link) => {
    link.href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(dict.waMessage)}`;
  });

  langButtons.forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.lang === lang);
  });

  document.documentElement.lang = lang;
  localStorage.setItem('op-lang', lang);
}

langButtons.forEach((btn) => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

setLanguage(localStorage.getItem('op-lang') || 'es');

// ---------- Aparición suave de secciones al hacer scroll ----------
const revealTargets = document.querySelectorAll('.section, .hero');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealTargets.forEach((el) => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}
