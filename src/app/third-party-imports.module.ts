import { NgModule } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpinModule } from 'ng-zorro-antd/spin';
@NgModule({
  imports: [NzGridModule, NzTypographyModule, NzCardModule, NzFormModule, NzInputModule, NzIconModule, NzButtonModule, NzSpinModule],
  declarations: [],
  exports: [NzGridModule, NzTypographyModule, NzCardModule, NzFormModule, NzInputModule, NzIconModule, NzButtonModule, NzSpinModule],
})
export class KudosThirdPartyImportsModule {}
