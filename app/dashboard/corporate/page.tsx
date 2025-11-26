import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Building2,
  Users,
  Briefcase,
  TrendingUp,
  Award,
  Calendar,
  Settings,
  Bell,
  CreditCard,
  UserPlus,
  FileText,
  BarChart3,
  CheckCircle2,
  DollarSign,
  Star,
  Eye,
} from "lucide-react";

export default function CorporateDashboardPage() {
  // Mock corporate user data
  const company = {
    name: "TechCorp Solutions",
    membershipType: "Gold", // Bronze, Silver, Gold, Platinum
    membershipPrice: 1000,
    memberSince: "January 2025",
    nextRenewal: "January 2026",
    employeeSlots: 20,
    employeesActive: 15,
    jobPostings: 5,
    sponsorshipLevel: "Gold Sponsor",
  };

  // Corporate stats
  const corporateStats = [
    { 
      label: "Active Employees", 
      value: `${company.employeesActive}/${company.employeeSlots}`, 
      icon: Users,
      color: "violet"
    },
    { 
      label: "Job Postings", 
      value: company.jobPostings.toString(), 
      icon: Briefcase,
      color: "purple"
    },
    { 
      label: "Applications", 
      value: "43", 
      icon: FileText,
      color: "fuchsia"
    },
    { 
      label: "Profile Views", 
      value: "328", 
      icon: Eye,
      color: "pink"
    },
  ];

  // Active job postings
  const activeJobs = [
    { 
      title: "Senior Full Stack Developer", 
      applications: 18, 
      views: 142, 
      posted: "5 days ago",
      status: "Active"
    },
    { 
      title: "DevOps Engineer", 
      applications: 12, 
      views: 98, 
      posted: "1 week ago",
      status: "Active"
    },
    { 
      title: "Cloud Architect", 
      applications: 13, 
      views: 88, 
      posted: "2 weeks ago",
      status: "Active"
    },
  ];

  // Employee members
  const employeeMembers = [
    { name: "Sarah Johnson", role: "CTO", status: "Active", joined: "Jan 2025" },
    { name: "Michael Chen", role: "Engineering Manager", status: "Active", joined: "Jan 2025" },
    { name: "Emily Rodriguez", role: "Senior Developer", status: "Active", joined: "Feb 2025" },
    { name: "David Kim", role: "DevOps Lead", status: "Active", joined: "Feb 2025" },
    { name: "Lisa Martinez", role: "QA Manager", status: "Active", joined: "Mar 2025" },
  ];

  // Membership features based on tier
  const tierFeatures = {
    Bronze: { slots: 6, color: "orange" },
    Silver: { slots: 10, color: "slate" },
    Gold: { slots: 20, color: "yellow" },
    Platinum: { slots: "Unlimited", color: "purple" },
  };

  const currentTier = tierFeatures[company.membershipType as keyof typeof tierFeatures];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Dashboard Header */}
      <section className="bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-8 h-8" />
                <Badge className="bg-white/20 text-white border-0">
                  {company.membershipType} Member
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{company.name}</h1>
              <p className="text-violet-100">{company.sponsorshipLevel} • Member since {company.memberSince}</p>
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
              <Card className="p-6 bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 text-white border-0">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-6 h-6" />
                      <Badge className="bg-white/20 text-white border-0">
                        Corporate Account
                      </Badge>
                    </div>
                    <h2 className="text-2xl font-bold mb-1">{company.membershipType} Membership</h2>
                    <p className="text-yellow-100">${company.membershipPrice}/year</p>
                  </div>
                  <Link href="/membership">
                    <Button className="bg-white text-purple-600 hover:bg-violet-50">
                      Upgrade
                    </Button>
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-2xl font-bold">{typeof company.employeeSlots === "string" && company.employeeSlots === "Unlimited" ? "∞" : company.employeeSlots}</div>
                    <div className="text-xs text-yellow-100">Employee Slots</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-2xl font-bold">Unlimited</div>
                    <div className="text-xs text-yellow-100">Job Postings</div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Sponsor recognition at annual event</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Free job posting on the job board</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Priority access to talent pool</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Dedicated account manager</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/20 flex items-center justify-between text-sm">
                  <span>Renews on {company.nextRenewal}</span>
                  <Button variant="ghost" className="text-white hover:bg-white/10 p-0">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Manage Billing
                  </Button>
                </div>
              </Card>

              {/* Stats Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {corporateStats.map((stat, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-${stat.color}-100 dark:bg-${stat.color}-900/30 flex items-center justify-center`}>
                        <stat.icon className={`w-5 h-5 text-${stat.color}-600 dark:text-${stat.color}-400`} />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Active Job Postings */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-purple-600" />
                    Active Job Postings
                  </h3>
                  <Link href="/jobs">
                    <Button size="sm">
                      <UserPlus className="w-4 h-4 mr-2" />
                      Post New Job
                    </Button>
                  </Link>
                </div>
                <div className="space-y-4">
                  {activeJobs.map((job, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg border hover:border-purple-500 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold mb-1">{job.title}</h4>
                          <p className="text-sm text-muted-foreground">Posted {job.posted}</p>
                        </div>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          {job.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2 text-sm">
                          <FileText className="w-4 h-4 text-muted-foreground" />
                          <span>{job.applications} applications</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Eye className="w-4 h-4 text-muted-foreground" />
                          <span>{job.views} views</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Employee Members */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Users className="w-5 h-5 text-fuchsia-600" />
                    Employee Members ({company.employeesActive}/{company.employeeSlots})
                  </h3>
                  <Button size="sm" variant="outline" className="text-slate-900 dark:text-slate-100">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Add Employee
                  </Button>
                </div>
                <div className="space-y-3">
                  {employeeMembers.map((employee, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg border"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                          {employee.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div>
                          <div className="font-medium">{employee.name}</div>
                          <div className="text-sm text-muted-foreground">{employee.role}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 mb-1">
                          {employee.status}
                        </Badge>
                        <div className="text-xs text-muted-foreground">Joined {employee.joined}</div>
                      </div>
                    </div>
                  ))}
                </div>
                {typeof company.employeeSlots === "number" && (
                  <div className="mt-4 p-3 bg-violet-50 dark:bg-violet-900/20 rounded-lg text-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Slots Available</span>
                      <span className="text-violet-600 dark:text-violet-400 font-bold">
                        {company.employeeSlots - company.employeesActive} remaining
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-violet-600 to-purple-600 h-2 rounded-full" 
                        style={{ width: `${(company.employeesActive / company.employeeSlots) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </Card>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start text-slate-900 dark:text-slate-100">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Post a Job
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-slate-900 dark:text-slate-100">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Add Employee
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-slate-900 dark:text-slate-100">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    View Analytics
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-slate-900 dark:text-slate-100">
                    <Calendar className="w-4 h-4 mr-2" />
                    Event Sponsorship
                  </Button>
                </div>
              </Card>

              {/* Sponsorship Benefits */}
              <Card className="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 border-violet-200">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <h3 className="text-lg font-bold">Sponsor Benefits</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Logo featured in annual event program</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Recognition on event website</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Priority booth placement</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Exclusive networking sessions</span>
                  </div>
                </div>
              </Card>

              {/* Hiring Performance */}
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-4">Hiring Performance</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Application Rate</span>
                      <span className="text-sm text-green-600 font-semibold">+24%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-600 to-emerald-600 h-2 rounded-full" style={{ width: "76%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Profile Views</span>
                      <span className="text-sm text-blue-600 font-semibold">+18%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 h-2 rounded-full" style={{ width: "62%" }}></div>
                    </div>
                  </div>
                  <div className="pt-3 border-t">
                    <div className="text-xs text-muted-foreground mb-2">vs. last month</div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium">Strong performance</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Upgrade Prompt */}
              {company.membershipType !== "Platinum" && (
                <Card className="p-6 bg-gradient-to-br from-violet-600 to-purple-600 text-white border-0">
                  <h3 className="text-lg font-bold mb-2">Upgrade to Platinum</h3>
                  <p className="text-sm text-violet-100 mb-4">
                    Get unlimited employee memberships and premium benefits
                  </p>
                  <Link href="/membership">
                    <Button className="w-full bg-white text-purple-600 hover:bg-violet-50">
                      Learn More
                    </Button>
                  </Link>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
