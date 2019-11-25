import gql from 'graphql-tag';

export const addTransaction = gql`
  mutation AddTransaction(
    $user_id: String!
    $description: String!
    $merchant_id: String!
    $debit: Boolean
    $credit: Boolean
    $amount: Float
  ) {
    addTransaction(
      user_id: $user_id
      description: $description
      merchant_id: $merchant_id
      debit: $debit
      credit: $credit
      amount: $amount
    ) {
      id
      user_id
      description
      merchant_id
      debit
      credit
      amount
    }
  }
`;

export const updateTransaction = gql`
  mutation UpdateTransaction(
    $id: String!
    $user_id: String!
    $description: String!
    $merchant_id: String!
    $debit: Boolean
    $credit: Boolean
    $amount: Float
  ) {
    updateTransaction(
      id: $id
      user_id: $user_id
      description: $description
      merchant_id: $merchant_id
      debit: $debit
      credit: $credit
      amount: $amount
    ) {
      id
      user_id
      description
      merchant_id
      debit
      credit
      amount
    }
  }
`;

export const deleteTransaction = gql`
  mutation DeleteTransaction($id: String!) {
    deleteTransaction(id: $id) {
      id
    }
  }
`;
