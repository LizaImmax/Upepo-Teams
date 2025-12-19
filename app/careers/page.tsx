
import Link from "next/link";
import Image from "next/image";
import { Users, Mail } from "lucide-react";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex flex-col items-center mb-8">
          <Image src="/logo.png" alt="Upepo Teams Logo" width={56} height={56} className="mb-2" />
          <span className="text-2xl font-bold text-upepo-blue tracking-tight">Upepo Teams Careers</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Grow With Us</h1>
        <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto leading-relaxed">
          We're always looking for passionate people who want to help others grow, build, and launch their dreams. If you want to join a team that values <span className="text-upepo-blue font-semibold">collaboration</span>, <span className="text-upepo-teal font-semibold">innovation</span>, and <span className="text-energeticOrange font-semibold">impact</span>, we'd love to hear from you.
        </p>
        <div className="bg-white/80 shadow-lg rounded-2xl p-10 mb-10 flex flex-col items-center border border-slate-100">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-7 h-7 text-upepo-blue" />
            <h2 className="text-2xl font-semibold text-slate-900">Current Openings</h2>
          </div>
          <p className="text-slate-600 text-base mb-2">No open positions at this time.</p>
          <span className="text-slate-400 text-sm">Please check back soon!</span>
        </div>
        <a
          href="mailto:upepoecosystem@gmail.com?subject=Volunteering%20with%20Upepo%20Teams"
          className="inline-flex items-center gap-2 bg-upepo-blue text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md hover:bg-upepo-blue/90 transition mb-2"
        >
          <Mail className="w-5 h-5 mr-1" /> Volunteer with Us
        </a>
        <div className="mt-8 text-slate-400 text-sm">Be part of a movement where learning meets doing.</div>
      </div>
    </div>
  );
}
