import { createClient } from "@/lib/supabase/server";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { JobsClient } from "@/components/jobs-client";
import { Job } from "@/components/job-card";

export default async function JobsPage() {
  const supabase = await createClient();

  // 1. Fetch data from Supabase
  const { data: rawJobs, error } = await supabase
    .from("jobs")
    .select("*")
    .order("posted_date", { ascending: false });

  if (error) {
    console.error("Error fetching jobs:", error);
  }

  // 2. Transform DB structure to match your 'Job' Interface
  // The DB has flat columns (salary_min), but UI wants object (salary: { min })
  const jobs: Job[] = (rawJobs || []).map((job) => ({
    id: job.id,
    title: job.title,
    company: job.company,
    location: job.location,
    type: job.type as any, // Cast to match your specific Enum types
    experience: job.experience as any,
    salary: {
      min: job.salary_min,
      max: job.salary_max,
      currency: job.salary_currency || "$",
    },
    remote: job.remote,
    description: job.description,
    requirements: job.requirements || [], // Supabase returns text[] as string[] automatically
    postedDate: job.posted_date,          // Mapping snake_case to camelCase
    category: job.category,
    companyLogo: job.company_logo,
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section - Preserved Exactly */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img 
            src="/images/job.jpg" 
            alt="Jobs" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Find Your Dream IT Job
            </h1>
            <p className="text-lg md:text-xl text-blue-50">
              Discover opportunities from top tech companies. Your next career move starts here.
            </p>
            
            {/* Stats Section - Now Dynamic based on DB count */}
            <div className="flex items-center justify-center gap-4 pt-4">
              <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
                <p className="text-2xl font-bold">{jobs.length}+</p>
                <p className="text-sm text-blue-100">Active Jobs</p>
              </div>
              <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
                <p className="text-2xl font-bold">500+</p>
                <p className="text-sm text-blue-100">Companies</p>
              </div>
              <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
                <p className="text-2xl font-bold">$120k</p>
                <p className="text-sm text-blue-100">Avg Salary</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12">
        <JobsClient initialJobs={jobs} />
      </main>

      <Footer />
    </div>
  );
}