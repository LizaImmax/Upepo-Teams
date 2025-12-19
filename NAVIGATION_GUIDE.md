# 🧭 Upepo Teams - Navigation Guide

## How to Access All Pages

All pages are now accessible through the top navigation bar on every page!

### 📍 Main Navigation Links

After starting the dev server (`npm run dev`), you can access these pages:

#### **Core Pages** (in Navigation Bar)

1. **Teams** - `/teams`
   - Browse all active teams
   - Filter by status, project type, tech stack
   - Click "Create Your Team" to go to team creation

2. **Projects** - `/projects`
   - Browse all available projects
   - Filter by type: Community, Company, Open Source, Social Impact
   - Click any project to see details

3. **Mentors** - `/mentors`
   - Browse all available mentors
   - See expertise areas and availability
   - Filter by skills and experience

4. **Portfolio** - `/portfolio`
   - View example portfolio showcase
   - See project case studies
   - Skills visualization

5. **Dashboard** - `/dashboard`
   - User dashboard with stats
   - Active teams and projects
   - Upcoming sessions
   - Weekly goals

6. **About** - `/about`
   - Mission and values
   - Our story
   - Team information
   - Impact metrics

#### **Auth Pages**

7. **Sign In** - `/auth/signin`
   - Sign in with email/password
   - OAuth with GitHub or Google

8. **Sign Up** - `/auth/signup`
   - Create new account
   - OAuth options

#### **Dynamic Pages** (Click through from browse pages)

9. **Team Detail** - `/teams/[id]`
   - Access by clicking any team card on `/teams`
   - Example: `/teams/1`

10. **Team Creation** - `/teams/create`
    - Click "Create Your Team" button on `/teams` page

11. **Project Detail** - `/projects/[id]`
    - Access by clicking any project card on `/projects`
    - Example: `/projects/1`

12. **Home/Landing** - `/`
    - Click the Upepo logo in any navigation bar
    - Full marketing site with hero, features, pricing

---

## 🎯 Quick Access Checklist

Start your dev server:
```bash
npm run dev
```

Then visit these URLs:

- [ ] http://localhost:3000 - Landing page
- [ ] http://localhost:3000/teams - Teams browse
- [ ] http://localhost:3000/teams/create - Create team
- [ ] http://localhost:3000/teams/1 - Team detail example
- [ ] http://localhost:3000/projects - Projects browse
- [ ] http://localhost:3000/projects/1 - Project detail example
- [ ] http://localhost:3000/mentors - Mentors browse
- [ ] http://localhost:3000/portfolio - Portfolio showcase
- [ ] http://localhost:3000/dashboard - User dashboard
- [ ] http://localhost:3000/about - About page
- [ ] http://localhost:3000/auth/signin - Sign in
- [ ] http://localhost:3000/auth/signup - Sign up

---

## 🔍 What Each Page Shows

### `/teams` - Teams Browse
- 5 example teams with different statuses
- Filter sidebar (status, project type, skills)
- Search functionality (UI only)
- Team cards showing:
  - Team name and description
  - Project info
  - Status (Forming, Active, Completed)
  - Members count
  - Required skills
  - "View Team" button

### `/teams/create` - Create Team
- Complete team creation form with sections:
  - Team basics (name, description)
  - Project selection dropdown
  - Skills/tech stack input
  - Roles needed with descriptions
  - Timeline and availability
  - Team charter textarea

### `/teams/1` - Team Detail
- Full team information with:
  - Team header with status and progress
  - 5-stage project lifecycle visualization
  - Week 5 of 10 progress bar
  - Team charter
  - Team members (4 members shown)
  - Open roles with "Apply" buttons
  - Recent activity feed
  - Mentor profile card
  - Team health dashboard
  - Next milestone
  - Quick actions sidebar

### `/projects` - Projects Browse
- 6 example projects across all 4 types
- Project cards with:
  - Title and description
  - Type badge (Community, Company, OSS, Social Impact)
  - Difficulty level (Beginner, Intermediate, Advanced)
  - Tech stack chips
  - Duration and team size
  - Spots available
  - Company logo (for sponsored projects)

