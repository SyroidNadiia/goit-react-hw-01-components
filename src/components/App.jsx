import data from '../json/data';
import friends from '../json/friends';
import transactions from '../json/transactions';
import user from '../json/user';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends}></FriendList>
      <TransactionHistory items={transactions}></TransactionHistory>
    </>
  );
};
