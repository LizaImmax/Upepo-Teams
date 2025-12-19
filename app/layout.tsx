import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Upepo Teams - From Certified to Career-Ready",
  description: "Join teams, work on real projects, build portfolios, and launch your career with expert mentorship.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer className="bg-slate-900 text-white py-8 px-4 sm:px-6 lg:px-8 mt-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
            <div className="flex flex-col items-start gap-3 mb-6 md:mb-0">
              <img src="/logo.png" alt="Upepo Teams Logo" className="w-12 h-12 object-contain mb-2" />
              <span className="text-xl font-bold">Upepo Teams</span>
              <span className="text-slate-400 text-sm">Where Learning Meets Doing</span>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Platform</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="/teams">Browse Teams</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/mentors">Find Mentors</a></li>
                <li><a href="/portfolio">Portfolios</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="mailto:upepoecosystem@gmail.com">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="/docs">Documentation</a></li>
                <li><a href="/guides">Guides</a></li>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/support">Support</a></li>
              </ul>
            </div>
            <div className="md:col-span-5 text-slate-400 text-xs text-center mt-8 md:mt-0">
              &copy; 2025 Upepo Teams. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
