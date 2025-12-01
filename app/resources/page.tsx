import { createClient } from "@/lib/supabase/server";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ResourcesClient } from "@/components/resources-client";
import { Resource } from "@/components/resource-card";

export default async function ResourcesPage() {
  const supabase = await createClient();

  // 1. Fetch data
  const { data: rawResources, error } = await supabase
    .from("resources")
    .select("*")
    .order("added_date", { ascending: false });

  if (error) {
    console.error("Error fetching resources:", error);
  }

  // 2. Transform DB data to Interface
  const resources: Resource[] = (rawResources || []).map((res) => ({
    id: res.id,
    title: res.title,
    description: res.description,
    type: res.type as any, // Cast string from DB to specific Union type
    url: res.url,
    category: res.category,
    author: res.author,
    thumbnail: res.thumbnail,
    fileSize: res.file_size,   // Mapping snake_case -> camelCase
    duration: res.duration,
    addedDate: res.added_date, // Mapping snake_case -> camelCase
    tags: res.tags || [],      // Postgres array comes back correctly as string[]
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section - Preserved Exactly */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img 
            src="/images/resources.jpg" 
            alt="Resources" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Learning Resources
            </h1>
            <p className="text-lg md:text-xl text-emerald-50">
              Curated collection of videos, articles, courses, and tools to accelerate your IT career growth
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
                <p className="text-2xl font-bold">{resources.length}+</p>
                <p className="text-sm text-emerald-100">Resources</p>
              </div>
              <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
                <p className="text-2xl font-bold">8</p>
                <p className="text-sm text-emerald-100">Categories</p>
              </div>
              <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
                <p className="text-2xl font-bold">Free</p>
                <p className="text-sm text-emerald-100">Access</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12">
        <ResourcesClient initialResources={resources} />
      </main>

      <Footer />
    </div>
  );
}