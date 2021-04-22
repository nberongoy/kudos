import { NgModule } from '@angular/core';
import { KudosCommonImportsModule } from 'src/app/common-imports.module';
import { KudosThirdPartyImportsModule } from 'src/app/third-party-imports.module';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [KudosThirdPartyImportsModule, LoginRoutingModule, KudosCommonImportsModule],
  providers: [],
  bootstrap: [],
})
export class LoginModule {}
