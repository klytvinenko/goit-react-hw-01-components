import { FriendListItem } from "../FriendListItem/FriendListItem";
import PropTypes from 'prop-types';
import { List, ListItem } from "./FriendList.styled";

export const FriendList = ({friends}) => {
    return (
        <List>
            {friends.map(friend => (
                <ListItem key={friend.id}>
                    <FriendListItem friendItem={friend}/>
                </ListItem>
            ))}
        </List>
    );
};

FriendList.propTypes = {
    friends: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  };