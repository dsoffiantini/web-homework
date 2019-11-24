import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { addTransaction } from '../../graphql/mutations';
import TransactionForm from '../TransactionForm/TransactionForm';

const AddTransaction = () => {
  const [createTransaction] = useMutation(addTransaction);

  const onSubmit = async (values, { setLoading }) => {
    try {
      await createTransaction({ variables: values });
    } catch (e) {
      console.log(e);
      // give user feedback
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h3>Enter a new transaction</h3>
      <TransactionForm onSubmit={onSubmit} />
    </>
  );
};

export default AddTransaction;
