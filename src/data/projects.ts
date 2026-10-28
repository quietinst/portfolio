import imageGallery from '../assets/projects/image_gallery.jpg';
import imageGallery2x from '../assets/projects/image_gallery@2x.jpg';
import movieSearch from '../assets/projects/movie_search.jpg';
import movieSearch2x from '../assets/projects/movie_search@2x.jpg';
import webStudio from '../assets/projects/web_studio.jpg';
import webStudio2x from '../assets/projects/web_studio@2x.jpg';
import type { Project } from '../types/project';

// To add a project: put its two images (370×295 and the @2x version) into
// src/assets/projects/, import them above, and add an object to this array.
export const projects: Project[] = [
  {
    id: 'web-studio',
    title: 'Web Studio',
    stack: 'Html Css JS',
    summary: 'A responsive business landing page.',
    details: 'Role: developer. BEM methodology, semantic HTML, CSS variables.',
    url: 'https://quietinst.github.io/html-css/module-06/',
    image: {
      src: webStudio,
      src2x: webStudio2x,
      alt: 'Web Studio project homepage',
    },
  },
  {
    id: 'image-gallery',
    title: 'Image Gallery',
    stack: 'JS Rest api Ajax',
    summary: 'Image Search Application.',
    details: 'Role: developer. Vanilla javascript, rest api, ajax.',
    url: 'https://quietinst.github.io/javascript/module-12-pagination/dist/',
    image: {
      src: imageGallery,
      src2x: imageGallery2x,
      alt: 'Image gallery project preview',
    },
  },
  {
    id: 'movie-search',
    title: 'Movie Search',
    stack: 'React TypeScript',
    summary: 'Movie Search Application.',
    details:
      'Role: developer. React, TypeScript, TMDB API, Axios, CSS Modules.',
    url: 'https://react-nextjs-03-react-movies.vercel.app',
    image: {
      src: movieSearch,
      src2x: movieSearch2x,
      alt: 'Movie search project preview',
    },
  },
];
