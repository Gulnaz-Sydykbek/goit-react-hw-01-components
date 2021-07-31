import Profile from './profile/Profile';
import user from '../data/user.json';

import StatisticsList from './statistics/StatisticsLict';
import statisticalData from '../data/statisticalData.json';

import FriendList from './friends/FriendList';
import friends from '../data/friends.json';

import TransactionList from './transactions/TransactionList';
import transactions from '../data/transactions.json';

function App() {
  const { name, tag, location, avatar, stats } = user;
  return (
    <div>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <StatisticsList title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionList items={transactions} />
    </div>
  );
}

export default App;
