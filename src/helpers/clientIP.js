export default function clientIP(ctx) {
  let ip =
    ctx.req.headers["x-forwarded-for"] || ctx.req.connection.remoteAddress;
  ip = String(clientIP).split(",");

  return Array.isArray(ip) ? ip[0] : "";
}
