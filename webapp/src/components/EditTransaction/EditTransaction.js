import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useQuery, useMutation } from 'react-apollo';
import { getTransaction } from '../../graphql/queries';
import { CircularProgress } from '@material-ui/core';
import TransactionForm from '../TransactionForm/TransactionForm';
import { updateTransaction } from '../../graphql/mutations';

const EditTransaction = () => {
  const { id } = useParams();
  const { push } = useHistory();
  const { data, error, loading } = useQuery(getTransaction, { variables: { id } });
  const [editTransaction] = useMutation(updateTransaction, { refetchQueries: getTransaction, variables: { id } });

  const onSubmit = async (values, { setSubmitting }) => {
    const { amount } = values;
    try {
      await editTransaction({
        variables: {
          ...values,
          amount: parseFloat(amount),
          id
        }
      });
      push('/');
    } catch (e) {
      console.log(e);
      // Toast user on error
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <CircularProgress id="loading" />;
  }

  if (error) {
    return <div>Error :(</div>;
  }

  const { transaction } = data;
  return (
    <>
      <h3>Edit Transaction</h3>
      <TransactionForm initialValues={transaction} onSubmit={onSubmit} />
    </>
  );
};

export default EditTransaction;
