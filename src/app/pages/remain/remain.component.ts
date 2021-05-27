import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { DataService } from "src/graphql/data-services";
import { DialogComponent } from "../dialog/dialog.component";

@Component({
  selector: "app-remain",
  templateUrl: "./remain.component.html",
  styleUrls: ["./remain.component.scss"],
})
export class RemainComponent implements OnInit {
  public data;
  public displayedColumns: string[] = [
    "position",
    "user",
    "name",
    "weight",
    "btn",
  ];

  constructor(private db: DataService, public dialog: MatDialog) {}

  async ngOnInit() {
    this.load_data();
  }

  async load_data() {
    this.data = await this.db.majung_select_user_money_all();
    console.log(this.data);
  }

  update(data) {
    console.log(data);
    this.dialog.open(DialogComponent, {
      data,
    });
  }

  async delete(data) {
    if (confirm(`${data.money_title} 사용내역을 삭제하시겠습니까?`) == false) {
      return;
    }

    try {
      await this.db.majung_delete_money({
        money_idx: data.money_idx,
        user_idx: data.user_idx,
      });
      this.load_data();
    } catch (err) {
      alert(err);
    }
  }
}
