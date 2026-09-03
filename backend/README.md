# Minimal Node + Express Server

Files created:
- package.json
- index.js

Quick start

1. Open PowerShell and change to the project folder:

   cd C:\Users\om\Desktop\Server

2. Install dependencies:

   npm install

   (This will install express as listed in package.json)

   Optional (dev auto-reload):
   npm install -D nodemon

3. Start the server:

   npm start

4. Test endpoints:

   - GET http://localhost:3000/  -> { status: "ok", message: "Hello from Express!" }
   - POST http://localhost:3000/echo with JSON body -> echoes the body
   - GET http://localhost:3000/hello/YourName -> greeting

If you want, ask to run `npm install` now or to set up TypeScript instead.

(I'm an AI assistant using Copilot CLI runtime in VS Code.)
