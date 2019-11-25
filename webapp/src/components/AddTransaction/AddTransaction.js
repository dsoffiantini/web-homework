import React from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { addTransaction } from '../../graphql/mutations';
import TransactionForm from '../TransactionForm/TransactionForm';

const AddTransaction = () => {
  const { push } = useHistory();
  const [createTransaction] = useMutation(addTransaction);

  const onSubmit = async (values, { setSubmitting }) => {
    const { amount } = values;
    try {
      await createTransaction({
        variables: {
          ...values,
          amount: parseFloat(amount)
        }
      });
      // Toast success
      push('/');
    } catch (e) {
      console.log(e);
      // give user feedback
    } finally {
      setSubmitting(false);
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