### `/projects/1` - Project Detail
- Comprehensive project information:
  - Hero with title, tagline, badges
  - Overview and long description
  - Problem statement
  - Project goals (6 goals listed)
  - Tech stack (Required, Recommended, You'll Learn)
  - 10-week timeline (5 stages with deliverables)
  - Team structure with open roles
  - Learning resources (4 resources)
  - Requirements (Technical, Commitment, Mindset)
  - Mentor profile card
  - Similar projects
  - "Apply to Join" CTA

### `/mentors` - Mentors Browse
- 6 example mentors
- Mentor cards showing:
  - Name and title
  - Company (AWS, Google, Microsoft, etc.)
  - Bio and expertise
  - Years of experience
  - Teams helped count
  - Rating (out of 5)
  - Availability status
  - "Request Mentor" button

### `/portfolio` - Portfolio Showcase
- Professional portfolio page with:
  - Hero section with stats (3 projects, 3 teams, 12 skills, 18 sessions)
  - 3 detailed project case studies:
    1. Multi-Cloud Deployment Platform
    2. Community Mental Health Check-In App
    3. Open Source Kubernetes Tool Enhancement
  - Each project shows:
    - Problem, Solution, Tech Stack
    - Personal contributions
    - Impact & Results with metrics
    - Badges earned
    - GitHub and demo links
  - Skills sidebar with progress bars
  - Certifications
  - Share portfolio section

### `/dashboard` - User Dashboard
- Welcome message
- Stats cards (3 teams, 8 projects, 24 sessions, 85% completion)
- Active teams (2 teams with progress)
- Upcoming sessions (3 sessions)
- Recent activity feed
- Weekly goals (3 goals)
- Skills progress (5 skills)
- Learning resources (3 resources)

### `/about` - About Page
- Mission statement
- Problem/Solution overview
- 6 core values with cards
- "How We're Different" section
- Our story (Upepo = wind in Swahili)
- Team section placeholder
- Impact metrics (500+ members, 150+ projects)
- Success stories (2 testimonials)
- CTA to join

### `/` - Landing Page
- Hero section with CTA
- Stats grid (500+ members, 89% success rate, etc.)
- "Where Learning Meets Doing" section
- 10-week journey visualization
- Key features (6 cards)
- Pricing (Free vs Pro tier)
- Footer with links

### `/auth/signin` - Sign In
- OAuth buttons (GitHub, Google)
- Email/password form
- "Remember me" checkbox
- "Forgot password?" link
- Link to sign up

### `/auth/signup` - Sign Up
- Left side: Value propositions (4 benefits)
- Right side: Sign up form
  - OAuth buttons
  - Full name, email, password fields
  - Terms agreement checkbox
- Link to sign in

---

## 🎨 Navigation Bar Layout

Every page has this navigation (except auth pages which are simplified):

```
[Logo] Upepo Teams | Teams | Projects | Mentors | Portfolio | Dashboard | About | Sign In | [Get Started]
```

- **Logo** - Clickable, goes to home page
- **Teams, Projects, Mentors, Portfolio, Dashboard, About** - Main navigation links
- **Sign In** - Text link to sign in page
- **Get Started** - Blue button to sign up page

---

## 🚀 What's Functional vs Mock

### ✅ Fully Functional (No Backend Needed)
- All navigation links work
- All pages load and display properly
- Responsive design works
- UI interactions (hover states, etc.)

### ⚠️ Mock Data (Needs Backend)
- All teams, projects, mentors, portfolio data is hardcoded
- No real authentication
- No database connection
- Buttons work visually but don't save data

### ❌ Not Implemented Yet
- Real user authentication
- Database operations
- Team applications
- Project applications
- Mentor booking
- Portfolio editing
- Weekly check-in submission (component exists, no API)
- Real-time chat
- Notifications

---

## 💡 Tips for Testing

1. **Start fresh**: Open http://localhost:3000 in your browser

2. **Test navigation flow**:
   - Click "Teams" in nav bar → See teams browse
   - Click any team card → See team detail
   - Click "Create Your Team" → See creation form
   - Use browser back or click logo to return home

3. **Check all pages**:
   - Use the checklist above to visit each URL
   - Verify navigation bar appears on every page
   - Confirm all links work

4. **Mobile responsive**:
   - Resize browser window
   - Navigation should collapse to hamburger (if implemented)
   - All pages should be mobile-friendly

---

## 🐛 Troubleshooting

**Problem**: Pages not loading
- **Solution**: Make sure dev server is running (`npm run dev`)

**Problem**: Navigation links not visible
- **Solution**: Clear browser cache, hard refresh (Ctrl+Shift+R)

**Problem**: Seeing old navigation
- **Solution**: The updates were just made, refresh your browser

**Problem**: 404 errors
- **Solution**: Check the URL - dynamic routes need actual IDs (e.g., `/teams/1` not just `/teams/`)

---

## 📚 What to Explore

### For UX/Design Review:
1. Check all 12 pages for consistent branding
2. Verify navigation is intuitive
3. Test responsive design on different screen sizes

### For Feature Review:
1. Browse teams and click through to details
2. Explore project marketplace and detail pages
3. Check mentor profiles
4. Review portfolio showcase format
5. Examine dashboard layout

### For Content Review:
1. Read about page for mission/values
2. Check landing page messaging
3. Review pricing tiers
4. Read project descriptions and requirements

---

**✅ All pages are now accessible and functional with mock data!**

The navigation has been updated across all pages. You can now easily explore the entire platform by clicking the links in the top navigation bar.
