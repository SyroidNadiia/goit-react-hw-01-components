import FriendListItem from '../FriendListItem/FriendListItem';
import friends from '../../json/friends';

const FriendList = () => {
    return (
      <ul className="friend-list">
        {friends.map(({ id, ...friendProps }) => <FriendListItem key={id} {...friendProps}></FriendListItem>)}
      </ul>
    );};

    export default FriendList;