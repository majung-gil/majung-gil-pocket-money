import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "src/graphql/data-services";

@Component({
  selector: "app-new",
  templateUrl: "./new.component.html",
  styleUrls: ["./new.component.scss"],
})
export class NewComponent implements OnInit {
  public data: any = {};

  constructor(private db: DataService, private router: Router) {}

  ngOnInit() {}

  async save() {
    if (
      !this.data.money_title ||
      !this.data.money_contents ||
      !this.data.money_amount
    ) {
      alert("내용을 모두 입력해주세요!");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));
    this.data.user_idx = user.user_idx;

    try {
      await this.db.majung_add_money(this.data);
      this.router.navigateByUrl("/main");
    } catch (err) {
      alert(err);
    }
  }
}
