# CLAUDE.md - AI Assistant Guide

This document provides comprehensive guidance for AI assistants working on David Budzik's portfolio website.

## Project Overview

**Project Name**: Portfolio Website - David Budzik
**Repository**: portfolio-website-david-budzik
**Purpose**: Personal portfolio website to showcase David Budzik's projects, skills, and professional experience
**Status**: Initial setup phase

## Project Goals

- Create a modern, responsive portfolio website
- Showcase professional projects and technical skills
- Provide contact information and professional links
- Demonstrate web development capabilities
- Maintain clean, maintainable code

## Technology Stack Recommendations

### Frontend Framework Options
Consider one of the following modern stacks:
- **React** with Next.js (recommended for SEO and performance)
- **Vue.js** with Nuxt.js
- **Vanilla HTML/CSS/JS** (for simplicity)
- **Svelte/SvelteKit** (for lightweight builds)

### Styling
- **Tailwind CSS** (utility-first, highly customizable)
- **CSS Modules** or **Styled Components**
- **SCSS/SASS** for advanced styling needs

### Build Tools
- **Vite** (fast, modern build tool)
- **Webpack** (if using Create React App or similar)
- **Parcel** (zero-config option)

### Deployment Platforms
- **Vercel** (optimal for Next.js)
- **Netlify** (excellent for static sites)
- **GitHub Pages** (simple, free hosting)
- **Cloudflare Pages** (fast CDN-backed hosting)

## Codebase Structure (Planned)

```
portfolio-website-david-budzik/
├── .git/                    # Git version control
├── .gitignore              # Git ignore patterns (YoYo AI .yoyo/ directory)
├── CLAUDE.md               # This file - AI assistant guide
├── README.md               # Project documentation for humans
├── package.json            # Node.js dependencies and scripts
├── public/                 # Static assets
│   ├── images/            # Images, icons, logos
│   ├── favicon.ico        # Site favicon
│   └── resume.pdf         # Downloadable resume (optional)
├── src/                    # Source code
│   ├── components/        # Reusable UI components
│   │   ├── Header.jsx     # Navigation header
│   │   ├── Footer.jsx     # Site footer
│   │   ├── ProjectCard.jsx # Individual project display
│   │   └── ContactForm.jsx # Contact form component
│   ├── pages/             # Page components/routes
│   │   ├── Home.jsx       # Landing page
│   │   ├── About.jsx      # About/bio section
│   │   ├── Projects.jsx   # Projects showcase
│   │   ├── Skills.jsx     # Technical skills
│   │   └── Contact.jsx    # Contact information
│   ├── styles/            # CSS/styling files
│   │   ├── global.css     # Global styles
│   │   └── variables.css  # CSS custom properties
│   ├── data/              # Static data files
│   │   ├── projects.json  # Project information
│   │   └── skills.json    # Skills data
│   ├── utils/             # Utility functions
│   ├── App.jsx            # Main application component
│   └── index.jsx          # Application entry point
├── tests/                  # Test files
└── .yoyo/                 # YoYo AI version control (gitignored)
```

## Development Workflows

### Starting New Features

1. **Understand Requirements**
   - Read the task description carefully
   - Ask clarifying questions if needed
   - Consider user experience implications

2. **Plan Before Coding**
   - Use TodoWrite tool to break down complex tasks
   - Identify files that need to be created/modified
   - Consider dependencies and impacts

3. **Implementation**
   - Create components in appropriate directories
   - Follow naming conventions (see below)
   - Write clean, commented code
   - Ensure responsive design (mobile-first approach)

4. **Testing**
   - Test functionality in development environment
   - Check responsive behavior on different screen sizes
   - Verify accessibility standards (WCAG 2.1 AA)
   - Test cross-browser compatibility

5. **Git Operations**
   - Stage relevant files only
   - Write clear, descriptive commit messages
   - Follow commit message format (see below)
   - Push to designated feature branch

### Making Changes

1. **Before Editing**
   - Always read files before editing (REQUIRED)
   - Understand existing code structure
   - Preserve existing patterns and conventions

2. **During Implementation**
   - Make focused, atomic changes
   - Avoid unnecessary refactoring
   - Keep changes related to the task at hand
   - Add comments for complex logic

3. **After Changes**
   - Review your changes for errors
   - Ensure no security vulnerabilities (XSS, injection, etc.)
   - Update relevant documentation
   - Test the changes work as expected

## Naming Conventions

### Files and Folders
- **Components**: PascalCase (e.g., `ProjectCard.jsx`, `ContactForm.jsx`)
- **Utilities**: camelCase (e.g., `formatDate.js`, `validateEmail.js`)
- **Styles**: kebab-case (e.g., `project-card.css`, `global-styles.css`)
- **Pages**: PascalCase (e.g., `Home.jsx`, `Projects.jsx`)
- **Data files**: kebab-case (e.g., `projects.json`, `skills-data.json`)

