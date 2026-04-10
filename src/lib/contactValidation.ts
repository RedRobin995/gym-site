const EMAIL =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function trim(s: unknown, max: number): string {
  if (typeof s !== "string") return "";
  return s.trim().slice(0, max);
}

const ALLOWED_INTEREST = [
  "prueba",
  "starter",
  "pro",
  "elite",
  "empresa",
  "otro",
] as const;

export type ContactPayload = {
  nombre: string;
  email: string;
  telefono: string;
  interes: string;
  mensaje: string;
};

/** Returns an error message in Spanish, or null if valid. */
export function validateContactPayload(input: ContactPayload): string | null {
  const nombre = trim(input.nombre, 120);
  const email = trim(input.email, 254).toLowerCase();
  const telefono = trim(input.telefono, 40);
  const interes = trim(input.interes, 80);
  const mensaje = trim(input.mensaje, 4000);

  if (!nombre || nombre.length < 2) {
    return "Indica un nombre válido";
  }
  if (!email || !EMAIL.test(email)) {
    return "Email no válido";
  }
  if (!ALLOWED_INTEREST.includes(interes as (typeof ALLOWED_INTEREST)[number])) {
    return "Selecciona una opción de interés";
  }
  if (!mensaje || mensaje.length < 5) {
    return "Escribe un mensaje (mín. 5 caracteres)";
  }

  return null;
}
