import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-apollo';
import { getTransactions } from '../graphql/queries';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export function Home() {
  const { push } = useHistory();
  const { data, error, loading } = useQuery(getTransactions);

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
          <ListItem key={transaction.id} onClick={() => push(`/edit-transaction/${transaction.id}`)}>
            {transaction.description}
          </ListItem>
        ))}
      </List>
    </Fragment>
  );
}
