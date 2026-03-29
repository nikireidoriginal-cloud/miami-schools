// Cloudflare Pages Function for custom school persistence
// GET /api/custom-schools - returns all user-added schools
// PUT /api/custom-schools - saves all custom schools

export async function onRequestGet(context) {
  const { env } = context;
  const data = await env.SCHOOLS_KV.get("custom_schools", "json");
  return Response.json(data || []);
}

export async function onRequestPut(context) {
  const { env } = context;
  const schools = await context.request.json();

  if (!Array.isArray(schools)) {
    return Response.json({ error: "Expected array" }, { status: 400 });
  }

  await env.SCHOOLS_KV.put("custom_schools", JSON.stringify(schools));
  return Response.json(schools);
}
