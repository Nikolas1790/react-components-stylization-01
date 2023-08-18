import { Avatar, Item, Name, Status } from "components/FriendList/FriendList.styled"

export const FriendListItem = ({isOnline, avatar, name}) => {
 

    return (        
        <Item className="item" >
  <Status className={isOnline} ></Status>
  <Avatar className="avatar" src={avatar} alt="User avatar" width="48" />
  <Name className="name">{name}</Name>
</Item>       
    )
}

