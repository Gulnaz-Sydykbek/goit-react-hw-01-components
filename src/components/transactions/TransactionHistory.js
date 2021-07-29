import PropTypes from 'prop-types';
import s from './Transactions.module.css';

function TransactionHistory(props) {
  const { type, amount, currency } = props;
  return (
    <tr className={s.itemRow}>
      <td className={s.item}>{type}</td>
      <td className={s.item}>{amount}</td>
      <td className={s.item}>{currency}</td>
    </tr>
  );
}

TransactionHistory.propTypes = {
  type: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
};

export default TransactionHistory;
