import { FriendListItem } from "components/FriendListItem/FriendListItem"
import PropTypes from 'prop-types';
import { Stat } from "./FriendList.styled";

export const FriendList = ({friends}) => {    
    return (        
   <Stat className="friend-list">
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
      item: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
     
    })};
