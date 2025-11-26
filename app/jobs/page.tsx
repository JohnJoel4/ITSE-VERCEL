import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { JobsClient } from "@/components/jobs-client";
import { Job } from "@/components/job-card";

// Sample jobs data
const sampleJobs: Job[] = [
  {
    id: "1",
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc",
    location: "Seattle, WA",
    type: "full-time",
    experience: "senior",
    salary: { min: 130000, max: 170000, currency: "$" },
    remote: true,
    description: "We're looking for a senior full stack developer to join our growing team. You'll work on cutting-edge web applications using React, Node.js, and cloud technologies.",
    requirements: ["5+ years experience", "React", "Node.js", "AWS"],
    postedDate: "2025-11-20",
    category: "Software Development",
  },
  {
    id: "2",
    title: "Data Science Engineer",
    company: "DataWorks Analytics",
    location: "San Francisco, CA",
    type: "full-time",
    experience: "mid",
    salary: { min: 110000, max: 150000, currency: "$" },
    remote: true,
    description: "Join our data science team to build machine learning models and analyze large datasets. Experience with Python, TensorFlow, and statistical analysis required.",
    requirements: ["3+ years experience", "Python", "Machine Learning", "SQL"],
    postedDate: "2025-11-22",
    category: "Data Science",
  },
  {
    id: "3",
    title: "DevOps Engineer",
    company: "CloudNative Systems",
    location: "Austin, TX",
    type: "full-time",
    experience: "mid",
    salary: { min: 120000, max: 160000, currency: "$" },
    remote: false,
    description: "We need a DevOps engineer to manage our CI/CD pipelines and cloud infrastructure. Strong knowledge of Kubernetes, Docker, and AWS is essential.",
    requirements: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    postedDate: "2025-11-18",
    category: "DevOps",
  },
  {
    id: "4",
    title: "Cybersecurity Analyst",
    company: "SecureNet Corporation",
    location: "Washington, DC",
    type: "full-time",
    experience: "senior",
    salary: { min: 140000, max: 180000, currency: "$" },
    remote: false,
    description: "Protect our systems and networks from cyber threats. You'll conduct security assessments, implement security measures, and respond to incidents.",
    requirements: ["CISSP", "Security+", "5+ years experience", "Incident Response"],
    postedDate: "2025-11-15",
    category: "Cybersecurity",
  },
  {
    id: "5",
    title: "Junior Software Developer",
    company: "StartUp Innovators",
    location: "Portland, OR",
    type: "full-time",
    experience: "entry",
    salary: { min: 70000, max: 90000, currency: "$" },
    remote: true,
    description: "Perfect opportunity for new graduates! Learn from experienced developers while building modern web applications. Training provided.",
    requirements: ["Bachelor's degree", "JavaScript", "HTML/CSS", "Git"],
    postedDate: "2025-11-23",
    category: "Software Development",
  },
  {
    id: "6",
    title: "Cloud Architect",
    company: "Enterprise Cloud Solutions",
    location: "New York, NY",
    type: "full-time",
    experience: "lead",
    salary: { min: 180000, max: 230000, currency: "$" },
    remote: true,
    description: "Lead cloud architecture initiatives for enterprise clients. Design scalable, secure, and cost-effective cloud solutions using AWS, Azure, and GCP.",
    requirements: ["10+ years experience", "AWS/Azure/GCP", "Architecture", "Leadership"],
    postedDate: "2025-11-21",
    category: "Cloud Computing",
  },
  {
    id: "7",
    title: "IT Support Specialist",
    company: "TechHelp Services",
    location: "Boston, MA",
    type: "part-time",
    experience: "entry",
    salary: { min: 40000, max: 55000, currency: "$" },
    remote: false,
    description: "Provide technical support to end users, troubleshoot hardware and software issues, and maintain IT systems. Great opportunity for career growth.",
    requirements: ["CompTIA A+", "Customer Service", "Windows/Mac", "Troubleshooting"],
    postedDate: "2025-11-24",
    category: "IT Support",
  },
  {
    id: "8",
    title: "Network Engineer (Contract)",
    company: "Network Pros LLC",
    location: "Chicago, IL",
    type: "contract",
    experience: "mid",
    salary: { min: 100000, max: 130000, currency: "$" },
    remote: false,
    description: "6-month contract position to design and implement network infrastructure. CCNA or CCNP certification required.",
    requirements: ["CCNA/CCNP", "Routing/Switching", "Network Security", "3+ years"],
    postedDate: "2025-11-19",
    category: "Network Engineering",
  },
  {
    id: "9",
    title: "Software Engineering Intern",
    company: "Innovation Labs",
    location: "Palo Alto, CA",
    type: "internship",
    experience: "entry",
    salary: { min: 25000, max: 35000, currency: "$" },
    remote: true,
    description: "Summer internship program for computer science students. Work on real projects with mentorship from senior engineers.",
    requirements: ["Currently enrolled", "Programming skills", "CS major", "Eager to learn"],
    postedDate: "2025-11-25",
    category: "Software Development",
  },
  {
    id: "10",
    title: "Machine Learning Engineer",
    company: "AI Innovations Inc",
    location: "Remote",
    type: "full-time",
    experience: "senior",
    salary: { min: 150000, max: 200000, currency: "$" },
    remote: true,
    description: "Build and deploy ML models at scale. Work with state-of-the-art technologies including PyTorch, TensorFlow, and MLOps tools.",
    requirements: ["ML/DL expertise", "Python", "PyTorch/TensorFlow", "MLOps"],
    postedDate: "2025-11-17",
    category: "Data Science",
  },
];

export default function JobsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Find Your Dream IT Job
            </h1>
            <p className="text-lg md:text-xl text-blue-50">
              Discover opportunities from top tech companies. Your next career move starts here.
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
                <p className="text-2xl font-bold">{sampleJobs.length}+</p>
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
        <JobsClient initialJobs={sampleJobs} />
      </main>

      <Footer />
    </div>
  );
}
