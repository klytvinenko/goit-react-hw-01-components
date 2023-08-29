import PropTypes from 'prop-types';
import { TransactionHead, TransactionTable } from './TransactionHistory.styled';

export const TransactionHistory = ({transactions}) => {
    return (
        <TransactionTable>
            <TransactionHead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </TransactionHead>
            
            <tbody>
                {transactions.map(transaction => (
                    <tr key={transaction.id}>
                    <td>{transaction.type}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.currency}</td>
                    </tr>

                ))};
            </tbody>
        </TransactionTable>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  };