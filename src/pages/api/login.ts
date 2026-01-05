import type { APIRoute } from "astro";

const API_BASE = import.meta.env.API_BASE ?? "http://localhost:3000";

export const POST: APIRoute = async ({ request }) => {
  const form = await request.formData();
  const email = String(form.get("email") ?? "");
  const password = String(form.get("password") ?? "");

  const r = await fetch(`${API_BASE}/api/v1/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // Importante: Astro server -> API server
    body: JSON.stringify({ email, password }),
  });

  if (!r.ok) {
    return new Response(null, {
      status: 302,
      headers: { Location: "/login?error=Credenciales%20invalidas" },
    });
  }

  // 1) Reenviar la cookie refresh_token que te manda tu API
  const setCookie = r.headers.get("set-cookie");

  // 2) Obtener el accessToken para guardarlo (opcional)
  const data = await r.json();

  // Opción simple: guardar accessToken en cookie (NO httpOnly) o en session storage en el cliente.
  // Mejor práctica: usarlo en memoria en el client y refrescar con /api/refresh cuando toque.
  // Para empezar, puedes setearlo como cookie "access_token" (no ideal, pero funciona):
  const headers: Record<string, string> = {
    Location: "/",
  };
  if (setCookie) headers["Set-Cookie"] = setCookie;

  return new Response(JSON.stringify({ accessToken: data.accessToken, user: data.user }), {
    status: 200,
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
  });
};
