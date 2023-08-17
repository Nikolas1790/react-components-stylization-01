import { Statistics } from "Statistics/Statistics";
import { Card } from "./Card/Card";
import user from './data/user.json'
import data from './data/data.json'
import friends from './data/friends.json'
import { FriendList } from "./FriendList/FriendList";
// import { FriendListItem } from "./FriendListItem/FriendListItem";
// import PropTypes from 'prop-types';
import transactions from './data/transactions.json'
import TransactionHistory from './TransactionHistory/TransactionHistory.JSX'


export const App = () => {

  return (
    <div>
      <Card
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}/>          
        
        <Statistics
         title="Upload stats" 
         stats={data}     
         
         />        
      
   
      <FriendList />

      {/* <TransactionHistory items={transactions} /> */}


        
    </div>   

  );
};

