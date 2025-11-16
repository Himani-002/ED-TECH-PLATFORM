# GraphQL Backend Setup Guide

## Option 1: Connect to Existing GraphQL Server

### Step 1: Update GraphQL Endpoint

Edit `src/main.jsx` and replace the endpoint URL:

```javascript
const httpLink = createHttpLink({
  uri: 'YOUR_GRAPHQL_SERVER_URL', // e.g., 'http://localhost:4000/graphql'
})
```

### Step 2: Environment Variables (Recommended)

Create a `.env` file in the root directory:

```env
VITE_GRAPHQL_ENDPOINT=http://localhost:4000/graphql
```

Then update `src/main.jsx`:

```javascript
const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_ENDPOINT || 'http://localhost:4000/graphql',
})
```

## Option 2: Create a Mock GraphQL Server

### Using GraphQL Server with Mock Data

1. Install GraphQL server dependencies:

```bash
npm install --save-dev @graphql-tools/schema @graphql-tools/mock graphql-yoga
```

2. Create a mock server file (see `mock-server.js` example below)

3. Run the mock server:

```bash
node mock-server.js
```

## Expected GraphQL Schema

Based on the queries in the project, your GraphQL server should support:

### Queries

```graphql
type Query {
  courses(
    search: String
    category: String
    limit: Int
    featured: Boolean
  ): [Course!]!
  
  course(id: ID!): Course
  
  userCourses: [UserCourse!]!
  
  userStats: UserStats!
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
```

### Mutations

```graphql
type Mutation {
  enrollCourse(courseId: ID!): EnrollmentResponse!
  updateProgress(courseId: ID!, progress: Int!): ProgressResponse!
  createUser(name: String!, email: String!, password: String!): AuthResponse!
  login(email: String!, password: String!): AuthResponse!
}
```

## Testing the Connection

1. Open browser DevTools (F12)
2. Go to Network tab
3. Look for GraphQL requests
4. Check for errors in Console tab

## Common Issues

### CORS Errors
If you get CORS errors, configure your GraphQL server to allow requests from `http://localhost:3000`

### 404 Errors
- Verify the GraphQL endpoint URL is correct
- Ensure the server is running
- Check the server logs

### Authentication
If your GraphQL server requires authentication, update `src/main.jsx`:

```javascript
import { setContext } from '@apollo/client/link/context'

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})
```

