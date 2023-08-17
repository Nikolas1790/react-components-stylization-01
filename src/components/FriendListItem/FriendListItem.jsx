export const FriendListItem = (props) => {
    
    // const {avatar, name, isOnline, id} = props; 
    return (
        <div>
        <li class="item" >
  <span class="status">{props.isOnline}</span>
  <img class="avatar" src={props.avatar} alt="User avatar" width="48" />
  <p class="name">{props.name}</p>
</li>
        
</div>

    )
}