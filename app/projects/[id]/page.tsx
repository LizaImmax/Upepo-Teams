import Link from "next/link";
import { ArrowLeft, Calendar, Code, Users, Building, Award, CheckCircle2, Clock, TrendingUp, BookOpen } from "lucide-react";

// Mock data
const projectData = {
  id: "1",
  title: "Multi-Cloud Deployment Platform",
  tagline: "Simplify application deployment across AWS, Azure, and GCP",
  type: "COMMUNITY_PROPOSED",
  difficulty: "INTERMEDIATE",
  status: "ACTIVE",
  description: "Build a unified API that abstracts the complexity of deploying applications across multiple cloud providers. This project addresses a real pain point for startups facing vendor lock-in and complex deployment workflows.",
  longDescription: `This project aims to create a production-ready platform that enables developers to deploy their applications to AWS, Azure, or GCP using a single, unified API. 

The platform will handle authentication, resource provisioning, deployment orchestration, and monitoring across different cloud providers, abstracting away the provider-specific complexities.

By the end of this project, your team will have built a real tool that could be used by startups and development teams to streamline their cloud deployment processes.`,
  
  problem: `Startups and small development teams often:
• Get locked into a single cloud provider
• Struggle with provider-specific deployment tools
• Spend excessive time managing infrastructure
• Face steep learning curves when switching providers
• Lack resources to build custom deployment solutions`,

  goals: [
    "Build a unified REST API for cloud deployments",
    "Support at least 2 major cloud providers (AWS & Azure minimum)",
    "Implement authentication and resource management",
    "Create comprehensive documentation",
    "Deploy a working demo with real cloud credentials",
    "Achieve 80%+ test coverage",
  ],

  duration: "10 weeks",
  weeklyHours: "8-12 hours",
  startDate: "Jan 15, 2024",
  endDate: "Mar 22, 2024",
  
  techStack: {
    required: ["Python", "Docker", "REST APIs", "Git"],
    recommended: ["FastAPI", "Terraform", "AWS SDK", "Azure SDK", "PostgreSQL"],
    youWillLearn: ["Cloud Architecture", "API Design", "Infrastructure as Code", "CI/CD", "Testing Strategies"],
  },

  teamStructure: {
    size: "4-6 members",
    roles: [
      { role: "Team Lead", description: "Coordinates project, manages timeline, facilitates meetings", filled: true },
      { role: "Technical Lead", description: "Owns architecture decisions, code reviews, technical guidance", filled: true },
      { role: "Backend Developer", description: "API development, database design, business logic", filled: false, openings: 2 },
      { role: "DevOps Engineer", description: "CI/CD pipeline, deployment automation, monitoring", filled: false },
      { role: "Documentation Lead", description: "API docs, user guides, onboarding materials", filled: false },
    ],
  },

  mentor: {
    name: "Dr. James Mitchell",
    title: "Senior Cloud Architect at AWS",
    bio: "15+ years building scalable cloud infrastructure. Previously led cloud platform teams at AWS and Microsoft. Passionate about mentoring the next generation of cloud engineers.",
    expertise: ["Cloud Architecture", "Microservices", "DevOps", "Python", "Infrastructure as Code"],
    image: null,
    availability: "Bi-weekly 1-on-1s, Weekly team check-ins, Async support via platform",
  },

  projectStages: [
    {
      stage: 1,
      name: "Learning & Planning",
      weeks: "1-2",
      description: "Get aligned on tech stack, learn required skills, design system architecture",
      deliverables: [
        "Team charter established",
        "Architecture diagram completed",
        "Technology decisions finalized",
        "Development environment set up",
        "Project board created",
      ],
    },
    {
      stage: 2,
      name: "Foundation",
      weeks: "3-4",
      description: "Build core API infrastructure and authentication system",
      deliverables: [
        "API framework set up (FastAPI)",
        "Database schema designed and implemented",
        "Authentication system working",
        "First cloud provider integration started",
      ],
    },
    {
      stage: 3,
      name: "Core Features",
      weeks: "5-7",
      description: "Implement deployment logic for multiple cloud providers",
      deliverables: [
        "AWS deployment module completed",
        "Azure deployment module completed",
        "Unified API endpoints functional",
        "Error handling implemented",
      ],
    },
    {
      stage: 4,
      name: "Polish & Testing",
      weeks: "8-9",
      description: "Testing, documentation, and production readiness",
      deliverables: [
        "Comprehensive test suite (80%+ coverage)",
        "API documentation completed",
        "User guide written",
        "Demo environment deployed",
      ],
    },
    {
      stage: 5,
      name: "Launch & Showcase",
      weeks: "10",
      description: "Final presentation and project showcase",
      deliverables: [
        "Public demo delivered",
        "Portfolio case study completed",
        "GitHub repository polished",
        "Team retrospective done",
      ],
    },
  ],

  requirements: {
    technical: [
      "Comfortable with at least one programming language (Python preferred)",
      "Basic understanding of APIs and HTTP",
      "Familiarity with Git and version control",
      "Willingness to learn cloud platforms (no prior experience required)",
    ],
    commitment: [
      "8-12 hours per week for 10 weeks",
      "Attend weekly team standups (1 hour)",
      "Attend bi-weekly mentor sessions (30 min)",
      "Complete weekly check-ins and reflections",
    ],
    mindset: [
      "Growth mindset - willing to learn new technologies",
      "Team player - values collaboration over individual glory",
      "Communicative - proactively shares blockers and progress",
      "Professional - treats this like a real job",
    ],
  },

  learningResources: [
    { title: "AWS Well-Architected Framework", type: "Documentation", link: "#" },
    { title: "FastAPI Tutorial", type: "Course", link: "#" },
    { title: "Terraform Basics", type: "Video Series", link: "#" },
    { title: "RESTful API Design Best Practices", type: "Article", link: "#" },
  ],

  similarProjects: [
    { id: "2", title: "Kubernetes Auto-Scaler", difficulty: "ADVANCED", spotsLeft: 2 },
    { id: "3", title: "Serverless Monitoring Dashboard", difficulty: "INTERMEDIATE", spotsLeft: 3 },
  ],
};

