# EdTech Platform

A modern educational technology platform built with React, GraphQL, and modern web technologies.

## Features

- 🎓 **Course Management**: Browse and explore courses with detailed information
- 📚 **Learning Dashboard**: Track your progress and manage enrolled courses
- 🔍 **Search & Filter**: Find courses by category and search terms
- 📱 **Responsive Design**: Beautiful UI that works on all devices
- 🚀 **GraphQL Integration**: Modern API integration with Apollo Client
- ⚡ **Fast Performance**: Built with Vite for optimal development and build experience

## Tech Stack

- **Frontend Framework**: React 18
- **Routing**: React Router DOM
- **GraphQL Client**: Apollo Client
- **Build Tool**: Vite
- **Styling**: CSS3 with CSS Variables
- **Language**: JavaScript (JSX)

## Project Structure

```
edtech/
├── src/
│   ├── components/       # Reusable React components
│   │   └── Navbar.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── Courses.jsx
│   │   ├── CourseDetail.jsx
│   │   └── Dashboard.jsx
│   ├── graphql/         # GraphQL queries and mutations
│   │   ├── queries.js
│   │   └── mutations.js
│   ├── App.jsx          # Main app component
│   ├── App.css          # App styles
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML entry point
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
└── README.md           # This file
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Update GraphQL endpoint:
   - Open `src/main.jsx`
   - Replace `'https://api.example.com/graphql'` with your actual GraphQL server URL

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## GraphQL Schema

The application expects the following GraphQL schema structure:

### Queries
- `courses(search, category, limit, featured)` - Get list of courses
- `course(id)` - Get single course details
- `userCourses` - Get user's enrolled courses
- `userStats` - Get user learning statistics

### Mutations
- `enrollCourse(courseId)` - Enroll in a course
- `updateProgress(courseId, progress)` - Update course progress
- `createUser(name, email, password)` - Create new user
- `login(email, password)` - User login

## Features Overview

### Home Page
- Hero section with call-to-action
- Feature highlights
- Featured courses display

### Courses Page
- Search functionality
- Category filtering
- Course grid with details

### Course Detail Page
- Full course information
- Lesson curriculum
- Instructor details
- Enrollment options

### Dashboard
- Learning statistics
- Progress tracking
- Enrolled courses
- Achievements

## Customization

### Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  /* ... */
}
```

### GraphQL Endpoint
Update the endpoint in `src/main.jsx`:
```javascript
const httpLink = createHttpLink({
  uri: 'YOUR_GRAPHQL_ENDPOINT',
})
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for your own purposes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

