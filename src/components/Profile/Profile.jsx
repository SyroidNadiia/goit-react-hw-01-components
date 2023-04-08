import PropTypes from 'prop-types';
import numeral from 'numeral';
import {
  Profiles,
  Description,
  Avatar,
  UserName,
  Tag,
  Location,
  Stats,
  Stat,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <Profiles>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <Stat>
          <Label>Followers</Label>
          <Quantity>{numeral(followers).format('0,0')}</Quantity>
        </Stat>
        <Stat>
          <Label>Views</Label>
          <Quantity>{numeral(views).format('0,0')}</Quantity>
        </Stat>
        <Stat>
          <Label>Likes</Label>
          <Quantity>{numeral(likes).format('0,0')}</Quantity>
        </Stat>
      </Stats>
    </Profiles>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
