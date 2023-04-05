import FriendListItem from '../FriendListItem/FriendListItem';


const FriendList = ({ friends }) => {
    return (
      <ul className="friend-list">
        {friends.map(({ id, ...friendProps }) => <FriendListItem key={id} {...friendProps}></FriendListItem>)}
      </ul>
    );};

    export default FriendList;