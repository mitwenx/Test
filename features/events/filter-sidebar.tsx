"use client";

import { EventFilters, EventType } from "@/types/event";
import { indianStates, getCitiesByState } from "@/data/events";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const eventTypes: Array<EventType | "All"> = [
  "All",
  "Road Cycling",
  "Mountain Bike (MTB)",
  "BRM",
  "Government Event",
  "Casual Ride"
];

interface FilterSidebarProps {
  filters: EventFilters;
  onChange: (filters: EventFilters) => void;
}

export function FilterSidebar({ filters, onChange }: FilterSidebarProps) {
  const cityOptions = getCitiesByState(filters.state);
  const update = <K extends keyof EventFilters>(key: K, value: EventFilters[K]) => {
    const next = { ...filters, [key]: value };
    if (key === "state") next.city = "All Cities";
    onChange(next);
  };

  return (
    <aside className="glass-card sticky top-20 space-y-4 p-4">
      <h3 className="font-semibold">Filters</h3>
      <div className="space-y-2">
        <label className="text-sm">Status</label>
        <Select options={["All", "Upcoming", "Completed"]} value={filters.status} onChange={(e) => update("status", e.target.value as EventFilters["status"])} />
      </div>
      <div className="space-y-2">
        <label className="text-sm">Price</label>
        <Select options={["All", "Free", "Paid"]} value={filters.price} onChange={(e) => update("price", e.target.value as EventFilters["price"])} />
      </div>
      <div className="space-y-2">
        <label className="text-sm">Event Type</label>
        <Select options={eventTypes} value={filters.eventType} onChange={(e) => update("eventType", e.target.value as EventFilters["eventType"])} />
      </div>
      <div className="space-y-2">
        <label className="text-sm">State</label>
        <Select options={indianStates} value={filters.state} onChange={(e) => update("state", e.target.value)} />
      </div>
      <div className="space-y-2">
        <label className="text-sm">City</label>
        <Select options={cityOptions} value={filters.city} onChange={(e) => update("city", e.target.value)} />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <label className="text-sm">From</label>
          <Input type="date" value={filters.startDate} onChange={(e) => update("startDate", e.target.value)} />
        </div>
        <div className="space-y-2">
          <label className="text-sm">To</label>
          <Input type="date" value={filters.endDate} onChange={(e) => update("endDate", e.target.value)} />
        </div>
      </div>
      <Button variant="outline" className="w-full" onClick={() => onChange({ ...filters, status: "All", price: "All", eventType: "All", state: "All States", city: "All Cities", startDate: "", endDate: "" })}>
        Reset Filters
      </Button>
    </aside>
  );
}
