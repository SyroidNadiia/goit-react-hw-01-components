import styled from '@emotion/styled';


export const Profiles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: #fff;
  max-width: 340px;
  margin: 20px auto;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: center;
  text-align: center;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
`;

export const UserName = styled.p`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 12px;
`;

export const Tag = styled.p`
  font-size: 24px;
  color: #787878;
  margin-bottom: 12px;
`;

export const Location = styled.p`
  font-size: 20px;
  color: #787878;
  margin-bottom: 32px;
`;

export const Stats = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: row;
  align-items: center;
  width: 100%;
  min-height: 80px;
  height: 100%;
  justify-content: center;
  border: 1px solid #e4e9f0;
  position: relative;
  background-color: #f5f5f5;
`;

export const Stat = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 40px;
  position: relative;
  min-height: 80px;

  &:last-child::before {
    content: '';
    border-right: 1px solid #e4e9f0;
    height: 100%;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -20px;
  }

  &:first-child::after {
    content: '';
    border-left: 1px solid #e4e9f0;
    height: 100%;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    right: -20px;
  }
`;

export const Label = styled.span`
  font-size: 18px;
  color: #787878;
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  font-size: 24px;
  font-weight: 600;
`;
