import { Metadata } from "next";
import { events } from "@/data/events";
import { EventsExplorer } from "@/features/events/events-explorer";

export const metadata: Metadata = {
  title: "Explore Events | CycleIndia",
  description: "Filter and discover upcoming and completed cycling events across India."
};

export default function EventsPage() {
  return (
    <div className="container py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Explore Events</h1>
        <p className="text-muted-foreground">Advanced filters, search, bookmarks and pagination — all client-side.</p>
      </div>
      <EventsExplorer initialEvents={events} />
    </div>
  );
}
