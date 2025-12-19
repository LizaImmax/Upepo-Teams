import React from "react";

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">Support</h1>
        <p className="text-lg text-slate-600 mb-8">Need help? Reach out to our team or browse our resources for assistance with Upepo Teams.</p>
        <div className="bg-slate-100 rounded-lg p-8 text-slate-700 mb-8">
          <h2 className="text-2xl font-semibold mb-4">How can we help?</h2>
          <p>Email <a href="mailto:upepoecosystem@gmail.com" className="text-upepo-blue underline">upepoecosystem@gmail.com</a> and we’ll get back to you soon.</p>
        </div>
      </div>
    </div>
  );
}
