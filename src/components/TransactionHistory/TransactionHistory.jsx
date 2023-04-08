import PropTypes from 'prop-types';
import {
  TableTransaction,
  HeadRow,
  HeadCell,
  BodyRow,
  BodyCell,
} from './TransactionHistory.styled';

export const TransactionHistory = ({items}) => {
  return (
    <TableTransaction>
      <thead>
        <HeadRow>
          <HeadCell>Type</HeadCell>
          <HeadCell>Amount</HeadCell>
          <HeadCell>Currency</HeadCell>
        </HeadRow>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <BodyRow key={id}>
            <BodyCell>{type}</BodyCell>
            <BodyCell>{amount}</BodyCell>
            <BodyCell>{currency}</BodyCell>
          </BodyRow>
        ))}
      </tbody>
    </TableTransaction>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
