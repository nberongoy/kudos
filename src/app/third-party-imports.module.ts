import { NgModule } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzUploadModule } from 'ng-zorro-antd/upload';
@NgModule({
  imports: [
    NzGridModule,
    NzTypographyModule,
    NzCardModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
    NzButtonModule,
    NzSpinModule,
    NzMenuModule,
    NzTabsModule,
    NzUploadModule,
  ],
  declarations: [],
  exports: [
    NzGridModule,
    NzTypographyModule,
    NzCardModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
    NzButtonModule,
    NzSpinModule,
    NzMenuModule,
    NzTabsModule,
    NzUploadModule,
  ],
})
export class KudosThirdPartyImportsModule {}
