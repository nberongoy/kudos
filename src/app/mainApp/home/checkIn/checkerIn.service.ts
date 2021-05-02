import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ContainerInInspectionInterface } from 'src/app/common/interfaces/container.interface';
import { ContainerInInspection } from 'src/app/common/models/container.model';

@Injectable({
  providedIn: 'root',
})
export class CheckInService {
  private container: ContainerInInspectionInterface = new ContainerInInspection();
  private containers: ContainerInInspectionInterface[] = [];

  constructor(private message: NzMessageService) {}

  newContainerIn(): void {
    this.container = new ContainerInInspection();
  }

  checkInContainer(container: ContainerInInspectionInterface): void {
    this.containers = [...this.containers, container];
    this.message.create('success', `Successfully check in the container.`);
  }

  getContinerList(): ContainerInInspectionInterface[] {
    return this.containers;
  }

  getContainer(containerNo: string): ContainerInInspectionInterface | undefined {
    const container: ContainerInInspectionInterface | undefined = this.containers.find(
      (container: ContainerInInspectionInterface) => container.containerNo === containerNo
    );
    return container;
  }
}
