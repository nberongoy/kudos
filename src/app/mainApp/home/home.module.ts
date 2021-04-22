import { NgModule } from "@angular/core";
import { KudosCommonImportsModule } from "src/app/common-imports.module";
import { KudosThirdPartyImportsModule } from "src/app/third-party-imports.module";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
@NgModule({
  declarations: [HomeComponent],
  imports: [
    KudosThirdPartyImportsModule,
    HomeRoutingModule,
    KudosCommonImportsModule,
  ],
  bootstrap: [],
  providers: [],
  entryComponents: [],
})
export class HomeModule {}
