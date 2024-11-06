Cio Africa Frontend Skill Test

cio-frontend-dev-raymanmohas-projects.vercel.app


Overview
This project is the frontend of the Cio application, built with modern technologies like React and Tailwind CSS for a responsive, fast, and scalable UI.

Prerequisites
Ensure you have the following installed before setting up the project:

Node.js (v14 or later)
npm (v6 or later)
Installation
Clone the repository:

git clone https://github.com/yourusername/cio-frontend.git
Navigate into the project directory:

cd cio-frontend
Install the dependencies:

npm install
Running in Dev Environment
To start the development server, follow these steps:

Navigate to the project directory:

cd cio-frontend
Install all required dependencies (if not already done):

npm install
Start the development server:

npm start
The application should now be running at http://localhost:3000.

.env File
This project supports environment variables using an .env file. You can configure various environment settings by updating this file.

Folder Structure
.
├── package.json
├── postcss.config.js
├── vite.config.js
├── index.html
├── public
│   ├── assets
│   │   ├── images --------- All Project Images
│   │   └── fonts ---------- Project Fonts
│   ├── favicon.ico
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src
│   ├── App.jsx
│   ├── components --------- UI and Detected Common Components
│   ├── constants ---------- Project Constants
│   ├── hooks -------------- Helpful Hooks
│   ├── index.jsx
│   ├── pages -------------- All Route Pages
│   ├── Routes.jsx --------- Routing
│   ├── styles
│   │   ├── index.css ------ Other Global Styles
│   │   └── tailwind.css --- Default Tailwind Modules
│   ├── util
│   │   └── index.jsx ------ Helpful Utils
├── tailwind.config.js ------ Entire Theme Config, Colors, Fonts, etc.
Deployment Status
Status: Ready
Environment: Production (Staged)
Duration: 42s (deployed 3 minutes ago)
Visit the Application
The project is deployed on Vercel. You can access the deployed application via the following domains:

cio-frontend-dev-raymanmohas-projects.vercel.app
cio-frontend-dev-git-main-raymanmohas-projects.vercel.app
cio-frontend-eyqrpow3u-raymanmohas-projects.vercel.app
Source
Branch: main
Commit: 9b2a890
Building for Production
To create an optimized production build, run:

npm run build
The production-ready files will be generated in the dist/ folder.

