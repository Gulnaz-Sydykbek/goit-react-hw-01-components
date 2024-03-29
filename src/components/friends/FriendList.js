import PropTypes from 'prop-types';
import Friends from './Friends';

function FriendList({ friends }) {
  return (
    <div>
      {friends.map(function ({ id, avatar, name, isOnline }) {
        return (
          <ul key={id}>
            <Friends url={avatar} name={name} isOnline={isOnline} />
          </ul>
        );
      })}
    </div>
  );
}

FriendList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default FriendList;
