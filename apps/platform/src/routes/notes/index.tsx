import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@ahmad-mukhlish/ui";

export const Route = createFileRoute("/notes/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Button> This is the button </Button>
    </div>
  );
}
