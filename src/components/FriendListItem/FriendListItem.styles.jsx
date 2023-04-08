import styled from '@emotion/styled';

export const FriendItem = styled.li`
  display: flex;
  
  align-items: center;
  padding: 10px;
  border: 1px solid #e4e9f0;
`;

export const Status = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 600;
`;
