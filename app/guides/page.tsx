export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-slate-900 mb-8 text-center">Guides</h1>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-upepo-blue mb-2">Getting Started</h2>
            <p className="text-slate-700">Learn how to sign up, join teams, and start your first project on Upepo Teams.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-upepo-blue mb-2">Building Your Portfolio</h2>
            <p className="text-slate-700">Tips and best practices for showcasing your work and skills to employers or collaborators.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-upepo-blue mb-2">Mentorship</h2>
            <p className="text-slate-700">How to find a mentor, request sessions, and get the most out of mentorship on the platform.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
