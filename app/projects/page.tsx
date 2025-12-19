import Link from "next/link";
import { Briefcase, Users, TrendingUp, Clock, Code, Building2 } from "lucide-react";

const mockProjects = [
  {
    id: "1",
    title: "Multi-Cloud Deployment Platform",
    description: "Build an automation tool that deploys applications across AWS, Azure, and GCP from a single interface. Perfect for learning cloud infrastructure and DevOps practices.",
    type: "COMMUNITY_PROPOSED",
    difficulty: "INTERMEDIATE",
    techStack: ["AWS", "Azure", "GCP", "Terraform", "Python", "Docker"],
    estimatedWeeks: 10,
    skillsToLearn: ["Multi-cloud architecture", "IaC", "CI/CD", "Container orchestration"],
    activeTeams: 1,
    maxTeams: 3,
    companyName: null,
  },
  {
    id: "2",
    title: "Inventory Management System",
    description: "Create an internal tool for a growing e-commerce startup to track inventory, manage suppliers, and generate reports. Real client with potential for full-time hire.",
    type: "COMPANY_SPONSORED",
    difficulty: "INTERMEDIATE",
    techStack: ["Next.js", "PostgreSQL", "TypeScript", "Tailwind", "Prisma"],
    estimatedWeeks: 10,
    skillsToLearn: ["Full-stack development", "Database design", "API development", "Real client communication"],
    activeTeams: 0,
    maxTeams: 1,
    companyName: "TechFlow Commerce",
    companyLogo: null,
  },
  {
    id: "3",
    title: "Kubernetes Monitoring Tool",
    description: "Contribute to an open-source Kubernetes monitoring project. Add new features, improve documentation, and work with maintainers from major tech companies.",
    type: "OPEN_SOURCE",
    difficulty: "ADVANCED",
    techStack: ["Go", "Kubernetes", "Prometheus", "React", "Docker"],
    estimatedWeeks: 12,
    skillsToLearn: ["Open-source contribution", "K8s internals", "Monitoring systems", "Code review process"],
    activeTeams: 1,
    maxTeams: 2,
    companyName: null,
  },
  {
    id: "4",
    title: "Student Wellness Tracker",
    description: "Develop a mental health check-in app for university students. Features mood tracking, anonymous peer support, and resource connections. Partner: University Health Center.",
    type: "SOCIAL_IMPACT",
    difficulty: "BEGINNER",
    techStack: ["React Native", "Node.js", "MongoDB", "Express", "Firebase"],
    estimatedWeeks: 10,
    skillsToLearn: ["Mobile development", "User privacy", "Mental health UX", "Backend APIs"],
    activeTeams: 2,
    maxTeams: 3,
    companyName: null,
  },
  {
    id: "5",
    title: "Education NGO Website Redesign",
    description: "Redesign and rebuild the website for a local education non-profit. Improve accessibility, add donation system, and create a blog platform for success stories.",
    type: "SOCIAL_IMPACT",
    difficulty: "BEGINNER",
    techStack: ["Next.js", "Tailwind", "Contentful", "Stripe", "Vercel"],
    estimatedWeeks: 8,
    skillsToLearn: ["Modern web design", "CMS integration", "Payment processing", "Accessibility standards"],
    activeTeams: 1,
    maxTeams: 2,
    companyName: null,
  },
  {
    id: "6",
    title: "AI-Powered Code Review Assistant",
    description: "Build a tool that uses LLMs to provide intelligent code review suggestions. Company sponsored with potential for acquisition. Cutting-edge AI/ML project.",
    type: "COMPANY_SPONSORED",
    difficulty: "ADVANCED",
    techStack: ["Python", "OpenAI API", "FastAPI", "React", "Docker", "Redis"],
    estimatedWeeks: 12,
    skillsToLearn: ["LLM integration", "Code analysis", "AI prompt engineering", "Performance optimization"],
    activeTeams: 0,
    maxTeams: 1,
    companyName: "CodeCraft AI",
    companyLogo: null,
  },
];

