import user from 'path/to/user.json;'
import { Card } from 'components/Card/Card'

export const Profile = (props) => {
    // console.log(props)
    return (
        <div>
            <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
        </div>
    )
}