import Link from "next/link";
import { ArrowLeft, Users, Calendar, Code, Target, CheckCircle2, Clock, MessageSquare, Award, TrendingUp } from "lucide-react";

// Mock data - would come from database
const teamData = {
  id: "1",
  name: "Cloud Infrastructure Squad",
  description: "Building a multi-cloud deployment automation tool for startups. We're focused on creating a production-ready platform that makes it easy to deploy applications across AWS, Azure, and GCP from a single interface.",
  status: "ACTIVE",
  currentStage: "EXECUTION",
  weekNumber: 5,
  totalWeeks: 10,
  charter: "We value clear communication, respect for diverse perspectives, and learning from mistakes. We commit to showing up, supporting each other, and delivering quality work. Everyone's voice matters, and we celebrate both individual and team wins.",
  project: {
    id: "1",
    title: "Multi-Cloud Deployment Platform",
    type: "COMMUNITY_PROPOSED",
    difficulty: "INTERMEDIATE",
    techStack: ["AWS", "Terraform", "Python", "Docker", "React"],
  },
  members: [
    { id: "1", name: "Sarah Johnson", role: "Team Lead", image: null, skills: ["Leadership", "AWS", "Python"] },
    { id: "2", name: "Marcus Williams", role: "Technical Lead", image: null, skills: ["System Design", "Docker", "Terraform"] },
    { id: "3", name: "You", role: "Backend Developer", image: null, skills: ["Python", "APIs", "Databases"] },
    { id: "4", name: "Lisa Chen", role: "Frontend Developer", image: null, skills: ["React", "TypeScript", "UI/UX"] },
  ],
  openRoles: [
    { role: "DevOps Engineer", description: "Help with CI/CD pipeline and deployment automation", required: false },
  ],
  mentor: {
    name: "Dr. James Mitchell",
    title: "Senior Cloud Architect at AWS",
    expertise: ["Cloud Infrastructure", "DevOps", "Python"],
    image: null,
  },
  progress: {
    milestonesCompleted: 8,
    milestonesTotal: 15,
    lastCheckIn: "2 days ago",
    healthStatus: "green",
  },
};

const stages = [
  { name: "Learning", week: 1, completed: true },
  { name: "Planning", week: 2, completed: true },
  { name: "Execution", week: "3-8", completed: false, current: true },
  { name: "Reflection", week: 9, completed: false },
  { name: "Showcase", week: 10, completed: false },
];

