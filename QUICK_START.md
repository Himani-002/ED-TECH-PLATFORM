# Quick Start Guide - Connecting to GraphQL Backend

## Option 1: Use Mock Server (Recommended for Development)

### Step 1: Start the Mock GraphQL Server

Open a **new terminal window** and run:

```bash
npm run mock-server
```

This will start a mock GraphQL server at `http://localhost:4000/graphql`

### Step 2: Your React App is Already Configured!

The React app is already set to connect to `http://localhost:4000/graphql` by default. Just make sure:
- The mock server is running (Step 1)
- Your React dev server is running (`npm run dev`)

That's it! The app will now fetch data from the mock server.

---

## Option 2: Connect to Your Own GraphQL Server

### Step 1: Create `.env` file

Create a file named `.env` in the root directory (`D:\edtech\.env`):

```env
VITE_GRAPHQL_ENDPOINT=https://your-api-url.com/graphql
```

Replace `https://your-api-url.com/graphql` with your actual GraphQL endpoint.

### Step 2: Restart Dev Server

After creating the `.env` file, restart your React dev server:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

---

## Option 3: Update Code Directly

Edit `src/main.jsx` and change line 10:

```javascript
const httpLink = createHttpLink({
  uri: 'YOUR_GRAPHQL_ENDPOINT_HERE', // Replace this
})
```

---

## Testing the Connection

1. Open your browser to `http://localhost:3000`
2. Open Developer Tools (F12)
3. Go to the **Network** tab
4. Look for requests to `/graphql`
5. Check the **Console** tab for any errors

---

## If You Have a Syllabus File

If you have a syllabus document with your GraphQL schema or API details:

1. Share the file or paste the content
2. I can help you:
   - Create a custom mock server based on your schema
   - Update the queries to match your API
   - Configure authentication if needed

---

## Troubleshooting

### "Network Error" or "Failed to fetch"
- Make sure your GraphQL server is running
- Check the endpoint URL is correct
- Verify CORS is enabled on your server

### "404 Not Found"
- Check the GraphQL endpoint path (usually `/graphql`)
- Verify the server is running on the correct port

### No Data Showing
- Check browser console for errors
- Verify the GraphQL queries match your server schema
- Test your GraphQL endpoint in a tool like GraphQL Playground

---

## Next Steps

1. **For Development**: Use the mock server (Option 1)
2. **For Production**: Set up your own GraphQL backend and use Option 2
3. **Custom Schema**: Share your syllabus/schema and I'll help customize it!

