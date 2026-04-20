
  # Portfolio website

  This is a code bundle for Portfolio website. The original project is available at https://www.figma.com/design/A0QFS4eZoWXQ8jBFlzAskr/Portfolio-website.

## Running the Project

### Local Development

#### Prerequisites
- Node.js (version 16 or higher) and npm installed on your system
- Git for cloning the repository

#### Step-by-Step Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/2022-201045-crypto/portfolio2.git
   cd portfolio2
   ```

2. **Navigate to the project directory**:
   ```bash
   cd portfolio2
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```
   This installs all required packages including React, Vite, and UI libraries.

4. **Start the development server**:
   ```bash
   npm run dev
   ```
   This starts Vite's development server with hot module replacement.

#### Access Your Portfolio

- Open your browser and navigate to: **http://localhost:5173/**
- The server will automatically reload when you make changes to the code

### GitHub Codespaces

#### Prerequisites
- A GitHub account
- Access to GitHub Codespaces

#### Step-by-Step Instructions

1. **Open in GitHub Codespaces**:
   - Click the "Code" button on the repository
   - Select "Open with Codespaces"
   - Choose "New codespace" or select an existing one

2. **The codespace will automatically**:
   - Clone the repository
   - Open the project in VS Code
   - Navigate to the correct directory

3. **Install dependencies** (if not done automatically):
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev

   cd /workspaces/portfolio2/portfolio2 && npm run dev
   ```

#### Access Your Portfolio

- The development server will start automatically
- Click on the "Ports" tab in the terminal panel
- Click the globe icon next to port 5173 to open in browser
- Or manually navigate to: **https://[codespace-name]-5173.app.github.dev/**

### Additional Notes

- To stop the server, press `Ctrl+C` in the terminal
- The project uses Vite for fast development with hot module replacement
- There's a high-severity vulnerability in dependencies (run `npm audit fix` if you want to address it, but it won't affect development)
- The portfolio includes components for Hero, About, Skills, Projects, Experience, Education, Contact, etc.

## Deployment

This project is configured for deployment on various platforms. The build output is in the `dist/` directory.

### Supported Platforms

#### Vercel
- Automatic deployment with `vercel.json` configuration
- Uses Node.js 18 for compatibility

#### Netlify
- Automatic deployment with `netlify.toml` configuration
- Includes SPA fallback for client-side routing
- Uses Node.js 18 for compatibility

#### Other Platforms
For other deployment platforms, ensure:
- Build command: `npm run build`
- Output directory: `dist`
- Node.js version: 18 or 20

### Troubleshooting Deployment Issues

If you encounter build failures during deployment:

1. **Node Version**: Ensure the deployment platform uses Node.js 18 or 20 (not 24+)
2. **Dependencies**: Make sure all dependencies are properly installed
3. **Build Command**: Verify the platform is running `npm run build`
4. **Output Directory**: Confirm the platform serves files from the `dist/` directory

### Environment Variables

No environment variables are required for basic functionality. If you add features that need API keys or configuration, add them to your deployment platform's environment settings.
  