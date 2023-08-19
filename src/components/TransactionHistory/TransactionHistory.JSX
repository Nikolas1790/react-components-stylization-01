import {  HeadString, Header, Item, StringMoney, Table } from "./TransactionHistory.styled"
import PropTypes from 'prop-types'
export const TransactionHistory = ({ items }) => {
  return <Table >
  <thead>
    <Header>
      <HeadString>Type</HeadString>
      <HeadString>Amount</HeadString>
      <HeadString>Currency</HeadString>
    </Header>
  </thead>

  <tbody>
    {items.map(item =>
    <StringMoney key={item.id}>
      <Item>{item.type}</Item>
      <Item>{item.amount}</Item>
      <Item>{item.currency}</Item>
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