// Mock GraphQL Server for Development
// Run with: node mock-server.js

const { createServer } = require('graphql-yoga')
const { GraphQLScalarType } = require('graphql')

// Mock Data
const mockCourses = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    description: 'Learn full-stack web development from scratch. Master HTML, CSS, JavaScript, React, Node.js, and more.',
    instructor: 'John Doe',
    rating: 4.8,
    students: 12500,
    thumbnail: null,
    price: 99.99,
    category: 'Web Development',
    duration: '60 hours',
    level: 'Beginner',
    lessons: [
      { id: '1', title: 'Introduction to HTML', duration: '2 hours', type: 'Video' },
      { id: '2', title: 'CSS Fundamentals', duration: '3 hours', type: 'Video' },
      { id: '3', title: 'JavaScript Basics', duration: '4 hours', type: 'Video' }
    ],
    syllabus: 'This comprehensive course covers everything you need to become a full-stack web developer...'
  },
  {
    id: '2',
    title: 'Advanced React & GraphQL',
    description: 'Master React hooks, context, and GraphQL integration for building modern web applications.',
    instructor: 'Jane Smith',
    rating: 4.9,
    students: 8500,
    thumbnail: null,
    price: 129.99,
    category: 'Web Development',
    duration: '45 hours',
    level: 'Advanced',
    lessons: [
      { id: '4', title: 'React Hooks Deep Dive', duration: '3 hours', type: 'Video' },
      { id: '5', title: 'GraphQL Queries', duration: '2.5 hours', type: 'Video' }
    ],
    syllabus: 'Learn advanced React patterns and GraphQL integration...'
  },
  {
    id: '3',
    title: 'Data Science with Python',
    description: 'Learn data analysis, machine learning, and data visualization using Python.',
    instructor: 'Mike Johnson',
    rating: 4.7,
    students: 10200,
    thumbnail: null,
    price: 149.99,
    category: 'Data Science',
    duration: '80 hours',
    level: 'Intermediate',
    lessons: [
      { id: '6', title: 'Python Basics', duration: '5 hours', type: 'Video' },
      { id: '7', title: 'Data Analysis with Pandas', duration: '6 hours', type: 'Video' }
    ],
    syllabus: 'Comprehensive data science course covering Python, pandas, numpy, and more...'
  }
]

const mockUserCourses = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    progress: 65,
    thumbnail: null,
    instructor: 'John Doe',
    lastAccessed: '2024-01-15'
  },
  {
    id: '2',
    title: 'Advanced React & GraphQL',
    progress: 30,
    thumbnail: null,
    instructor: 'Jane Smith',
    lastAccessed: '2024-01-14'
  }
]

const mockUserStats = {
  totalCourses: 5,
  completedCourses: 2,
  inProgressCourses: 3,
  totalHours: 120
}

// GraphQL Schema
const typeDefs = `
  type Query {
    courses(search: String, category: String, limit: Int, featured: Boolean): [Course!]!
    course(id: ID!): Course
    userCourses: [UserCourse!]!
    userStats: UserStats!
  }

  type Mutation {
    enrollCourse(courseId: ID!): EnrollmentResponse!
    updateProgress(courseId: ID!, progress: Int!): ProgressResponse!
  }

  type Course {
    id: ID!
    title: String!
    description: String!
    instructor: String!
    rating: Float
    students: Int
    thumbnail: String
    price: Float
    category: String
    duration: String
    level: String
    lessons: [Lesson!]
    syllabus: String
  }

  type Lesson {
    id: ID!
    title: String!
    duration: String
    type: String
  }

  type UserCourse {
    id: ID!
    title: String!
    progress: Int!
    thumbnail: String
    instructor: String!
    lastAccessed: String
  }

  type UserStats {
    totalCourses: Int!
    completedCourses: Int!
    inProgressCourses: Int!
    totalHours: Int!
  }

  type EnrollmentResponse {
    success: Boolean!
    message: String!
    enrollment: Enrollment
  }

  type Enrollment {
    id: ID!
    courseId: ID!
    enrolledAt: String!
  }

  type ProgressResponse {
    success: Boolean!
    message: String!
    progress: Int!
  }
`

// Resolvers
const resolvers = {
  Query: {
    courses: (parent, args) => {
      let filtered = [...mockCourses]
      
      if (args.search) {
        const searchLower = args.search.toLowerCase()
        filtered = filtered.filter(course => 
          course.title.toLowerCase().includes(searchLower) ||
          course.description.toLowerCase().includes(searchLower)
        )
      }
      
      if (args.category && args.category !== 'All') {
        filtered = filtered.filter(course => course.category === args.category)
      }
      
      if (args.featured) {
        filtered = filtered.filter(course => course.rating >= 4.7)
      }
      
      if (args.limit) {
        filtered = filtered.slice(0, args.limit)
      }
      
      return filtered
    },
    
    course: (parent, args) => {
      return mockCourses.find(course => course.id === args.id)
    },
    
    userCourses: () => {
      return mockUserCourses
    },
    
    userStats: () => {
      return mockUserStats
    }
  },
  
  Mutation: {
    enrollCourse: (parent, args) => {
      return {
        success: true,
        message: 'Successfully enrolled in course',
        enrollment: {
          id: Date.now().toString(),
          courseId: args.courseId,
          enrolledAt: new Date().toISOString()
        }
      }
    },
    
    updateProgress: (parent, args) => {
      return {
        success: true,
        message: 'Progress updated',
        progress: args.progress
      }
    }
  }
}

// Create server
const server = createServer({
  typeDefs,
  resolvers,
  port: 4000,
  cors: {
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    credentials: true
  }
})

server.start().then(() => {
  console.log('🚀 Mock GraphQL Server is running on http://localhost:4000/graphql')
  console.log('📚 Available queries: courses, course, userCourses, userStats')
  console.log('✏️  Available mutations: enrollCourse, updateProgress')
})

