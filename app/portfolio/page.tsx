import Link from "next/link";
import { Camera, ExternalLink, Github, Award, Code, Users, TrendingUp, Download, Share2, Plus } from "lucide-react";

// Mock portfolio data
const portfolioData = {
  user: {
    name: "Alex Martinez",
    title: "Full-Stack Developer & Cloud Enthusiast",
    bio: "Passionate about building scalable applications and helping teams deliver real value. Recently completed 3 team projects through Upepo Teams, focused on cloud infrastructure and web development.",
    image: null,
    skills: [
      { name: "React", level: 85, category: "Frontend" },
      { name: "Node.js", level: 80, category: "Backend" },
      { name: "AWS", level: 75, category: "Cloud" },
      { name: "Python", level: 70, category: "Backend" },
      { name: "Docker", level: 65, category: "DevOps" },
      { name: "TypeScript", level: 80, category: "Frontend" },
    ],
    stats: {
      projectsCompleted: 3,
      teamsJoined: 3,
      skillsLearned: 12,
      mentorSessions: 18,
    },
  },
  projects: [
    {
      id: "1",
      title: "Multi-Cloud Deployment Platform",
      tagline: "Simplifying cloud deployments across AWS, Azure, and GCP",
      type: "COMMUNITY_PROPOSED",
      role: "Backend Developer",
      team: "Cloud Infrastructure Squad",
      duration: "10 weeks",
      status: "Completed",
      thumbnail: null,
      description: "Built a unified API for deploying applications across multiple cloud providers. Reduced deployment time by 60% and increased team productivity.",
      problem: "Startups struggle with vendor lock-in and complex deployment processes across different cloud providers.",
      solution: "Created a unified deployment platform with a single API that abstracts cloud provider differences, supporting AWS, Azure, and GCP deployments.",
      impact: [
        "60% reduction in deployment time",
        "3 early-stage startups adopted the platform",
        "100% test coverage achieved",
        "Open-sourced with 45+ GitHub stars",
      ],
      techStack: ["Python", "FastAPI", "Docker", "AWS", "Terraform", "React"],
      myContributions: [
        "Architected the core API using FastAPI and async Python",
        "Implemented AWS and Azure deployment modules",
        "Built automated testing suite with 100% coverage",
        "Contributed to documentation and developer onboarding",
      ],
      links: {
        github: "https://github.com/upepoteams/multicloud-deploy",
        demo: "https://multicloud-demo.upepoteams.io",
        caseStudy: "#",
      },
      screenshots: 4,
      badges: ["Team Player", "Code Quality Champion", "Mentor's Choice"],
    },
    {
      id: "2",
      title: "Community Mental Health Check-In App",
      tagline: "Supporting student wellbeing through daily check-ins and resources",
      type: "SOCIAL_IMPACT",
      role: "Full-Stack Developer",
      team: "Wellness Warriors",
      duration: "8 weeks",
      status: "Completed",
      thumbnail: null,
      description: "Mobile-first web app helping students track their mental health and connect with campus resources.",
      problem: "University students struggle to recognize mental health patterns and access timely support resources.",
      solution: "Developed a daily check-in app with mood tracking, resource recommendations, and anonymous peer support features.",
      impact: [
        "250+ students signed up in first month",
        "85% user engagement rate",
        "Partnered with 2 university counseling centers",
        "Featured in campus newsletter",
      ],
      techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
      myContributions: [
        "Built real-time mood tracking dashboard",
        "Implemented user authentication and privacy controls",
        "Created responsive mobile-first UI",
        "Set up CI/CD pipeline with automated testing",
      ],
      links: {
        github: "https://github.com/upepoteams/wellness-checkin",
        demo: "https://wellness-demo.upepoteams.io",
        caseStudy: "#",
      },
      screenshots: 3,
      badges: ["Social Impact Star", "UI/UX Excellence"],
    },
    {
      id: "3",
      title: "Open Source Kubernetes Tool Enhancement",
      tagline: "Contributing to kubectl-neat with improved output formatting",
      type: "OPEN_SOURCE",
      role: "Contributor",
      team: "K8s Improvers",
      duration: "6 weeks",
      status: "Completed",
      thumbnail: null,
      description: "Enhanced popular Kubernetes CLI tool with 1,200+ stars by adding new formatting options and fixing critical bugs.",
      problem: "kubectl output contains clutter that makes it difficult to read and compare resources.",
      solution: "Added new flags for customizable output formatting and improved error handling for edge cases.",
      impact: [
        "3 PRs merged into main repository",
        "Fixed 2 critical bugs affecting 1000+ users",
        "Improved documentation with examples",
        "Gained recognition from maintainers",
      ],
      techStack: ["Go", "Kubernetes", "CLI Development", "Git"],
      myContributions: [
        "Implemented --format=compact flag for concise output",
        "Fixed race condition in multi-resource processing",
        "Added comprehensive test coverage",
        "Reviewed and provided feedback on 5+ community PRs",
      ],
      links: {
        github: "https://github.com/kubectl-neat/kubectl-neat",
        caseStudy: "#",
      },
      screenshots: 2,
      badges: ["Open Source Contributor", "Bug Hunter"],
    },
  ],
};

