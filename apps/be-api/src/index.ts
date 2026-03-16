import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { noteRouter } from "./modules/notes/router";

const app = new Hono().route("/", noteRouter);

serve(
  {
    fetch: app.fetch,
    port: 8000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
