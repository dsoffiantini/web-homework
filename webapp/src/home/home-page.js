import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-apollo'
import { getTransactions } from '../graphql/queries'

export function Home () {
  const { data, error, loading } = useQuery(getTransactions)

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error :(</div>
  }

  const { transactions } = data

  return (
    <Fragment>
      {transactions.map(transaction => (
        <Link key={transaction.id} to={`/edit-transaction/${transaction.id}`}>
          {transaction.description}
        </Link>
      ))}
    </Fragment>
  )
}
