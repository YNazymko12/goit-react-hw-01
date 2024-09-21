import './App.css';

import friends from '../src/components/FriendList/friends.json';
import transactions from '../src/components/TransactionHistory/transaction.json';
import userData from '../src/components/Profile/userData.json';

import FriendList from './components/FriendList/FriendList';
import Profile from './components/Profile/Profile';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
