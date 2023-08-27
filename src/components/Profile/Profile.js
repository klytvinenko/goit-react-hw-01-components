
import PropTypes from 'prop-types';
import { Card } from "./Profile.styled";
import { Information } from "./Profile.styled";
import { StatisticList } from "./Profile.styled";
import { SocInfornation } from "./Profile.styled";
import { StatisticItem } from "./Profile.styled";

export const Profile = ({items}) => {
    return (
        <Card>
            <div>
                <img src={items.avatar} alt="User avatar" width="220" height="180"/>
                <Information>{items.username}</Information>
                <SocInfornation>@{items.tag}</SocInfornation>
                <SocInfornation>{items.location}</SocInfornation>
            </div>
            <StatisticList>
                <StatisticItem>
                    <span>Followers</span>
                    <span> {items.stats.followers}</span>
                </StatisticItem>
                <StatisticItem>
                    <span>Views</span>
                    <span> {items.stats.views}</span>
                </StatisticItem>
                <StatisticItem>
                    <span>Likes</span>
                    <span> {items.stats.likes}</span>
                </StatisticItem>
            </StatisticList>
        </Card>
    );
};

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  };
