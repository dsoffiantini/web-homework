import gql from 'graphql-tag';

export const getTransaction = gql`
  query transaction($id: String!) {
    transaction(id: $id) {
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

export const getTransactions = gql`
  query transactions(
    $amount: Float
    $credit: Boolean
    $debit: Boolean
    $description: String
    $merchant_id: String
    $user_id: String
  ) {
    transactions(
      amount: $amount
      credit: $credit
      debit: $debit
      description: $description
      merchant_id: $merchant_id
      user_id: $user_id
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
