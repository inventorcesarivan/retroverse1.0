// Reserved endpoint for Phase 3.
// Intentionally returns 501 until OAuth, allow-list authorization and Drive API
// access are configured. Do not place Google tokens or client secrets in frontend code.
export default async () => new Response(JSON.stringify({
  ok: false,
  phase: "not-configured",
  message: "La biblioteca de Google Drive se integra en la fase 3."
}), {
  status: 501,
  headers: { "content-type": "application/json; charset=utf-8" }
});
export const config = { path: "/api/drive-library" };
