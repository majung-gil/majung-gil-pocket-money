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
    if (this.data.regist_datetime) {
      delete this.data.regist_datetime;
    }
    try {
      await this.db.majung_update_money(this.data);
      this.dialog.closeAll();
    } catch (err) {
      alert(err);
    }
  }
}
