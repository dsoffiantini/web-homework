import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup'; // TODO: Modular imports
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { css } from '@emotion/core';

const formStyle = css`
  display: flex;
  flex-direction: column;

  & > .MuiFormControl-root {
    margin-bottom: 1rem;
  }
`;

const validationSchema = Yup.object().shape({
  user_id: Yup.string().required('Please enter a user id'),
  description: Yup.string().required('Please enter a description'),
  merchant_id: Yup.string().required('Please enter a merchant id'),
  debit: Yup.number().required('Please enter a debit amount'),
  credit: Yup.number().required('Please enter a credit amount'),
  amount: Yup.number().required('Please enter a total amount')
});

const TransactionForm = ({ initialValues, onSubmit, ...rest }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} {...rest}>
      {({ handleBlur, handleChange, handleSubmit, values }) => (
        <form css={formStyle} onSubmit={handleSubmit}>
          <TextField
            required
            id="userId"
            label="User Id"
            name="user_id"
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Enter User Id"
            value={values.user_id}
            variant="outlined"
          />
          <TextField
            required
            id="description"
            label="Description"
            multiline
            name="description"
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Enter Description"
            rows="4"
            value={values.description}
            variant="outlined"
          />
          <TextField
            required
            id="merchantId"
            label="Merchant Id"
            name="merchant_id"
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Enter Merchant Id"
            value={values.merchant_id}
            variant="outlined"
          />
          <TextField
            required
            id="amount"
            label="Amount"
            name="amount"
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Enter Amount"
            value={values.amount}
            variant="outlined"
          />
          <Button color="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      )}
    </Formik>
  );
};

TransactionForm.defaultProps = {
  initialValues: { user_id: '', description: '', merchant_id: '', debit: false, credit: true, amount: 0.0 }
};

export default TransactionForm;
