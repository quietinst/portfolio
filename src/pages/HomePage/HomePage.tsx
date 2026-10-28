import cv from '../../assets/cv/popov_a_7486.pdf';
import ButtonLink from '../../components/ButtonLink/ButtonLink';
import ProfilePhoto from '../../components/ProfilePhoto/ProfilePhoto';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import TypedText from '../../components/TypedText/TypedText';
import './HomePage.scss';

const ROLES = ['Full Stack Developer'];

const HomePage = () => (
  <>
    <title>Portfolio Aleksandr Popov</title>
    <section className="home">
      <ProfilePhoto />
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Aleksandr Popov</h1>
        <h3>
          And I'm a <TypedText strings={ROLES} />
        </h3>
        <p>
          I am committed to delivering high-quality work, meeting project
          deadlines, and creating intuitive interfaces that enhance the user
          experience.
        </p>
        <SocialLinks />
        <ButtonLink href={cv} download="popov_a_7486.pdf">
          Download CV
        </ButtonLink>
      </div>
    </section>
  </>
);

export default HomePage;
