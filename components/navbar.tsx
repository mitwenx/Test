import Link from "next/link";
import { Bike } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Bike className="h-5 w-5 text-primary" />
          <span>CycleIndia</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/events" className="hover:text-primary">Events</Link>
          <Link href="/submit" className="hover:text-primary">Submit Event</Link>
        </nav>
      </div>
    </header>
  );
}
