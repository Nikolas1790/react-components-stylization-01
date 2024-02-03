import { Avatar, Item, Name, Status } from "components/FriendList/FriendList.styled"
import PropTypes from 'prop-types';
export const FriendListItem = ({isOnline, avatar, name}) => { 

    return (        
        <Item className="item" >
          <Status className={isOnline} ></Status>
          <Avatar  src={avatar} alt="User avatar" width="48" />
          <Name >{name}</Name>
        </Item>       
    )
}

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,   
}).isRequired)};
