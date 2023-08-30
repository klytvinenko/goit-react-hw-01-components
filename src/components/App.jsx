import { FriendList } from "./FriendList/FriendList";
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import user from "../data/user.json";
import dataStatistics from "../data/data.json";
import friendsList from "../data/friends.json"
import transactions from "../data/transactions.json"



export const App = () => {
  return (
  <div>
    <Profile 
      username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
    />
    <Statistics data={dataStatistics}/>
    <FriendList friends={friendsList}/>
    <TransactionHistory transactions={transactions}/>
  </div>
  );
};
