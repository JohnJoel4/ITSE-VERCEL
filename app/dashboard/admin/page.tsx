import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Users,
  Building2,
  Briefcase,
  Calendar,
  BookOpen,
  Shield,
  Settings,
  Bell,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Eye,
  UserPlus,
  FileText,
  BarChart3,
  CheckCircle2,
  XCircle,
  Clock,
  AlertTriangle,
  Mail,
  MessageSquare,
  Activity,
  Database,
  Ban,
  Edit,
  Trash2,
} from "lucide-react";

export default function AdminDashboardPage() {
  // Mock admin data
  const adminStats = [
    { 
      label: "Total Users", 
      value: "847", 
      change: "+12%",
      trend: "up",
      icon: Users,
      color: "violet"
    },
    { 
      label: "Corporate Accounts", 
      value: "43", 
      change: "+8%",
      trend: "up",
      icon: Building2,
      color: "purple"
    },
    { 
      label: "Active Jobs", 
      value: "156", 
      change: "+24",
      trend: "up",
      icon: Briefcase,
      color: "fuchsia"
    },
    { 
      label: "Monthly Revenue", 
      value: "$28.5K", 
      change: "+18%",
      trend: "up",
      icon: DollarSign,
      color: "emerald"
    },
  ];

  // Membership breakdown
  const membershipStats = [
    { type: "Individual", count: 412, revenue: "$30,900" },
    { type: "Student", count: 268, revenue: "$7,772" },
    { type: "Bronze", count: 18, revenue: "$6,300" },
    { type: "Silver", count: 15, revenue: "$9,000" },
    { type: "Gold", count: 8, revenue: "$8,000" },
    { type: "Platinum", count: 2, revenue: "$5,000" },
  ];

  // Recent users
  const recentUsers = [
    { name: "Sarah Johnson", email: "sarah.j@email.com", type: "Individual", status: "Active", joined: "2 hours ago" },
    { name: "TechCorp Inc.", email: "admin@techcorp.com", type: "Gold", status: "Active", joined: "5 hours ago" },
    { name: "Michael Chen", email: "m.chen@email.com", type: "Student", status: "Pending", joined: "1 day ago" },
    { name: "DataSoft LLC", email: "contact@datasoft.com", type: "Silver", status: "Active", joined: "2 days ago" },
  ];

  // System alerts
  const systemAlerts = [
    { level: "warning", message: "High server load detected", time: "10 minutes ago" },
    { level: "info", message: "Scheduled maintenance in 2 days", time: "2 hours ago" },
    { level: "success", message: "Backup completed successfully", time: "6 hours ago" },
  ];

  // Content stats
  const contentStats = [
    { label: "Total Events", value: 48, pending: 0 },
    { label: "Job Postings", value: 156, pending: 0 },
    { label: "Resources", value: 324, pending: 0 },
    { label: "User Reports", value: 8, pending: 8 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Admin Header */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-8 h-8" />
                <Badge className="bg-red-600 text-white border-0">
                  Admin Access
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Admin Dashboard</h1>
              <p className="text-slate-300">System Overview & Management</p>
            </div>
            <div className="flex gap-3">
              <Button className="bg-white text-purple-600 hover:bg-violet-50">
                <Bell className="w-4 h-4 mr-2" />
                Alerts (3)
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
          {/* Top Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {adminStats.map((stat, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-${stat.color}-100 dark:bg-${stat.color}-900/30 flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 text-${stat.color}-600 dark:text-${stat.color}-400`} />
                  </div>
                  <Badge variant={stat.trend === "up" ? "default" : "destructive"} className="flex items-center gap-1">
                    {stat.trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    {stat.change}
                  </Badge>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Recent Users */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Users className="w-5 h-5 text-violet-600" />
                    Recent Users
                  </h3>
                  <Link href="/dashboard/admin/users">
                    <Button size="sm" variant="outline" className="text-slate-900 dark:text-slate-100">
                      View All
                    </Button>
                  </Link>
                </div>
                <div className="space-y-3">
                  {recentUsers.map((user, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg border"
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                          {user.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-muted-foreground">{user.email}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <Badge variant="outline">{user.type}</Badge>
                          <div className="text-xs text-muted-foreground mt-1">{user.joined}</div>
                        </div>
                        <Badge variant={user.status === "Active" ? "default" : "secondary"}>
                          {user.status}
                        </Badge>
                        <div className="flex gap-1">
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-red-600">
                            <Ban className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Membership Breakdown */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-fuchsia-600" />
                    Membership Breakdown
                  </h3>
                </div>
                <div className="space-y-4">
                  {membershipStats.map((membership, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-20 font-medium">{membership.type}</div>
                        <div className="flex-1">
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-violet-600 to-purple-600 h-2 rounded-full" 
                              style={{ width: `${(membership.count / 847) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-8 ml-6">
                        <div className="text-right">
                          <div className="font-semibold">{membership.count}</div>
                          <div className="text-xs text-muted-foreground">members</div>
                        </div>
                        <div className="text-right w-20">
                          <div className="font-semibold text-green-600">{membership.revenue}</div>
                          <div className="text-xs text-muted-foreground">revenue</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Total</span>
                    <div className="flex items-center gap-8">
                      <div className="text-right">
                        <div className="font-bold text-lg">723</div>
                        <div className="text-xs text-muted-foreground">total members</div>
                      </div>
                      <div className="text-right w-20">
                        <div className="font-bold text-lg text-green-600">$66,972</div>
                        <div className="text-xs text-muted-foreground">total revenue</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Content Management */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Database className="w-5 h-5 text-blue-600" />
                    Content Overview
                  </h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {contentStats.map((content, index) => (
                    <div key={index} className="p-4 rounded-lg border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{content.label}</span>
                        {content.pending > 0 && (
                          <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                            {content.pending} pending
                          </Badge>
                        )}
                      </div>
                      <div className="text-2xl font-bold">{content.value}</div>
                      <div className="mt-3 flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1 text-slate-900 dark:text-slate-100">
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 text-slate-900 dark:text-slate-100">
                          <Edit className="w-4 h-4 mr-1" />
                          Manage
                        </Button>
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
                  <Button variant="outline" className="w-full justify-start text-slate-900 dark:text-slate-100">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Add New User
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-slate-900 dark:text-slate-100">
                    <Building2 className="w-4 h-4 mr-2" />
                    Add Corporate Account
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-slate-900 dark:text-slate-100">
                    <Calendar className="w-4 h-4 mr-2" />
                    Create Event
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-slate-900 dark:text-slate-100">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Announcement
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-slate-900 dark:text-slate-100">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Generate Report
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-slate-900 dark:text-slate-100">
                    <Settings className="w-4 h-4 mr-2" />
                    System Settings
                  </Button>
                </div>
              </Card>

              {/* System Alerts */}
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  System Alerts
                </h3>
                <div className="space-y-3">
                  {systemAlerts.map((alert, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border-l-4 ${
                        alert.level === "warning" 
                          ? "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500" 
                          : alert.level === "success"
                          ? "bg-green-50 dark:bg-green-900/20 border-green-500"
                          : "bg-blue-50 dark:bg-blue-900/20 border-blue-500"
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {alert.level === "warning" && <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5" />}
                        {alert.level === "success" && <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />}
                        {alert.level === "info" && <Activity className="w-4 h-4 text-blue-600 mt-0.5" />}
                        <div className="flex-1">
                          <p className="text-sm font-medium">{alert.message}</p>
                          <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* User Feedback */}
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Recent Feedback
                </h3>
                <div className="space-y-4">
                  <div className="pb-4 border-b last:border-0">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">Feature Request</Badge>
                      <span className="text-xs text-muted-foreground">2 hours ago</span>
                    </div>
                    <p className="text-sm">"Would love to see a mobile app version"</p>
                    <p className="text-xs text-muted-foreground mt-1">- Sarah J.</p>
                  </div>
                  <div className="pb-4 border-b last:border-0">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">Bug Report</Badge>
                      <span className="text-xs text-muted-foreground">5 hours ago</span>
                    </div>
                    <p className="text-sm">"Job filter not working properly"</p>
                    <p className="text-xs text-muted-foreground mt-1">- Mike C.</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">Compliment</Badge>
                      <span className="text-xs text-muted-foreground">1 day ago</span>
                    </div>
                    <p className="text-sm">"Great platform for networking!"</p>
                    <p className="text-xs text-muted-foreground mt-1">- Emily R.</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="w-full mt-4">
                  View All Feedback
                </Button>
              </Card>

              {/* Platform Health */}
              <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-900 border-green-200">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <h3 className="text-lg font-bold">Platform Health</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span>Server Status</span>
                    <Badge className="bg-green-600">Operational</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Database</span>
                    <Badge className="bg-green-600">Healthy</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>API Response</span>
                    <span className="font-semibold">98ms</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Uptime</span>
                    <span className="font-semibold">99.97%</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
