# 🏗️ Upepo Teams - Technical Architecture

## 📋 Overview

Upepo Teams is built with Next.js 14, TypeScript, Tailwind CSS, and Prisma ORM. The application follows a modern full-stack architecture with server-side rendering, API routes, and a PostgreSQL database.

## 🗂️ Project Structure

```
upepo-teams/
├── app/                      # Next.js 14 App Router
│   ├── page.tsx             # Landing page (marketing site)
│   ├── layout.tsx           # Root layout with navigation
│   ├── globals.css          # Global styles (Tailwind)
│   │
│   ├── teams/               # Team management
│   │   ├── page.tsx        # Browse teams (with filters)
│   │   ├── create/         # Create new team
│   │   └── [id]/           # Team details (TODO)
│   │
│   ├── projects/            # Project marketplace
│   │   ├── page.tsx        # Browse projects
│   │   ├── [id]/           # Project details (TODO)
│   │   └── propose/        # Propose new project (TODO)
│   │
│   ├── mentors/             # Mentorship system
│   │   ├── page.tsx        # Browse mentors
│   │   ├── [id]/           # Mentor profile (TODO)
│   │   └── apply/          # Become a mentor (TODO)
│   │
│   ├── dashboard/           # User dashboard
│   │   └── page.tsx        # Main dashboard
│   │
│   ├── portfolio/           # Portfolio builder (TODO)
│   ├── auth/                # Authentication (TODO)
│   └── api/                 # API routes (TODO)
│
├── components/              # Reusable components (TODO)
│   ├── ui/                 # UI components (buttons, cards, etc.)
│   └── shared/             # Shared components (nav, footer, etc.)
│
├── lib/                     # Utility functions
│   ├── prisma.ts           # Prisma client singleton
│   └── utils.ts            # Helper functions (cn)
│
├── prisma/
│   └── schema.prisma       # Database schema
│
└── public/                  # Static assets
```

## 🗄️ Database Schema

### Core Models

#### User
- Stores member, mentor, and company profiles
- Tracks tier (FREE/PRO), role, skills, certifications
- Includes career info and availability

#### Team
- Team information and status (FORMING, ACTIVE, COMPLETED)
- Links to Project and creator (User)
- Has max members limit and required skills

#### TeamMember
- Junction table for Team ↔ User
- Tracks role (Team Lead, Tech Lead, etc.)
- Status: PENDING, ACTIVE, COMPLETED, LEFT

#### Project
- Project marketplace listings
- Types: COMMUNITY_PROPOSED, COMPANY_SPONSORED, OPEN_SOURCE, SOCIAL_IMPACT
- Difficulty: BEGINNER, INTERMEDIATE, ADVANCED
- Tracks tech stack and skills to learn

#### MentorSession
- Mentorship sessions (1-on-1, team, code review)
- Links Mentor (User) to Mentee (User) or Team
- Tracks scheduling, duration, notes, feedback

#### PortfolioProject
- Professional case studies
- Problem → Solution → Results format
- Images, demos, GitHub links
- Skills and metrics tracking

#### Reflection
- Weekly reflections for growth tracking
- Accomplishments, challenges, learnings
- Skills gained and confidence levels

#### Feedback
- Peer and mentor feedback
- Strengths, growth areas, examples
- Can be anonymous

## 🎨 Design System

### Colors
- **Upepo Blue**: `#0EA5E9` (primary brand color)
- **Upepo Teal**: `#14B8A6` (secondary accent)
- **Slate shades**: Used for text and backgrounds

### Typography
- **Font**: Inter (from Google Fonts)
- **Headings**: Bold, varying from text-4xl to text-xl
- **Body**: text-slate-600 for secondary text

### Components
- Rounded corners: `rounded-lg` (8px), `rounded-xl` (12px)
- Shadows: `shadow-sm` for cards, `shadow-md` on hover
- Borders: `border-slate-200` for subtle divisions
- Hover states: Transition all interactive elements

## 🔒 Authentication (TODO)

### NextAuth.js Setup
```typescript
// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"

// Configure providers (Email, GitHub, Google)
```

### Protected Routes
- Dashboard, teams, portfolio require authentication
- Use middleware to protect routes
- Role-based access for mentors and admins

## 🚀 Key Features Implementation

### 1. Team Formation System