### Code
- **Variables/Functions**: camelCase (e.g., `projectList`, `handleSubmit`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_ENDPOINT`, `MAX_PROJECTS`)
- **Classes**: PascalCase (e.g., `ProjectManager`, `FormValidator`)
- **CSS Classes**: BEM notation or kebab-case (e.g., `project-card__title`)

## Commit Message Format

Follow conventional commit format:

```
<type>(<scope>): <subject>

<body>
```

### Types
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, no logic change)
- **refactor**: Code refactoring
- **test**: Adding or updating tests
- **chore**: Build process or auxiliary tool changes

### Examples
```
feat(projects): add project card component with hover effects

Create reusable ProjectCard component with:
- Responsive image display
- Title and description
- Technology tags
- Link to live demo and GitHub repo
```

```
fix(header): resolve mobile menu navigation issue

Fixed hamburger menu not closing on mobile devices
when clicking navigation links
```

## Code Quality Standards

### General Principles
- **DRY** (Don't Repeat Yourself): Extract reusable components and utilities
- **KISS** (Keep It Simple, Stupid): Favor simple, readable solutions
- **YAGNI** (You Aren't Gonna Need It): Don't add functionality until needed
- **Separation of Concerns**: Keep logic, styling, and structure separate

### Performance
- Optimize images (use WebP format, lazy loading)
- Minimize bundle size (code splitting, tree shaking)
- Reduce HTTP requests (combine assets where possible)
- Implement caching strategies
- Use semantic HTML for better performance

### Accessibility (A11y)
- Use semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<footer>`)
- Provide alt text for all images
- Ensure keyboard navigation works
- Maintain proper heading hierarchy (h1 → h2 → h3)
- Use ARIA labels where appropriate
- Ensure sufficient color contrast (4.5:1 for text)
- Test with screen readers when possible

### Security
- Sanitize user inputs
- Avoid inline JavaScript in HTML
- Use HTTPS for external resources
- Implement Content Security Policy (CSP)
- Avoid exposing sensitive information
- Validate form inputs on both client and server side

### SEO Best Practices
- Use descriptive, unique page titles
- Add meta descriptions for all pages
- Implement Open Graph tags for social sharing
- Create a sitemap.xml
- Use structured data (JSON-LD)
- Optimize page load speed
- Ensure mobile-friendliness

## Component Design Patterns

### Component Structure
```jsx
// 1. Imports
import React from 'react';
import PropTypes from 'prop-types';
import './ComponentName.css';

// 2. Component Definition
const ComponentName = ({ prop1, prop2 }) => {
  // 3. Hooks (if using React)

  // 4. Event Handlers
  const handleClick = () => {
    // Handler logic
  };

  // 5. Render Logic
  return (
    <div className="component-name">
      {/* JSX */}
    </div>
  );
};

// 6. PropTypes
ComponentName.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number,
};

// 7. Default Props
ComponentName.defaultProps = {
  prop2: 0,
};

// 8. Export
export default ComponentName;
```

### State Management
- Use local state for component-specific data
- Consider Context API for global state (theme, user preferences)
- Keep state as simple as possible
- Lift state up when multiple components need access

## Styling Guidelines

### CSS Organization
- Use CSS custom properties for colors, spacing, fonts
- Follow mobile-first responsive design
- Organize styles by component
- Use consistent spacing scale (4px, 8px, 16px, 24px, 32px, etc.)

### Responsive Breakpoints
```css
/* Mobile: default */
/* Tablet: 768px and up */
@media (min-width: 768px) { }
/* Desktop: 1024px and up */
@media (min-width: 1024px) { }
/* Large Desktop: 1440px and up */
@media (min-width: 1440px) { }
```

### Color Scheme Suggestions
- Use consistent primary, secondary, and accent colors
- Implement dark mode support (consider user preference)
- Ensure WCAG AA contrast ratios
- Define colors as CSS variables for easy theming

## Content Guidelines

### Portfolio Projects
Each project should include:
- **Title**: Clear, descriptive name
- **Description**: 2-3 sentences explaining the project
- **Technologies**: List of technologies/frameworks used
- **Features**: Key features or accomplishments
- **Links**: Live demo, GitHub repository (if applicable)
- **Images**: Screenshots or demo GIFs
- **Date**: When the project was completed

### About Section
Should include:
- Professional bio (2-3 paragraphs)
- Photo (professional headshot)
- Career highlights
- Education background
- Interests and hobbies (optional)

### Contact Information
- Email address
- LinkedIn profile
- GitHub profile
- Other professional social links
- Optional: Contact form

## Testing Strategy

### Manual Testing Checklist
- [ ] All links work correctly
- [ ] Forms validate and submit properly
- [ ] Images load and have alt text
- [ ] Responsive design works on mobile, tablet, desktop
- [ ] Navigation works on all pages
- [ ] No console errors
- [ ] Fast page load times (< 3 seconds)
- [ ] Works in Chrome, Firefox, Safari, Edge

### Automated Testing (if implemented)
- Unit tests for utility functions
- Component tests for UI components
- Integration tests for user flows
- End-to-end tests for critical paths

