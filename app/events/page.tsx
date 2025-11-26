import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { EventsClient } from "@/components/events-client";
import { Event } from "@/components/event-card";

// Sample events data
const sampleEvents: Event[] = [
  {
    id: "1",
    title: "Cloud Security Best Practices Workshop",
    description: "Learn advanced cloud security techniques and best practices for AWS, Azure, and GCP environments.",
    date: "December 15, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Tech Hub, Downtown Seattle",
    type: "paid",
    price: 49,
    capacity: 50,
    registered: 43,
    category: "Workshop",
  },
  {
    id: "2",
    title: "Annual IT Networking Mixer",
    description: "Connect with IT professionals from various industries and expand your professional network.",
    date: "December 20, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Convention Center, Seattle",
    type: "free",
    capacity: 200,
    registered: 156,
    category: "Networking",
  },
  {
    id: "3",
    title: "AI & Machine Learning Conference 2025",
    description: "Three-day conference featuring industry leaders discussing the future of AI and ML in enterprise.",
    date: "January 10, 2026",
    time: "9:00 AM - 6:00 PM",
    location: "Grand Hotel, Bellevue",
    type: "paid",
    price: 299,
    capacity: 500,
    registered: 287,
    category: "Conference",
  },
  {
    id: "4",
    title: "Introduction to DevOps Training",
    description: "Hands-on training covering CI/CD pipelines, containerization, and infrastructure as code.",
    date: "December 18, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Online Webinar",
    type: "free",
    capacity: 100,
    registered: 67,
    category: "Training",
  },
  {
    id: "5",
    title: "Cybersecurity Threat Intelligence Webinar",
    description: "Stay ahead of emerging threats with insights from leading cybersecurity experts.",
    date: "December 12, 2025",
    time: "1:00 PM - 2:30 PM",
    location: "Online Webinar",
    type: "free",
    capacity: 500,
    registered: 342,
    category: "Webinar",
  },
  {
    id: "6",
    title: "Database Optimization Masterclass",
    description: "Advanced techniques for optimizing SQL and NoSQL databases for maximum performance.",
    date: "January 5, 2026",
    time: "9:00 AM - 5:00 PM",
    location: "Tech Academy, Redmond",
    type: "paid",
    price: 199,
    capacity: 30,
    registered: 28,
    category: "Workshop",
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4">
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

      {/* Main Content */}
      <main className="flex-1 py-12">
        <EventsClient initialEvents={sampleEvents} />
      </main>

      <Footer />
    </div>
  );
}
