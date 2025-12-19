# 🚀 Quick Start Guide - Upepo Teams

Welcome! This guide will get you up and running with Upepo Teams in under 5 minutes.

## ✅ Prerequisites Checklist

Before you begin, make sure you have:

- [ ] **Node.js 18+** installed ([Download](https://nodejs.org/))
- [ ] **Git** installed ([Download](https://git-scm.com/))
- [ ] **PostgreSQL** installed ([Download](https://www.postgresql.org/download/)) OR use a cloud provider
- [ ] A code editor (VS Code recommended)

## 📦 Installation Steps

### 1. Navigate to Project Directory

You're already in the project! The directory structure looks like this:

```
c:\Users\LIZZA\Documents\Upepo-Teams\
```

### 2. Install Dependencies

✅ **DONE!** Dependencies are already installed.

If you need to reinstall:
```bash
npm install
```

### 3. Set Up Database

You have two options:

#### Option A: Local PostgreSQL (Recommended for Development)

1. **Install PostgreSQL** if not already installed
2. **Create a database**:
   ```sql
   CREATE DATABASE upepo_teams;
   ```

3. **Update `.env` file** (already created):
   ```env
   DATABASE_URL="postgresql://your-username:your-password@localhost:5432/upepo_teams?schema=public"
   ```

4. **Push the schema to database**:
   ```bash
   npm run db:push
   ```

#### Option B: Cloud Database (Easiest)

**Using Neon (Free Tier):**

1. Sign up at [neon.tech](https://neon.tech)
2. Create a new project
3. Copy the connection string
4. Update `.env`:
   ```env
   DATABASE_URL="postgresql://user:pass@host.neon.tech/dbname?sslmode=require"
   ```
5. Run:
   ```bash
   npm run db:push
   ```

### 4. Start Development Server

✅ **ALREADY RUNNING!**

Your server is live at: [http://localhost:3000](http://localhost:3000)

If you need to restart:
```bash
npm run dev
```

## 🎯 What's Working Right Now

### ✅ Fully Functional Pages

1. **Landing Page** - [http://localhost:3000](http://localhost:3000)
   - Hero section with value proposition
   - Features overview
   - Pricing plans
   - Full marketing site

2. **Browse Teams** - [http://localhost:3000/teams](http://localhost:3000/teams)
   - View active teams
   - Filter by project type and difficulty
   - Team details and member count
   - Search functionality

3. **Create Team** - [http://localhost:3000/teams/create](http://localhost:3000/teams/create)
   - Complete team creation form
   - Project selection
   - Skills and roles definition
   - Team charter

4. **Browse Projects** - [http://localhost:3000/projects](http://localhost:3000/projects)
   - Project marketplace
   - 4 project types (Community, Company, Open Source, Social Impact)
   - Tech stack and skills information
   - Project difficulty levels

5. **Browse Mentors** - [http://localhost:3000/mentors](http://localhost:3000/mentors)
   - Expert mentor profiles
   - Filter by expertise and availability
   - Ratings and experience
   - Mentor statistics

6. **Dashboard** - [http://localhost:3000/dashboard](http://localhost:3000/dashboard)
   - User overview
   - Active teams
   - Upcoming sessions
   - Weekly goals and progress
   - Skills tracking

### 📊 Current Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL + Prisma ORM
- **TypeScript**: Full type safety
- **Icons**: Lucide React

### 🗄️ Database Schema

The database schema includes:
- ✅ Users (members, mentors, companies)
- ✅ Teams and Team Members
- ✅ Projects (marketplace)
- ✅ Mentor Sessions
- ✅ Portfolio Projects
- ✅ Reflections and Growth Tracking
- ✅ Peer Feedback System

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Push database schema (without migrations)
npm run db:push

# Create a migration
npm run db:migrate

# Open Prisma Studio (database GUI)
npm run db:studio
```

## 📂 Key Files to Know

```
upepo-teams/
├── app/
│   ├── page.tsx              ← Landing page
│   ├── teams/page.tsx        ← Browse teams
│   ├── projects/page.tsx     ← Project marketplace
│   ├── mentors/page.tsx      ← Browse mentors
│   └── dashboard/page.tsx    ← User dashboard
│
├── prisma/
│   └── schema.prisma         ← Database schema
│
├── lib/
│   ├── prisma.ts            ← Database client
│   └── utils.ts             ← Utility functions
│
├── .env                      ← Environment variables
└── package.json             ← Dependencies
```

## 🎨 Design System

### Colors
- **Primary**: Upepo Blue (`#0EA5E9`)
- **Secondary**: Upepo Teal (`#14B8A6`)
- **Text**: Slate shades

### Usage
```tsx
// Primary button
<button className="bg-upepo-blue text-white px-6 py-2 rounded-lg hover:bg-upepo-blue/90">
  Click Me
</button>

// Gradient
<div className="bg-gradient-to-r from-upepo-blue to-upepo-teal">
  Content
</div>
```

## 🚧 What's Next? (TODO)

### High Priority
1. **Authentication** (NextAuth.js)
   - Sign up / Sign in
   - OAuth (Google, GitHub)
   - Protected routes

2. **Team Details Page**
   - View team information
   - Apply to join team
   - Team communication

3. **API Routes**
   - Teams CRUD
   - Projects CRUD
   - Mentorship requests

### Medium Priority
4. **Portfolio Builder**
   - Create case studies
   - Auto-documentation
   - Public sharing

5. **Mentorship Scheduling**
   - Calendar integration
   - Session booking
   - Video call links

6. **Real-time Features**
   - Team chat
   - Notifications
   - Live presence

See [ARCHITECTURE.md](./ARCHITECTURE.md) for detailed implementation plans.

## 🐛 Troubleshooting

### Database Connection Issues

**Error**: `Can't reach database server`

**Solution**:
1. Check PostgreSQL is running:
   ```bash
   # Windows (PowerShell as Admin)
   Get-Service postgresql*
   
   # If stopped:
   Start-Service postgresql-x64-14  # (adjust version)
   ```

2. Verify connection string in `.env`
3. Try `npm run db:push` again

### Port 3000 Already in Use

**Error**: `Port 3000 is already in use`

**Solution**:
```bash
# Use a different port
PORT=3001 npm run dev
```

Or find and kill the process using port 3000:
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Module Not Found

**Error**: `Cannot find module 'xyz'`

**Solution**:
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 📚 Learning Resources

### Next.js
- [Next.js 14 Documentation](https://nextjs.org/docs)
- [Next.js App Router Tutorial](https://nextjs.org/learn)

### Prisma
- [Prisma Quickstart](https://www.prisma.io/docs/getting-started)
- [Prisma Schema Reference](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference)

### Tailwind CSS
- [Tailwind Documentation](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/)

## 🤝 Need Help?

- **Documentation**: Read [README.md](./README.md) and [ARCHITECTURE.md](./ARCHITECTURE.md)
- **Issues**: Check existing issues or create a new one
- **Discussions**: Join community discussions
- **Email**: hello@upepoteams.io

## 🎉 You're All Set!

Your Upepo Teams development environment is ready! Here's what to do next:

1. ✅ **Explore the app**: Visit [http://localhost:3000](http://localhost:3000)
2. ✅ **Check the database**: Run `npm run db:studio` to view data
3. ✅ **Read the architecture**: Review [ARCHITECTURE.md](./ARCHITECTURE.md)
4. ✅ **Start coding**: Pick a feature from the TODO list!

---

**Happy Building! 🚀**

*From Certified to Career-Ready*
