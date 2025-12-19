import Link from "next/link";
import { Users, Target, Heart, TrendingUp, Award, Zap, Globe, MessageSquare } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-softCream to-white">
      {/* Navigation */}
      <nav className="border-b bg-softCream/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Upepo Teams Logo" className="w-10 h-10 object-contain" />
              <span className="text-xl font-bold text-darkGray">Upepo Teams</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-darkGray font-medium">Home</Link>
              <Link href="/about" className="text-darkGray hover:text-energeticOrange transition">About</Link>
              <Link href="/teams" className="text-darkGray hover:text-energeticOrange transition">Teams</Link>
              <Link href="/projects" className="text-darkGray hover:text-energeticOrange transition">Projects</Link>
              <Link href="/mentors" className="text-darkGray hover:text-energeticOrange transition">Mentors</Link>
              <Link href="/portfolio" className="text-darkGray hover:text-energeticOrange transition">Portfolio</Link>
              <Link href="/dashboard" className="text-darkGray hover:text-energeticOrange transition">Dashboard</Link>
              <Link href="/auth/signin" className="text-darkGray hover:text-energeticOrange transition">Sign In</Link>
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
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            From Knowledge to
            <span className="bg-gradient-to-r from-upepo-blue to-upepo-teal bg-clip-text text-transparent">
              {" "}Impact
            </span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Your skills deserve to shine. We help you transform theory into action, 
            collaborate with incredible peers, and build a portfolio that opens doors, all 
            while growing with mentors who believe in your potential.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-upepo-blue/10 px-4 py-2 rounded-full mb-4">
                <Target className="w-4 h-4 text-upepo-blue" />
                <span className="text-sm font-semibold text-upepo-blue">OUR MISSION</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Together, We Grow, Learn, and Shine
              </h2>
              <p className="text-lg text-slate-600 mb-4">
                We believe your knowledge is powerful when put into action. Real growth 
                comes from building together, learning from challenges, and celebrating 
                every milestone with a community that supports you.
              </p>
              <p className="text-lg text-slate-600">
                Step into your full potential by delivering real-world projects with peers 
                who share your drive and mentors who champion your success.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, label: "Team Projects", value: "500+", color: "bg-blue-100 text-blue-600" },
                { icon: Award, label: "Expert Mentors", value: "150+", color: "bg-purple-100 text-purple-600" },
                { icon: TrendingUp, label: "Job Placement", value: "70%", color: "bg-green-100 text-green-600" },
                { icon: Globe, label: "Countries", value: "45+", color: "bg-orange-100 text-orange-600" },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className={`${stat.color} rounded-xl p-6`}>
                    <Icon className="w-8 h-8 mb-3" />
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm font-medium opacity-80">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Gap We See</h2>
            <p className="text-xl text-slate-300">
              You have the skills, what you need is the space to prove it
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-3">📚 Knowledge Without Evidence</h3>
              <p className="text-slate-300 mb-3">
                You've learned the frameworks, earned the certifications, and followed the tutorials. 
                But when it's time to show what you can do, there's nothing tangible to point to. 
                Employers don't see certificates, they see projects that prove you can deliver.
              </p>
              <p className="text-slate-400 text-sm italic">
                "I know I can do the work, but my portfolio doesn't show it yet."
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-3">🏝️ Learning in Isolation</h3>
              <p className="text-slate-300 mb-3">
                Building alone means missing out on what makes tech exciting: collaboration, 
                feedback, and the energy of working with people who push you to be better. 
                Real growth happens when you're part of something bigger than yourself.
              </p>
              <p className="text-slate-400 text-sm italic">
                "I can code, but I've never experienced what it's like to build with a team."
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-3">🚪 The Experience Paradox</h3>
              <p className="text-slate-300 mb-3">
                Every opportunity asks for experience, but how do you get experience when no one 
                gives you the chance? You're ready to contribute, ready to learn on the job—you 
                just need someone to see your potential and give you that first real shot.
              </p>
              <p className="text-slate-400 text-sm italic">
                "I'm caught between 'junior' and 'not enough experience.'"
              </p>
            </div>

            <div className="bg-gradient-to-r from-upepo-blue to-upepo-teal rounded-xl p-6 mt-8">
              <h3 className="text-2xl font-bold mb-3">✨ What We Believe</h3>
              <p className="text-lg mb-0">
                Your potential deserves a place to grow. We create the space where your skills 
                become real experience, your peers become your collaborators, and your work 
                becomes proof of what you can achieve. Together, we bridge the gap between 
                learning and doing—because you're ready, and we see it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-slate-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Learning by Doing",
                description: "Experience is the best teacher. We believe in hands-on, real-world projects over passive learning.",
                color: "text-red-600",
                bg: "bg-red-50",
              },
              {
                icon: Users,
                title: "Team Over Individual",
                description: "Great products are built by great teams. We prioritize collaboration, communication, and collective success.",
                color: "text-blue-600",
                bg: "bg-blue-50",
              },
              {
                icon: TrendingUp,
                title: "Growth Mindset",
                description: "Mistakes are learning opportunities. We celebrate progress, embrace challenges, and support continuous improvement.",
                color: "text-green-600",
                bg: "bg-green-50",
              },
              {
                icon: Award,
                title: "Quality Standards",
                description: "We maintain professional-grade expectations. Production-quality code, proper documentation, real accountability.",
                color: "text-purple-600",
                bg: "bg-purple-50",
              },
              {
                icon: MessageSquare,
                title: "Mentorship Matters",
                description: "Expert guidance accelerates growth. Our mentors provide technical expertise, career advice, and confidence building.",
                color: "text-orange-600",
                bg: "bg-orange-50",
              },
              {
                icon: Zap,
                title: "Action Over Perfection",
                description: "Done is better than perfect. We encourage shipping, iterating, and learning from real feedback.",
                color: "text-yellow-600",
                bg: "bg-yellow-50",
              },
            ].map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <div className={`w-12 h-12 ${value.bg} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${value.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="py-16 bg-slate-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-xl text-slate-600">
              We're not here to teach—we're here to build with you
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <div className="text-slate-400 font-bold mb-4">The Usual Approach</div>
              <ul className="space-y-3 text-slate-600">
                <li>• Watch videos, take notes, repeat</li>
                <li>• Build practice projects on your own</li>
                <li>• Get a certificate at the end</li>
                <li>• Hope someone notices your resume</li>
                <li>• Still hear "we need someone with experience"</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-upepo-blue to-upepo-teal rounded-xl p-8 text-white shadow-lg">
              <div className="font-bold mb-4">The Upepo Way</div>
              <ul className="space-y-3">
                <li>• Jump into real projects with real deadlines</li>
                <li>• Build alongside teammates who push you forward</li>
                <li>• Work with mentors who've been where you want to go</li>
                <li>• Create a portfolio that tells your story with proof</li>
                <li>• Walk into opportunities with confidence—because you've already done the work</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-xl p-6 shadow-sm border-l-4 border-upepo-teal">
            <p className="text-slate-700 text-lg">
              <strong className="text-slate-900">Here's the truth:</strong> You don't need another 
              course or credential. You need a space where your skills become visible, where your 
              growth is celebrated, and where people believe in what you can achieve. That's what 
              we've built—and we can't wait to build with you.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Story</h2>
            <p className="text-xl text-slate-600">
              We saw the gap. We built the bridge.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <p className="text-slate-600 mb-6 text-lg">
                <strong className="text-slate-900">Upepo</strong> means "wind" in Swahili—a force 
                that lifts and propels forward. We saw talented people stuck between learning and 
                earning, with skills but no proof. The missing piece wasn't more courses or 
                certifications. It was the space to build real projects with real teams.
              </p>
              
              <p className="text-slate-600 text-lg">
                So we created it. Today, <strong>500+ teams</strong> have built real products, 
                <strong> 70% of members have landed jobs</strong> within 6 months, and we're just 
                getting started. Every team that launches, every portfolio built, every career 
                transformed—that's the wind we create.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-slate-900 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built by the Community</h2>
          <p className="text-xl text-slate-300 mb-12">
            Upepo Teams is run by people who've walked the path themselves—bootcamp 
            grads, career changers, and self-taught developers who've made it and want 
            to help others do the same.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { role: "Founders", count: "3", desc: "Former bootcamp grads who struggled with the certification cliff" },
              { role: "Mentors", count: "150+", desc: "Industry professionals from top tech companies" },
              { role: "Community", count: "5000+", desc: "Members building, learning, and growing together" },
            ].map((item) => (
              <div key={item.role} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-upepo-teal mb-2">{item.count}</div>
                <div className="text-lg font-semibold mb-2">{item.role}</div>
                <div className="text-sm text-slate-400">{item.desc}</div>
              </div>
            ))}
          </div>

          <Link
            href="/about/team"
            className="inline-block bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-3 rounded-lg transition font-semibold border border-white/20"
          >
            Meet the Team
          </Link>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-slate-600">
              Real results from real people
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { 
                stat: "70%", 
                label: "Job Placement Rate",
                desc: "Within 6 months of program completion"
              },
              { 
                stat: "30%", 
                label: "Avg Salary Increase",
                desc: "Compared to pre-program expectations"
              },
              { 
                stat: "4.8/5", 
                label: "Member Satisfaction",
                desc: "Based on 1000+ reviews"
              },
              { 
                stat: "85%", 
                label: "Project Completion",
                desc: "Teams successfully deliver their projects"
              },
              { 
                stat: "500+", 
                label: "Projects Completed",
                desc: "Real products deployed to production"
              },
              { 
                stat: "24+", 
                label: "Skills per Project",
                desc: "Average new skills learned"
              },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center">
                <div className="text-4xl font-bold text-upepo-blue mb-2">{item.stat}</div>
                <div className="text-lg font-semibold text-slate-900 mb-2">{item.label}</div>
                <div className="text-sm text-slate-600">{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Success Stories</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "Sarah M.",
                  role: "From Bootcamp to DevOps Engineer",
                  quote: "Upepo Teams gave me what my bootcamp couldn't—real project experience. I landed my first DevOps role 4 months after joining.",
                },
                {
                  name: "James K.",
                  role: "Career Changer to Full-Stack Dev",
                  quote: "After 10 years in finance, I needed to prove I could code professionally. My Upepo portfolio opened doors everywhere.",
                },
              ].map((story) => (
                <div key={story.name} className="bg-white rounded-lg p-6 border border-slate-200">
                  <p className="text-slate-600 italic mb-4">"{story.quote}"</p>
                  <div className="font-semibold text-slate-900">{story.name}</div>
                  <div className="text-sm text-slate-600">{story.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-upepo-blue to-upepo-teal">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of professionals transforming their careers through real projects and expert mentorship
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/auth/signup"
              className="bg-white text-upepo-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/90 transition"
            >
              Get Started Free
            </Link>
            <Link 
              href="/#how-it-works"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/30 transition border border-white/30"
            >
              Learn More
            </Link>
          </div>
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
                <li><Link href="/teams" className="hover:text-white">Browse Teams</Link></li>
                <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
                <li><Link href="/mentors" className="hover:text-white">Find Mentors</Link></li>
                <li><Link href="/portfolio" className="hover:text-white">Portfolios</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/docs" className="hover:text-white">Documentation</Link></li>
                <li><Link href="/guides" className="hover:text-white">Guides</Link></li>
                <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
                <li><Link href="/support" className="hover:text-white">Support</Link></li>
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
