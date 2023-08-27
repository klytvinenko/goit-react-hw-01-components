import { FriendList } from "./FriendList/FriendList";
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import userInformation from "../user.json";
import dataStatistics from "../data.json";
import friendsList from "../friends.json"
import transactions from "../transactions.json"



export const App = () => {
  return (
  <div>
    <Profile items={userInformation}/>
    <Statistics data={dataStatistics}/>
    <FriendList friends={friendsList}/>
    <TransactionHistory transactions={transactions}/>
  </div>
  );
};
