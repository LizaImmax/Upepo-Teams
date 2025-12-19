
import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Lizza Mwangi",
    role: "Founder & CEO",
    image: null, // Add image path if available
    bio: "Visionary leader passionate about empowering talent and building bridges from learning to earning.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Samuel Kimani",
    role: "Head of Engineering",
    image: null,
    bio: "Architect of scalable solutions and mentor to the next generation of builders.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Aisha Otieno",
    role: "Community Lead",
    image: null,
    bio: "Connector, motivator, and champion for every learner's journey.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "David Njoroge",
    role: "Product Designer",
    image: null,
    bio: "Designs with empathy, always focused on user growth and delight.",
    linkedin: "#",
    twitter: "#",
  },
];

export default function MeetTheTeamPage() {
  return (
    <div className="min-h-screen bg-softCream">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-energeticOrange to-trustworthyBlue rounded-lg flex items-center justify-center">
                  <img src="/logo.png" alt="Upepo Teams Logo" className="w-10 h-10 object-contain" />
              </div>
              <span className="text-xl font-bold text-darkGray">Upepo Teams</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-darkGray hover:text-energeticOrange">Home</Link>
              <Link href="/about" className="text-darkGray hover:text-energeticOrange">About</Link>
              <Link href="/teams" className="text-darkGray hover:text-energeticOrange">Teams</Link>
              <Link href="/projects" className="text-darkGray hover:text-energeticOrange">Projects</Link>
              <Link href="/mentors" className="text-darkGray hover:text-energeticOrange">Mentors</Link>
              <Link href="/portfolio" className="text-darkGray hover:text-energeticOrange">Portfolio</Link>
              <Link href="/dashboard" className="text-darkGray hover:text-energeticOrange">Dashboard</Link>
              <Link href="/auth/signin" className="text-slate-600 hover:text-slate-900">Sign In</Link>
              <Link href="/auth/signup" className="bg-upepo-blue text-white px-6 py-2 rounded-lg hover:bg-upepo-blue/90 transition">Get Started</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-upepo-blue/10 to-upepo-teal/10">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Meet the Team</h1>
          <p className="text-xl text-slate-600 mb-8">
            The people behind Upepo Teams, builders, dreamers, and believers in your potential.
          </p>
          <img src="/logo.png" alt="Upepo Teams Logo" className="mx-auto mb-10 w-48 h-48 object-contain" />
          <div className="text-upepo-blue font-semibold text-lg mb-2">United by a single mission:</div>
          <div className="text-slate-800 text-xl italic mb-2">“To turn knowledge into real-world impact, together.”</div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group bg-white rounded-2xl shadow-md border border-slate-200 p-8 flex flex-col items-center transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              {member.image ? (
                <img src={member.image} alt={member.name} width={96} height={96} className="rounded-full mb-4" />
              ) : (
                <div className="w-24 h-24 rounded-full bg-upepo-blue/20 flex items-center justify-center text-3xl font-bold text-upepo-blue mb-4 group-hover:bg-upepo-blue/30 transition">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
              )}
              <h2 className="text-2xl font-semibold text-slate-900 mb-1">{member.name}</h2>
              <div className="text-upepo-teal font-medium mb-2">{member.role}</div>
              <p className="text-slate-600 text-center mb-4 text-sm">{member.bio}</p>
              <div className="flex gap-4 mt-2">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-upepo-blue hover:text-upepo-teal transition">
                  <Linkedin size={22} />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-upepo-blue hover:text-upepo-teal transition">
                  <Twitter size={22} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why We Build */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-upepo-teal font-semibold mb-2">Why We Build</div>
          <blockquote className="text-xl text-slate-700 italic border-l-4 border-upepo-teal pl-4">
            "We believe in the power of teams, the magic of mentorship, and the unstoppable momentum that comes from building together. Upepo is more than a platform, it's a movement."
          </blockquote>
        </div>
      </section>
    </div>
  );
}
