import UserCard from './UserCard/UserCard';
import Statistics from './Statistics/Statistics';
import data from '../json/data';
import transactions from '../json/transactions';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <UserCard></UserCard>
      <Statistics title="Upload stats" stats={data} />
      <FriendList></FriendList>
      <TransactionHistory items={transactions}></TransactionHistory>
    </>
  );
};
