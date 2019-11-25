import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from 'react-apollo';
import { getTransactions } from '../graphql/queries';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { deleteTransaction } from '../graphql/mutations';

export function Home() {
  const { data, error, loading, refetch } = useQuery(getTransactions);
  const [removeTransaction] = useMutation(deleteTransaction)

  const remove = async id => {
    await removeTransaction({ variables: { id } });
    await refetch();
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error :(</div>;
  }

  const { transactions } = data;

  return (
    <Fragment>
      <List>
        {transactions.map(transaction => (
          <ListItem key={transaction.id}>
            {transaction.description}
            <Link to={`/edit-transaction/${transaction.id}`}>Edit</Link>
            <a onClick={() => remove(transaction.id)}>Delete</a>
          </ListItem>
        ))}
      </List>
    </Fragment>
  );
}
