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

export const majung_add_money = gql`
  mutation majung_add_money($data: InputMajungMoney!) {
    majung_add_money(data: $data)
  }
`;

export const majung_select_user_list = gql`
  query majung_select_user_list {
    majung_select_user_list {
      user_idx
      user_name
      user_phone
      user_total_remain
    }
  }
`;
