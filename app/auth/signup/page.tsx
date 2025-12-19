"use client";

import Link from "next/link";
import { useState } from "react";
import { Github, Mail, CheckCircle2 } from "lucide-react";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement NextAuth sign up
    console.log("Sign up:", formData);
  };

  const handleOAuthSignUp = (provider: string) => {
    // TODO: Implement NextAuth OAuth sign up
    console.log("OAuth sign up with:", provider);
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Navigation */}
      <nav className="border-b bg-white">
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

      {/* Main Content */}
      <div className="flex-1 px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Value Prop */}
            <div className="hidden lg:block">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                Join Your Team Today
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Transform learning into real impact. Work on real projects, build your portfolio, and launch your career.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Find Your Crew</h3>
                    <p className="text-slate-600">Join collaborative teams working on real-world projects</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Real Projects, Real Impact</h3>
                    <p className="text-slate-600">Build production-ready applications that matter</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Guided by Those Who Believe in You</h3>
                    <p className="text-slate-600">Get mentorship from industry professionals</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Launch Your Career</h3>
                    <p className="text-slate-600">Build a portfolio that opens doors</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-upepo-blue/10 to-upepo-teal/10 rounded-xl border border-upepo-blue/20">
                <p className="text-sm text-slate-600 italic">
                  "Upepo Teams helped me transition from certificates to career. In 10 weeks, I built 3 real projects and landed my dream job!"
                </p>
                <p className="text-sm font-semibold text-slate-900 mt-2">Sarah M., Software Engineer</p>
              </div>
            </div>

            {/* Right Side - Sign Up Form */}
            <div className="max-w-md mx-auto w-full">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">Create Your Account</h2>
                  <p className="text-slate-600">Start your journey from learning to doing</p>
                </div>

                {/* OAuth Buttons */}
                <div className="space-y-3 mb-6">
                  <button
                    onClick={() => handleOAuthSignUp("github")}
                    className="w-full flex items-center justify-center gap-3 px-6 py-3 border-2 border-slate-300 rounded-lg hover:bg-slate-50 transition font-semibold text-slate-700"
                  >
                    <Github className="w-5 h-5" />
                    Continue with GitHub
                  </button>
                  <button
                    onClick={() => handleOAuthSignUp("google")}
                    className="w-full flex items-center justify-center gap-3 px-6 py-3 border-2 border-slate-300 rounded-lg hover:bg-slate-50 transition font-semibold text-slate-700"
                  >
                    <Mail className="w-5 h-5" />
                    Continue with Google
                  </button>
                </div>

                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-slate-500">Or sign up with email</span>
                  </div>
                </div>

                {/* Email Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => handleChange("fullName", e.target.value)}
                      placeholder="Alex Martinez"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-upepo-blue focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-upepo-blue focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      required
                      value={formData.password}
                      onChange={(e) => handleChange("password", e.target.value)}
                      placeholder="••••••••"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-upepo-blue focus:border-transparent"
                    />
                    <p className="text-xs text-slate-500 mt-1">Must be at least 8 characters</p>
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700 mb-2">
                      Confirm Password
                    </label>
                    <input
                      id="confirmPassword"
                      type="password"
                      required
                      value={formData.confirmPassword}
                      onChange={(e) => handleChange("confirmPassword", e.target.value)}
                      placeholder="••••••••"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-upepo-blue focus:border-transparent"
                    />
                  </div>

                  <div className="flex items-start">
                    <input
                      id="agreeToTerms"
                      type="checkbox"
                      required
                      checked={formData.agreeToTerms}
                      onChange={(e) => handleChange("agreeToTerms", e.target.checked)}
                      className="w-4 h-4 text-upepo-blue border-slate-300 rounded focus:ring-upepo-blue mt-1"
                    />
                    <label htmlFor="agreeToTerms" className="ml-2 text-sm text-slate-700">
                      I agree to the{" "}
                      <Link href="/terms" className="text-upepo-blue hover:text-upepo-blue/80">Terms of Service</Link>
                      {" and "}
                      <Link href="/privacy" className="text-upepo-blue hover:text-upepo-blue/80">Privacy Policy</Link>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-upepo-blue to-upepo-teal text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
                  >
                    Create Account
                  </button>
                </form>

                {/* Sign In Link */}
                <div className="mt-6 text-center">
                  <p className="text-sm text-slate-600">
                    Already have an account?{" "}
                    <Link href="/auth/signin" className="font-semibold text-upepo-blue hover:text-upepo-blue/80">
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>

              <div className="mt-6 text-center text-xs text-slate-500">
                <p>🎉 Join 500+ professionals building real projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
