import Container from './container/Container';

import Profile from './profile/Profile';
import StatisticsList from './statistics/StatisticsLict';
import FriendList from './friends/FriendList';
import TransactionList from './transactions/TransactionList';

import user from '../data/user.json';
import statisticalData from '../data/statisticalData.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

function App() {
  const { name, tag, location, avatar, stats } = user;

  return (
    <Container>
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
    </Container>
  );
}

export default App;
