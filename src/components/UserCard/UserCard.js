import Profile from '../Profile/Profile';
import user from '../../json/user';

function UserCard() {
  return (
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
}

export default UserCard;
