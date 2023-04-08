import styled from '@emotion/styled';
import { getRandomHexColor } from 'helpers/getRandomHexColor';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 550px;
  border: 1px solid #e4e9f0;
  margin: 10px auto;
`;

export const Title = styled.h2`
  font-size: 24px;
  text-transform: uppercase;
  margin: 20px 0;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70px;
  height: 100%;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70px;
  height: 100%;
  background-color: ${prop => getRandomHexColor(prop.id)};
`;

export const Label = styled.span`
  display: inline-block;
  width: 100px;
  margin-right: 10px;
  text-align: center;
`;

export const Percentage = styled.span`
  display: inline-block;
  width: 50px;
  text-align: center;
`;
