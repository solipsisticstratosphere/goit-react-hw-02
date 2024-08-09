import TransactionLine from '../TransactionLine/TransactionLine';
import css from './TransactionHistory.module.css';
export default function TransactionHistory({ transactions }) {
  return (
    <table className={css.transactions}>
      <thead>
        <tr>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(item => (
          <tr key={item.id}>
            <TransactionLine transaction={item} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
