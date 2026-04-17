"use client";

import { useMemo, useState } from "react";
import { Filter, LocateFixed } from "lucide-react";
import { CyclingEvent } from "@/types/event";
import { defaultFilters, filterEvents, searchEvents, sortEvents } from "@/data/events";
import { SearchBar } from "./search-bar";
import { FilterSidebar } from "./filter-sidebar";
import { Button } from "@/components/ui/button";
import { EventCard } from "./event-card";

interface EventsExplorerProps {
  initialEvents: CyclingEvent[];
}

const PAGE_SIZE = 9;

export function EventsExplorer({ initialEvents }: EventsExplorerProps) {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState(defaultFilters);
  const [sortMode, setSortMode] = useState<"upcoming-first" | "recently-added">("upcoming-first");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const searched = searchEvents(initialEvents, query);
    const filteredData = filterEvents(searched, filters);
    return sortEvents(filteredData, sortMode);
  }, [initialEvents, query, filters, sortMode]);

  const paginated = filtered.slice(0, page * PAGE_SIZE);
  const hasMore = paginated.length < filtered.length;

  const nearMe = () => {
    if (typeof window === "undefined" || !navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(() => {
      setQuery("Bengaluru");
    });
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
      <div className="hidden lg:block">
        <FilterSidebar filters={filters} onChange={setFilters} />
      </div>

      <div className="space-y-5">
        <div className="glass-card space-y-3 p-4">
          <div className="flex flex-wrap gap-3">
            <div className="min-w-[240px] flex-1"><SearchBar value={query} onChange={setQuery} /></div>
            <Button variant="outline" onClick={nearMe}><LocateFixed className="mr-2 h-4 w-4" />Near me</Button>
            <Button variant="outline" onClick={() => setMobileOpen(true)} className="lg:hidden"><Filter className="mr-2 h-4 w-4" />Filters</Button>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
            <div className="flex gap-2">
              <Button size="sm" variant={view === "grid" ? "default" : "outline"} onClick={() => setView("grid")}>Grid</Button>
              <Button size="sm" variant={view === "list" ? "default" : "outline"} onClick={() => setView("list")}>List</Button>
            </div>
            <select
              className="rounded-md border px-3 py-2"
              value={sortMode}
              onChange={(e) => setSortMode(e.target.value as "upcoming-first" | "recently-added")}
            >
              <option value="upcoming-first">Upcoming first</option>
              <option value="recently-added">Recently added</option>
            </select>
          </div>
        </div>

        <div className={view === "grid" ? "grid gap-4 sm:grid-cols-2 xl:grid-cols-3" : "space-y-4"}>
          {paginated.map((event) => (
            <EventCard key={event.id} event={event} view={view} />
          ))}
        </div>

        {filtered.length === 0 && <p className="text-muted-foreground">No events match your current filters.</p>}

        {hasMore && (
          <div className="text-center">
            <Button onClick={() => setPage((prev) => prev + 1)}>Load more events</Button>
          </div>
        )}
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 lg:hidden" onClick={() => setMobileOpen(false)}>
          <div className="absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-y-auto rounded-t-2xl bg-white p-4" onClick={(e) => e.stopPropagation()}>
            <div className="mb-3 h-1.5 w-16 rounded-full bg-muted mx-auto" />
            <FilterSidebar filters={filters} onChange={setFilters} />
            <Button className="mt-3 w-full" onClick={() => setMobileOpen(false)}>Apply Filters</Button>
          </div>
        </div>
      )}
    </div>
  );
}
