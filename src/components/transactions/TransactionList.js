import PropTypes from 'prop-types';
import TransactionHistory from './TransactionHistory';
import s from './Transactions.module.css';

function TransactionList({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.container}>
        <tr className={s.row}>
          <th className={s.tytle}>Type</th>
          <th className={s.tytle}>Amount</th>
          <th className={s.tytle}>Currency</th>
        </tr>
      </thead>

      {items.map(function ({ id, type, amount, currency }) {
        return (
          <tbody className={s.container} key={id}>
            <TransactionHistory
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          </tbody>
        );
      })}
    </table>
  );
}

TransactionList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionList;
