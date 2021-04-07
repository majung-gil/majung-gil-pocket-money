import { Component, OnInit } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { DataService } from "src/graphql/data-services";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  public dataSource = [];

  public displayedColumns: string[] = ["position", "name", "weight"];

  public new_dialog: boolean = false;
  public user;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private db: DataService
  ) {}

  async ngOnInit() {
    // local 에 저장된 유저 정보를 바로 갖고온당
    this.user = JSON.parse(localStorage.getItem("user"));
    console.log(this.user);

    this.dataSource = await this.db.majung_select_user_money(
      this.user.user_idx
    );
    // console.log(result);
  }

  open_new_dialog() {
    this.new_dialog = true;

    this.dialog.open(DialogDataExampleDialog);
  }
}

export class DialogDataExampleDialog {
  // constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
