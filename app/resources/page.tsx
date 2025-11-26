import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ResourcesClient } from "@/components/resources-client";
import { Resource } from "@/components/resource-card";

// Sample resources data
const sampleResources: Resource[] = [
  {
    id: "1",
    title: "Complete Python Programming Course",
    description: "Master Python from basics to advanced concepts. Includes hands-on projects, real-world examples, and best practices for modern Python development.",
    type: "video",
    url: "https://youtube.com/python-course",
    category: "Programming",
    author: "Tech Academy",
    duration: "12 hours",
    addedDate: "2025-11-20",
    tags: ["Beginner Friendly", "Hands-on", "Tutorial"],
  },
  {
    id: "2",
    title: "AWS Cloud Practitioner Study Guide",
    description: "Comprehensive guide to prepare for the AWS Cloud Practitioner certification. Covers all exam topics with practice questions and tips.",
    type: "pdf",
    url: "https://example.com/aws-guide.pdf",
    category: "Cloud Computing",
    author: "Cloud Experts",
    fileSize: "5.2 MB",
    addedDate: "2025-11-18",
    tags: ["Certification Prep", "Free"],
  },
  {
    id: "3",
    title: "Cybersecurity Best Practices 2025",
    description: "Essential security practices every IT professional should know. Learn about threat prevention, incident response, and security frameworks.",
    type: "document",
    url: "https://cybersec-guide.com/best-practices",
    category: "Cybersecurity",
    author: "SecureIT Team",
    addedDate: "2025-11-22",
    tags: ["Advanced", "Tutorial"],
  },
  {
    id: "4",
    title: "Docker and Kubernetes Mastery",
    description: "Learn containerization and orchestration with Docker and Kubernetes. Build, deploy, and scale containerized applications.",
    type: "course",
    url: "https://learning-platform.com/docker-k8s",
    category: "DevOps",
    author: "DevOps Academy",
    duration: "8 weeks",
    addedDate: "2025-11-15",
    tags: ["Advanced", "Hands-on"],
  },
  {
    id: "5",
    title: "Network Topology Diagrams",
    description: "Visual reference guide for common network topologies. Includes star, mesh, ring, and hybrid network designs with explanations.",
    type: "image",
    url: "https://resources.com/network-diagrams.png",
    category: "Networking",
    fileSize: "2.1 MB",
    addedDate: "2025-11-25",
    tags: ["Beginner Friendly"],
  },
  {
    id: "6",
    title: "Data Science with Python and Pandas",
    description: "Learn data analysis, visualization, and machine learning using Python libraries. Real-world datasets and projects included.",
    type: "video",
    url: "https://youtube.com/data-science-python",
    category: "Data Science",
    author: "Data Science Hub",
    duration: "15 hours",
    addedDate: "2025-11-19",
    tags: ["Beginner Friendly", "Hands-on"],
  },
  {
    id: "7",
    title: "Resume Building for IT Professionals",
    description: "Craft a compelling resume that stands out to tech recruiters. Includes templates, examples, and industry-specific tips.",
    type: "pdf",
    url: "https://career-resources.com/resume-guide.pdf",
    category: "Career Development",
    author: "Career Coach Pro",
    fileSize: "1.8 MB",
    addedDate: "2025-11-21",
    tags: ["Free", "Tutorial"],
  },
  {
    id: "8",
    title: "CompTIA Security+ Official Resources",
    description: "Official study materials and practice tests for CompTIA Security+ certification. Prepare effectively for the SY0-601 exam.",
    type: "link",
    url: "https://comptia.org/security-plus",
    category: "Certifications",
    author: "CompTIA",
    addedDate: "2025-11-17",
    tags: ["Certification Prep", "Free"],
  },
  {
    id: "9",
    title: "Git and GitHub Complete Tutorial",
    description: "Master version control with Git and GitHub. Learn branching, merging, pull requests, and collaborative development workflows.",
    type: "video",
    url: "https://youtube.com/git-github-tutorial",
    category: "Programming",
    author: "Code Academy",
    duration: "6 hours",
    addedDate: "2025-11-23",
    tags: ["Beginner Friendly", "Hands-on", "Tutorial"],
  },
  {
    id: "10",
    title: "Azure Architecture Patterns",
    description: "Explore design patterns for building scalable and resilient applications on Microsoft Azure. Includes reference architectures.",
    type: "document",
    url: "https://azure-patterns.com",
    category: "Cloud Computing",
    author: "Microsoft Azure Team",
    addedDate: "2025-11-16",
    tags: ["Advanced"],
  },
  {
    id: "11",
    title: "DevOps Roadmap 2025",
    description: "Visual roadmap showing the skills and technologies needed to become a DevOps engineer. Updated for 2025 trends.",
    type: "image",
    url: "https://roadmap.sh/devops",
    category: "DevOps",
    addedDate: "2025-11-24",
    tags: ["Beginner Friendly", "Free"],
  },
  {
    id: "12",
    title: "Linux Command Line Cheat Sheet",
    description: "Quick reference guide for essential Linux commands. Perfect for daily use and learning command-line basics.",
    type: "pdf",
    url: "https://linux-cheatsheet.com/download.pdf",
    category: "Programming",
    fileSize: "850 KB",
    addedDate: "2025-11-14",
    tags: ["Free", "Tutorial"],
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
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
                <p className="text-2xl font-bold">{sampleResources.length}+</p>
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
        <ResourcesClient initialResources={sampleResources} />
      </main>

      <Footer />
    </div>
  );
}
