import { Injectable } from "@angular/core";
import { Apollo, QueryRef } from "apollo-angular";
import { majung_select_user, majung_select_user_money } from "./queries";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private apollo: Apollo) {}

  public async majung_select_user(user) {
    try {
      const result: any = await this.apollo
        .query({
          query: majung_select_user,
          variables: {
            user,
          },
        })
        .toPromise();

      return result.data.majung_select_user;
    } catch (err) {
      alert(err);
    }
  }

  public async majung_select_user_money(user_idx: number) {
    try {
      const result: any = await this.apollo
        .query({
          query: majung_select_user_money,
          variables: {
            user_idx,
          },
        })
        .toPromise();

      return result.data.majung_select_user_money;
    } catch (err) {
      alert(err);
    }
  }

  //   public async select_main() {
  //     try {
  //       const result: any = await this.apollo
  //         .query({
  //           query: select_main,
  //         })
  //         .toPromise();

  //       return result.data.select_main;
  //     } catch (err) {
  //         alert(err)
  //     }
  // }

  //   public async login_social(social_id, social_access_token){
  //     try {
  //       const result: any = await this.apollo
  //       .mutate({
  //         mutation: login_social,
  //         variables: {
  //           social_id,
  //           social_access_token
  //         }
  //       })
  //       .toPromise();
  //     return result.data.login_social;
  //     } catch (err) {
  //         alert(err)
  //     }
  //   }
}
