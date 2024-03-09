import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistoryTable}>
      <thead className={css.transactionHistoryHead}>
        <tr>
          <th className={css.transactionHistoryCell}>Type</th>
          <th className={css.transactionHistoryCell}>Amount</th>
          <th className={css.transactionHistoryCell}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={css.transactionHistoryString} key={id}>
              <td className={css.transactionHistoryCellName}>{type}</td>
              <td className={css.transactionHistoryCell}>{amount}</td>
              <td className={css.transactionHistoryCell}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
