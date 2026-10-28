import type { Project } from '../../types/project';
import { LIST_FIRST_INDEX } from '../../utils/animationIndex';
import ProjectCard from '../ProjectCard/ProjectCard';
import './ProjectList.scss';

interface ProjectListProps {
  projects: Project[];
}

const ProjectList = ({ projects }: ProjectListProps) => (
  <ul className="projects__list">
    {projects.map((project, index) => (
      <ProjectCard
        key={project.id}
        project={project}
        animationOrder={index + LIST_FIRST_INDEX}
      />
    ))}
  </ul>
);

export default ProjectList;
