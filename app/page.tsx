import Link from "next/link";
import { events, isCompleted } from "@/data/events";
import { EventCard } from "@/features/events/event-card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const featured = events.filter((event) => event.featured).slice(0, 3);
  const upcoming = events.filter((event) => !isCompleted(event.eventDate)).slice(0, 6);

  return (
    <div className="container py-10">
      <section className="glass-card mb-10 rounded-2xl p-8 md:p-14">
        <p className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Open-source • Frontend-first</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">Discover Cycling Events Across India</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">Find BRM brevets, MTB trails, city rides and government cycling initiatives in one place. Built for riders, clubs, and organizers.</p>
        <div className="mt-6">
          <Link href="/events"><Button size="lg">Explore Events</Button></Link>
        </div>
      </section>

      <section className="mb-12">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Featured Events</h2>
          <Link href="/events" className="text-sm text-primary hover:underline">View all</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((event) => <EventCard key={event.id} event={event} />)}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Upcoming Events</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {upcoming.map((event) => <EventCard key={event.id} event={event} />)}
        </div>
      </section>
    </div>
  );
}
