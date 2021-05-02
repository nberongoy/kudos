import { NgModule } from '@angular/core';
import { KudosCommonImportsModule } from 'src/app/common-imports.module';
import { KudosThirdPartyImportsModule } from 'src/app/third-party-imports.module';
import { CheckerInComponent } from './checkIn/checkerIn.component';
import { CheckerOutComponent } from './checkOut/checkerOut.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MenuComponent } from './menu/menu.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { KudosNavigationComponent } from './navigation/navigation.component';
@NgModule({
  declarations: [HomeComponent, MenuComponent, KudosNavigationComponent, CheckerInComponent, CheckerOutComponent, InquiryComponent],
  imports: [KudosThirdPartyImportsModule, HomeRoutingModule, KudosCommonImportsModule],
  exports: [],
  bootstrap: [],
  providers: [],
  entryComponents: [],
})
export class HomeModule {}
