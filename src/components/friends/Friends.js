import s from './Friends.module.css';
import PropTypes from 'prop-types';

function Friends(props) {
  const { url, name, isOnline } = props;

  return (
    <li className={s.item}>
      {isOnline ? (
        <span
          className={s.status}
          style={{ backgroundColor: '#008000' }}
        ></span>
      ) : (
        <span
          className={s.status}
          style={{ backgroundColor: '#FF0000' }}
        ></span>
      )}
      <img className={s.avatar} src={url} alt={s.name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

Friends.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Friends;
