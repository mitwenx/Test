"use client";

import Link from "next/link";
import Image from "next/image";
import { CalendarDays, MapPin, Bookmark } from "lucide-react";
import { CyclingEvent } from "@/types/event";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { isCompleted } from "@/data/events";
import { useBookmarksStore } from "@/lib/bookmarks";

interface EventCardProps {
  event: CyclingEvent;
  view?: "grid" | "list";
}

export function EventCard({ event, view = "grid" }: EventCardProps) {
  const completed = isCompleted(event.eventDate);
  const { bookmarks, toggleBookmark } = useBookmarksStore();
  const isBookmarked = bookmarks.includes(event.slug);

  return (
    <Card
      className={cn(
        "overflow-hidden transition hover:shadow-md",
        completed && "bg-slate-50 opacity-70",
        view === "list" && "flex flex-col md:flex-row"
      )}
    >
      <div className={cn("relative h-52 w-full", view === "list" && "md:h-auto md:w-72 md:flex-shrink-0")}>
        <Image src={event.bannerImage} alt={event.title} fill className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-2 text-lg font-semibold">{event.title}</h3>
          <button aria-label="Bookmark event" onClick={() => toggleBookmark(event.slug)}>
            <Bookmark className={cn("h-4 w-4", isBookmarked ? "fill-primary text-primary" : "text-muted-foreground")} />
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge>{event.eventType}</Badge>
          <Badge variant={event.isFree ? "success" : "warning"}>{event.isFree ? "Free" : `₹${event.price}`}</Badge>
          {completed && <Badge variant="secondary">Completed</Badge>}
          {event.featured && <Badge variant="default">Featured</Badge>}
        </div>

        <p className="line-clamp-2 text-sm text-muted-foreground">{event.description}</p>

        <div className="mt-auto flex flex-col gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2"><CalendarDays className="h-4 w-4" />{event.eventDate}</div>
          <div className="flex items-center gap-2"><MapPin className="h-4 w-4" />{event.city}, {event.state}</div>
        </div>

        <Link href={`/events/${event.slug}`} className="text-sm font-medium text-primary hover:underline">
          View details
        </Link>
      </div>
    </Card>
  );
}
