import type { Project } from '../../types/project';
import { animationIndex } from '../../utils/animationIndex';
import './ProjectCard.scss';

interface ProjectCardProps {
  project: Project;
  animationOrder: number;
}

const ProjectCard = ({ project, animationOrder }: ProjectCardProps) => {
  const { title, stack, summary, details, url, image } = project;

  return (
    <li className="projects__items" style={animationIndex(animationOrder)}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="projects__link"
      >
        <article className="project-card">
          <div className="project-card__image-wrap">
            <div className="project-card__overlay">
              <p className="project-card__overlay-text">
                {summary}
                <br />
                {details}
              </p>
            </div>
            <img
              className="project-card__image"
              src={image.src}
              srcSet={`${image.src2x} 2x`}
              width={370}
              height={295}
              alt={image.alt}
            />
          </div>
          <div className="project-card__cont">
            <h3 className="project-card__title">{title}</h3>
            <p className="project-card__description">{stack}</p>
          </div>
        </article>
      </a>
    </li>
  );
};

export default ProjectCard;
