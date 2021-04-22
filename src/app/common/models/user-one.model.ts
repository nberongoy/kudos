export class ContainerInInspection {
  ciiNo: string = '';
  inspectedDate: string = '';
  inspectedTime: string = '';
  inspector: string = '';
  containerNo: string = '';
  shippingLines: number = 0; // from lookup
  sizeType: number = 0; // from lookup
  class: number = 0; // from lookup
  manufactureDate: string = '';
  shipperName: string = '';
  plateNumber: string = '';
  notes: string = '';
  boxCondition: number = 0; // from lookup
  emptyLoaded: number = 0; // from lookup
  yardLocation: number = 0; // from lookup
  cleanliness: number = 0; // from lookup
  component: string = '';
  damage: string = '';
  repair: string = '';
  location: string = '';
  width: string = '';
  quantity: number = 0;
  description: string = '';
  remarks: string = '';
}

export class ContainerOutInspection {
  ciiNo: string = '';
  inspectedDate: string = '';
  inspectedTime: string = '';
  inspector: string = '';
  containerNo: string = '';
  shippingLines: number = 0; // from lookup
  sizeType: number = 0; // from lookup
  class: number = 0; // from lookup
  manufactureDate: string = '';
  emptyLoaded: string = '';
  booking: string = '';
  shipperName: string = '';
  plateNumber: string = '';
  sealNumber: string = '';
  remarks: string = '';
}
