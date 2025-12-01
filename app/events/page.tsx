import { createClient } from "@/lib/supabase/server"; // Import the connection
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { EventsClient } from "@/components/events-client";
import { Event } from "@/components/event-card";

// We keep the layout exactly the same, but switch to async to fetch data
export default async function EventsPage() {
  
  // 1. Connect to Supabase
  const supabase = await createClient();

  // 2. Fetch real data from the database
  const { data: events, error } = await supabase
    .from("events")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Supabase error:", error);
  }

  // 3. Fallback to empty array if DB fails so site doesn't crash
  const eventsData = events || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section - Preserved Exactly */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          {/* Note: Ensure /images/events.jpg exists in your public folder */}
          <img 
            src="/images/events.jpg" 
            alt="Events" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Upcoming Events
            </h1>
            <p className="text-lg md:text-xl text-blue-50">
              Join us for workshops, conferences, and networking opportunities designed to advance your IT career
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Now using Real Data */}
      <main className="flex-1 py-12">
        {/* We cast to 'any' temporarily to suppress strict Typescript checks 
            if the DB columns don't perfectly match the Interface yet */}
        <EventsClient initialEvents={eventsData as any} />
      </main>

      <Footer />
    </div>
  );
}