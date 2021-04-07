import gql from "graphql-tag";

export const majung_select_user = gql`
  query majung_select_user($user: InputMajungUser!) {
    majung_select_user(user: $user) {
      user_idx
      user_name
      user_phone
      user_total_remain
    }
  }
`;

export const majung_select_user_money = gql`
  query majung_select_user_money($user_idx: Float!) {
    majung_select_user_money(user_idx: $user_idx) {
      money_title
      money_contents
      money_amount
      regist_datetime
    }
  }
`;
