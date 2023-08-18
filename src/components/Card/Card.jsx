import PropTypes from 'prop-types';
import { CardDate, CardTagAndLocation, Description, Img, List, Nane, ReitingLabel, ReitingNumbers, Status } from './Card.styled';
export const Card = (props) => {
  const {tag, username, location, avatar, stats:{followers,views,likes} } = props;
  
    return(        
            <List className="profile" >
  <Description className="description">
    <Img
      src={avatar}
      alt="User avatar"
      className="avatar" 
    />
    <Nane className="name">{username}</Nane>
    <CardTagAndLocation className="tag">@{tag}</CardTagAndLocation>
    <CardTagAndLocation className="location">{location}</CardTagAndLocation>
  </Description>

  <Status className="stats">
    <CardDate>
      <ReitingLabel className="label">Followers</ReitingLabel>
      <ReitingNumbers className="quantity">{followers}</ReitingNumbers>
    </CardDate>
    <CardDate>
      <ReitingLabel className="label">Views</ReitingLabel>
      <ReitingNumbers className="quantity">{views}</ReitingNumbers>
    </CardDate>
    <CardDate>
      <ReitingLabel className="label">Likes</ReitingLabel>
      <ReitingNumbers className="quantity">{likes}</ReitingNumbers>
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
