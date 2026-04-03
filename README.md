# Nexo

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![Node.js](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen)]()
[![License](https://img.shields.io/badge/license-private-red)]()

A modern, feature-rich social messaging platform built with React, Vite, and Node.js. Nexo enables real-time messaging, social connectivity, and content sharing with a responsive, intuitive user interface.

[Live Demo](https://nexo-nextgen.vercel.app) • [Report Bug](#support) • [Request Feature](#contributing)

</div>

---

## ✨ Features

- **🔐 Secure Authentication** - Industry-standard authentication with Clerk
- **💬 Real-Time Messaging** - Instant chat with SSE (Server-Sent Events)
- **📰 Social Feed** - Discover posts and updates from your network
- **👤 User Profiles** - Customizable profiles with cover photos
- **📖 Stories** - Share temporary stories with connections
- **🔍 User Discovery** - Advanced search and user discovery
- **🤝 Connection System** - Send, accept, and manage connection requests
- **📱 Fully Responsive** - Seamless experience across all devices
- **⚡ Performance Optimized** - Fast load times with image optimization

## 🛠️ Tech Stack

### Frontend
| Category | Technology |
|----------|------------|
| Framework | React 19 |
| Build Tool | Vite |
| Styling | Tailwind CSS 4 |
| Routing | React Router v7 |
| State Management | Redux Toolkit |
| HTTP Client | Axios |
| Authentication | Clerk |
| Icons | Lucide React |
| Notifications | React Hot Toast |
| Utilities | Moment.js |
| Linting | ESLint |

### Backend
| Category | Technology |
|----------|------------|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB |
| Authentication | Clerk SDK |
| File Upload | Multer |
| Image Management | ImageKit |
| Job Scheduling | Inngest |
| Email Service | Nodemailer |
| Deployment | Vercel |

### Database
- **MongoDB** - NoSQL database for flexible data structure
- **Collections**: Users, Posts, Stories, Messages, Connections

## 📋 Prerequisites

- **Node.js** - v16.0.0 or higher ([Download](https://nodejs.org/))
- **npm** - v8.0.0 or higher (comes with Node.js) or **yarn**
- **MongoDB** - Local or cloud instance ([MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- **Git** - For version control
- **Clerk Account** - For authentication ([Sign up](https://clerk.com))
- **ImageKit Account** - For image optimization ([Sign up](https://imagekit.io))

## 🚀 Installation

### Step 1: Clone the Repository
```bash
git clone https://github.com/saurabhuttam87/Nexo.git
cd Nexo
```

### Step 2: Setup Frontend
```bash
cd client
npm install
```

Create a `.env.local` file in the `client` directory:
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BASEURL=http://localhost:4000
```

### Step 3: Setup Backend
```bash
cd ../server
npm install
```

Create a `.env` file in the `server` directory:
```env
MONGODB_URI=your_mongodb_connection_string
CLERK_SECRET_KEY=your_clerk_secret_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
NODEMAIL_USER=your_email@gmail.com
NODEMAIL_PASSWORD=your_app_password
PORT=5000
INNGEST_EVENT_KEY=your_inngest_key
VITE_BASEURL=http://localhost:5173
```

### Step 4: Verify Installation
```bash
# Frontend
cd client
npm run dev

# Backend (in new terminal)
cd server
npm run server
```

## 🎯 Running the Application

### Frontend Development
```bash
cd client
npm run dev          # Start dev server on http://localhost:5173
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint to check code quality
npm run lint:fix     # Fix ESLint issues automatically
```

### Backend Development
```bash
cd server
npm run server       # Start backend server on http://localhost:5000
npm run dev          # Start with auto-reload (if available)
```

### Full Stack Development
```bash
# Terminal 1 - Frontend
cd Nexo/client && npm run dev

# Terminal 2 - Backend
cd Nexo/server && npm run server

# Visit http://localhost:5173 in your browser
```

### Environment URLs
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:4000
- **API Endpoint**: http://localhost:4000/api

## 📁 Project Structure

```
Nexo/
├── client/                          # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/              # Reusable UI components
│   │   │   ├── ChatBox.jsx
│   │   │   ├── Loading.jsx
│   │   │   ├── MenuItems.jsx
│   │   │   ├── Notification.jsx
│   │   │   ├── PostCard.jsx
│   │   │   ├── ProfileModal.jsx
│   │   │   ├── RecentMessages.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── StoriesBar.jsx
│   │   │   ├── Storymodel.jsx
│   │   │   ├── StoryViewer.jsx
│   │   │   ├── UserCard.jsx
│   │   │   ├── UserProfileInfo.jsx
│   │   │   └── Notification.jsx
│   │   ├── pages/                   # Page-level components
│   │   │   ├── ChatBox.jsx
│   │   │   ├── Connections.jsx
│   │   │   ├── CreatePost.jsx
│   │   │   ├── Discover.jsx
│   │   │   ├── Feed.jsx
│   │   │   ├── Layout.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Messages.jsx
│   │   │   └── Profile.jsx
│   │   ├── features/                # Redux slices
│   │   │   ├── user/
│   │   │   ├── connections/
│   │   │   └── messages/
│   │   ├── api/                     # API configuration
│   │   │   └── axios.js
│   │   ├── assets/                  # Static assets
│   │   │   └── assets.js
│   │   ├── app/                     # Redux store
│   │   │   └── store.js
│   │   ├── App.jsx                  # Main app component
│   │   ├── main.jsx                 # Entry point
│   │   └── index.css                # Global styles
│   ├── public/                      # Static files
│   ├── package.json
│   ├── vite.config.js
│   ├── eslint.config.js
│   └── .env.local                   # Environment variables (create this)
│
├── server/                          # Backend (Node.js + Express)
│   ├── controllers/                 # Route controllers
│   │   ├── userController.js
│   │   ├── postController.js
│   │   ├── messageController.js
│   │   └── storyController.js
│   ├── models/                      # MongoDB schemas
│   │   ├── User.js
│   │   ├── Post.js
│   │   ├── Message.js
│   │   ├── Story.js
│   │   └── Connection.js
│   ├── routes/                      # API routes
│   │   ├── userRoutes.js
│   │   ├── postRoutes.js
│   │   ├── messageRoutes.js
│   │   └── storyRoutes.js
│   ├── middlewares/                 # Custom middlewares
│   │   └── auth.js
│   ├── configs/                     # Configuration files
│   │   ├── db.js
│   │   ├── imagekit.js
│   │   ├── multer.js
│   │   ├── nodeMailer.js
│   │   └── imagekit.js
│   ├── inngest/                     # Job scheduling
│   │   └── index.js
│   ├── server.js                    # Server entry point
│   ├── package.json
│   ├── .env                         # Environment variables (create this)
│   └── vercel.json                  # Vercel deployment config
│
├── README.md                        # This file
└── .gitignore
```

## 📄 Key Pages & Features

| Page | Description | Key Features |
|------|-------------|--------------|
| **Login** | Authentication | Clerk-powered sign-in/sign-up |
| **Feed** | Home feed | View posts from connections, like/comment on posts |
| **Discover** | User discovery | Search and find new users, send connection requests |
| **Messages** | Chat list | View all active conversations, recent messages |
| **ChatBox** | Direct chat | Real-time messaging with image support, SSE updates |
| **Connections** | Network mgmt | Manage pending requests, followers, following |
| **Profile** | User profile | View/edit profile, cover photo, bio, posts history |
| **CreatePost** | Post creation | Write and publish new posts with images |
| **Stories** | Story sharing | Create and view temporary stories (24-hour expiration) |

## ⚙️ Configuration & Setup

### 1. **Clerk Authentication Setup**
   - Visit [clerk.com](https://clerk.com) and create an account
   - Create a new Clerk application
   - Copy your **Publishable Key** → Add to `client/.env.local` as `VITE_CLERK_PUBLISHABLE_KEY`
   - Copy your **Secret Key** → Add to `server/.env` as `CLERK_SECRET_KEY`
   - Configure allowed redirect URLs (include `http://localhost:5173` for development)

### 2. **MongoDB Setup**
   - Option A: Local MongoDB
     ```bash
     # Install MongoDB locally and start the service
     mongod
     # Connection string: mongodb://localhost:27017/nexo
     ```
   - Option B: MongoDB Atlas (Cloud)
     - Sign up at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
     - Create a free cluster
     - Get your connection string → Add to `server/.env` as `MONGODB_URI`

### 3. **ImageKit Setup** (Image Optimization & CDN)
   - Sign up at [imagekit.io](https://imagekit.io)
   - Go to Settings → Copy:
     - **Private Key** → `IMAGEKIT_PRIVATE_KEY`
     - **Public Key** → `IMAGEKIT_PUBLIC_KEY`
     - **URL Endpoint** → `IMAGEKIT_URL_ENDPOINT`
   - Add these to `server/.env`

### 4. **Email Service Setup** (Nodemailer)
   - Using Gmail:
     - Enable 2-Factor Authentication on your Google Account
     - Generate an [App Password](https://myaccount.google.com/apppasswords)
     - Add credentials to `server/.env`:
       ```env
       NODEMAIL_USER=your_email@gmail.com
       NODEMAIL_PASSWORD=your_app_password
       ```

### 5. **Inngest Setup** (Job Scheduling - Optional)
   - Sign up at [inngest.com](https://inngest.com)
   - Get your Event Key → Add to `server/.env` as `INNGEST_EVENT_KEY`
   - Currently used for connection request notifications

### Environment Variables Checklist

**Frontend** (`client/.env.local`):
- ✅ `VITE_CLERK_PUBLISHABLE_KEY`
- ✅ `VITE_BASEURL` (backend URL, e.g., `http://localhost:4000`)

**Backend** (`server/.env`):
- ✅ `MONGODB_URI`
- ✅ `CLERK_SECRET_KEY`
- ✅ `IMAGEKIT_PRIVATE_KEY`
- ✅ `IMAGEKIT_PUBLIC_KEY`
- ✅ `IMAGEKIT_URL_ENDPOINT`
- ✅ `NODEMAIL_USER`
- ✅ `NODEMAIL_PASSWORD`
- ✅ `PORT` (default: 5000)
- ✅ `INNGEST_EVENT_KEY` (optional)

## 💻 Development Guidelines

### Code Style & Quality
```bash
# Frontend linting
cd client
npm run lint           # Check ESLint
npm run lint:fix       # Auto-fix ESLint issues
```

### Best Practices
- **Frontend**
  - Use React functional components with hooks only
  - Leverage Redux Toolkit for state management
  - Keep components modular and single-responsibility
  - Use Tailwind CSS for styling (avoid inline styles)
  - Add proper error handling with try-catch blocks
  - Implement loading states for async operations
  - Use meaningful component and variable names

- **Backend**
  - Follow RESTful API conventions
  - Validate all user inputs
  - Use proper HTTP status codes (200, 201, 400, 401, 404, 500, etc.)
  - Implement error handling middleware
  - Document API endpoints in comments
  - Use async/await instead of callbacks

### API Response Format
```json
{
  "success": true,
  "message": "Operation successful",
  "data": {}
}
```

### Debugging Tips
- Use browser DevTools for frontend debugging
- Use Redux DevTools extension to inspect state changes
- Check browser Console for errors
- Monitor Network tab for API calls
- Use `console.log()` or debugger in Node.js

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### Development Workflow
1. **Fork** the repository
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes** and test thoroughly
4. **Run linting** to ensure code quality
   ```bash
   npm run lint
   npm run lint:fix
   ```
5. **Commit** with clear message
   ```bash
   git commit -m "feat: add amazing feature"
   ```
6. **Push** to your fork
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Submit a Pull Request** with:
   - Clear description of changes
   - Related issue number (if applicable)
   - Screenshots/demos (for UI changes)
   - Testing notes

### Commit Message Convention
- `feat:` New feature
- `fix:` Bug fix
- `refactor:` Code refactoring
- `docs:` Documentation updates
- `style:` Code style changes
- `test:` Adding tests
- `chore:` Maintenance tasks

### Code Review Process
- At least one maintainer must review
- All CI checks must pass
- Address feedback and update PR
- Squash commits if requested

### Reporting Bugs
If you find a bug, please:
1. Check if it's already reported in [Issues](https://github.com/saurabhuttam87/Nexo/issues)
2. Create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots/error logs
   - Your environment (OS, Node version, etc.)

## 📜 License

This project is **private and proprietary**. All rights reserved. Unauthorized copying or distribution is prohibited.

For licensing inquiries, please contact the maintainers.

## 🆘 Support & Troubleshooting

### Common Issues

**Issue**: Server won't connect to MongoDB
- **Solution**: Verify `MONGODB_URI` is correct and MongoDB service is running

**Issue**: Clerk authentication not working
- **Solution**: Check if `VITE_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` are correctly set

**Issue**: Messages not sending
- **Solution**: Ensure backend is running on `http://localhost:4000` and VITE_BASEURL is configured

**Issue**: Images not uploading
- **Solution**: Verify ImageKit credentials are correct in `.env`

**Issue**: Port 5000/5173 already in use
- **Solution**: Kill the process or change PORT in `.env`
  ```bash
  # Windows
  netstat -ano | findstr :5000
  taskkill /PID <PID> /F
  
  # Mac/Linux
  lsof -ti:5000 | xargs kill -9
  ```

### Getting Help
- 📝 Check [Documentation](./README.md)
- 🐛 Report bugs in [GitHub Issues](https://github.com/saurabhuttam87/Nexo/issues)
- 💬 Ask questions in [Discussions](https://github.com/saurabhuttam87/Nexo/discussions)
- 📧 Email: [saurabhuttam99@gmail.com]

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [Express.js Guide](https://expressjs.com)
- [MongoDB Manual](https://docs.mongodb.com/manual)
- [Clerk Documentation](https://clerk.com/docs)

## 🎨 Deployment

### Frontend (Vercel)
```bash
# Frontend is automatically deployed on Vercel
# Push to main branch → Vercel auto-deploys
```

### Backend (Vercel/Heroku/Railway)
```bash
# Backend deployment varies by platform
# See vercel.json for Vercel configuration
```

Live Demo: [nexo-nextgen.vercel.app](https://nexo-nextgen.vercel.app)

## 🗺️ Roadmap

- [ ] File sharing
- [ ] add feature
- [ ] Advanced search with filters
- [ ] Push notifications
- [ ] Message encryption
- [ ] User feed page
- [ ] user account setting

## 📞 Contact & Social

- **GitHub**: [@saurabhuttam87](https://github.com/saurabhuttam87)
- **Email**: [saurabhuttam99@gmail.com]

---

<div align="center">

**Made with ❤️ by [Saurabh Uttam]**

⭐ If you found this project helpful, please consider giving it a star!

</div>
