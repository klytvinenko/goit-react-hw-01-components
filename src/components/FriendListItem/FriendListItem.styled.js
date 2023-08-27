import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  border-radius: 0px 0px 4px 4px;
  background-color: #f4f4fd;
  width: 300px;
  padding: 10px 20px;
  box-shadow: 0px 2px 1px 0px rgba(46, 47, 66, 0.08),
    0px 1px 1px 0px rgba(46, 47, 66, 0.16),
    0px 1px 6px 0px rgba(46, 47, 66, 0.08);
    margin-left: auto;
    margin-right: auto;
`

export const Status = styled.span`
    width: 10px;
    height: 10px;
    border-radius: 50%;
     background-color: ${props => {
    switch (props.status) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
        return null;
    }
  }};
`