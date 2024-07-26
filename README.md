
# Portfolio Project

This is a personal portfolio project built using Typescript, Next.js, Tailwind CSS, and tRPC[not used]. The portfolio showcases various projects and provides information about the developer.

## Technologies Used

- **Next.js**: A React framework for building server-side rendered and statically generated web applications.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **React**: A JavaScript library for building user interfaces.
- **Framer Motion**: A library for animations in React.

## Note

- **There are a lot of unwanted files existing which i plan to clean in the future**

## Project Structure

The project is organized into several key directories and files:

- **`src/pages`**: Contains the main pages of the application.

  - **`index.tsx`**: The main landing page.
  - **`projects.tsx`**: Displays various projects.
  - **`home.tsx`**: Contains the landing section of the homepage.
  - **`Navbar.tsx`**: Contains the navigation bar component.
- **`src/components/ui`**: Contains reusable UI components.

  - **`wobble-card.tsx`**: A custom card component with animation.
  - **`about-loader.tsx`**: A loader component for the about section.
  - **`multi-step-loader.tsx`**: A multi-step loader component.
- **`tailwind.config.ts`**: Configuration file for Tailwind CSS.
- **`package.json`**: Lists the project dependencies and scripts.

## How to Run the Project

1. **Install Dependencies**: Run `bun install` to install all required dependencies.
2. **Start the Development Server**: Run the development server using `bun run dev`
3. **Build the Project**: To build the project for production, run `bun run build`
