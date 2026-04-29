# Auth_Redis: Node.js, Express & Redis (v1.0)

A production-ready, strictly-typed Express backend built to master advanced concepts including JWT authentication, secure file handling, OpenAPI documentation, and Redis-backed rate limiting.

**Project Location:** `Full-Stack Learning -> Node_Js_Practice -> 6_Auth_Redis`

---

## 🚀 Features Implemented

1. **Authentication & Authorization:** - JWT-based login system with strictly typed payloads.
   - Zod schema validation for all incoming request bodies.
2. **Secure File Handling:**
   - File uploads managed via `multer` (Strict 5MB limit, PNG/PDF only).
   - Directory Traversal protection using `path.basename()` for file downloads.
3. **Automated API Documentation:**
   - Swagger UI integrated natively.
   - OpenAPI specifications auto-generated directly from Zod schemas.
4. **Redis Integration & Security:**
   - Centralized Redis in-memory database connection.
   - Custom Rate Limiter Middleware (Fixed-Window algorithm) protecting the login route (max 5 attempts per 60 seconds).
5. **Professional Developer Experience (DX):**
   - Silent, namespace-based logging using the `debug` package.
   - Native VS Code debugger integration for real-time memory inspection.

---

## 🛠️ Prerequisites

Before running this project, ensure you have the following installed on your machine:
- **Node.js** (v18+)
- **Redis Server**: Must be actively running in the background.
  - *Windows Users:* Run Redis via WSL (Ubuntu) using `sudo service redis-server start`.

---

Testing and Running the Express Server

To properly test the features of our backend-mastery project, we need to set up the environment, run the server, and execute specific API calls using Swagger to verify our middleware and controllers.

Step 1: Environment Variables
We need to create a .env file in the root directory to store our secure configurations.
1. Open the root folder of the project.
2. Create a new file named '.env'.
3. Add the following lines inside the file:
- PORT=3000
- JWT_SECRET=your_super_secret_jwt_key_here

Step 2: Running the Server
Choose your startup method based on how much terminal output you want to see.
1. For a Standard Run (Silent/Clean Mode), type 'npm run dev' in your terminal.
2. For a Detailed Logging Run, type 'npm run dev:logs' in your terminal (Recommended for development to see Redis connection, auth, file, and rate-limit activity).

Step 3: VS Code Debugging (F5)
To freeze time and inspect memory during a request without using console.log.
1. Open this specific folder (6_Auth_Redis) as the absolute root folder in VS Code.
2. Open a controller file (e.g., src/controllers/fileController.ts).
3. Click to the left of a line number to set a red Breakpoint.
4. Press F5 to start the server in Debug Mode (Look for the orange bar at the bottom of VS Code).
5. Trigger the API route via Swagger. VS Code will pause execution automatically, allowing you to hover over variables.

Step 4: Test The Rate Limiter & Authentication
Once the server is running, open http://localhost:3000/api-docs in your browser.
1. In Swagger, go to POST /api/auth/login.
2. Enter invalid credentials (e.g., username: "test", password: "wrong").
3. Click Execute rapidly 6 times in a row.
- Expected Result: Attempts 1-5 return 401 Unauthorized. Attempt 6 returns 429 Too Many Requests (The Redis shield is working). Wait 60 seconds and try again to see the limit reset back to 0.

Step 5: Test Securing the Bearer Token
1. In Swagger, go to POST /api/auth/login and enter valid credentials.
2. Copy the token string from the successful response.
3. Scroll to the top of Swagger, click the green Authorize button.
4. Paste your token and click Authorize.

Step 6: Test The Protected Route
1. Go to GET /api/protected.
2. Click Execute.
- Expected Result: You should receive a 200 OK with your decoded user data (ID and Role), proving the authMiddleware verified your JWT token.

Step 7: Test Secure File Uploads
1. Go to POST /api/files/upload.
2. Select a valid PNG or PDF file under 5MB.
3. Click Execute.
- Expected Result: Returns a 200 OK with the fileUrl and saves the file safely into the uploads/ directory.

Step 8: Test Directory Traversal Protection
1. Go to GET /api/files/{filename}.
2. Enter this malicious string: ../../../package.json
3. Click Execute.
- Expected Result: You will receive a 404 Not Found. The path.basename() security fix safely shreds the ../ commands and keeps the hacker locked inside the uploads/ folder.