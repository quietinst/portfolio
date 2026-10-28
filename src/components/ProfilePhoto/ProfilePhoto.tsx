import photo from '../../assets/photo/photo.jpg';
import photoWebp from '../../assets/photo/photo.webp';
import photo2x from '../../assets/photo/photo@2x.jpg';
import photoWebp2x from '../../assets/photo/photo@2x.webp';
import './ProfilePhoto.scss';

const ProfilePhoto = () => (
  <div className="home-image">
    <picture>
      <source srcSet={`${photoWebp} 1x, ${photoWebp2x} 2x`} type="image/webp" />
      <img
        src={photo}
        srcSet={`${photo} 1x, ${photo2x} 2x`}
        alt="Aleksandr Popov"
        width={512}
        height={512}
      />
    </picture>
  </div>
);

export default ProfilePhoto;
