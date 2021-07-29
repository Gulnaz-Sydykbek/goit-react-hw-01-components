import PropTypes from 'prop-types';
import s from './Profile.module.css';

function Profile(props) {
  const {
    name = 'Heaven knows',
    tag,
    location,
    avatar,
    followers,
    views,
    likes,
  } = props;

  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt={name} className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.statsContainer}>
          <span>Followers</span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li className={s.statsContainer}>
          <span>Views</span>
          <span className={s.quantity}>{views}</span>
        </li>
        <li className={s.statsContainer}>
          <span>Likes</span>
          <span className={s.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
