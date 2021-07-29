import ProfileOnePerson from './components/profile/ProfileOnePerson';
import user from './components/profile/user.json';

import StatisticsList from './components/statistics/StatisticsLict';
import statisticalData from './components/statistics/statisticalData.json';

import FriendList from './components/friends/FriendList';
import friends from './components/friends/friends.json';

import TransactionList from './components/transactions/TransactionList';
import transactions from './components/transactions/transactions.json';

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
