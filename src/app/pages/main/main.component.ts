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
  public displayedColumns2: string[] = ["position", "name"];

  public new_dialog: boolean = false;
  public user;

  public all_user;
  public sum_user_remain = 0;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private db: DataService
  ) {}

  async ngOnInit() {
    // local 에 저장된 유저 정보를 바로 갖고온당
    const user = JSON.parse(localStorage.getItem("user"));
    // remain 떔시 다시 조회해쥼
    this.user = await this.db.majung_select_user({ user_idx: user.user_idx });

    this.dataSource = await this.db.majung_select_user_money(
      this.user.user_idx
    );

    this.all_user = await this.db.majung_select_user_list();
    for (let item of this.all_user) {
      this.sum_user_remain += 75000 - item.user_total_remain; // 유저 잔액 다 더하기
    }

    console.log(this.sum_user_remain);
  }

  go_new() {
    this.router.navigateByUrl("/new");
  }
}

export class DialogDataExampleDialog {
  // constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
