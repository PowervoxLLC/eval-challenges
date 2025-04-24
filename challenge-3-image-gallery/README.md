# Challenge 3: Responsive Image Gallery with Lazy Loading

## Problem Statement

You're building a responsive image gallery component for a photo-sharing application. The gallery should efficiently handle a large number of images while maintaining good performance and user experience. Your task is to implement a React component that displays images in a responsive grid layout with lazy loading capabilities.

## Requirements

1. The gallery should display images in a responsive grid layout that adapts to different screen sizes
2. Implement lazy loading to only load images when they come into view
3. Add a loading placeholder while images are being loaded
4. Support infinite scrolling to load more images as the user scrolls
5. Optimize performance by preventing unnecessary re-renders
6. Handle edge cases (empty gallery, loading states, error states)

## Example

```javascript
// Input: Array of image objects
const images = [
  {
    id: 1,
    url: "https://example.com/image1.jpg",
    title: "Image 1",
    width: 800,
    height: 600,
  },
  {
    id: 2,
    url: "https://example.com/image2.jpg",
    title: "Image 2",
    width: 1200,
    height: 800,
  },
  // ... more images
];

// Expected output: A responsive grid of images that:
// - Adapts to screen size
// - Lazy loads images as they come into view
// - Shows loading placeholders
// - Supports infinite scrolling
```

## Implementation

Implement your solution in `ImageGallery.jsx`. The component should:

- Accept an array of image objects as props
- Handle loading states and errors
- Implement responsive grid layout
- Support lazy loading
- Include infinite scrolling functionality

## Notes

- Use React hooks for state management
- Implement proper error boundaries
- Consider accessibility requirements
- Optimize for performance
- Use CSS Grid or Flexbox for the responsive layout
- Handle image loading failures gracefully
