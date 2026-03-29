// Cloudflare Pages Function for school state persistence
// GET /api/schools - returns all school states (nixed status, notes)
// PUT /api/schools - updates a school's state

export async function onRequestGet(context) {
  const { env } = context;
  const data = await env.SCHOOLS_KV.get("school_states", "json");
  return Response.json(data || {});
}

export async function onRequestPut(context) {
  const { env } = context;
  const body = await context.request.json();
  const { schoolId, nixed, notes, nixReason, nixedBy, nixedAt } = body;

  if (!schoolId) {
    return Response.json({ error: "schoolId required" }, { status: 400 });
  }

  // Get existing data
  const data = (await env.SCHOOLS_KV.get("school_states", "json")) || {};

  // Update the specific school
  data[schoolId] = {
    nixed: nixed ?? data[schoolId]?.nixed ?? false,
    notes: notes ?? data[schoolId]?.notes ?? "",
    nixReason: nixReason ?? data[schoolId]?.nixReason ?? "",
    nixedBy: nixedBy ?? data[schoolId]?.nixedBy ?? "",
    nixedAt: nixedAt ?? data[schoolId]?.nixedAt ?? "",
    updatedAt: new Date().toISOString(),
  };

  await env.SCHOOLS_KV.put("school_states", JSON.stringify(data));
  return Response.json(data[schoolId]);
}
