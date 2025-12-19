import Link from "next/link";
import { Users, Clock, Code, TrendingUp, Filter, Search } from "lucide-react";

// This would normally come from the database
const mockTeams = [
  {
    id: "1",
    name: "Cloud Infrastructure Squad",
    description: "Building a multi-cloud deployment automation tool for startups",
    status: "FORMING",
    members: 3,
    maxMembers: 6,
    requiredSkills: ["AWS", "Terraform", "Python", "DevOps"],
    project: {
      title: "Multi-Cloud Deployment Platform",
      type: "COMMUNITY_PROPOSED",
      difficulty: "INTERMEDIATE",
    },
  },
  {
    id: "2",
    name: "Mental Health App Team",
    description: "Creating a mental health check-in app for university students",
    status: "FORMING",
    members: 4,
    maxMembers: 5,
    requiredSkills: ["React Native", "Node.js", "MongoDB", "UI/UX"],
    project: {
      title: "Student Wellness Tracker",
      type: "SOCIAL_IMPACT",
      difficulty: "BEGINNER",
    },
  },
  {
    id: "3",
    name: "K8s Contributors",
    description: "Contributing to Kubernetes ecosystem tools and documentation",
    status: "ACTIVE",
    members: 5,
    maxMembers: 6,
    requiredSkills: ["Go", "Kubernetes", "Docker", "Linux"],
    project: {
      title: "Kubernetes Tool Enhancement",
      type: "OPEN_SOURCE",
      difficulty: "ADVANCED",
    },
  },
  {
    id: "4",
    name: "E-commerce Builders",
    description: "Building internal inventory management system for startup",
    status: "FORMING",
    members: 2,
    maxMembers: 6,
    requiredSkills: ["Next.js", "PostgreSQL", "TypeScript", "Tailwind"],
    project: {
      title: "Inventory Management System",
      type: "COMPANY_SPONSORED",
      difficulty: "INTERMEDIATE",
    },
  },
  {
    id: "5",
    name: "NGO Website Team",
    description: "Redesigning website for local education non-profit",
    status: "FORMING",
    members: 3,
    maxMembers: 5,
    requiredSkills: ["React", "Figma", "Content Writing", "SEO"],
    project: {
      title: "Education NGO Website Redesign",
      type: "SOCIAL_IMPACT",
      difficulty: "BEGINNER",
    },
  },
];

const difficultyColors = {
  BEGINNER: "bg-green-100 text-green-800",
  INTERMEDIATE: "bg-yellow-100 text-yellow-800",
  ADVANCED: "bg-red-100 text-red-800",
};

const statusColors = {
  FORMING: "bg-blue-100 text-blue-800",
  ACTIVE: "bg-green-100 text-green-800",
  COMPLETED: "bg-gray-100 text-gray-800",
};

const projectTypeLabels = {
  COMMUNITY_PROPOSED: "Community",
  COMPANY_SPONSORED: "Company",
  OPEN_SOURCE: "Open Source",
  SOCIAL_IMPACT: "Social Impact",
};

export default function TeamsPage() {
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
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-darkGray hover:text-energeticOrange">Home</Link>
              <Link href="/about" className="text-darkGray hover:text-energeticOrange">About</Link>
              <Link href="/teams" className="text-energeticOrange font-semibold">Teams</Link>
              <Link href="/projects" className="text-darkGray hover:text-energeticOrange">Projects</Link>
              <Link href="/mentors" className="text-darkGray hover:text-energeticOrange">Mentors</Link>
              <Link href="/portfolio" className="text-darkGray hover:text-energeticOrange">Portfolio</Link>
              <Link href="/dashboard" className="text-darkGray hover:text-energeticOrange">Dashboard</Link>
              <Link href="/auth/signin" className="text-darkGray hover:text-energeticOrange">Sign In</Link>
              <Link 
                href="/auth/signup" 
                className="bg-energeticOrange text-white px-6 py-2 rounded-lg hover:bg-energeticOrange/90 transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">Find Your Crew</h1>
          <p className="text-lg text-slate-600">
            Join a team, share your skills, and grow together. Every voice matters—your contribution shapes the outcome.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search teams..."
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-upepo-blue focus:border-transparent"
                />
              </div>
            </div>
            <select className="border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-upepo-blue focus:border-transparent">
              <option>All Project Types</option>
              <option>Community Proposed</option>
              <option>Company Sponsored</option>
              <option>Open Source</option>
              <option>Social Impact</option>
            </select>
            <select className="border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-upepo-blue focus:border-transparent">
              <option>All Levels</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
        </div>

        {/* Teams Grid */}
        <div className="grid gap-6">
          {mockTeams.map((team) => (
            <div
              key={team.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-slate-900">{team.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[team.status]}`}>
                      {team.status}
                    </span>
                  </div>
                  <p className="text-slate-600">{team.description}</p>
                </div>
              </div>

              {/* Project Info */}
              <div className="bg-slate-50 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="w-4 h-4 text-slate-600" />
                  <span className="font-semibold text-slate-900">{team.project.title}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-slate-600">
                    {projectTypeLabels[team.project.type]}
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${difficultyColors[team.project.difficulty]}`}>
                    {team.project.difficulty}
                  </span>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-4">
                <div className="text-sm text-slate-600 mb-2">Required Skills:</div>
                <div className="flex flex-wrap gap-2">
                  {team.requiredSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-upepo-blue/10 text-upepo-blue rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                <div className="flex items-center gap-4 text-sm text-slate-600">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>
                      {team.members}/{team.maxMembers} members
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>10 weeks</span>
                  </div>
                </div>
                <Link
                  href={`/teams/${team.id}`}
                  className="bg-upepo-blue text-white px-6 py-2 rounded-lg hover:bg-upepo-blue/90 transition font-medium"
                >
                  View Team
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State for "Create Your Own" */}
        <div className="mt-12 bg-gradient-to-br from-upepo-blue/10 to-upepo-teal/10 rounded-xl p-12 text-center border-2 border-dashed border-upepo-blue/30">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 bg-upepo-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-upepo-blue" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Don't see the right fit?
            </h3>
            <p className="text-slate-600 mb-6">
              Create your own team and invite others who share your passion to join your project
            </p>
            <Link
              href="/teams/create"
              className="inline-block bg-upepo-blue text-white px-8 py-3 rounded-lg hover:bg-upepo-blue/90 transition font-semibold"
            >
              Create Your Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
