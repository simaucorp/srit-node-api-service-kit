export default function clientUserAgent(ctx) {
  let userAgent = ctx.req.headers["user-agent"] || "";

  return userAgent;
}
