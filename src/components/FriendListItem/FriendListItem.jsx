export const FriendListItem = (props) => {
     
    return (
        
        <li class="item" key={props.id}>
  <span class="status">{props.isOnline}</span>
  <img class="avatar" src={props.avatar} alt="User avatar" width="48" />
  <p class="name">{props.name}</p>
</li>
        


    )
}

