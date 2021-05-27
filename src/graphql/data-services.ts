import { Injectable } from "@angular/core";
import { Apollo, QueryRef } from "apollo-angular";
import {
  calc_total_remain,
  majung_add_money,
  majung_delete_money,
  majung_select_user,
  majung_select_user_list,
  majung_select_user_money,
  majung_update_money,
} from "./queries";

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

  public async majung_add_money(data) {
    try {
      const result: any = await this.apollo
        .mutate({
          mutation: majung_add_money,
          variables: {
            data,
          },
        })
        .toPromise();
      return result.data.majung_add_money;
    } catch (err) {
      alert(err);
    }
  }

  public async majung_select_user_list() {
    try {
      const result: any = await this.apollo
        .query({
          query: majung_select_user_list,
        })
        .toPromise();

      return result.data.majung_select_user_list;
    } catch (err) {
      alert(err);
    }
  }

  public async calc_total_remain() {
    try {
      const result: any = await this.apollo
        .query({
          query: calc_total_remain,
        })
        .toPromise();

      return result.data.calc_total_remain;
    } catch (err) {
      alert(err);
    }
  }

  public async majung_update_money(data) {
    console.log(data);
    try {
      const result: any = await this.apollo
        .mutate({
          mutation: majung_update_money,
          variables: {
            data,
          },
        })
        .toPromise();
      return result.data.majung_update_money;
    } catch (err) {
      alert(err);
    }
  }

  public async majung_delete_money(data) {
    try {
      const result: any = await this.apollo
        .mutate({
          mutation: majung_delete_money,
          variables: {
            data,
          },
        })
        .toPromise();
      return result.data.majung_delete_money;
    } catch (err) {
      alert(err);
    }
  }
}