**Browse Teams** (✅ Implemented)
- `/app/teams/page.tsx`
- Shows active teams with filters
- Search by skills, project type, difficulty

**Create Team** (✅ Implemented)
- `/app/teams/create/page.tsx`
- Form for team details, project selection, skills
- Role selection and charter definition

**Team Matching Algorithm** (TODO)
```typescript
// lib/matching.ts
export function matchTeamMembers(team, applicants) {
  // Score based on:
  // - Skill overlap
  // - Timezone compatibility
  // - Availability match
  // - Experience level balance
}
```

**Team Detail Page** (TODO)
- `/app/teams/[id]/page.tsx`
- Team charter, members, project progress
- Apply to join button
- Team communication tools

### 2. Project Marketplace

**Browse Projects** (✅ Implemented)
- `/app/projects/page.tsx`
- Filter by type, difficulty, tech stack
- Shows available spots per project

**Project Detail** (TODO)
- `/app/projects/[id]/page.tsx`
- Full project description and requirements
- Success metrics and learning outcomes
- "Start Team" CTA

**Propose Project** (TODO)
- `/app/projects/propose/page.tsx`
- Form for community members to suggest projects
- Admin approval workflow

### 3. Mentorship System

**Browse Mentors** (✅ Implemented)
- `/app/mentors/page.tsx`
- Filter by expertise, company, availability
- Shows ratings and teams mentored

**Mentor Profile** (TODO)
- `/app/mentors/[id]/page.tsx`
- Full bio, expertise, availability calendar
- Request mentorship button
- Reviews from past mentees

**Mentor Matching** (TODO)
```typescript
// lib/mentor-matching.ts
export function matchMentor(team, preferences) {
  // Match based on:
  // - Tech stack expertise
  // - Availability
  // - Rating and reviews
  // - Team preferences
}
```

**Session Scheduling** (TODO)
- Calendar integration (Google Calendar API)
- Automated reminders
- Video call links (Zoom/Meet integration)

### 4. Portfolio Builder

**Auto-Documentation** (TODO)
```typescript
// lib/portfolio.ts
export async function generatePortfolio(userId) {
  // Automatically collect:
  // - Completed projects
  // - GitHub commits
  // - Skills developed
  // - Team feedback
  // Generate case studies
}
```

**Portfolio Page** (TODO)
- `/app/portfolio/page.tsx`
- Professional layout
- Project case studies
- Skills visualization
- Export to PDF
- Public sharing URL

### 5. Dashboard

**User Dashboard** (✅ Implemented)
- `/app/dashboard/page.tsx`
- Active teams overview
- Upcoming sessions
- Weekly goals
- Skills progress
- Recent activity

**Weekly Check-ins** (TODO)
- Form for team progress updates
- Blockers and accomplishments
- Health indicator (green/yellow/red)

**Retrospectives** (TODO)
- End-of-week team reflections
- What went well / didn't go well
- Action items for next week

## 📡 API Routes (TODO)

### Teams API
```typescript
// app/api/teams/route.ts
GET    /api/teams              // List teams with filters
POST   /api/teams              // Create new team
GET    /api/teams/[id]         // Get team details
PATCH  /api/teams/[id]         // Update team
DELETE /api/teams/[id]         // Delete team

// Team Members
POST   /api/teams/[id]/apply   // Apply to join
POST   /api/teams/[id]/invite  // Invite member
PATCH  /api/teams/[id]/members/[userId]  // Update member role
```

### Projects API
```typescript
// app/api/projects/route.ts
GET    /api/projects           // List projects
POST   /api/projects           // Create/propose project
GET    /api/projects/[id]      // Get project details
```

### Mentorship API
```typescript
// app/api/mentors/route.ts
GET    /api/mentors            // List mentors
POST   /api/mentors/request    // Request mentorship
GET    /api/mentors/sessions   // Get user sessions
POST   /api/mentors/sessions   // Schedule session
```

### Portfolio API
```typescript
// app/api/portfolio/route.ts
GET    /api/portfolio/[userId]     // Get portfolio
POST   /api/portfolio/projects     // Add project
PATCH  /api/portfolio/projects/[id] // Update project
POST   /api/portfolio/generate     // Auto-generate portfolio
```

## 🔄 Real-time Features (TODO)

