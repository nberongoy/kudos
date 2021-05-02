export class ContainerInInspection {
  inspectedDate: any = null;
  inspectedTime: any = null;
  inspector: string = '';
  containerNo: string = '';
  shippingLines: number | null = null; // from lookup
  sizeType: number | null = null; // from lookup
  class: number | null = null; // from lookup
  manufactureDate: string = '';
  shipperName: string = '';
  plateNumber: string = '';
  notes: string = '';
  boxCondition: number | null = null; // from lookup
  emptyLoaded: number | null = null; // from lookup
  yardLocation: number | null = null; // from lookup
  cleanliness: number | null = null; // from lookup
  remarks: string = '';
  isCheckIn: boolean = true;
}

export class ContainerOutInspection {
  ciiNo?: string = '';
  inspectedDate: string = '';
  inspectedTime: string = '';
  inspector: string = '';
  containerNo: string = '';
  shippingLines: number | null = null; // from lookup
  sizeType: number | null = null; // from lookup
  class: number | null = null; // from lookup
  manufactureDate: string = '';
  emptyLoaded: string = '';
  booking: string = '';
  shipperName: string = '';
  plateNumber: string = '';
  sealNumber: string = '';
  remarks: string = '';
}
