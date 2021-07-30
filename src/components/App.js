import ProfileOnePerson from './profile/ProfileOnePerson';
import user from '../data/user.json';

import StatisticsList from './statistics/StatisticsLict';
import statisticalData from '../data/statisticalData.json';

import FriendList from './friends/FriendList';
import friends from '../data/friends.json';

import TransactionList from './transactions/TransactionList';
import transactions from '../data/transactions.json';

function App() {
  return (
    <div>
      <ProfileOnePerson user={user} />
      <StatisticsList title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionList items={transactions} />
    </div>
  );
}

export default App;
