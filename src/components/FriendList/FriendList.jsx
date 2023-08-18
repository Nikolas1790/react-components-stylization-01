import { FriendListItem } from "components/FriendListItem/FriendListItem"
// import PropTypes from 'prop-types';
export const FriendList = ({friends}) => {    
    return (        
   <ul className="friend-list">
    {friends.map(friend =>       

        <FriendListItem 
        key={friend.id}
        avatar={friend.avatar} 
        name={friend.name}
        isOnline={friend.isOnline}
         />
             
       )}
       </ul>       
       )
    }

    // FriendList.propTypes = {
    //   name: PropTypes.string.isRequired,
    //   id: PropTypes.number.isRequired,
    //   isOnline: PropTypes.string.isRequired,
    //   avatar: PropTypes.string.isRequired,
     
    //   };
