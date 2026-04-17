import { CyclingEvent, EventFilters } from "@/types/event";

export const indianStates = [
  "All States",
  "Maharashtra",
  "Karnataka",
  "Tamil Nadu",
  "Delhi",
  "Rajasthan",
  "Kerala",
  "Goa",
  "West Bengal",
  "Telangana",
  "Gujarat",
  "Uttarakhand"
];

export const events: CyclingEvent[] = [
  { id: "1", slug: "mumbai-sea-link-ride-2026", title: "Mumbai Sea Link Sunrise Ride", description: "Iconic sunrise road ride across the coastal corridor for endurance cyclists.", bannerImage: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=1200&q=80", city: "Mumbai", state: "Maharashtra", eventType: "Road Cycling", isBRM: false, isFree: false, price: 899, eventDate: "2026-06-22", eventTime: "05:30 AM", registrationDeadline: "2026-06-18", organizer: "Cycle Mumbai Collective", officialLink: "https://example.com/events/mumbai-sea-link-ride", featured: true, createdAt: "2026-03-01" },
  { id: "2", slug: "pune-200k-brm", title: "Pune 200K BRM", description: "Audax-certified brevet with rolling climbs and timed checkpoints.", bannerImage: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=80", city: "Pune", state: "Maharashtra", eventType: "BRM", isBRM: true, isFree: false, price: 1200, eventDate: "2026-07-05", eventTime: "04:00 AM", registrationDeadline: "2026-06-28", organizer: "Randonneurs Pune", officialLink: "https://example.com/events/pune-200k-brm", createdAt: "2026-02-14" },
  { id: "3", slug: "bengaluru-cubbon-casual", title: "Cubbon Park Casual Loop", description: "Beginner-friendly city loop with coffee stop and community networking.", bannerImage: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80", city: "Bengaluru", state: "Karnataka", eventType: "Casual Ride", isBRM: false, isFree: true, price: 0, eventDate: "2026-05-10", eventTime: "06:00 AM", registrationDeadline: "2026-05-09", organizer: "Bangalore Cyclists Hub", officialLink: "https://example.com/events/cubbon-casual", featured: true, createdAt: "2026-04-05" },
  { id: "4", slug: "nandi-hills-climb-challenge", title: "Nandi Hills Climb Challenge", description: "Timed hill climb challenge for intermediate and advanced riders.", bannerImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80", city: "Bengaluru", state: "Karnataka", eventType: "Road Cycling", isBRM: false, isFree: false, price: 650, eventDate: "2026-04-08", eventTime: "05:00 AM", registrationDeadline: "2026-04-04", organizer: "Namma Road Riders", officialLink: "https://example.com/events/nandi-hills-challenge", createdAt: "2026-01-22" },
  { id: "5", slug: "chennai-coastal-mtb", title: "Chennai Coastal MTB Sprint", description: "MTB sprint on sandy and mixed terrain near the East Coast Road.", bannerImage: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=1200&q=80", city: "Chennai", state: "Tamil Nadu", eventType: "Mountain Bike (MTB)", isBRM: false, isFree: false, price: 999, eventDate: "2026-08-02", eventTime: "06:30 AM", registrationDeadline: "2026-07-25", organizer: "Tamil MTB League", officialLink: "https://example.com/events/chennai-coastal-mtb", createdAt: "2026-04-10" },
  { id: "6", slug: "delhi-heritage-cycle-fest", title: "Delhi Heritage Cycle Festival", description: "Government-supported city heritage circuit for all age groups.", bannerImage: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=80", city: "New Delhi", state: "Delhi", eventType: "Government Event", isBRM: false, isFree: true, price: 0, eventDate: "2026-05-18", eventTime: "06:00 AM", registrationDeadline: "2026-05-15", organizer: "Delhi Tourism Department", officialLink: "https://example.com/events/delhi-heritage-fest", featured: true, createdAt: "2026-04-08" },
  { id: "7", slug: "jaipur-pink-city-road-race", title: "Pink City Road Race", description: "Fast road circuit through Jaipur outskirts with timing chips.", bannerImage: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=80", city: "Jaipur", state: "Rajasthan", eventType: "Road Cycling", isBRM: false, isFree: false, price: 750, eventDate: "2026-03-20", eventTime: "05:45 AM", registrationDeadline: "2026-03-14", organizer: "Raj Riders Association", officialLink: "https://example.com/events/pink-city-race", createdAt: "2025-12-19" },
  { id: "8", slug: "kochi-backwater-spin", title: "Kochi Backwater Spin", description: "Scenic leisure ride across backwater villages with breakfast finish.", bannerImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80", city: "Kochi", state: "Kerala", eventType: "Casual Ride", isBRM: false, isFree: true, price: 0, eventDate: "2026-06-02", eventTime: "06:15 AM", registrationDeadline: "2026-05-30", organizer: "Kerala Cycling Community", officialLink: "https://example.com/events/kochi-backwater-spin", createdAt: "2026-03-20" },
  { id: "9", slug: "goa-coastal-night-ride", title: "Goa Coastal Night Ride", description: "Night road ride with reflective support crew and hydration points.", bannerImage: "https://images.unsplash.com/photo-1544191696-15693cfd2f94?auto=format&fit=crop&w=1200&q=80", city: "Panaji", state: "Goa", eventType: "Road Cycling", isBRM: false, isFree: false, price: 500, eventDate: "2026-04-05", eventTime: "08:00 PM", registrationDeadline: "2026-04-01", organizer: "Goa Endurance Riders", officialLink: "https://example.com/events/goa-night-ride", createdAt: "2026-01-10" },
  { id: "10", slug: "kolkata-riverfront-ride", title: "Kolkata Riverfront Ride", description: "Community ride from Prinsep Ghat to Eco Park with support marshals.", bannerImage: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80", city: "Kolkata", state: "West Bengal", eventType: "Casual Ride", isBRM: false, isFree: true, price: 0, eventDate: "2026-09-14", eventTime: "05:30 AM", registrationDeadline: "2026-09-10", organizer: "Cycle Calcutta", officialLink: "https://example.com/events/kolkata-riverfront", createdAt: "2026-03-30" },
  { id: "11", slug: "hyderabad-100k-audax", title: "Hyderabad 100K Brevet", description: "Urban-to-highway 100K brevet qualifier with certified controls.", bannerImage: "https://images.unsplash.com/photo-1571333250630-f0230c320b6d?auto=format&fit=crop&w=1200&q=80", city: "Hyderabad", state: "Telangana", eventType: "BRM", isBRM: true, isFree: false, price: 1100, eventDate: "2026-07-19", eventTime: "04:30 AM", registrationDeadline: "2026-07-10", organizer: "Randonneurs Hyderabad", officialLink: "https://example.com/events/hyderabad-100k", createdAt: "2026-04-12" },
  { id: "12", slug: "ahmedabad-smart-city-cyclothon", title: "Smart City Cyclothon", description: "Government-run clean mobility cyclothon with family participation lanes.", bannerImage: "https://images.unsplash.com/photo-1520975922284-9d8f6f2c639c?auto=format&fit=crop&w=1200&q=80", city: "Ahmedabad", state: "Gujarat", eventType: "Government Event", isBRM: false, isFree: true, price: 0, eventDate: "2026-05-27", eventTime: "06:00 AM", registrationDeadline: "2026-05-24", organizer: "Ahmedabad Municipal Corporation", officialLink: "https://example.com/events/ahmedabad-cyclothon", createdAt: "2026-04-11" },
  { id: "13", slug: "dehradun-forest-mtb-enduro", title: "Dehradun Forest MTB Enduro", description: "Technical MTB trail event through forest segments and gravel descents.", bannerImage: "https://images.unsplash.com/photo-1541625810516-44f1ce894bcd?auto=format&fit=crop&w=1200&q=80", city: "Dehradun", state: "Uttarakhand", eventType: "Mountain Bike (MTB)", isBRM: false, isFree: false, price: 1500, eventDate: "2026-10-01", eventTime: "07:00 AM", registrationDeadline: "2026-09-20", organizer: "Himalayan MTB Club", officialLink: "https://example.com/events/dehradun-enduro", featured: true, createdAt: "2026-04-15" },
  { id: "14", slug: "mysuru-palace-city-ride", title: "Mysuru Palace City Ride", description: "Early morning cultural ride around heritage landmarks and boulevards.", bannerImage: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1200&q=80", city: "Mysuru", state: "Karnataka", eventType: "Casual Ride", isBRM: false, isFree: true, price: 0, eventDate: "2026-02-11", eventTime: "06:10 AM", registrationDeadline: "2026-02-09", organizer: "Mysuru Pedalers", officialLink: "https://example.com/events/mysuru-palace-ride", createdAt: "2025-11-28" },
  { id: "15", slug: "nashik-vineyard-road-classic", title: "Nashik Vineyard Road Classic", description: "Road race through vineyard belt with timed sprint sections.", bannerImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80", city: "Nashik", state: "Maharashtra", eventType: "Road Cycling", isBRM: false, isFree: false, price: 850, eventDate: "2026-11-09", eventTime: "05:00 AM", registrationDeadline: "2026-11-01", organizer: "Nashik Racing Union", officialLink: "https://example.com/events/nashik-vineyard-classic", createdAt: "2026-04-09" },
  { id: "16", slug: "coimbatore-western-ghat-climb", title: "Western Ghat Climb Ride", description: "Endurance climbing route from Coimbatore towards hill switchbacks.", bannerImage: "https://images.unsplash.com/photo-1559368568-51163d5d45eb?auto=format&fit=crop&w=1200&q=80", city: "Coimbatore", state: "Tamil Nadu", eventType: "Road Cycling", isBRM: false, isFree: false, price: 920, eventDate: "2026-01-16", eventTime: "05:20 AM", registrationDeadline: "2026-01-10", organizer: "Tamil Road Cyclists", officialLink: "https://example.com/events/western-ghat-climb", createdAt: "2025-10-04" },
  { id: "17", slug: "udaipur-lakeside-social-ride", title: "Udaipur Lakeside Social Ride", description: "Social-paced group ride around lakes with photography pit stops.", bannerImage: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=80", city: "Udaipur", state: "Rajasthan", eventType: "Casual Ride", isBRM: false, isFree: true, price: 0, eventDate: "2026-06-14", eventTime: "06:00 AM", registrationDeadline: "2026-06-12", organizer: "Udaipur Social Cyclists", officialLink: "https://example.com/events/udaipur-lakeside", createdAt: "2026-04-06" },
  { id: "18", slug: "surat-criterium-series", title: "Surat Criterium Series", description: "Closed-loop criterium with amateur and elite categories.", bannerImage: "https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?auto=format&fit=crop&w=1200&q=80", city: "Surat", state: "Gujarat", eventType: "Road Cycling", isBRM: false, isFree: false, price: 700, eventDate: "2026-08-23", eventTime: "06:00 AM", registrationDeadline: "2026-08-15", organizer: "Surat Racing Circuit", officialLink: "https://example.com/events/surat-criterium", createdAt: "2026-04-13" },
  { id: "19", slug: "thiruvananthapuram-green-ride", title: "Green Mobility Ride", description: "Public-awareness ride promoting low-carbon urban commuting.", bannerImage: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?auto=format&fit=crop&w=1200&q=80", city: "Thiruvananthapuram", state: "Kerala", eventType: "Government Event", isBRM: false, isFree: true, price: 0, eventDate: "2026-04-27", eventTime: "06:30 AM", registrationDeadline: "2026-04-24", organizer: "Kerala Transport Mission", officialLink: "https://example.com/events/green-mobility-ride", createdAt: "2026-04-16" },
  { id: "20", slug: "gurugram-weekend-gravel", title: "Gurugram Weekend Gravel Ride", description: "Mixed-surface weekend gravel ride for intermediate riders.", bannerImage: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?auto=format&fit=crop&w=1200&q=80", city: "Gurugram", state: "Delhi", eventType: "Mountain Bike (MTB)", isBRM: false, isFree: false, price: 600, eventDate: "2026-06-28", eventTime: "06:00 AM", registrationDeadline: "2026-06-22", organizer: "NCR Gravel Club", officialLink: "https://example.com/events/gurugram-gravel", createdAt: "2026-04-07" }
];

export const defaultFilters: EventFilters = {
  status: "All",
  price: "All",
  eventType: "All",
  state: "All States",
  city: "All Cities",
  startDate: "",
  endDate: ""
};

export function isCompleted(eventDate: string): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(eventDate) < today;
}

export function getCitiesByState(state: string): string[] {
  if (state === "All States") return ["All Cities"];
  const uniqueCities = new Set(
    events.filter((event) => event.state === state).map((event) => event.city)
  );
  return ["All Cities", ...Array.from(uniqueCities)];
}

export function filterEvents(data: CyclingEvent[], filters: EventFilters): CyclingEvent[] {
  return data.filter((event) => {
    const completed = isCompleted(event.eventDate);

    const statusMatch =
      filters.status === "All" ||
      (filters.status === "Completed" && completed) ||
      (filters.status === "Upcoming" && !completed);

    const priceMatch =
      filters.price === "All" || (filters.price === "Free" ? event.isFree : !event.isFree);

    const typeMatch = filters.eventType === "All" || event.eventType === filters.eventType;

    const stateMatch = filters.state === "All States" || event.state === filters.state;

    const cityMatch = filters.city === "All Cities" || event.city === filters.city;

    const date = new Date(event.eventDate);
    const startMatch = !filters.startDate || date >= new Date(filters.startDate);
    const endMatch = !filters.endDate || date <= new Date(filters.endDate);

    return statusMatch && priceMatch && typeMatch && stateMatch && cityMatch && startMatch && endMatch;
  });
}

export function searchEvents(data: CyclingEvent[], query: string): CyclingEvent[] {
  if (!query.trim()) return data;
  const normalized = query.toLowerCase();

  return data.filter((event) =>
    [event.title, event.description, event.city, event.state, event.organizer].some((field) =>
      field.toLowerCase().includes(normalized)
    )
  );
}

export function sortEvents(data: CyclingEvent[], mode: "upcoming-first" | "recently-added"): CyclingEvent[] {
  if (mode === "recently-added") {
    return [...data].sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt));
  }

  return [...data].sort((a, b) => {
    const aCompleted = isCompleted(a.eventDate);
    const bCompleted = isCompleted(b.eventDate);

    if (aCompleted !== bCompleted) return Number(aCompleted) - Number(bCompleted);
    return +new Date(a.eventDate) - +new Date(b.eventDate);
  });
}