export default function TeamDetailPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-upepo-blue to-upepo-teal rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">U</span>
              </div>
              <span className="text-xl font-bold text-slate-900">Upepo Teams</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-slate-600 hover:text-slate-900">Home</Link>
              <Link href="/about" className="text-slate-600 hover:text-slate-900">About</Link>
              <Link href="/teams" className="text-slate-600 hover:text-slate-900">Teams</Link>
              <Link href="/projects" className="text-slate-600 hover:text-slate-900">Projects</Link>
              <Link href="/mentors" className="text-slate-600 hover:text-slate-900">Mentors</Link>
              <Link href="/portfolio" className="text-slate-600 hover:text-slate-900">Portfolio</Link>
              <Link href="/dashboard" className="text-slate-600 hover:text-slate-900">Dashboard</Link>
              <Link href="/auth/signin" className="text-slate-600 hover:text-slate-900">Sign In</Link>
              <Link href="/auth/signup" className="bg-upepo-blue text-white px-6 py-2 rounded-lg hover:bg-upepo-blue/90 transition">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link href="/teams" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Teams
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h1 className="text-3xl font-bold text-slate-900">{teamData.name}</h1>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                      {teamData.status}
                    </span>
                  </div>
                  <p className="text-lg text-slate-600 mb-4">{teamData.description}</p>
                </div>
              </div>

              {/* Project Info */}
              <div className="bg-slate-50 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="w-5 h-5 text-upepo-blue" />
                  <span className="font-semibold text-slate-900">{teamData.project.title}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {teamData.project.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-upepo-blue/10 text-upepo-blue rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Progress */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-slate-700">Week {teamData.weekNumber} of {teamData.totalWeeks}</span>
                  <span className="text-sm text-slate-600">{Math.round((teamData.weekNumber / teamData.totalWeeks) * 100)}% Complete</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-upepo-blue to-upepo-teal h-3 rounded-full transition-all" 
                    style={{ width: `${(teamData.weekNumber / teamData.totalWeeks) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Project Stages */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {stages.map((stage, idx) => (
                  <div key={stage.name} className="flex items-center">
                    <div className={`flex flex-col items-center min-w-[100px] ${
                      stage.completed ? 'opacity-100' : stage.current ? 'opacity-100' : 'opacity-40'
                    }`}>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                        stage.completed ? 'bg-green-500' : stage.current ? 'bg-upepo-blue' : 'bg-slate-300'
                      }`}>
                        {stage.completed ? (
                          <CheckCircle2 className="w-6 h-6 text-white" />
                        ) : (
                          <span className="text-white font-bold">{idx + 1}</span>
                        )}
                      </div>
                      <span className="text-xs font-medium text-center">{stage.name}</span>
                      <span className="text-xs text-slate-500">Week {stage.week}</span>
                    </div>
                    {idx < stages.length - 1 && (
                      <div className={`w-8 h-0.5 mb-8 ${stage.completed ? 'bg-green-500' : 'bg-slate-300'}`}></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Team Charter */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-upepo-blue" />
                Team Charter
              </h2>
              <p className="text-slate-600">{teamData.charter}</p>
            </div>

            {/* Team Members */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-upepo-blue" />
                Team Members ({teamData.members.length}/6)
              </h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {teamData.members.map((member) => (
                  <div key={member.id} className="flex items-start gap-4 p-4 border border-slate-200 rounded-lg">
                    <div className="w-12 h-12 bg-gradient-to-br from-upepo-blue to-upepo-teal rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900">{member.name}</h3>
                      <p className="text-sm text-slate-600 mb-2">{member.role}</p>
                      <div className="flex flex-wrap gap-1">
                        {member.skills.map((skill) => (
                          <span key={skill} className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Open Roles */}
              {teamData.openRoles.length > 0 && (
                <div className="border-t pt-6">
                  <h3 className="font-semibold text-slate-900 mb-4">Open Roles</h3>
                  {teamData.openRoles.map((role) => (
                    <div key={role.role} className="p-4 border-2 border-dashed border-slate-300 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-slate-900">{role.role}</h4>
                          <p className="text-sm text-slate-600">{role.description}</p>
                        </div>
                        <button className="px-4 py-2 bg-upepo-blue text-white rounded-lg hover:bg-upepo-blue/90 transition text-sm font-medium">
                          Apply
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-upepo-blue" />
                Recent Activity
              </h2>
              <div className="space-y-4">
                {[
                  { type: "milestone", text: "Completed API endpoints for deployment service", time: "2 days ago", user: "Marcus" },
                  { type: "checkin", text: "Weekly check-in submitted - Team health: Green", time: "3 days ago", user: "Team" },
                  { type: "feedback", text: "Code review completed with mentor feedback", time: "4 days ago", user: "Dr. Mitchell" },
                  { type: "commit", text: "Merged PR #12: Add multi-cloud provider support", time: "5 days ago", user: "Sarah" },
                ].map((activity, idx) => (
                  <div key={idx} className="flex items-start gap-3 pb-4 border-b border-slate-100 last:border-0">
                    <div className="w-8 h-8 bg-upepo-blue/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      {activity.type === "milestone" && <CheckCircle2 className="w-4 h-4 text-upepo-blue" />}
                      {activity.type === "checkin" && <Calendar className="w-4 h-4 text-upepo-blue" />}
                      {activity.type === "feedback" && <MessageSquare className="w-4 h-4 text-upepo-blue" />}
                      {activity.type === "commit" && <Code className="w-4 h-4 text-upepo-blue" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-900">{activity.text}</p>
                      <p className="text-sm text-slate-500">{activity.user} · {activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Mentor Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-upepo-blue" />
                Your Mentor
              </h3>
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  {teamData.mentor.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{teamData.mentor.name}</h4>
                  <p className="text-sm text-slate-600">{teamData.mentor.title}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {teamData.mentor.expertise.map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
              <button className="w-full bg-slate-100 text-slate-900 px-4 py-2 rounded-lg hover:bg-slate-200 transition font-medium text-sm">
                Schedule Session
              </button>
            </div>

            {/* Next Milestone */}
            <div className="bg-gradient-to-br from-upepo-blue to-upepo-teal rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Next Milestone
              </h3>
              <p className="text-white/90 text-sm mb-3">
                Complete integration testing for Azure deployment module
              </p>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4" />
                <span>Due in 3 days</span>
              </div>
            </div>

            {/* Team Health */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-4">Team Health</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-600">Progress</span>
                    <span className="font-medium text-slate-900">
                      {teamData.progress.milestonesCompleted}/{teamData.progress.milestonesTotal} milestones
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${(teamData.progress.milestonesCompleted / teamData.progress.milestonesTotal) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Status</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                    🟢 Healthy
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Last Check-in</span>
                  <span className="text-sm font-medium text-slate-900">{teamData.progress.lastCheckIn}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full text-left px-4 py-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition text-sm font-medium text-slate-900">
                  📝 Submit Weekly Check-in
                </button>
                <button className="w-full text-left px-4 py-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition text-sm font-medium text-slate-900">
                  💬 Team Chat
                </button>
                <button className="w-full text-left px-4 py-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition text-sm font-medium text-slate-900">
                  📊 View Project Board
                </button>
                <button className="w-full text-left px-4 py-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition text-sm font-medium text-slate-900">
                  🎯 Update Milestones
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
