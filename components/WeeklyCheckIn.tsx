"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, TrendingUp, X } from "lucide-react";

type HealthStatus = "green" | "yellow" | "red";

interface WeeklyCheckInProps {
  teamId: string;
  weekNumber: number;
  onSubmit?: (data: CheckInData) => void;
  onClose?: () => void;
}

interface CheckInData {
  accomplishments: string;
  nextWeekGoals: string;
  blockers: string;
  healthStatus: HealthStatus;
  mentorSupportNeeded: string;
  teamDynamics: string;
  personalReflection: string;
}

export default function WeeklyCheckIn({ teamId, weekNumber, onSubmit, onClose }: WeeklyCheckInProps) {
  const [formData, setFormData] = useState<CheckInData>({
    accomplishments: "",
    nextWeekGoals: "",
    blockers: "",
    healthStatus: "green",
    mentorSupportNeeded: "",
    teamDynamics: "",
    personalReflection: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (onSubmit) {
      onSubmit(formData);
    }
    // In real app, would send to API
    setTimeout(() => {
      if (onClose) onClose();
    }, 2000);
  };

  const handleChange = (field: keyof CheckInData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Check-in Submitted!</h2>
          <p className="text-slate-600 mb-6">
            Thanks for keeping your team in sync. Your mentor will review this soon.
          </p>
          <div className="text-sm text-slate-500">Closing in 2 seconds...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-xl max-w-3xl w-full my-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-upepo-blue to-upepo-teal text-white p-6 rounded-t-xl">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold">Weekly Team Check-In</h2>
            {onClose && (
              <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg transition">
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          <p className="text-white/90">Week {weekNumber} • Help your team stay aligned and moving forward</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Team Health Status */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-3">
              How's your team doing this week? *
            </label>
            <div className="grid grid-cols-3 gap-4">
              <button
                type="button"
                onClick={() => handleChange("healthStatus", "green")}
                className={`p-4 rounded-lg border-2 transition ${
                  formData.healthStatus === "green"
                    ? "border-green-500 bg-green-50"
                    : "border-slate-200 hover:border-green-300"
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-semibold text-slate-900">🟢 Healthy</span>
                  <span className="text-xs text-slate-600 text-center">
                    On track, good communication, hitting milestones
                  </span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => handleChange("healthStatus", "yellow")}
                className={`p-4 rounded-lg border-2 transition ${
                  formData.healthStatus === "yellow"
                    ? "border-amber-500 bg-amber-50"
                    : "border-slate-200 hover:border-amber-300"
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-semibold text-slate-900">🟡 Needs Attention</span>
                  <span className="text-xs text-slate-600 text-center">
                    Some blockers, minor issues to address
                  </span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => handleChange("healthStatus", "red")}
                className={`p-4 rounded-lg border-2 transition ${
                  formData.healthStatus === "red"
                    ? "border-red-500 bg-red-50"
                    : "border-slate-200 hover:border-red-300"
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <X className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-semibold text-slate-900">🔴 At Risk</span>
                  <span className="text-xs text-slate-600 text-center">
                    Significant blockers, need help urgently
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* What We Accomplished */}
          <div>
            <label htmlFor="accomplishments" className="block text-sm font-semibold text-slate-900 mb-2">
              What did your team accomplish this week? *
            </label>
            <p className="text-sm text-slate-600 mb-2">
              List the milestones, features, or tasks your team completed. Be specific!
            </p>
            <textarea
              id="accomplishments"
              required
              rows={4}
              value={formData.accomplishments}
              onChange={(e) => handleChange("accomplishments", e.target.value)}
              placeholder="Example: 
• Completed API endpoints for user authentication
• Fixed critical bug in deployment pipeline
• Finished architecture documentation
• Conducted successful code review session"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-upepo-blue focus:border-transparent resize-none"
            />
          </div>

          {/* Next Week Goals */}
          <div>
            <label htmlFor="nextWeekGoals" className="block text-sm font-semibold text-slate-900 mb-2">
              What are your goals for next week? *
            </label>
            <p className="text-sm text-slate-600 mb-2">
              What will you work on? Set clear, achievable goals.
            </p>
            <textarea
              id="nextWeekGoals"
              required
              rows={4}
              value={formData.nextWeekGoals}
              onChange={(e) => handleChange("nextWeekGoals", e.target.value)}
              placeholder="Example:
• Integrate Azure deployment module
• Write unit tests for core API functions
• Start frontend dashboard implementation
• Prepare demo for mentor session"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-upepo-blue focus:border-transparent resize-none"
            />
          </div>

          {/* Blockers */}
          <div>
            <label htmlFor="blockers" className="block text-sm font-semibold text-slate-900 mb-2">
              What's blocking your progress?
            </label>
            <p className="text-sm text-slate-600 mb-2">
              Technical issues, unclear requirements, time constraints, or other challenges
            </p>
            <textarea
              id="blockers"
              rows={3}
              value={formData.blockers}
              onChange={(e) => handleChange("blockers", e.target.value)}
              placeholder="Be honest! Example: Struggling with Terraform syntax, need help with database design, unclear on API architecture..."
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-upepo-blue focus:border-transparent resize-none"
            />
          </div>

          {/* Mentor Support */}
          <div>
            <label htmlFor="mentorSupportNeeded" className="block text-sm font-semibold text-slate-900 mb-2">
              What do you need from your mentor?
            </label>
            <p className="text-sm text-slate-600 mb-2">
              Code review, architecture guidance, career advice, or moral support?
            </p>
            <textarea
              id="mentorSupportNeeded"
              rows={3}
              value={formData.mentorSupportNeeded}
              onChange={(e) => handleChange("mentorSupportNeeded", e.target.value)}
              placeholder="Example: Would love feedback on our API design, need help understanding microservices patterns..."
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-upepo-blue focus:border-transparent resize-none"
            />
          </div>

          {/* Team Dynamics */}
          <div>
            <label htmlFor="teamDynamics" className="block text-sm font-semibold text-slate-900 mb-2">
              How's the team collaboration going?
            </label>
            <p className="text-sm text-slate-600 mb-2">
              Communication, task distribution, decision-making, morale
            </p>
            <textarea
              id="teamDynamics"
              rows={3}
              value={formData.teamDynamics}
              onChange={(e) => handleChange("teamDynamics", e.target.value)}
              placeholder="Example: Great communication in standup, everyone is contributing. One member struggling with time management..."
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-upepo-blue focus:border-transparent resize-none"
            />
          </div>

          {/* Personal Reflection */}
          <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
            <label htmlFor="personalReflection" className="block text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-upepo-blue" />
              Personal Reflection (Private)
            </label>
            <p className="text-sm text-slate-600 mb-3">
              This section is just for you and your mentor. What are you learning? How are you growing?
            </p>
            <textarea
              id="personalReflection"
              rows={3}
              value={formData.personalReflection}
              onChange={(e) => handleChange("personalReflection", e.target.value)}
              placeholder="Example: Really enjoying learning FastAPI. Feeling more confident speaking up in meetings. Need to work on time management..."
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-upepo-blue focus:border-transparent resize-none bg-white"
            />
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-4 pt-4 border-t border-slate-200">
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition"
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-upepo-blue to-upepo-teal text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Submit Check-In
            </button>
          </div>

          <p className="text-xs text-slate-500 text-center">
            Your check-in helps your mentor provide better support and keeps your team accountable.
          </p>
        </form>
      </div>
    </div>
  );
}
