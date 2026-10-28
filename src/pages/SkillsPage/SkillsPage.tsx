import PageTitle from '../../components/PageTitle/PageTitle';
import { skills } from '../../data/skills';
import { animationIndex, LIST_FIRST_INDEX } from '../../utils/animationIndex';
import './SkillsPage.scss';

const SkillsPage = () => (
  <>
    <title>Skills | Portfolio Aleksandr Popov</title>
    <section className="skills">
      <PageTitle lead="My" accent="Skills" />
      <ul className="skills__list">
        {skills.map((skill, index) => (
          <li
            key={skill}
            className="skills__item"
            style={animationIndex(index + LIST_FIRST_INDEX)}
          >
            <p className="skills__text">{skill}</p>
          </li>
        ))}
      </ul>
    </section>
  </>
);

export default SkillsPage;
