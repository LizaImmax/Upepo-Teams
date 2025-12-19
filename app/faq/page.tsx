export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h1>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-upepo-blue mb-2">What is Upepo Teams?</h2>
            <p className="text-slate-700">Upepo Teams is a platform for collaborative, real-world project experience. Join teams, work on projects, build your portfolio, and get mentorship to launch your career or start your own venture.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-upepo-blue mb-2">Who can join?</h2>
            <p className="text-slate-700">Anyone looking to gain practical experience, grow their network, or build something meaningful. Whether you're a student, career changer, or aspiring founder, you're welcome here.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-upepo-blue mb-2">How much does it cost?</h2>
            <p className="text-slate-700">We offer a free tier and paid plans with additional features. See our pricing section for details.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-upepo-blue mb-2">How do I get started?</h2>
            <p className="text-slate-700">Sign up, browse teams or projects, and join or create your own. You'll be guided through the process step by step.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
