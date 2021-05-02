import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckerInComponent } from './checkIn/checkerIn.component';
import { CheckerOutComponent } from './checkOut/checkerOut.component';
import { HomeComponent } from './home.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'menu',
      },
      {
        path: 'menu',
        component: MenuComponent,
      },
      {
        path: 'checker-in',
        component: CheckerInComponent,
      },
      {
        path: 'checker-out',
        component: CheckerOutComponent,
      },
      {
        path: 'inquiry',
        component: InquiryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
