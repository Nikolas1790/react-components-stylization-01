import { Card } from "./Card/Card"
import user from './data/user.json'
import { Statistics } from "Statistics/Statistics"
import data from './data/data.json'
import { FriendList } from "./FriendList/FriendList"
import friends from './data/friends.json'
import {TransactionHistory} from './TransactionHistory/Transaction/index.js'
import transactions from './data/transactions.json'


export const App = () => {
  return (
    <div>     
      <h2>Task #1</h2> 
      <Card      
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}/>          
        <h2>Task #2</h2> 
      <Statistics
         title="Upload stats" 
         stats={data}              
      />              
   <h2>Task #3</h2> 
      <FriendList friends={friends} />
      <h2>Task #4</h2> 
      <TransactionHistory items={transactions} />
    </div>   
  );
};

