import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService } from "./common/services/auth-guard.service";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./MainApp/login/login.module').then((m) => m.LoginModule),
  // },
  {
    path: "home",
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import("./mainApp/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "**",
    redirectTo: "home",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
