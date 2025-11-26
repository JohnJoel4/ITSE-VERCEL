import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MembershipCard } from "@/components/membership-card";
import { Check } from "lucide-react";

const individualFeatures = [
  "Free and/or discounted education opportunities",
  "Free access to the job posting site",
  "Free attendance to the annual event",
  "Free access to networking opportunities",
  "Other discount opportunities",
];

const studentFeatures = [
  "Free and/or discounted education opportunities",
  "Free access to the job posting site",
  "Free attendance to the annual event",
  "Free access to networking opportunities",
  "Other discount opportunities",
];

const bronzeFeatures = [
  "6 employee memberships included",
  "Mentioned as sponsor in program at annual event",
  "Free posting jobs on the job posting site",
];

const silverFeatures = [
  "10 employee memberships included",
  "Mentioned as sponsor in program at annual event",
  "Free posting jobs on the job posting site",
];

const goldFeatures = [
  "20 employee memberships included",
  "Mentioned as sponsor in program at annual event",
  "Free posting jobs on the job posting site",
];

const platinumFeatures = [
  "Unlimited employee memberships included",
  "Mentioned as sponsor in program at annual event",
  "Free posting jobs on the job posting site",
];

export default function MembershipPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Choose Your <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Membership</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our community and unlock exclusive benefits designed for IT professionals
            </p>
          </div>

          {/* Individual & Student Memberships */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Individual Plans</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <MembershipCard
                title="Individual Membership"
                price={75}
                features={individualFeatures}
                tier="individual"
              />
              <MembershipCard
                title="Student Membership"
                price={29}
                features={studentFeatures}
                tier="student"
                badge="Best Value"
              />
            </div>
          </div>

          {/* Corporate Memberships */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Corporate Plans</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <MembershipCard
                title="Bronze Membership"
                price={350}
                features={bronzeFeatures}
                tier="bronze"
              />
              <MembershipCard
                title="Silver Membership"
                price={600}
                features={silverFeatures}
                tier="silver"
              />
              <MembershipCard
                title="Gold Membership"
                price={1000}
                features={goldFeatures}
                tier="gold"
                badge="Popular"
              />
              <MembershipCard
                title="Platinum Membership"
                price={2500}
                features={platinumFeatures}
                tier="platinum"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