### WebSocket for Team Collaboration
```typescript
// lib/websocket.ts
// Real-time features:
// - Team chat
// - Live presence indicators
// - Notification system
// - Collaborative editing
```

Consider using:
- **Pusher** (managed WebSocket service)
- **Ably** (real-time messaging)
- **Socket.io** (self-hosted)

## 📧 Email Notifications (TODO)

### Email Templates
- Welcome email
- Team invitation
- Mentor session reminder
- Weekly check-in reminder
- Project milestone reached
- Feedback received

### Implementation
```typescript
// lib/email.ts
import { Resend } from 'resend'

export async function sendTeamInvite(to, teamName, inviteLink) {
  // Send email using Resend or SendGrid
}
```

## 📊 Analytics & Tracking (TODO)

### User Analytics
- Track user journey
- Feature usage
- Drop-off points
- Conversion rates

### Success Metrics
- Team completion rate
- Member satisfaction
- Job placement rate
- Skills development

Consider using:
- **Mixpanel** (product analytics)
- **PostHog** (open-source analytics)
- **Amplitude** (user behavior)

## 🧪 Testing (TODO)

### Unit Tests
```typescript
// __tests__/lib/matching.test.ts
import { matchTeamMembers } from '@/lib/matching'

describe('Team Matching', () => {
  it('should match members with compatible skills', () => {
    // Test matching algorithm
  })
})
```

### Integration Tests
- API route testing
- Database operations
- Authentication flows

### E2E Tests
```typescript
// e2e/team-creation.spec.ts
import { test, expect } from '@playwright/test'

test('user can create a team', async ({ page }) => {
  // Test full team creation flow
})
```

## 🚀 Deployment

### Environment Setup

**Development**
```bash
npm run dev
```

**Production Build**
```bash
npm run build
npm start
```

### Vercel Deployment

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo>
git push -u origin main
```

2. **Deploy to Vercel**
- Import project in Vercel dashboard
- Add environment variables
- Deploy!

### Database Hosting

**Options:**
- **Neon** (PostgreSQL, free tier)
- **Railway** (PostgreSQL, free tier)
- **Supabase** (PostgreSQL with auth)
- **PlanetScale** (MySQL alternative)

## 📝 Next Steps (Priority Order)

### Phase 1: Core Functionality (Weeks 1-2)
1. ✅ Set up authentication with NextAuth.js
2. ✅ Create team detail page
3. ✅ Implement team application system
4. ✅ Build project detail page
5. ✅ Add API routes for teams and projects

### Phase 2: Mentorship (Week 3)
1. ✅ Mentor profile pages
2. ✅ Mentor request system
3. ✅ Session scheduling
4. ✅ Calendar integration

### Phase 3: Portfolio (Week 4)
1. ✅ Portfolio page layout
2. ✅ Project case study builder
3. ✅ Auto-documentation system
4. ✅ Public portfolio sharing
5. ✅ PDF export

### Phase 4: Collaboration Tools (Week 5)
1. ✅ Weekly check-ins
2. ✅ Team retrospectives
3. ✅ Peer feedback system
4. ✅ Real-time chat
5. ✅ Notifications

### Phase 5: Polish & Launch (Week 6)
1. ✅ Email notifications
2. ✅ Analytics integration
3. ✅ Testing (unit, integration, E2E)
4. ✅ Performance optimization
5. ✅ SEO optimization
6. ✅ Launch! 🚀

## 🤝 Contributing

### Development Workflow

1. **Create a branch**
```bash
git checkout -b feature/your-feature-name
```

2. **Make changes and commit**
```bash
git add .
git commit -m "feat: add team matching algorithm"
```

3. **Push and create PR**
```bash
git push origin feature/your-feature-name
```

### Commit Message Convention
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Formatting
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance

## 📚 Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Prisma Docs](https://www.prisma.io/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [NextAuth.js](https://next-auth.js.org/)

### Design Inspiration
- [Dribbble - Team Collaboration](https://dribbble.com/search/team-collaboration)
- [Behance - Dashboard Designs](https://www.behance.net/search/projects?search=dashboard)

### Similar Platforms
- [Chingu](https://www.chingu.io/) - Remote team projects
- [Exercism](https://exercism.org/) - Coding practice with mentorship
- [MLH Fellowship](https://fellowship.mlh.io/) - Open source fellowship

---

**Built with 💙 by the Upepo community**
