import { FriendListItem } from "components/FriendListItem/FriendListItem"
import PropTypes from 'prop-types';
import { Stat } from "./FriendList.styled";

export const FriendList = ({friends}) => {    
    return (        
   <Stat >
    {friends.map(friend =>       

        <FriendListItem 
        key={friend.id}
        avatar={friend.avatar} 
        name={friend.name}
        isOnline={friend.isOnline}
         />
             
       )}
       </Stat>       
       )
    }

    FriendList.propTypes = {
      friends: PropTypes.arrayOf(
       PropTypes.shape({
      id: PropTypes.number.isRequired,          
    }).isRequired
    )};
