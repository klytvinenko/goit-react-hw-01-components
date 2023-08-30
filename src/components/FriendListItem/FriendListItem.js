import PropTypes from 'prop-types';
import { ContainerLi, Status } from "./FriendListItem.styled";


export const FriendListItem = ({friendItem :{isOnline, avatar, name, id}}) => {
    return (
        <ContainerLi key={id}>
             <Status status={isOnline}>{isOnline}</Status>
             <img src={avatar} alt="User avatar" width="48"/>
             <p>{name}</p>
        </ContainerLi>
    );
};

FriendListItem.propTypes = {
    friendItem: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.string.isRequired,
    }).isRequired,
  };