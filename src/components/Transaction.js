import React from 'react'

const Transaction = (transaction, i) => {
  return (
    <tr key={i}>
      <td>{transaction.transaction.posted_at}</td>
      <td>{transaction.transaction.description}</td>
      <td>{transaction.transaction.category}</td>
      <td>{transaction.transaction.amount}</td>
    </tr>
  )
}

export default Transaction
