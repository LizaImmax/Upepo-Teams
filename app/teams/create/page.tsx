import Link from "next/link";
import { ArrowLeft, Users, Calendar, Code, Target } from "lucide-react";

export default function CreateTeamPage() {
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
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          href="/teams"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Teams
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">Create Your Team</h1>
          <p className="text-lg text-slate-600">
            Define your project and team structure to start recruiting members
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <form className="space-y-8">
            {/* Team Basics */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-upepo-blue" />
                Team Basics
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Team Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Cloud Infrastructure Squad"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-upepo-blue focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Team Description *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe what your team will build and what makes it exciting..."
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-upepo-blue focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Team Size *
                  </label>
                  <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-upepo-blue focus:border-transparent">
                    <option>3-4 members</option>
                    <option>4-5 members</option>
                    <option selected>5-6 members</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Project Selection */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-upepo-blue" />
                Project Selection
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Choose a Project *
                  </label>
                  <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-upepo-blue focus:border-transparent">
                    <option>Select a project from marketplace...</option>
                    <option>Multi-Cloud Deployment Platform</option>
                    <option>Student Wellness Tracker</option>
                    <option>Kubernetes Tool Enhancement</option>
                    <option>Inventory Management System</option>
                    <option>Education NGO Website</option>
                    <option>--- Or propose your own ---</option>
                  </select>
                  <p className="text-sm text-slate-500 mt-2">
                    Browse the <Link href="/projects" className="text-upepo-blue hover:underline">project marketplace</Link> for more options
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Project Difficulty
                  </label>
                  <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-upepo-blue focus:border-transparent">
                    <option>Beginner</option>
                    <option selected>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Skills & Tech Stack */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-upepo-blue" />
                Skills & Tech Stack
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Required Skills *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., React, Node.js, PostgreSQL (comma-separated)"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-upepo-blue focus:border-transparent"
                  />
                  <p className="text-sm text-slate-500 mt-2">
                    List the key technologies and skills team members should have
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Roles Needed
                  </label>
                  <div className="space-y-2">
                    {[
                      { role: "Team Lead", desc: "Project coordination & leadership" },
                      { role: "Technical Lead", desc: "Architecture & code quality" },
                      { role: "Frontend Developer", desc: "UI/UX implementation" },
                      { role: "Backend Developer", desc: "API & database work" },
                      { role: "DevOps Engineer", desc: "Infrastructure & deployment" },
                      { role: "Designer", desc: "UI/UX design" },
                    ].map((item) => (
                      <label key={item.role} className="flex items-start gap-3 p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer">
                        <input type="checkbox" className="mt-1" />
                        <div>
                          <div className="font-medium text-slate-900">{item.role}</div>
                          <div className="text-sm text-slate-600">{item.desc}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline & Commitment */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-upepo-blue" />
                Timeline & Commitment
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Time Commitment (per week)
                  </label>
                  <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-upepo-blue focus:border-transparent">
                    <option>5-10 hours/week</option>
                    <option selected>10-15 hours/week</option>
                    <option>15-20 hours/week</option>
                    <option>20+ hours/week</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Preferred Timezone
                  </label>
                  <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-upepo-blue focus:border-transparent">
                    <option>Any timezone (async-friendly)</option>
                    <option>UTC -8 (PST)</option>
                    <option>UTC -5 (EST)</option>
                    <option>UTC +0 (GMT)</option>
                    <option>UTC +3 (EAT)</option>
                    <option>UTC +5:30 (IST)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Team Charter */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Team Charter (Optional)
              </h2>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Define your team values and working principles
                </label>
                <textarea
                  rows={4}
                  placeholder="e.g., We value clear communication, respect for diverse perspectives, and learning from mistakes..."
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-upepo-blue focus:border-transparent"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="flex gap-4 pt-6 border-t">
              <button
                type="submit"
                className="flex-1 bg-upepo-blue text-white px-6 py-3 rounded-lg hover:bg-upepo-blue/90 transition font-semibold"
              >
                Create Team
              </button>
              <Link
                href="/teams"
                className="px-6 py-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition font-semibold"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>

        {/* Help Box */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-2">💡 Tips for Creating a Great Team</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Be specific about the project goal and what you'll build</li>
            <li>• Clearly define the skills needed to avoid mismatched applications</li>
            <li>• Set realistic time commitments to ensure team availability</li>
            <li>• Create a welcoming charter that reflects your team culture</li>
            <li>• Consider timezone overlap for better collaboration</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
