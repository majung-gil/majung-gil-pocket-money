import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./pages/main/main.component";
import { NewComponent } from "./pages/new/new.component";
import { StartComponent } from "./pages/start/start.component";

const routes: Routes = [
  {
    path: "",
    component: StartComponent,
  },
  {
    path: "start",
    component: StartComponent,
  },
  {
    path: "main",
    component: MainComponent,
  },
  {
    path: "new",
    component: NewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
