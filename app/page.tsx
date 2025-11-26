import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { 
  Users, 
  Calendar, 
  Briefcase, 
  BookOpen, 
  Mail, 
  Award,
  TrendingUp,
  Globe,
  Zap,
  Target,
  ArrowRight,
  CheckCircle2,
  Star
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />

      {/* Stats Section */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-violet-600 dark:text-violet-400">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Annual Events</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-fuchsia-600 dark:text-fuchsia-400">200+</div>
              <div className="text-sm text-muted-foreground mt-1">Job Openings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 dark:text-pink-400">100+</div>
              <div className="text-sm text-muted-foreground mt-1">Resources</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4" variant="outline">What We Offer</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Advance Your IT Career
            </h2>
            <p className="text-lg text-muted-foreground">
              Join a thriving community of IT professionals and access exclusive resources, events, and opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Membership Feature */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-violet-500 group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Membership</h3>
              <p className="text-muted-foreground mb-4">
                Join our community with flexible membership options for individuals, students, and corporations. Get exclusive access to events, networking, and career resources.
              </p>
              <Link href="/membership">
                <Button variant="ghost" className="group-hover:text-violet-600 p-0">
                  Explore Plans <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Card>

            {/* Events Feature */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-500 group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Professional Events</h3>
              <p className="text-muted-foreground mb-4">
                Attend workshops, conferences, and networking sessions. Filter by date, location, or topic to find events that match your interests and career goals.
              </p>
              <Link href="/events">
                <Button variant="ghost" className="group-hover:text-purple-600 p-0">
                  View Events <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Card>

            {/* Jobs Feature */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-fuchsia-500 group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-fuchsia-500 to-pink-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Job Portal</h3>
              <p className="text-muted-foreground mb-4">
                Discover exclusive IT job opportunities from top companies. Advanced filters help you find positions matching your skills, experience level, and salary expectations.
              </p>
              <Link href="/jobs">
                <Button variant="ghost" className="group-hover:text-fuchsia-600 p-0">
                  Browse Jobs <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Card>

            {/* Resources Feature */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-500 group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Learning Resources</h3>
              <p className="text-muted-foreground mb-4">
                Access a curated library of tutorials, courses, documentation, and tools. From video lessons to PDF guides, find everything you need to upskill.
              </p>
              <Link href="/resources">
                <Button variant="ghost" className="group-hover:text-blue-600 p-0">
                  Explore Resources <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Card>

            {/* Contact Feature */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-emerald-500 group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Get in Touch</h3>
              <p className="text-muted-foreground mb-4">
                Have questions or need assistance? Our team is here to help. Reach out through our contact form and we'll respond promptly to your inquiries.
              </p>
              <Link href="/contact">
                <Button variant="ghost" className="group-hover:text-emerald-600 p-0">
                  Contact Us <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Card>

            {/* Networking Feature */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-500 group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Network & Grow</h3>
              <p className="text-muted-foreground mb-4">
                Connect with fellow IT professionals, share knowledge, and build meaningful relationships that can accelerate your career and business growth.
              </p>
              <Link href="/events">
                <Button variant="ghost" className="group-hover:text-orange-600 p-0">
                  Start Networking <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4" variant="outline">Why ITSE?</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Your Success is Our Mission
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're committed to providing IT professionals with the tools, connections, and knowledge they need to thrive
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Industry-Leading Events</h3>
                  <p className="text-muted-foreground">
                    Participate in cutting-edge workshops and conferences led by industry experts and thought leaders
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Exclusive Job Opportunities</h3>
                  <p className="text-muted-foreground">
                    Access positions from top tech companies that you won't find on standard job boards
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/30 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-fuchsia-600 dark:text-fuchsia-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Curated Learning Materials</h3>
                  <p className="text-muted-foreground">
                    Stay ahead with hand-picked resources covering the latest technologies and best practices
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Vibrant Community</h3>
                  <p className="text-muted-foreground">
                    Connect with like-minded professionals who share your passion for technology and innovation
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Flexible Membership Options</h3>
                  <p className="text-muted-foreground">
                    Choose the plan that fits your needs, from individual to corporate memberships
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Dedicated Support</h3>
                  <p className="text-muted-foreground">
                    Our team is always ready to assist you with any questions or concerns you may have
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white border-0 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Elevate Your IT Career?
                </h2>
                <p className="text-lg text-violet-50 mb-8 max-w-2xl mx-auto">
                  Join hundreds of IT professionals who are already advancing their careers with ITSE. Get access to exclusive events, job opportunities, and resources today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/membership">
                    <Button size="lg" className="bg-white text-purple-600 hover:bg-violet-50 font-semibold px-8">
                      Become a Member
                    </Button>
                  </Link>
                  <Link href="/events">
                    <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white font-semibold px-8">
                      Explore Events
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">Success Stories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Members Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from professionals who have transformed their careers through ITSE
            </p>
          </div>

          {/* Scrolling Testimonials */}
          <div className="relative overflow-hidden max-w-6xl mx-auto">
            <div className="flex animate-scroll">
              {/* First set of testimonials */}
              <div className="flex gap-8 flex-shrink-0">
                <Card className="p-6 w-80 flex-shrink-0">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "ITSE events have been instrumental in expanding my professional network. I found my current job through a connection I made at their annual conference!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                      SK
                    </div>
                    <div>
                      <div className="font-semibold">Sarah Kim</div>
                      <div className="text-sm text-muted-foreground">Senior Developer</div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 w-80 flex-shrink-0">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "The resources library is a goldmine! I've upskilled in cloud technologies and earned certifications thanks to the curated materials available."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center text-white font-semibold">
                      MR
                    </div>
                    <div>
                      <div className="font-semibold">Michael Rodriguez</div>
                      <div className="text-sm text-muted-foreground">Systems Engineer</div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 w-80 flex-shrink-0">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "As a corporate member, we've connected with talented IT professionals and grown our team significantly. The job portal is incredibly effective!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-pink-600 flex items-center justify-center text-white font-semibold">
                      JC
                    </div>
                    <div>
                      <div className="font-semibold">Jennifer Chen</div>
                      <div className="text-sm text-muted-foreground">HR Director</div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex gap-8 flex-shrink-0">
                <Card className="p-6 w-80 flex-shrink-0">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "ITSE events have been instrumental in expanding my professional network. I found my current job through a connection I made at their annual conference!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                      SK
                    </div>
                    <div>
                      <div className="font-semibold">Sarah Kim</div>
                      <div className="text-sm text-muted-foreground">Senior Developer</div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 w-80 flex-shrink-0">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "The resources library is a goldmine! I've upskilled in cloud technologies and earned certifications thanks to the curated materials available."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center text-white font-semibold">
                      MR
                    </div>
                    <div>
                      <div className="font-semibold">Michael Rodriguez</div>
                      <div className="text-sm text-muted-foreground">Systems Engineer</div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 w-80 flex-shrink-0">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "As a corporate member, we've connected with talented IT professionals and grown our team significantly. The job portal is incredibly effective!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-pink-600 flex items-center justify-center text-white font-semibold">
                      JC
                    </div>
                    <div>
                      <div className="font-semibold">Jennifer Chen</div>
                      <div className="text-sm text-muted-foreground">HR Director</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
