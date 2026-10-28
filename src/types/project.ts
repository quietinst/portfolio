export interface ProjectImage {
  src: string;
  src2x: string;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  stack: string;
  summary: string;
  details: string;
  url: string;
  image: ProjectImage;
}
