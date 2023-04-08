import {FriendListItem} from '../FriendListItem/FriendListItem';
import { FriendListWrapper } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
      <FriendListWrapper>
        {friends.map(({ id, ...friendProps }) => <FriendListItem key={id} {...friendProps}></FriendListItem>)}
      </FriendListWrapper>
    );};
