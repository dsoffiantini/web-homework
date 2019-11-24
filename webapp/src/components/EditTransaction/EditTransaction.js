import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useQuery, useMutation } from 'react-apollo';
import { getTransaction } from '../../graphql/queries';
import { CircularProgress } from '@material-ui/core';
import TransactionForm from '../TransactionForm/TransactionForm';

const EditTransaction = () => {
  const { id } = useParams();
  const { push } = useHistory();
  const { data, error, loading } = useQuery(getTransaction, { variables: { id } });
  const [createTransaction] = useMutation(createTransaction);

  const onSubmit = async (values, { setLoading }) => {
    try {
      await createTransaction(values);
      push('/');
    } catch (e) {
      console.log(e);
      // Toast user on error
    } finally {
      setLoading(false);
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
      <TransactionForm initialValues={transaction} />
    </>
  );
};

export default EditTransaction;
