import { FriendListItem } from "components/FriendListItem/FriendListItem"
import friends from '../data/friends.json'

export const FriendList = () => {
    return (
        <div>
<ul class="friend-list">

    {friends.map(friend =>{
        

        <FriendListItem 
        avatar={friend.avatar} 
        name={friend.name}
        isOnline={friend.isOnline}
         />
      
       })}
       </ul>
       </div>
       )
}

