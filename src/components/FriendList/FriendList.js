import { FriendListItem } from "../FriendListItem/FriendListItem";
import PropTypes from 'prop-types';
import { List} from "./FriendList.styled";

export const FriendList = ({friends}) => {
    return (
        <List>
            {friends.map(friend => (
               <FriendListItem friendItem={friend}/>
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