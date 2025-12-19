"use client";

import Link from "next/link";
import { useState } from "react";
import { Github, Mail } from "lucide-react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement NextAuth sign in
    console.log("Sign in:", email, password);
  };

  const handleOAuthSignIn = (provider: string) => {
    // TODO: Implement NextAuth OAuth sign in
    console.log("OAuth sign in with:", provider);
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
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back</h1>
              <p className="text-slate-600">Sign in to continue your journey</p>
            </div>

            {/* OAuth Buttons */}
            <div className="space-y-3 mb-6">
              <button
                onClick={() => handleOAuthSignIn("github")}
                className="w-full flex items-center justify-center gap-3 px-6 py-3 border-2 border-slate-300 rounded-lg hover:bg-slate-50 transition font-semibold text-slate-700"
              >
                <Github className="w-5 h-5" />
                Continue with GitHub
              </button>
              <button
                onClick={() => handleOAuthSignIn("google")}
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
                <span className="px-4 bg-white text-slate-500">Or sign in with email</span>
              </div>
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-upepo-blue focus:border-transparent"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                    Password
                  </label>
                  <Link href="/auth/forgot-password" className="text-sm text-upepo-blue hover:text-upepo-blue/80">
                    Forgot password?
                  </Link>
                </div>
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-upepo-blue focus:border-transparent"
                />
              </div>

              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 text-upepo-blue border-slate-300 rounded focus:ring-upepo-blue"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-slate-700">
                  Remember me for 30 days
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-upepo-blue to-upepo-teal text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Sign In
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-slate-600">
                Don't have an account?{" "}
                <Link href="/auth/signup" className="font-semibold text-upepo-blue hover:text-upepo-blue/80">
                  Join Upepo Teams
                </Link>
              </p>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-center text-sm text-slate-500">
            <p>By continuing, you agree to our</p>
            <p>
              <Link href="/terms" className="underline hover:text-slate-700">Terms of Service</Link>
              {" and "}
              <Link href="/privacy" className="underline hover:text-slate-700">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
