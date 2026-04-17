import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { CalendarDays, Clock, MapPin, Share2, ExternalLink } from "lucide-react";
import { events, isCompleted } from "@/data/events";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const event = events.find((item) => item.slug === params.slug);
  if (!event) return { title: "Event Not Found | CycleIndia" };

  return {
    title: `${event.title} | CycleIndia`,
    description: event.description
  };
}

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = events.find((item) => item.slug === params.slug);
  if (!event) notFound();
  const completed = isCompleted(event.eventDate);

  return (
    <div className="container py-8">
      <Link href="/events" className="mb-4 inline-block text-sm text-primary hover:underline">← Back to events</Link>
      <article className="overflow-hidden rounded-xl border bg-white shadow-sm">
        <div className="relative h-64 w-full md:h-96">
          <Image src={event.bannerImage} alt={event.title} fill className="object-cover" priority />
        </div>
        <div className="space-y-6 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{event.eventType}</Badge>
            <Badge variant={event.isFree ? "success" : "warning"}>{event.isFree ? "Free" : `₹${event.price}`}</Badge>
            <Badge variant={event.isBRM ? "default" : "secondary"}>BRM: {event.isBRM ? "Yes" : "No"}</Badge>
            {completed && <Badge variant="secondary" className="text-sm">Completed</Badge>}
          </div>

          <h1 className="text-3xl font-bold md:text-4xl">{event.title}</h1>
          <p className="max-w-4xl text-muted-foreground">{event.description}</p>

          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="flex items-center gap-2"><CalendarDays className="h-4 w-4" />Event Date: {event.eventDate}</div>
            <div className="flex items-center gap-2"><Clock className="h-4 w-4" />Time: {event.eventTime}</div>
            <div className="flex items-center gap-2"><CalendarDays className="h-4 w-4" />Registration Deadline: {event.registrationDeadline}</div>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4" />{event.city}, {event.state}</div>
            <div>Organizer: <span className="font-medium">{event.organizer}</span></div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href={event.officialLink} target="_blank" rel="noreferrer"><Button><ExternalLink className="mr-2 h-4 w-4" />Official Event Link</Button></a>
            <a href="#"><Button variant="outline">Register Now</Button></a>
            <Button variant="ghost"><Share2 className="mr-2 h-4 w-4" />Share</Button>
          </div>
        </div>
      </article>
    </div>
  );
}
