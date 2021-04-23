import { NgModule } from '@angular/core';
import { KudosThirdPartyImportsModule } from './third-party-imports.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { KudosButtonComponent } from './common/components/button/button.component';

@NgModule({
  imports: [KudosThirdPartyImportsModule, CommonModule, ReactiveFormsModule],
  declarations: [KudosButtonComponent],
  exports: [CommonModule, ReactiveFormsModule, KudosButtonComponent],
  providers: [],
  entryComponents: [],
})
export class KudosCommonImportsModule {}