const typeConfig = {
  COMMUNITY_PROPOSED: {
    label: "Community",
    color: "bg-purple-100 text-purple-800",
    icon: Users,
  },
  COMPANY_SPONSORED: {
    label: "Company",
    color: "bg-blue-100 text-blue-800",
    icon: Building2,
  },
  OPEN_SOURCE: {
    label: "Open Source",
    color: "bg-green-100 text-green-800",
    icon: Code,
  },
  SOCIAL_IMPACT: {
    label: "Social Impact",
    color: "bg-pink-100 text-pink-800",
    icon: TrendingUp,
  },
};

const difficultyColors = {
  BEGINNER: "bg-green-100 text-green-800",
  INTERMEDIATE: "bg-yellow-100 text-yellow-800",
  ADVANCED: "bg-red-100 text-red-800",
};

export default function ProjectsPage() {
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
              <Link href="/teams" className="text-darkGray hover:text-energeticOrange">Teams</Link>
              <Link href="/projects" className="text-energeticOrange font-semibold">Projects</Link>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">\n        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">Real Projects, Real Impact</h1>
          <p className="text-lg text-slate-600">
            Dive in, explore your skills, and see what you can create. Transform theory into action, one project at a time.
          </p>
        </div>

        {/* Filters */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {Object.entries(typeConfig).map(([key, config]) => {
            const Icon = config.icon;
            const count = mockProjects.filter(p => p.type === key).length;
            return (
              <button
                key={key}
                className="bg-white border-2 border-slate-200 rounded-xl p-4 hover:border-upepo-blue transition text-left"
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon className="w-5 h-5 text-slate-600" />
                  <span className="text-2xl font-bold text-slate-900">{count}</span>
                </div>
                <div className="text-sm font-medium text-slate-900">{config.label}</div>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6">
          {mockProjects.map((project) => {
            const typeInfo = typeConfig[project.type];
            const TypeIcon = typeInfo.icon;
            const spotsLeft = project.maxTeams - project.activeTeams;

            return (
              <div
                key={project.id}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition"
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${typeInfo.color} flex items-center gap-1`}>
                        <TypeIcon className="w-3 h-3" />
                        {typeInfo.label}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColors[project.difficulty]}`}>
                        {project.difficulty}
                      </span>
                    </div>
                    {project.companyName && (
                      <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                        <Building2 className="w-4 h-4" />
                        <span>{project.companyName}</span>
                      </div>
                    )}
                  </div>
                  {spotsLeft > 0 ? (
                    <div className="text-right">
                      <div className="text-sm text-slate-600">Spots Available</div>
                      <div className="text-2xl font-bold text-green-600">{spotsLeft}</div>
                    </div>
                  ) : (
                    <div className="text-right">
                      <div className="text-sm text-red-600 font-semibold">Full</div>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-slate-600 mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="text-sm text-slate-600 mb-2 flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    Tech Stack:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Skills to Learn */}
                <div className="mb-4">
                  <div className="text-sm text-slate-600 mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    What You'll Learn:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.skillsToLearn.map((skill) => (
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
                      <Clock className="w-4 h-4" />
                      <span>{project.estimatedWeeks} weeks</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{project.activeTeams} active teams</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Link
                      href={`/projects/${project.id}`}
                      className="px-6 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition font-medium"
                    >
                      View Details
                    </Link>
                    {spotsLeft > 0 && (
                      <Link
                        href={`/teams/create?project=${project.id}`}
                        className="px-6 py-2 bg-upepo-blue text-white rounded-lg hover:bg-upepo-blue/90 transition font-medium"
                      >
                        Start Team
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Propose Your Own */}
        <div className="mt-12 bg-gradient-to-br from-upepo-blue to-upepo-teal rounded-xl p-12 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <Briefcase className="w-16 h-16 mx-auto mb-4 opacity-90" />
            <h3 className="text-3xl font-bold mb-3">Have Your Own Vision?</h3>
            <p className="text-white/90 mb-6 text-lg">
              Propose a project that matters to you. We'll help you find teammates 
              who share your passion and a mentor to guide your journey.
            </p>
            <Link
              href="/projects/propose"
              className="inline-block bg-white text-upepo-blue px-8 py-3 rounded-lg hover:bg-white/90 transition font-semibold"
            >
              Propose a Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
