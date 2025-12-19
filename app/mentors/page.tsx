import Link from "next/link";
import { Award, Users, TrendingUp, Calendar, MessageSquare } from "lucide-react";

const mockMentors = [
  {
    id: "1",
    name: "Sarah Chen",
    title: "Senior Cloud Architect",
    company: "AWS",
    image: null,
    bio: "10+ years building cloud infrastructure. Passionate about helping juniors break into DevOps. Former bootcamp grad myself!",
    expertise: ["AWS", "Kubernetes", "Terraform", "Python", "DevOps"],
    yearsExperience: 12,
    teamsHelped: 23,
    rating: 4.9,
    availability: "5 spots left",
  },
  {
    id: "2",
    name: "Marcus Johnson",
    title: "Full-Stack Tech Lead",
    company: "Stripe",
    image: null,
    bio: "Building scalable web apps at Stripe. Love mentoring career changers. Specialize in React, Node.js, and system design.",
    expertise: ["React", "Node.js", "TypeScript", "PostgreSQL", "System Design"],
    yearsExperience: 8,
    teamsHelped: 31,
    rating: 4.8,
    availability: "3 spots left",
  },
  {
    id: "3",
    name: "Priya Patel",
    title: "ML Engineering Manager",
    company: "Google",
    image: null,
    bio: "Leading ML teams at Google. Excited to guide teams building AI/ML projects. Focus on practical applications of LLMs.",
    expertise: ["Python", "TensorFlow", "PyTorch", "LLMs", "Data Engineering"],
    yearsExperience: 9,
    teamsHelped: 18,
    rating: 5.0,
    availability: "Full",
  },
  {
    id: "4",
    name: "Ahmed Hassan",
    title: "Frontend Architect",
    company: "Vercel",
    image: null,
    bio: "Next.js core contributor. Help teams build modern, performant web apps. Strong focus on user experience and accessibility.",
    expertise: ["Next.js", "React", "Tailwind", "Performance", "Accessibility"],
    yearsExperience: 7,
    teamsHelped: 27,
    rating: 4.9,
    availability: "2 spots left",
  },
  {
    id: "5",
    name: "Lisa Rodriguez",
    title: "DevOps Principal",
    company: "GitHub",
    image: null,
    bio: "CI/CD expert at GitHub. Help teams set up professional dev workflows. Believe in automation and code quality.",
    expertise: ["GitHub Actions", "Docker", "Kubernetes", "CI/CD", "Security"],
    yearsExperience: 11,
    teamsHelped: 35,
    rating: 4.8,
    availability: "4 spots left",
  },
  {
    id: "6",
    name: "David Kim",
    title: "Backend Engineer",
    company: "Shopify",
    image: null,
    bio: "Building e-commerce systems at scale. Passionate about teaching database design and API architecture. Coffee enthusiast ☕",
    expertise: ["Ruby", "Rails", "GraphQL", "Redis", "Database Design"],
    yearsExperience: 6,
    teamsHelped: 19,
    rating: 4.7,
    availability: "6 spots left",
  },
];

