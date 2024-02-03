import PropTypes from 'prop-types';
import { CardDate, CardTagAndLocation, Description, Img, List, Nane, ReitingLabel, ReitingNumbers, Status } from './Card.styled';
export const Card = (props) => {
  const {tag, username, location, avatar, stats:{followers,views,likes} } = props;
  
    return(        
      <List  >
        <Description >
          <Img
            src={avatar}
            alt="User avatar"
            />
          <Nane >{username}</Nane>
          <CardTagAndLocation >@{tag}</CardTagAndLocation>
          <CardTagAndLocation >{location}</CardTagAndLocation>
        </Description>

        <Status >
          <CardDate>
            <ReitingLabel >Followers</ReitingLabel>
            <ReitingNumbers >{followers}</ReitingNumbers>
          </CardDate>
          <CardDate>
            <ReitingLabel >Views</ReitingLabel>
            <ReitingNumbers >{views}</ReitingNumbers>
          </CardDate>
          <CardDate>
            <ReitingLabel >Likes</ReitingLabel>
            <ReitingNumbers >{likes}</ReitingNumbers>
          </CardDate>
        </Status>
      </List>
    )
}


Card.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  };
