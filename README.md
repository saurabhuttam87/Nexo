# Nexo

A modern social messaging platform built with React and Vite, featuring real-time messaging, user profiles, and social connectivity.

## Features

- **User Authentication** - Secure authentication with Clerk
- **Messaging** - Real-time chat and messaging capabilities
- **Social Feed** - Discover posts and updates from your network
- **User Profiles** - View and manage user profiles
- **Stories** - Share temporary stories with your connections
- **Connection Discovery** - Find and connect with other users
- **Responsive Design** - Fully responsive UI built with Tailwind CSS

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **Routing**: React Router v7
- **Authentication**: Clerk
- **UI Icons**: Lucide React
- **Date Handling**: Moment.js
- **Notifications**: React Hot Toast
- **Code Quality**: ESLint

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Nexo
```

2. Install dependencies:
```bash
cd client
npm install
```

## Running the Application

### Development Mode
```bash
npm run dev
```
The application will start on `http://localhost:5173` (Vite's default port)

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Lint Code
```bash
npm run lint
```

## Project Structure

```
client/
├── src/
│   ├── components/          # Reusable components
│   │   ├── ChatBox.jsx
│   │   ├── Loading.jsx
│   │   ├── MenuItems.jsx
│   │   ├── PostCard.jsx
│   │   ├── RecentMessages.jsx
│   │   ├── Sidebar.jsx
│   │   ├── StoriesBar.jsx
│   │   ├── StoryViewer.jsx
│   │   ├── UserCard.jsx
│   │   ├── UserProfileInfo.jsx
│   │   └── Storymodel.jsx
│   ├── pages/               # Page components
│   │   ├── ChatBox.jsx
│   │   ├── Connections.jsx
│   │   ├── CreatePost.jsx
│   │   ├── Discover.jsx
│   │   ├── Feed.jsx
│   │   ├── Layout.jsx
│   │   ├── Login.jsx
│   │   ├── Messages.jsx
│   │   └── Profile.jsx
│   ├── assets/              # Static assets
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static files
├── package.json             # Project dependencies
├── vite.config.js          # Vite configuration
└── eslint.config.js        # ESLint configuration
```

## Key Pages

- **Login** - User authentication page
- **Feed** - Main feed showing posts from connections
- **Messages** - Direct messaging interface
- **Discover** - Find new users and content
- **Connections** - View and manage user connections
- **Profile** - User profile and settings
- **CreatePost** - Create new posts
- **ChatBox** - Individual chat interface

## Configuration

### Environment Variables
Create a `.env.local` file in the `client` directory with your Clerk configuration:
```
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key_here
```

### Clerk Setup
1. Sign up at [clerk.com](https://clerk.com)
2. Create a new Clerk application
3. Copy your publishable key and add it to your environment variables

## Development Guidelines

- Follow ESLint rules: `npm run lint`
- Use React hooks for state management
- Keep components modular and reusable
- Use Tailwind CSS for styling
- Add proper error handling and loading states

## Contributing

1. Create a new branch for your feature
2. Make your changes and test thoroughly
3. Run linting to ensure code quality
4. Submit a pull request with a clear description

## License

This project is private and proprietary.

## Support

For issues or questions, please reach out to the project maintainers.