export default function MentorsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Upepo Teams Logo" className="w-10 h-10 object-contain" />
              <span className="text-xl font-bold text-slate-900">Upepo Teams</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-slate-600 hover:text-slate-900">
                Home
              </Link>
              <Link href="/about" className="text-slate-600 hover:text-slate-900">
                About
              </Link>
              <Link href="/teams" className="text-slate-600 hover:text-slate-900">
                Teams
              </Link>
              <Link href="/projects" className="text-slate-600 hover:text-slate-900">
                Projects
              </Link>
              <Link href="/mentors" className="text-slate-600 hover:text-slate-900">
                Mentors
              </Link>
              <Link href="/portfolio" className="text-slate-600 hover:text-slate-900">
                Portfolio
              </Link>
              <Link href="/dashboard" className="text-slate-600 hover:text-slate-900">
                Dashboard
              </Link>
              <Link href="/auth/signin" className="text-slate-600 hover:text-slate-900">
                Sign In
              </Link>
              <Link 
                href="/auth/signup" 
                className="bg-upepo-blue text-white px-6 py-2 rounded-lg hover:bg-upepo-blue/90 transition"
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
          <h1 className="text-4xl font-bold text-slate-900 mb-3">Guided by Those Who Believe in You</h1>
          <p className="text-lg text-slate-600">
            Connect with mentors who see your potential and guide you from learning to doing, whether your next step is landing a job or launching your own project. Get support for both your career and entrepreneurial journey.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Expert Mentors", value: "150+", icon: Award },
            { label: "Teams Mentored", value: "500+", icon: Users },
            { label: "Avg Rating", value: "4.8", icon: TrendingUp },
            { label: "Weekly Sessions", value: "300+", icon: Calendar },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                <Icon className="w-6 h-6 text-upepo-blue mb-2" />
                <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <select className="border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-upepo-blue focus:border-transparent">
              <option>All Expertise</option>
              <option>Frontend Development</option>
              <option>Backend Development</option>
              <option>DevOps/Cloud</option>
              <option>AI/ML</option>
              <option>Mobile Development</option>
            </select>
            <select className="border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-upepo-blue focus:border-transparent">
              <option>All Companies</option>
              <option>FAANG</option>
              <option>Startups</option>
              <option>Enterprise</option>
            </select>
            <select className="border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-upepo-blue focus:border-transparent">
              <option>Availability: All</option>
              <option>Available Now</option>
              <option>Waitlist</option>
            </select>
          </div>
        </div>

        {/* Mentors Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {mockMentors.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition"
            >
              {/* Header */}
              <div className="flex gap-4 mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-upepo-blue to-upepo-teal rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  {mentor.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{mentor.name}</h3>
                  <p className="text-slate-600 font-medium">{mentor.title}</p>
                  <p className="text-sm text-slate-500">{mentor.company}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-semibold text-slate-900">{mentor.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-slate-600">
                      <Users className="w-4 h-4" />
                      {mentor.teamsHelped} teams
                    </div>
                    <div className="flex items-center gap-1 text-sm text-slate-600">
                      <TrendingUp className="w-4 h-4" />
                      {mentor.yearsExperience}y exp
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-slate-600 mb-4">{mentor.bio}</p>

              {/* Expertise */}
              <div className="mb-4">
                <div className="text-sm text-slate-600 mb-2">Expertise:</div>
                <div className="flex flex-wrap gap-2">
                  {mentor.expertise.map((skill) => (
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
                <div>
                  {mentor.availability === "Full" ? (
                    <span className="text-sm text-red-600 font-semibold">
                      Currently Full
                    </span>
                  ) : (
                    <span className="text-sm text-green-600 font-semibold">
                      {mentor.availability}
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <Link
                    href={`/mentors/${mentor.id}`}
                    className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition font-medium text-sm"
                  >
                    View Profile
                  </Link>
                  {mentor.availability !== "Full" && (
                    <Link
                      href={`/mentors/${mentor.id}/request`}
                      className="px-4 py-2 bg-upepo-blue text-white rounded-lg hover:bg-upepo-blue/90 transition font-medium text-sm"
                    >
                      Request Mentor
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Become a Mentor CTA */}
        <div className="mt-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-12 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <MessageSquare className="w-16 h-16 mx-auto mb-4 opacity-90" />
            <h3 className="text-3xl font-bold mb-3">Become a Guide</h3>
            <p className="text-white/90 mb-6 text-lg">
              Have 5+ years of experience? Give back to the community and help 
              the next generation turn their potential into real impact.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/mentors/apply"
                className="inline-block bg-upepo-blue text-white px-8 py-3 rounded-lg hover:bg-upepo-blue/90 transition font-semibold"
              >
                Apply as Mentor
              </Link>
              <Link
                href="/mentors/guide"
                className="inline-block bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg hover:bg-white/20 transition font-semibold border border-white/20"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