export default function PortfolioPage() {
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
              <Link href="/projects" className="text-darkGray hover:text-energeticOrange">Projects</Link>
              <Link href="/mentors" className="text-darkGray hover:text-energeticOrange">Mentors</Link>
              <Link href="/portfolio" className="text-energeticOrange font-semibold">Portfolio</Link>
              <Link href="/dashboard" className="text-darkGray hover:text-energeticOrange">Dashboard</Link>
              <Link href="/auth/signin" className="text-darkGray hover:text-energeticOrange">Sign In</Link>
              <Link href="/auth/signup" className="bg-energeticOrange text-white px-6 py-2 rounded-lg hover:bg-energeticOrange/90 transition">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-upepo-blue via-upepo-teal to-emerald-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-6xl font-bold mb-6">
                {portfolioData.user.name.split(" ").map(n => n[0]).join("")}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{portfolioData.user.name}</h1>
              <p className="text-xl text-white/90 mb-4">{portfolioData.user.title}</p>
              <p className="text-white/80 text-lg mb-6 max-w-2xl">{portfolioData.user.bio}</p>
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 bg-white text-upepo-blue px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition">
                  <Download className="w-5 h-5" />
                  Download Resume
                </button>
                <button className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition border border-white/30">
                  <Share2 className="w-5 h-5" />
                  Share Portfolio
                </button>
              </div>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-1">{portfolioData.user.stats.projectsCompleted}</div>
                <div className="text-white/80">Projects Completed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-1">{portfolioData.user.stats.teamsJoined}</div>
                <div className="text-white/80">Teams Joined</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-1">{portfolioData.user.stats.skillsLearned}</div>
                <div className="text-white/80">Skills Learned</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-1">{portfolioData.user.stats.mentorSessions}</div>
                <div className="text-white/80">Mentor Sessions</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Projects Section */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-slate-900">Portfolio Projects</h2>
                <button className="flex items-center gap-2 text-upepo-blue hover:text-upepo-blue/80 font-semibold">
                  <Plus className="w-5 h-5" />
                  Add Project
                </button>
              </div>

              {/* Project Cards */}
              <div className="space-y-12">
                {portfolioData.projects.map((project) => (
                  <div key={project.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    {/* Project Header */}
                    <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-8 border-b border-slate-200">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
                          <p className="text-lg text-slate-600 mb-3">{project.tagline}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 bg-upepo-blue/10 text-upepo-blue rounded-full text-sm font-semibold">
                              {project.type.replace(/_/g, " ")}
                            </span>
                            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                              {project.status}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {project.links.github && (
                            <a href={project.links.github} target="_blank" rel="noopener noreferrer" 
                               className="p-2 bg-white rounded-lg hover:bg-slate-100 transition border border-slate-300">
                              <Github className="w-5 h-5 text-slate-700" />
                            </a>
                          )}
                          {project.links.demo && (
                            <a href={project.links.demo} target="_blank" rel="noopener noreferrer"
                               className="p-2 bg-white rounded-lg hover:bg-slate-100 transition border border-slate-300">
                              <ExternalLink className="w-5 h-5 text-slate-700" />
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {project.team}
                        </span>
                        <span>Role: {project.role}</span>
                        <span>Duration: {project.duration}</span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-8 space-y-6">
                      {/* The Challenge */}
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-upepo-blue" />
                          The Challenge
                        </h4>
                        <p className="text-slate-600">{project.problem}</p>
                      </div>

                      {/* The Solution */}
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                          <Code className="w-4 h-4 text-upepo-blue" />
                          Our Solution
                        </h4>
                        <p className="text-slate-600">{project.solution}</p>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3">Technology Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium border border-slate-200">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* My Contributions */}
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3">My Contributions</h4>
                        <ul className="space-y-2">
                          {project.myContributions.map((contribution, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-slate-600">
                              <span className="text-upepo-blue mt-1">•</span>
                              <span>{contribution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Impact */}
                      <div className="bg-gradient-to-r from-upepo-blue/5 to-upepo-teal/5 rounded-lg p-6 border border-upepo-blue/20">
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <Award className="w-5 h-5 text-upepo-blue" />
                          Impact & Results
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {project.impact.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <span className="text-green-500 text-lg">✓</span>
                              <span className="text-slate-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Badges */}
                      {project.badges.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200">
                          {project.badges.map((badge) => (
                            <span key={badge} className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm font-medium border border-amber-200 flex items-center gap-1">
                              <Award className="w-3 h-3" />
                              {badge}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Skills */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 sticky top-24">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Code className="w-5 h-5 text-upepo-blue" />
                Skills & Expertise
              </h3>
              <div className="space-y-4">
                {portfolioData.user.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                      <span className="text-xs text-slate-500">{skill.category}</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-upepo-blue to-upepo-teal h-2 rounded-full transition-all" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Certificates */}
              <div className="mt-8 pt-8 border-t border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-4">Certifications</h4>
                <div className="space-y-3">
                  {[
                    { name: "AWS Solutions Architect", issuer: "Amazon Web Services" },
                    { name: "React Advanced Patterns", issuer: "Upepo Academy" },
                    { name: "Team Collaboration Pro", issuer: "Upepo Teams" },
                  ].map((cert) => (
                    <div key={cert.name} className="flex items-start gap-2 p-3 bg-slate-50 rounded-lg">
                      <Award className="w-5 h-5 text-upepo-blue flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-sm text-slate-900">{cert.name}</div>
                        <div className="text-xs text-slate-600">{cert.issuer}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Share Portfolio */}
              <div className="mt-8 pt-8 border-t border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-3">Share This Portfolio</h4>
                <div className="bg-slate-50 rounded-lg p-3 mb-3">
                  <code className="text-xs text-slate-600 break-all">
                    https://portfolio.upepoteams.io/alex-martinez
                  </code>
                </div>
                <button className="w-full bg-upepo-blue text-white px-4 py-2 rounded-lg hover:bg-upepo-blue/90 transition font-medium text-sm flex items-center justify-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Copy Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-upepo-blue to-upepo-teal text-white py-16 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Portfolio?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join Upepo Teams and create portfolio projects that showcase your skills and land you your dream job.
          </p>
          <Link href="/auth/signup" className="inline-block bg-white text-upepo-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition">
            Join Your Team Today
          </Link>
        </div>
      </div>
    </div>
  );
}
