import React from "react";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">Upepo Blog</h1>
        <p className="text-lg text-slate-600 mb-8">Insights, stories, and updates from the Upepo Teams community. Stay tuned for our latest posts!</p>
        <div className="bg-slate-100 rounded-lg p-8 text-slate-700 mb-8">
          <h2 className="text-2xl font-semibold mb-4">No posts yet</h2>
          <p>Check back soon for new content!</p>
        </div>
      </div>
    </div>
  );
}
