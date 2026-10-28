import { socials } from '../../data/socials';
import { animationIndex, LIST_FIRST_INDEX } from '../../utils/animationIndex';
import SocialIcon from '../SocialIcon/SocialIcon';
import './SocialLinks.scss';

const SocialLinks = () => (
  <div className="social">
    <ul className="social__list">
      {socials.map(({ label, href, icon }, index) => (
        <li key={href} className="social__item">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label} Aleksandr Popov`}
            style={animationIndex(index + LIST_FIRST_INDEX)}
            className="social__link"
          >
            <SocialIcon name={icon} />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default SocialLinks;
