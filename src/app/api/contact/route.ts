import { NextResponse } from "next/server";

const EMAIL =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function trim(s: unknown, max: number): string {
  if (typeof s !== "string") return "";
  return s.trim().slice(0, max);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "JSON inválido" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, error: "Datos inválidos" }, { status: 400 });
  }

  const d = body as Record<string, unknown>;
  const nombre = trim(d.nombre, 120);
  const email = trim(d.email, 254).toLowerCase();
  const telefono = trim(d.telefono, 40);
  const interes = trim(d.interes, 80);
  const mensaje = trim(d.mensaje, 4000);

  const allowedInterest = [
    "prueba",
    "starter",
    "pro",
    "elite",
    "empresa",
    "otro",
  ];
  if (!nombre || nombre.length < 2) {
    return NextResponse.json(
      { ok: false, error: "Indica un nombre válido" },
      { status: 400 },
    );
  }
  if (!email || !EMAIL.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Email no válido" },
      { status: 400 },
    );
  }
  if (!allowedInterest.includes(interes)) {
    return NextResponse.json(
      { ok: false, error: "Selecciona una opción de interés" },
      { status: 400 },
    );
  }
  if (!mensaje || mensaje.length < 5) {
    return NextResponse.json(
      { ok: false, error: "Escribe un mensaje (mín. 5 caracteres)" },
      { status: 400 },
    );
  }

  // Listo para integrar Resend, Nodemailer o almacenamiento. Registro útil en servidor:
  console.info("[contact]", {
    nombre,
    email,
    telefono: telefono || undefined,
    interes,
    mensajePreview: mensaje.slice(0, 120),
  });

  return NextResponse.json({ ok: true });
}
