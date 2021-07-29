import PropTypes from 'prop-types';
import Friends from './Friends';

function FriendList({ friends }) {
  return (
    <div>
      {friends.map(friend => (
        <ul key={friend.id}>
          <Friends
            url={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </ul>
      ))}
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
