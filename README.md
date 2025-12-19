# 🌊 Upepo Teams

**From Certified to Career-Ready**

Upepo Teams is a structured team collaboration platform that bridges the gap between learning and professional practice. Join teams, work on real-world projects with mentorship, build portfolios, and launch your career.

## 🎯 Vision

Break the "Certification Cliff" - where people have certificates but no real-world experience to show employers. Upepo Teams provides:

- ✅ Real projects (not tutorials)
- ✅ Team collaboration (not solo learning)  
- ✅ Expert mentorship (not YouTube videos)
- ✅ Portfolio evidence (not just certificates)
- ✅ Professional networks (not isolation)

## 🚀 Key Features

### ✅ Fully Implemented

#### 👥 Team Formation & Matching
- ✅ Browse active teams with filters and search
- ✅ Create your own team with detailed forms
- ✅ Team detail pages with progress tracking, member profiles, and activity feed
- ✅ Team charter and role definitions
- ✅ Apply to join open team roles
- ✅ Team health status tracking (Green/Yellow/Red)
- ✅ 5-stage project lifecycle visualization

#### 🎯 Project Marketplace
- ✅ Four project types: Community, Company, Open Source, Social Impact
- ✅ Browse projects with difficulty levels, tech stacks, and requirements
- ✅ Detailed project pages with full specifications
- ✅ 10-week timeline breakdown with deliverables
- ✅ Learning resources and prerequisites
- ✅ Team structure and open role listings
- ✅ Mentor assignment and profiles

#### 🎓 Mentorship System
- ✅ Browse mentor profiles with expertise areas and ratings
- ✅ Mentor cards on team and project pages
- ✅ Mentor bio, experience, and availability display
- 🚧 Scheduling and booking system (UI ready, needs backend)
- 🚧 1-on-1 and team session management

#### 💼 Portfolio Builder
- ✅ Professional portfolio page with hero section
- ✅ Project case studies with Problem → Solution → Impact format
- ✅ Technology stack visualization
- ✅ Personal contributions and achievements
- ✅ Skills with progress bars and categories
- ✅ Certificates and badges display
- ✅ Shareable portfolio links
- ✅ Stats dashboard (projects completed, teams joined, skills learned)

#### 📈 Growth & Reflection Tools
- ✅ Weekly check-in component (fully functional modal)
- ✅ Team health status selector (Green/Yellow/Red)
- ✅ Accomplishments and goals tracking
- ✅ Blockers identification
- ✅ Mentor support requests
- ✅ Team dynamics feedback
- ✅ Personal reflection journal (private)
- ✅ Progress tracking through project stages

#### 🎨 Marketing & Information
- ✅ Landing page with hero, features, pricing, testimonials
- ✅ About page with mission, values, story, and impact
- ✅ Complete navigation with all key pages
- ✅ Brand voice transformation (warm, empowering, collaborative)
- ✅ Responsive design with Tailwind CSS
- ✅ Custom Upepo brand colors

### 🚧 Pending Implementation

- **Authentication**: NextAuth.js with OAuth providers (GitHub, Google)
- **Database Connection**: PostgreSQL with Prisma ORM (schema complete, needs live database)
- **API Routes**: CRUD operations for teams, projects, mentors, portfolio, check-ins
- **Real-time Features**: Team chat, notifications, live presence indicators
- **Email System**: Weekly digests, milestone notifications, mentor reminders
- **Payment Integration**: Pro tier subscription with Stripe ($29-49/month)
- **Job Board**: Career opportunities and company partnerships
- **Advanced Matching**: Algorithm-based team and mentor matching
- **Testing**: Unit tests, integration tests, E2E tests
- Personal reflection journal

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (React, TypeScript)
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Deployment**: Vercel (frontend), Railway/Render (database)

## 📦 Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/upepo-teams.git
   cd upepo-teams
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Update `.env` with your values:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/upepo_teams"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key-here"
   ```

4. **Set up the database**
   ```bash
   npm run db:push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📂 Project Structure

```
upepo-teams/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Landing page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── teams/             # Teams pages
│   │   ├── page.tsx       # Browse teams
│   │   └── create/        # Create team
│   ├── projects/          # Projects pages
│   ├── mentors/           # Mentorship pages
│   └── dashboard/         # User dashboard
├── components/            # Reusable components
├── lib/                   # Utility functions
│   ├── prisma.ts         # Prisma client
│   └── utils.ts          # Helper functions
├── prisma/               # Database schema
│   └── schema.prisma     # Prisma schema
└── public/               # Static assets
```

## 🎯 The 10-Week Journey

1. **Week 1**: Team Formation
   - Join or create a team
   - Meet your mentor
   - Define roles and charter

2. **Week 2**: Learning & Planning
   - Fill knowledge gaps
   - Architecture design
   - Sprint planning

3. **Weeks 3-8**: Build & Execute
   - Weekly sprints
   - Daily standups (async/sync)
   - Code reviews
   - Regular mentor check-ins

4. **Week 9**: Reflect & Document
   - Team retrospective
   - Build portfolio case study
   - Peer feedback

5. **Week 10**: Showcase & Launch
   - Public demo
   - Share portfolio
   - Join alumni network

## 💰 Pricing

### Free Tier
- Join 1 team per year
- Access community projects
- Basic portfolio
- Group mentorship

### Pro Tier ($39/month)
- Join unlimited teams
- All project types
- 1-on-1 mentor sessions
- Advanced portfolio features
- Priority project selection
- Resume & interview coaching
- Job board access

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## 📊 Success Metrics

- 70% job placement within 6 months
- 85% project completion rate
- 4.5+ member satisfaction rating
- 30% average salary increase

## 📝 Database Schema

Key models:
- **User**: Members, mentors, companies
- **Team**: Team information and status
- **Project**: Project marketplace listings
- **TeamMember**: Team membership and roles
- **MentorSession**: Mentorship sessions
- **PortfolioProject**: Portfolio case studies
- **Reflection**: Growth tracking
- **Feedback**: Peer reviews

See [prisma/schema.prisma](prisma/schema.prisma) for full schema.

## 🔐 Environment Variables

Required environment variables:

```env
# Database
DATABASE_URL="postgresql://..."

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"

# Optional OAuth
GITHUB_ID=""
GITHUB_SECRET=""
GOOGLE_ID=""
GOOGLE_SECRET=""

# Email (for notifications)
EMAIL_SERVER=""
EMAIL_FROM=""

# AWS S3 (for file uploads)
AWS_REGION=""
AWS_ACCESS_KEY_ID=""
AWS_SECRET_ACCESS_KEY=""
AWS_S3_BUCKET=""
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

### Manual Deployment

```bash
npm run build
npm start
```

## 📚 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push schema to database
- `npm run db:studio` - Open Prisma Studio
- `npm run db:migrate` - Create migration

## 🎨 Brand

- **Colors**: Upepo Blue (#0EA5E9), Upepo Teal (#14B8A6)
- **Tagline**: "From Certified to Career-Ready"
- **Philosophy**: "Experience is the best teacher, but you don't have to learn alone"

## 📧 Contact

- Website: [upepoteams.io](https://upepoteams.io)
- Email: hello@upepoteams.io
- Twitter: [@upepoteams](https://twitter.com/upepoteams)

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

**Built with 💙 by the Upepo community**

*Breaking the certification cliff, one team at a time.*
