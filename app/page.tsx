import Link from "next/link";
import { ArrowRight, Users, Target, Award, Briefcase } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="border-b bg-softCream/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Upepo Teams Logo" className="w-10 h-10 object-contain" />
              <span className="text-xl font-bold text-darkGray">Upepo Teams</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-darkGray font-medium">
                Home
              </Link>
              <Link href="/about" className="text-darkGray hover:text-energeticOrange transition">
                About
              </Link>
              <Link href="/teams" className="text-darkGray hover:text-energeticOrange transition">
                Teams
              </Link>
              <Link href="/projects" className="text-darkGray hover:text-energeticOrange transition">
                Projects
              </Link>
              <Link href="/mentors" className="text-darkGray hover:text-energeticOrange transition">
                Mentors
              </Link>
              <Link href="/portfolio" className="text-darkGray hover:text-energeticOrange transition">
                Portfolio
              </Link>
              <Link href="/dashboard" className="text-darkGray hover:text-energeticOrange transition">
                Dashboard
              </Link>
              <Link href="/auth/signin" className="text-darkGray hover:text-energeticOrange transition">
                Sign In
              </Link>
              <Link 
                href="/auth/signup" 
                className="bg-energeticOrange text-white px-6 py-2 rounded-lg hover:bg-trustworthyBlue transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Transform Learning into
              <span className="bg-gradient-to-r from-upepo-blue to-upepo-teal bg-clip-text text-transparent">
                {" "}Real Impact
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Your knowledge is powerful, now let's put it into action. Join a team, 
              build real projects, and grow together with peers and mentors who believe in your potential.
            </p>
            <div className="flex gap-4 justify-center">
              <Link 
                href="/auth/signup"
                className="inline-flex items-center gap-2 bg-upepo-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-upepo-blue/90 transition"
              >
                Join Your Team Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="#how-it-works"
                className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-slate-200 hover:border-slate-300 transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: "Active Teams", value: "200+" },
              { label: "Projects Completed", value: "500+" },
              { label: "Expert Mentors", value: "150+" },
              { label: "Job Placements", value: "70%" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-upepo-blue mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Skills Deserve a Stage
            </h2>
            <p className="text-xl text-slate-300 mb-12">
              You've learned the tools. You've built the knowledge. Now it's time to put 
              everything into action, to build something real, with people who believe in 
              what you can achieve together.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                { icon: "📚", title: "You've Been Learning", desc: "Courses completed. Skills sharpened. Knowledge ready to be unleashed." },
                { icon: "🚀", title: "Now You're Building", desc: "Real projects. Real teammates. Real impact you can see and share." },
                { icon: "✨", title: "Soon You're Thriving", desc: "Confidence earned. Portfolio proven. Doors opening to what's next." },
              ].map((item) => (
                <div key={item.title} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Your Journey: Learn, Execute, Reflect, Grow
            </h2>
            <p className="text-xl text-slate-600">
              Transform your skills into real-world experience, one project at a time
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                week: "Week 1",
                title: "Team Formation",
                desc: "Join or create a team. Meet your mentor. Define roles.",
              },
              {
                week: "Week 2",
                title: "Learning & Planning",
                desc: "Fill knowledge gaps. Plan architecture. Set up workflow.",
              },
              {
                week: "Weeks 3-8",
                title: "Build & Execute",
                desc: "Weekly sprints. Daily standups. Code reviews. Iterate.",
              },
              {
                week: "Week 9",
                title: "Reflect & Document",
                desc: "Team retro. Portfolio case study. Peer feedback.",
              },
              {
                week: "Week 10",
                title: "Showcase & Launch",
                desc: "Public demo. Share portfolio. Join alumni network.",
              },
            ].map((phase, idx) => (
              <div key={idx} className="relative">
                {idx < 4 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-upepo-blue to-upepo-teal -z-10" />
                )}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-upepo-blue to-upepo-teal rounded-lg flex items-center justify-center text-white font-bold mb-4">
                    {idx + 1}
                  </div>
                  <div className="text-sm text-upepo-blue font-semibold mb-2">{phase.week}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{phase.title}</h3>
                  <p className="text-slate-600 text-sm">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Your Skills, Your Growth, Your Community
            </h2>
            <p className="text-xl text-slate-600">
              Every voice matters—your contribution shapes the outcome
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Find Your Crew",
                desc: "Connect with teammates who share your passion. Together, you'll tackle challenges and celebrate wins.",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Real Projects, Real Impact",
                desc: "Dive into community-driven, company-sponsored, or social impact projects that matter.",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Guided by Experts",
                desc: "Learn from mentors who believe in you and help you navigate every step of your journey.",
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "Showcase Your Growth",
                desc: "Build a portfolio that tells your story—from challenge to solution to real results.",
              },
            ].map((feature) => (
              <div key={feature.title} className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
                <div className="w-16 h-16 bg-upepo-blue/10 rounded-lg flex items-center justify-center text-upepo-blue mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Choose Your Path
            </h2>
            <p className="text-xl text-slate-600">
              Start for free, upgrade when you're ready
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Tier */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Free</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-slate-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Join 1 team per year (10 weeks / 1 project)",
                  "Access community projects",
                  "Basic portfolio",
                  "Group mentorship",
                  "Team collaboration tools",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="text-upepo-blue">✓</span>
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/auth/signup"
                className="block w-full text-center bg-slate-100 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-200 transition"
              >
                Get Started
              </Link>
            </div>

            {/* Pro Tier */}
            <div className="bg-gradient-to-br from-upepo-blue to-upepo-teal rounded-xl p-8 shadow-xl text-white relative">
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$35</span>
                <span className="text-white/80">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Join unlimited teams",
                  "All project types",
                  "Group mentor sessions",
                  "Enhanced portfolio",
                  "Priority project selection",
                  "All free features",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span>✓</span>
                    <span className="text-white/90">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/auth/signup?tier=pro"
                className="block w-full text-center bg-white text-upepo-blue px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition"
              >
                Upgrade to Pro
              </Link>
            </div>

            {/* Elite Tier */}
            <div className="bg-gradient-to-br from-energeticOrange to-accentPurple rounded-xl p-8 shadow-xl text-white relative">
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                ELITE
              </div>
              <h3 className="text-2xl font-bold mb-2">Elite</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$50</span>
                <span className="text-white/80">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Everything in Pro",
                  "Monthly 1-on-1 mentor sessions",
                  "Personalized career coaching",
                  "Advanced portfolio features",
                  "Resume & interview coaching",
                  "Job board access",
                  "Exclusive networking events",
                  "Early access to new features",
                  "Elite badge on your profile",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span>✓</span>
                    <span className="text-white/90">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/auth/signup?tier=elite"
                className="block w-full text-center bg-white text-energeticOrange px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition"
              >
                Go Elite
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-upepo-blue to-upepo-teal">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Step Into Your Full Potential?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join a community where learning meets doing—where your skills transform into real impact
          </p>
          <Link 
            href="/auth/signup"
            className="inline-flex items-center gap-2 bg-white text-upepo-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/90 transition"
          >
            Join the Movement
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-upepo-blue to-upepo-teal rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">U</span>
                </div>
                <span className="text-xl font-bold">Upepo Teams</span>
              </div>
              <p className="text-slate-400">
                Where Learning Meets Doing
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/teams">Browse Teams</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/mentors">Find Mentors</Link></li>
                <li><Link href="/portfolio">Portfolios</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/docs">Documentation</Link></li>
                <li><Link href="/guides">Guides</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
                <li><Link href="/support">Support</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} Upepo Teams. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
