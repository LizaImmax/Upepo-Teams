import React from "react";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">Documentation</h1>
        <p className="text-lg text-slate-600 mb-8">Find guides, API references, and resources to help you get the most out of Upepo Teams.</p>
        <div className="bg-slate-100 rounded-lg p-8 text-slate-700 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
          <p>Our documentation is being prepared. Please check back soon!</p>
        </div>
      </div>
    </div>
  );
}
