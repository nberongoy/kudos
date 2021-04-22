import { NgModule } from "@angular/core";
import { KudosThirdPartyImportsModule } from "./third-party-imports.module";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [KudosThirdPartyImportsModule, CommonModule, ReactiveFormsModule],
  declarations: [],
  exports: [CommonModule, ReactiveFormsModule],
  providers: [],
  entryComponents: [],
})
export class KudosCommonImportsModule {}
