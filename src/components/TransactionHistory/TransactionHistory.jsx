import TransactionLine from '../TransactionLine/TransactionLine';

export default function TransactionHistory({ transactions }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
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
