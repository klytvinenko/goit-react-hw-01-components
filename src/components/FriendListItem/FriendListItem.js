import PropTypes from 'prop-types';
import { Container, Status } from "./FriendListItem.styled";


export const FriendListItem = ({friendItem :{isOnline, avatar, name}}) => {
    return (
        <Container>
             <Status status={isOnline}>{isOnline}</Status>
             <img src={avatar} alt="User avatar" width="48"/>
             <p>{name}</p>
        </Container>
    );
};

FriendListItem.propTypes = {
    friend: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.string.isRequired,
    }).isRequired,
  };