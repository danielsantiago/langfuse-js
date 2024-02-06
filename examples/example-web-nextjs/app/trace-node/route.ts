import Langfuse from "langfuse-node";

export const runtime = "nodejs";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const id = crypto.randomUUID();

  const langfuse = new Langfuse({
    flushAt: 1,
  });

  langfuse.debug();

  langfuse.trace({
    id,
    name: "example-nextjs-backend-route",
  });

  await langfuse.shutdownAsync();

  return new Response(JSON.stringify({ id }), {
    headers: { "content-type": "application/json" },
  });
}
