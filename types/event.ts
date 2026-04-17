export type EventType = "Road Cycling" | "Mountain Bike (MTB)" | "BRM" | "Government Event" | "Casual Ride";

export interface CyclingEvent {
  id: string;
  slug: string;
  title: string;
  description: string;
  bannerImage: string;
  city: string;
  state: string;
  eventType: EventType;
  isBRM: boolean;
  isFree: boolean;
  price: number;
  eventDate: string;
  eventTime: string;
  registrationDeadline: string;
  organizer: string;
  officialLink: string;
  featured?: boolean;
  createdAt: string;
}

export interface EventFilters {
  status: "Upcoming" | "Completed" | "All";
  price: "Free" | "Paid" | "All";
  eventType: EventType | "All";
  state: string;
  city: string;
  startDate: string;
  endDate: string;
}