## Deployment Process

### Pre-Deployment Checklist
- [ ] All features work as expected
- [ ] No console errors or warnings
- [ ] Responsive design tested
- [ ] Accessibility checked
- [ ] SEO meta tags in place
- [ ] Performance optimized
- [ ] Environment variables configured
- [ ] Build process successful

### Deployment Steps
1. Build the production bundle
2. Test the production build locally
3. Deploy to hosting platform
4. Verify deployment successful
5. Test live site thoroughly
6. Monitor for errors

## Common Tasks for AI Assistants

### Adding a New Project
1. Add project data to `src/data/projects.json`
2. Add project images to `public/images/projects/`
3. Update projects page to display new entry
4. Test responsive display
5. Commit with message: `feat(projects): add [project-name]`

### Updating Styling
1. Identify component or global styles to modify
2. Read existing styles first
3. Make focused changes
4. Test across breakpoints
5. Commit with message: `style(component): [description]`

### Creating New Component
1. Create component file in `src/components/`
2. Create associated CSS file if needed
3. Import and use in appropriate page
4. Add PropTypes validation
5. Test component rendering
6. Commit with message: `feat(components): add [ComponentName]`

### Fixing Bugs
1. Understand the bug thoroughly
2. Locate the problematic code
3. Implement minimal fix
4. Test fix works and doesn't break other features
5. Commit with message: `fix(scope): [description of fix]`

## Important Reminders for AI Assistants

### DO
- Always read files before editing them
- Use TodoWrite for complex multi-step tasks
- Ask clarifying questions when requirements are unclear
- Commit changes with clear, descriptive messages
- Push to the designated feature branch (starts with `claude/`)
- Consider user experience and accessibility
- Write clean, well-commented code
- Test changes before committing

### DON'T
- Create unnecessary files (prefer editing existing ones)
- Make changes without understanding the context
- Skip reading files before editing
- Push to main/master branch without approval
- Introduce security vulnerabilities
- Ignore responsive design requirements
- Write code without comments for complex logic
- Commit broken or untested code

### Security Vulnerabilities to Avoid
- **XSS (Cross-Site Scripting)**: Sanitize user inputs, avoid dangerouslySetInnerHTML
- **SQL Injection**: Use parameterized queries (if using backend)
- **CSRF**: Implement CSRF tokens for forms
- **Insecure Dependencies**: Keep packages updated, audit regularly
- **Exposed Secrets**: Never commit API keys, passwords, tokens
- **Clickjacking**: Use X-Frame-Options header
- **Open Redirects**: Validate redirect URLs

## Git Branch Strategy

### Branch Naming
- Feature branches: `claude/[feature-description]-[session-id]`
- Always push to the designated branch provided in task context
- Never push to main/master without explicit permission

### Push/Pull Best Practices
- Use `git push -u origin <branch-name>` for initial push
- Fetch specific branches: `git fetch origin <branch-name>`
- Retry network failures up to 4 times with exponential backoff (2s, 4s, 8s, 16s)
- Always verify branch name starts with `claude/` and ends with session ID

## Resources and Documentation

### Portfolio Inspiration
- [awwwards.com](https://www.awwwards.com/) - Award-winning web design
- [dribbble.com](https://dribbble.com/) - Design inspiration
- [behance.net](https://www.behance.net/) - Creative portfolios

### Web Development References
- [MDN Web Docs](https://developer.mozilla.org/) - HTML, CSS, JavaScript reference
- [React Documentation](https://react.dev/) - React official docs
- [CSS Tricks](https://css-tricks.com/) - CSS techniques and guides
- [Web.dev](https://web.dev/) - Performance and best practices

### Accessibility
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Accessibility standards
- [A11y Project](https://www.a11yproject.com/) - Accessibility checklist

### Performance
- [Google PageSpeed Insights](https://pagespeed.web.dev/) - Performance testing
- [WebPageTest](https://www.webpagetest.org/) - Detailed performance analysis

## Current State

**Last Updated**: 2025-11-14
**Status**: Initial repository setup complete
**Next Steps**:
1. Decide on technology stack
2. Initialize project with chosen framework
3. Create basic project structure
4. Implement core components (Header, Footer, Layout)
5. Add content sections (Home, About, Projects, Contact)
6. Style and make responsive
7. Deploy to hosting platform

---

## Notes for Future Updates

When updating this CLAUDE.md file:
- Add new conventions as the project evolves
- Document any special patterns or architectures introduced
- Update technology stack if frameworks are added/changed
- Add troubleshooting tips for common issues
- Include examples of actual components once they exist
- Document any CI/CD pipelines if implemented
- Add API documentation if backend is added

## Questions or Issues

If you encounter ambiguity or need clarification:
1. Check this CLAUDE.md first
2. Review existing code patterns
3. Ask the user for clarification
4. When in doubt, choose the simpler, more maintainable solution

---

**Remember**: The goal is to create a professional, performant, and accessible portfolio website that showcases David Budzik's work effectively. Always prioritize user experience, code quality, and best practices.
