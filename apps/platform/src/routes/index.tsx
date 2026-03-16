import { createFileRoute } from "@tanstack/react-router";
import { beApi } from "#/utils/be-api";
import type { InferResponseType } from "hono/client";

type Notes = InferResponseType<typeof beApi.notes.$get>;

export const Route = createFileRoute("/")({
  component: App,
  loader: async () => {
    const res = await beApi.notes.$get();
    return res.json() as Promise<Notes>;
  },
});

function App() {
  ///Need to explicitly cast as Notes for avoiding the warning error
  const notes = Route.useLoaderData() as Notes;

  if (!notes) return <div>Data is error</div>;
  if (notes.length === 0) return <div>No notes found</div>;

  return (
    <div>
      {notes.map((note) => {
        return <div key={note.id}>{note.content}</div>;
      })}
    </div>
  );
}
