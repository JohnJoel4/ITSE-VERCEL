import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  User,
  Calendar,
  Briefcase,
  BookOpen,
  Award,
  TrendingUp,
  Bell,
  Settings,
  CreditCard,
  Users,
  FileText,
  BarChart3,
  Star,
  Clock,
  CheckCircle2,
} from "lucide-react";

export default function DashboardPage() {
  // Mock user data - in real app, this would come from authentication
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    membershipType: "Individual", // Individual, Student, Bronze, Silver, Gold, Platinum
    membershipPrice: 75,
    memberSince: "January 2025",
    nextRenewal: "January 2026",
    isCorporate: false,
  };

  const isIndividual = user.membershipType === "Individual" || user.membershipType === "Student";

  // Stats for individual users
  const individualStats = [
    { label: "Events Attended", value: "12", icon: Calendar },
    { label: "Jobs Applied", value: "8", icon: Briefcase },
    { label: "Resources Accessed", value: "24", icon: BookOpen },
    { label: "Network Connections", value: "45", icon: Users },
  ];

  // Upcoming events
  const upcomingEvents = [
    { title: "Cloud Architecture Workshop", date: "Dec 5, 2025", status: "Registered" },
    { title: "Annual IT Summit", date: "Dec 15, 2025", status: "Free Access" },
    { title: "Networking Mixer", date: "Dec 20, 2025", status: "Available" },
  ];

  // Recent activity
  const recentActivity = [
    { action: "Viewed", item: "Senior DevOps Engineer position", time: "2 hours ago" },
    { action: "Downloaded", item: "AWS Certification Guide", time: "1 day ago" },
    { action: "Registered", item: "Cloud Architecture Workshop", time: "3 days ago" },
    { action: "Connected", item: "Sarah Johnson - Tech Lead", time: "1 week ago" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Dashboard Header */}
      <section className="bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome back, {user.name}!</h1>
              <p className="text-violet-100">Member since {user.memberSince}</p>
            </div>
            <div className="flex gap-3">
              <Button className="bg-white text-purple-600 hover:bg-violet-50">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Button className="bg-white text-purple-600 hover:bg-violet-50">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard Content */}
      <main className="flex-1 py-12 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Membership Card */}
              <Card className="p-6 bg-gradient-to-br from-violet-500 to-purple-600 text-white border-0">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-6 h-6" />
                      <Badge className="bg-white/20 text-white border-0">
                        {user.membershipType} Member
                      </Badge>
                    </div>
                    <h2 className="text-2xl font-bold mb-1">{user.membershipType} Membership</h2>
                    <p className="text-violet-100">${user.membershipPrice}/year</p>
                  </div>
                  <Link href="/membership">
                    <Button className="bg-white text-purple-600 hover:bg-violet-50">
                      Upgrade
                    </Button>
                  </Link>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Free access to all events</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Job posting site access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Networking opportunities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Exclusive discounts</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/20 flex items-center justify-between text-sm">
                  <span>Renews on {user.nextRenewal}</span>
                  <Button variant="ghost" className="text-white hover:bg-white/10 p-0">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Manage Billing
                  </Button>
                </div>
              </Card>

              {/* Stats Grid */}
              {isIndividual && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {individualStats.map((stat, index) => (
                    <Card key={index} className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center">
                          <stat.icon className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}

              {/* Upcoming Events */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-purple-600" />
                    Upcoming Events
                  </h3>
                  <Link href="/events">
                    <Button variant="ghost" size="sm">View All</Button>
                  </Link>
                </div>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg border hover:border-violet-500 transition-colors"
                    >
                      <div>
                        <h4 className="font-semibold mb-1">{event.title}</h4>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {event.date}
                        </p>
                      </div>
                      <Badge variant={event.status === "Registered" ? "default" : "outline"}>
                        {event.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Recent Activity */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-fuchsia-600" />
                    Recent Activity
                  </h3>
                </div>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 pb-4 border-b last:border-0">
                      <div className="w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center flex-shrink-0">
                        <FileText className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-medium">{activity.action}</span> {activity.item}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link href="/events">
                    <Button variant="outline" className="w-full justify-start text-slate-900 dark:text-slate-100">
                      <Calendar className="w-4 h-4 mr-2" />
                      Browse Events
                    </Button>
                  </Link>
                  <Link href="/jobs">
                    <Button variant="outline" className="w-full justify-start text-slate-900 dark:text-slate-100">
                      <Briefcase className="w-4 h-4 mr-2" />
                      Find Jobs
                    </Button>
                  </Link>
                  <Link href="/resources">
                    <Button variant="outline" className="w-full justify-start text-slate-900 dark:text-slate-100">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Learning Resources
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full justify-start text-slate-900 dark:text-slate-100">
                      <User className="w-4 h-4 mr-2" />
                      Contact Support
                    </Button>
                  </Link>
                </div>
              </Card>

              {/* Profile Completion */}
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-4">Profile Completion</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">85% Complete</span>
                      <span className="text-xs text-muted-foreground">Almost there!</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-violet-600 to-purple-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>Profile photo added</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>Contact information</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-4 h-4 rounded-full border-2 border-muted"></div>
                      <span>Add skills & interests</span>
                    </div>
                  </div>
                  <Button className="w-full" size="sm">Complete Profile</Button>
                </div>
              </Card>

              {/* Recommended Resources */}
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-4">Recommended for You</h3>
                <div className="space-y-4">
                  <div className="pb-4 border-b">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">Video</Badge>
                      <Badge variant="outline" className="text-xs">Trending</Badge>
                    </div>
                    <h4 className="font-medium text-sm mb-1">Kubernetes Essentials</h4>
                    <p className="text-xs text-muted-foreground">45 min course</p>
                  </div>
                  <div className="pb-4 border-b">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">PDF</Badge>
                    </div>
                    <h4 className="font-medium text-sm mb-1">DevOps Best Practices</h4>
                    <p className="text-xs text-muted-foreground">12 pages</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">Course</Badge>
                      <Badge variant="outline" className="text-xs">New</Badge>
                    </div>
                    <h4 className="font-medium text-sm mb-1">Cloud Security Fundamentals</h4>
                    <p className="text-xs text-muted-foreground">8 lessons</p>
                  </div>
                </div>
                <Link href="/resources">
                  <Button variant="ghost" size="sm" className="w-full mt-4">
                    View All Resources
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
