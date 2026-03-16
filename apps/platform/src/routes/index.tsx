import { beApi } from "#/utils/be-api";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
  loader: async () => {
    const res = await beApi.notes.$get();
    return res.json();
  },
});

function App() {
  const notes = Route.useLoaderData();
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