export default function ProjectDetailPage() {
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
              <Link href="/about" className="text-slate-600 hover:text-slate-900">About</Link>
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
        <Link href="/projects" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-upepo-blue to-upepo-teal rounded-xl flex items-center justify-center flex-shrink-0">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-semibold">
                      {projectData.type.replace(/_/g, " ")}
                    </span>
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-semibold">
                      {projectData.difficulty}
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                      {projectData.status}
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">{projectData.title}</h1>
                  <p className="text-xl text-slate-600">{projectData.tagline}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-slate-600 mt-6 pt-6 border-t border-slate-200">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {projectData.duration}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {projectData.weeklyHours}/week
                </span>
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {projectData.teamStructure.size}
                </span>
              </div>
            </div>

            {/* Overview */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Project Overview</h2>
              <p className="text-slate-600 mb-4">{projectData.description}</p>
              <div className="prose prose-slate max-w-none">
                {projectData.longDescription.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-slate-600">{paragraph}</p>
                ))}
              </div>
            </div>

            {/* The Problem */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 border border-red-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-red-600" />
                The Problem We're Solving
              </h2>
              <div className="prose prose-slate max-w-none">
                {projectData.problem.split('\n').map((line, idx) => (
                  <p key={idx} className="text-slate-700">{line}</p>
                ))}
              </div>
            </div>

            {/* Project Goals */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-upepo-blue" />
                What We'll Build Together
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {projectData.goals.map((goal, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                    <span className="w-6 h-6 bg-upepo-blue text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-slate-700">{goal}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Technology Stack</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">Required Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {projectData.techStack.required.map((tech) => (
                      <span key={tech} className="px-3 py-2 bg-red-50 text-red-700 rounded-lg text-sm font-medium border border-red-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">Recommended (We'll Help You Learn)</h3>
                  <div className="flex flex-wrap gap-2">
                    {projectData.techStack.recommended.map((tech) => (
                      <span key={tech} className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">You'll Learn</h3>
                  <div className="flex flex-wrap gap-2">
                    {projectData.techStack.youWillLearn.map((skill) => (
                      <span key={skill} className="px-3 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-medium border border-green-200">
                        ✓ {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Project Timeline */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">10-Week Journey</h2>
              <div className="space-y-6">
                {projectData.projectStages.map((stage, idx) => (
                  <div key={stage.stage} className="relative pl-8 pb-8 border-l-2 border-slate-200 last:border-0 last:pb-0">
                    <div className="absolute -left-[13px] top-0 w-6 h-6 bg-upepo-blue text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {stage.stage}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-slate-900">{stage.name}</h3>
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium">
                          Weeks {stage.weeks}
                        </span>
                      </div>
                      <p className="text-slate-600 mb-3">{stage.description}</p>
                      <div className="bg-slate-50 rounded-lg p-4">
                        <h4 className="text-sm font-semibold text-slate-900 mb-2">Deliverables:</h4>
                        <ul className="space-y-1">
                          {stage.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Structure */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-upepo-blue" />
                Team Structure
              </h2>
              <p className="text-slate-600 mb-6">We're looking for {projectData.teamStructure.size} to join this project:</p>
              <div className="space-y-4">
                {projectData.teamStructure.roles.map((role) => (
                  <div key={role.role} className={`p-4 rounded-lg border-2 ${
                    role.filled ? 'bg-slate-50 border-slate-200' : 'bg-green-50 border-green-300'
                  }`}>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-slate-900">{role.role}</h3>
                          {role.filled ? (
                            <span className="px-2 py-1 bg-slate-200 text-slate-600 rounded text-xs font-semibold">
                              Filled
                            </span>
                          ) : (
                            <span className="px-2 py-1 bg-green-200 text-green-800 rounded text-xs font-semibold">
                              {role.openings ? `${role.openings} spots` : 'Open'}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-slate-600">{role.description}</p>
                      </div>
                      {!role.filled && (
                        <button className="ml-4 px-4 py-2 bg-upepo-blue text-white rounded-lg hover:bg-upepo-blue/90 transition text-sm font-medium">
                          Apply
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Resources */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-upepo-blue" />
                Learning Resources
              </h2>
              <p className="text-slate-600 mb-4">We'll provide curated resources to help you succeed:</p>
              <div className="grid md:grid-cols-2 gap-4">
                {projectData.learningResources.map((resource) => (
                  <a key={resource.title} href={resource.link} className="flex items-start gap-3 p-4 bg-slate-50 hover:bg-slate-100 rounded-lg transition border border-slate-200">
                    <BookOpen className="w-5 h-5 text-upepo-blue flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{resource.title}</h3>
                      <p className="text-xs text-slate-600">{resource.type}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA Card */}
            <div className="bg-gradient-to-br from-upepo-blue to-upepo-teal rounded-xl p-6 text-white sticky top-24">
              <h3 className="text-xl font-bold mb-3">Ready to Build Something Real?</h3>
              <p className="text-white/90 text-sm mb-6">
                Join this project and work with a team to create a production-ready application.
              </p>
              <button className="w-full bg-white text-upepo-blue px-6 py-3 rounded-lg font-bold hover:bg-white/90 transition mb-3">
                Apply to Join Project
              </button>
              <button className="w-full bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition border border-white/30">
                Save for Later
              </button>
            </div>

            {/* Mentor Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-upepo-blue" />
                Your Mentor
              </h3>
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  {projectData.mentor.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{projectData.mentor.name}</h4>
                  <p className="text-sm text-slate-600">{projectData.mentor.title}</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 mb-4">{projectData.mentor.bio}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {projectData.mentor.expertise.map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="bg-slate-50 rounded-lg p-3 text-sm text-slate-600">
                <strong>Availability:</strong> {projectData.mentor.availability}
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-4">What You Need</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-2">Technical</h4>
                  <ul className="space-y-1">
                    {projectData.requirements.technical.map((req, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="text-upepo-blue mt-1">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-2">Time Commitment</h4>
                  <ul className="space-y-1">
                    {projectData.requirements.commitment.map((req, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="text-upepo-blue mt-1">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-2">Mindset</h4>
                  <ul className="space-y-1">
                    {projectData.requirements.mindset.map((req, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Similar Projects */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-4">Similar Projects</h3>
              <div className="space-y-3">
                {projectData.similarProjects.map((project) => (
                  <Link key={project.id} href={`/projects/${project.id}`} className="block p-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition">
                    <h4 className="font-medium text-slate-900 text-sm mb-1">{project.title}</h4>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-600">{project.difficulty}</span>
                      <span className="text-upepo-blue">{project.spotsLeft} spots left</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
