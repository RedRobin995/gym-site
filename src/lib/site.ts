/** Personaliza aquí nombre, contacto y contenido para cada cliente. */

export const site = {
  name: "Athletic Center",
  tagline: "Entrena con propósito. Resultados con método.",
  description:
    "Centro de entrenamiento premium en un solo espacio diseñado para rendir más.",
  phone: "+506 1111-2222",
  whatsapp: "1234567890",
  email: "hola@athleticcenter.com",
  address: {
    street: "Calle 1, 123",
    city: "28013 San José",
    mapsUrl: "https://maps.google.com/?q=San+José+Costa+Rica",
  },
  hours: {
    weekday: "Lun–Vie 6:00–22:30",
    weekend: "Sáb–Dom 8:00–20:00",
  },
  social: {
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  },
} as const;

export type ClassSlot = {
  time: string;
  mon: string;
  tue: string;
  wed: string;
  thu: string;
  fri: string;
  sat: string;
  sun: string;
};

export const schedule: ClassSlot[] = [
  {
    time: "07:00",
    mon: "HIIT",
    tue: "Fuerza",
    wed: "Spin",
    thu: "HIIT",
    fri: "Yoga",
    sat: "Bootcamp",
    sun: "—",
  },
  {
    time: "09:00",
    mon: "Yoga",
    tue: "Spin",
    wed: "Fuerza",
    thu: "Movilidad",
    fri: "HIIT",
    sat: "Open gym",
    sun: "Yoga",
  },
  {
    time: "12:00",
    mon: "Fuerza",
    tue: "HIIT",
    wed: "Open gym",
    thu: "Fuerza",
    fri: "Spin",
    sat: "—",
    sun: "—",
  },
  {
    time: "18:00",
    mon: "Spin",
    tue: "Cross training",
    wed: "HIIT",
    thu: "Spin",
    fri: "Fuerza",
    sat: "—",
    sun: "—",
  },
  {
    time: "20:00",
    mon: "Movilidad",
    tue: "Fuerza",
    wed: "Yoga",
    thu: "HIIT",
    fri: "—",
    sat: "—",
    sun: "—",
  },
];

export const plans = [
  {
    name: "Starter",
    price: "49",
    period: "mes",
    highlight: false,
    features: [
      "Acceso zona de musculación",
      "Casillero",
      "1 evaluación inicial",
      "App de reservas",
    ],
  },
  {
    name: "Pro",
    price: "79",
    period: "mes",
    highlight: true,
    features: [
      "Todo lo de Starter",
      "Clases grupales ilimitadas",
      "1 sesión PT / mes",
      "Nutrición express (guía PDF)",
      "Invitado mensual",
    ],
  },
  {
    name: "Elite",
    price: "129",
    period: "mes",
    highlight: false,
    features: [
      "Todo lo de Pro",
      "4 sesiones PT / mes",
      "Plan nutricional personalizado",
      "Prioridad en horarios peak",
      "Toalla y bebida incluidas",
    ],
  },
] as const;

export const services = [
  {
    title: "Fuerza y hipertrofia",
    body: "Programación basada en bloques con seguimiento de cargas y RIR.",
  },
  {
    title: "HIIT y condición",
    body: "Intervals pensados para quemar grasa sin perder músculo.",
  },
  {
    title: "Movilidad y lesión",
    body: "Screenings y trabajo correctivo integrado en tu rutina.",
  },
  {
    title: "Nutrición deportiva",
    body: "Estrategia alineada a tus objetivos y estilo de vida real.",
  },
] as const;

export const trainers = [
  {
    name: "Lucía V.",
    role: "Head Coach — Fuerza",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&h=750&fit=crop",
  },
  {
    name: "Marcos D.",
    role: "HIIT & Conditioning",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=750&fit=crop",
  },
  {
    name: "Ana R.",
    role: "Yoga & Movilidad",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=750&fit=crop",
  },
] as const;

export const testimonials = [
  {
    quote:
      "En tres meses bajé 6 kg manteniendo fuerza. El ambiente es profesional y el equipo te empuja sin presiones toxicas.",
    author: "Elena M.",
    role: "Miembro desde 2024",
  },
  {
    quote:
      "Horarios flexibles y clases que sí escalan a tu nivel. Por fin un gym donde no me siento perdido.",
    author: "David P.",
    role: "Plan Pro",
  },
  {
    quote:
      "La parte de nutrición cerró el círculo: entreno + hábitos. Recomendado al 100%.",
    author: "Carmen L.",
    role: "Plan Elite",
  },
] as const;

export const faqs = [
  {
    q: "¿Hay prueba gratuita?",
    a: "Sí. Primera semana de prueba con acceso completo reservando cita en recepción o por WhatsApp.",
  },
  {
    q: "¿Puedo congelar mi membresía?",
    a: "Los planes Pro y Elite incluyen hasta 30 días de congelación anual por viajes o lesión con aviso.",
  },
  {
    q: "¿Necesito experiencia previa?",
    a: "No. Todas las clases tienen regresiones y el staff corrige técnica de forma activa.",
  },
  {
    q: "¿Hay parking?",
    a: "Parking público a 2 minutos y acuerdos con garaje colindante para socios (sujeto a disponibilidad).",
  },
] as const;
