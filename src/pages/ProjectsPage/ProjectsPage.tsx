import PageTitle from '../../components/PageTitle/PageTitle';
import ProjectList from '../../components/ProjectList/ProjectList';
import { projects } from '../../data/projects';
import './ProjectsPage.scss';

const ProjectsPage = () => (
  <>
    <title>Projects | Portfolio Aleksandr Popov</title>
    <section className="projects">
      <PageTitle lead="My" accent="Projects" />
      <ProjectList projects={projects} />
    </section>
  </>
);

export default ProjectsPage;
