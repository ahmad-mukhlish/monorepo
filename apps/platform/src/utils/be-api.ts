import { hc } from "hono/client";
import type { BackEndType } from "../../../be-api/src";

export const beApi = hc<BackEndType>("http://localhost:8000");
