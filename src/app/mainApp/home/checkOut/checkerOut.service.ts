import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ContainerOutInspectionInterface } from 'src/app/common/interfaces/container.interface';
import { ContainerOutInspection } from 'src/app/common/models/container.model';

@Injectable({
  providedIn: 'root',
})
export class CheckOutService {
  private container: ContainerOutInspectionInterface = new ContainerOutInspection();

  constructor(private message: NzMessageService) {}

  newContainerOut(): void {
    this.container = new ContainerOutInspection();
  }

  checkOutContainer(container: ContainerOutInspectionInterface): void {
    console.log(container);
    this.message.create('success', `Successfully check out the container.`);
  }
}
