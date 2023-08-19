import { Header, StringMoney, Table } from "./TransactionHistory.styled"
import PropTypes from 'prop-types'
export const TransactionHistory = ({ items }) => {
  return <Table >
  <thead>
    <Header>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </Header>
  </thead>

  <tbody>
    {items.map(item =>
    <StringMoney key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </StringMoney>
    )}</tbody>
</Table>    
}


TransactionHistory.propTypes = {
  item: PropTypes.shape({
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
 }) };