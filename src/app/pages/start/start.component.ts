import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-start",
  templateUrl: "./start.component.html",
  styleUrls: ["./start.component.scss"],
})
export class StartComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  go_main() {
    // 여기서 이름을 찾아서 user_idx를 넘겨줍시당
    // 없으면 빠꾸~
    this.router.navigateByUrl("/main");
  }
}
