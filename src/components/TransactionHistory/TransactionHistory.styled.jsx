import styled from '@emotion/styled';

export const TableTransaction = styled.table`
  min-width: 750px;
  border-collapse: collapse;
  margin: 0 auto;
`;

export const HeadRow = styled.tr`
  background-color: #4ecdd4;
`;

export const HeadCell = styled.th`
  padding: 10px 20px;
  font-weight: bold;
  text-align: left;
  text-align: center;
`;

export const BodyRow = styled.tr`
  background-color: #ffffff;

  &:nth-of-type(even) {
    background-color: #f5f5f5;
  }

  &:nth-of-type(odd) {
    background-color: #fff;
  }
`;

export const BodyCell = styled.td`
  padding: 10px 20px;
  text-align: left;
  text-align: center;
`;
