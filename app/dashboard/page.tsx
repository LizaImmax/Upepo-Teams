import Link from "next/link";
import { 
  Users, 
  Target, 
  Award, 
  Calendar,
  CheckCircle2,
  Clock,
  TrendingUp,
  MessageSquare,
  ArrowRight,
  BookOpen,
  Zap
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-softCream">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Upepo Teams Logo" className="w-10 h-10 object-contain" />
              <span className="text-xl font-bold text-darkGray">Upepo Teams</span>
            </Link>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-6">
                <Link href="/" className="text-darkGray hover:text-energeticOrange">Home</Link>
                <Link href="/about" className="text-darkGray hover:text-energeticOrange">About</Link>
                <Link href="/teams" className="text-darkGray hover:text-energeticOrange">Teams</Link>
                <Link href="/projects" className="text-darkGray hover:text-energeticOrange">Projects</Link>
                <Link href="/mentors" className="text-darkGray hover:text-energeticOrange">Mentors</Link>
                <Link href="/portfolio" className="text-darkGray hover:text-energeticOrange">Portfolio</Link>
                <Link href="/dashboard" className="text-energeticOrange font-semibold">Dashboard</Link>
              </div>
              <div className="flex items-center gap-3">
                <Link href="/dashboard" className="text-energeticOrange font-semibold">Dashboard</Link>
                <Link href="/portfolio" className="text-darkGray hover:text-energeticOrange">Portfolio</Link>
                <div className="w-10 h-10 bg-gradient-to-br from-energeticOrange to-trustworthyBlue rounded-full flex items-center justify-center text-white font-bold cursor-pointer">
                  JD
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Welcome back, John! 👋</h1>
          <p className="text-lg text-slate-600">
            You're making great progress, building momentum toward your next big step, whether that's landing a job, launching a project, or starting something of your own. Your team believes in you, and so do we!
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Active Teams", value: "2", icon: Users, color: "text-blue-600" },
            { label: "Projects Completed", value: "3", icon: CheckCircle2, color: "text-green-600" },
            { label: "Skills Learned", value: "24", icon: TrendingUp, color: "text-purple-600" },
            { label: "Hours This Week", value: "12", icon: Clock, color: "text-orange-600" },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <Icon className={`w-6 h-6 ${stat.color} mb-2`} />
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Active Teams */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Users className="w-5 h-5 text-upepo-blue" />
                  My Teams
                </h2>
                <Link href="/teams" className="text-upepo-blue hover:underline text-sm font-medium">
                  Browse Teams
                </Link>
              </div>

              <div className="space-y-4">
                {/* Team 1 */}
                <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Cloud Infrastructure Squad</h3>
                      <p className="text-sm text-slate-600">Multi-Cloud Deployment Platform</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                      ACTIVE
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                    <span>Week 5 of 10</span>
                    <span>•</span>
                    <span>Team Lead</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2 mb-3">
                    <div className="bg-upepo-blue h-2 rounded-full" style={{ width: "50%" }}></div>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href="/teams/1"
                      className="flex-1 text-center px-4 py-2 bg-upepo-blue text-white rounded-lg hover:bg-upepo-blue/90 transition text-sm font-medium"
                    >
                      View Team
                    </Link>
                    <button className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition text-sm font-medium">
                      Check-in
                    </button>
                  </div>
                </div>

                {/* Team 2 */}
                <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Mental Health App Team</h3>
                      <p className="text-sm text-slate-600">Student Wellness Tracker</p>
                    </div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                      FORMING
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                    <span>Recruiting members</span>
                    <span>•</span>
                    <span>Backend Dev</span>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href="/teams/2"
                      className="flex-1 text-center px-4 py-2 bg-slate-100 text-slate-900 rounded-lg hover:bg-slate-200 transition text-sm font-medium"
                    >
                      View Team
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                href="/teams/create"
                className="mt-4 block w-full text-center px-4 py-3 border-2 border-dashed border-slate-300 rounded-lg hover:border-upepo-blue hover:bg-upepo-blue/5 transition text-slate-600 hover:text-upepo-blue font-medium"
              >
                + Create New Team
              </Link>
            </div>

            {/* Upcoming Sessions */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-upepo-blue" />
                  Upcoming Sessions
                </h2>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-4 p-4 border border-slate-200 rounded-lg">
                  <div className="w-12 h-12 bg-upepo-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-upepo-blue" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 mb-1">1-on-1 with Sarah Chen</h4>
                    <p className="text-sm text-slate-600 mb-2">Mentor Session - Architecture Review</p>
                    <p className="text-sm text-slate-500">Tomorrow at 3:00 PM (60 min)</p>
                  </div>
                  <button className="px-4 py-2 text-sm font-medium text-upepo-blue hover:bg-upepo-blue/10 rounded-lg transition">
                    Join
                  </button>
                </div>

                <div className="flex items-start gap-4 p-4 border border-slate-200 rounded-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 mb-1">Team Standup</h4>
                    <p className="text-sm text-slate-600 mb-2">Cloud Infrastructure Squad</p>
                    <p className="text-sm text-slate-500">Friday at 10:00 AM (30 min)</p>
                  </div>
                  <button className="px-4 py-2 text-sm font-medium text-green-600 hover:bg-green-50 rounded-lg transition">
                    Join
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-upepo-blue" />
                Recent Activity
              </h2>

              <div className="space-y-4">
                {[
                  { type: "achievement", text: "Completed Week 4 check-in", time: "2 hours ago", icon: CheckCircle2, color: "text-green-600" },
                  { type: "feedback", text: "Received feedback from Marcus J.", time: "5 hours ago", icon: MessageSquare, color: "text-blue-600" },
                  { type: "milestone", text: "Deployed to staging environment", time: "Yesterday", icon: Target, color: "text-purple-600" },
                  { type: "skill", text: "Earned 'Terraform Expert' badge", time: "2 days ago", icon: Award, color: "text-yellow-600" },
                ].map((activity, idx) => {
                  const Icon = activity.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3">
                      <Icon className={`w-5 h-5 ${activity.color} mt-0.5`} />
                      <div className="flex-1">
                        <p className="text-slate-900">{activity.text}</p>
                        <p className="text-sm text-slate-500">{activity.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* This Week's Goals */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-upepo-blue" />
                This Week's Goals
              </h2>
              <ul className="space-y-3">
                {[
                  { text: "Complete API endpoints", done: true },
                  { text: "Write unit tests", done: true },
                  { text: "Code review for teammates", done: false },
                  { text: "Update documentation", done: false },
                ].map((goal, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      goal.done ? "bg-green-500 border-green-500" : "border-slate-300"
                    }`}>
                      {goal.done && <CheckCircle2 className="w-4 h-4 text-white" />}
                    </div>
                    <span className={goal.done ? "text-slate-500 line-through" : "text-slate-900"}>
                      {goal.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills Progress */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-upepo-blue" />
                Skills Progress
              </h2>
              <div className="space-y-4">
                {[
                  { skill: "AWS", level: 75 },
                  { skill: "Terraform", level: 60 },
                  { skill: "Python", level: 85 },
                  { skill: "Docker", level: 70 },
                ].map((item) => (
                  <div key={item.skill}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-slate-900">{item.skill}</span>
                      <span className="text-sm text-slate-600">{item.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-upepo-blue to-upepo-teal h-2 rounded-full" 
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Resources */}
            <div className="bg-gradient-to-br from-upepo-blue to-upepo-teal rounded-xl p-6 text-white">
              <BookOpen className="w-10 h-10 mb-3 opacity-90" />
              <h3 className="text-lg font-bold mb-2">Learning Resources</h3>
              <p className="text-white/90 text-sm mb-4">
                Access curated resources for your current project tech stack
              </p>
              <button className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-2 rounded-lg transition font-medium text-sm flex items-center justify-center gap-2">
                Browse Resources
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Upgrade CTA */}
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
              <Award className="w-10 h-10 text-yellow-600 mb-3" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Upgrade to Pro</h3>
              <p className="text-slate-600 text-sm mb-4">
                Unlock unlimited teams, 1-on-1 mentorship, and advanced portfolio features
              </p>
              <Link 
                href="/pricing"
                className="block w-full bg-gradient-to-r from-upepo-blue to-upepo-teal text-white text-center px-4 py-2 rounded-lg hover:opacity-90 transition font-medium text-sm"
              >
                Upgrade Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
