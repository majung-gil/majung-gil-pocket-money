import { Component, Inject, OnInit } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material";
import { DataService } from "src/graphql/data-services";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"],
})
export class DialogComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data,
    private db: DataService
  ) {}

  ngOnInit() {
    console.log(this.data);
  }

  async save() {
    const update = {
      money_amount: this.data.money_amount,
      money_contents: this.data.money_contents,
      money_idx: this.data.money_idx,
      money_title: this.data.money_title,
      user_idx: this.data.user_idx,
    };
    try {
      await this.db.majung_update_money(update);
      this.dialog.closeAll();
    } catch (err) {
      alert(err);
    }
  }
}
