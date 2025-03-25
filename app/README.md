# Penetration Tester Portfolio

## Image Paths Guide

### Home Page Images
- Profile Image: `/public/images/profile.jpg` (400x400px recommended)
- Project Images: `/public/images/projects/project-1.jpg`, `/public/images/projects/project-2.jpg`, etc. (400x200px recommended)
- Service Icons: Using Lucide React icons (already implemented)

### About Page Images
- Profile Image: `/public/images/about-profile.jpg` (400x400px recommended)
- Timeline Images: `/public/images/timeline/job-1.jpg`, `/public/images/timeline/job-2.jpg`, etc. (optional)

### Projects Page Images
- Project Thumbnails: `/public/images/projects/project-1-full.jpg`, `/public/images/projects/project-2-full.jpg`, etc. (400x200px recommended)

### Certifications Page Images
- Certification Badges: `/public/images/certifications/cert-1.jpg`, `/public/images/certifications/cert-2.jpg`, etc. (400x200px recommended)

### Publications Page Images
- Publication Thumbnails: `/public/images/publications/pub-1.jpg`, `/public/images/publications/pub-2.jpg`, etc. (400x200px recommended)

## Security Best Practices

This portfolio implements several security best practices:

1. **Content Security Policy**: Restricts which resources can be loaded
2. **HTTPS Only**: All links use HTTPS where applicable
3. **Secure External Links**: Uses `rel="noopener noreferrer"` for external links
4. **Input Validation**: Form inputs are validated before submission
5. **XSS Protection**: React's built-in XSS protection plus careful handling of user input
6. **Image Optimization**: Uses Next.js Image component for optimized, secure image loading
7. **Dependency Management**: Regular updates to dependencies to patch security vulnerabilities
8. **Secure Headers**: Implementation of security headers for protection against common attacks

## Code Efficiency

The codebase follows these efficiency principles:

1. **Component Reusability**: Shared components across pages
2. **Optimized Animations**: Lightweight CSS transitions instead of heavy JavaScript animations
3. **Lazy Loading**: Images and components load as needed
4. **Responsive Design**: Efficient media queries for all device sizes
5. **Minimal Dependencies**: Only essential packages are used
6. **Code Splitting**: Pages load only the code they need
7. **Static Generation**: Pages are pre-rendered where possible for faster loading

