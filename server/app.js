import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

function handler(_req) {
  return new Response(
    JSON.stringify({ message: "Hello world!" }),
    {
      headers: {
        "content-type": "application/json",
      },
    },
  );
}

serve(handler, { port: 8000 });