import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "src/graphql/data-services";
@Component({
  selector: "app-start",
  templateUrl: "./start.component.html",
  styleUrls: ["./start.component.scss"],
})
export class StartComponent implements OnInit {
  public value: any = {
    user_name: "",
    user_phone: "",
  };
  constructor(private router: Router, private db: DataService) {}

  ngOnInit() {}

  async go_main() {
    // 여기서 이름을 찾아서 user_idx를 넘겨줍시당
    // 없으면 빠꾸~
    const user = await this.db.majung_select_user(this.value);

    if (!user) {
      alert("서쪽친구들 회원이 아니시군요.....");
      return;
    }
    // 로그인 비스무리하게 유저 정보를 저장해놓자
    localStorage.setItem("user", JSON.stringify(user));

    this.router.navigateByUrl("/main");
  }
}
