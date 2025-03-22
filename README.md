# LabGuard Solutions

## Streamlining Probation Testing with Precision and Efficiency

This is the official website for LabGuard Solutions, a specialized Random Drug Testing management platform connecting states, counties, testing labs, and probationers through a unified digital ecosystem.

## Tech Stack

- **Next.js**: React framework
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn/UI**: Accessible and customizable components

## Development

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment to GitHub Pages

This website is configured to be deployed to GitHub Pages. There are two methods for deployment:

### Method 1: GitHub Actions (Recommended)

This repository includes a GitHub Actions workflow that automatically builds and deploys the website to GitHub Pages:

1. Push your changes to the main branch
2. GitHub Actions will automatically build and deploy the site
3. The site will be available at `https://yourusername.github.io/labguardhq.github.io/`

To enable GitHub Pages in your repository:
1. Go to your repository settings
2. Navigate to "Pages" in the sidebar
3. In the "Build and deployment" section:
   - Set "Source" to "GitHub Actions"
4. Your site will be deployed when you push to the main branch

### Method 2: Manual Deployment

You can also manually deploy the site:

```bash
# Build the site and create the out directory
npm run build

# Deploy to GitHub Pages
npm run deploy
```

The deploy script will:
1. Create a .nojekyll file to bypass GitHub Pages Jekyll processing
2. Create a gh-pages branch if it doesn't exist
3. Add the build output to this branch
4. Push the gh-pages branch to GitHub

## Project Structure

- `/src/app`: Next.js app router pages
- `/src/components`: React components
  - `/src/components/ui`: Reusable UI components
- `/src/lib`: Utility functions and shared code

## Contact

- Email: sales@LabGuardhq.com
- Phone: (555) 123-4567
- Website: www.LabGuardHQ.com
