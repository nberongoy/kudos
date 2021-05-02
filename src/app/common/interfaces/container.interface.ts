export interface ContainerInInspectionInterface {
  ciiNo?: string;
  inspectedDate: any;
  inspectedTime: any;
  inspector: string;
  containerNo: string;
  shippingLines: number | null; // from lookup
  sizeType: number | null; // from lookup
  class: number | null; // from lookup
  manufactureDate: string;
  shipperName: string;
  plateNumber: string;
  notes: string;
  boxCondition: number | null; // from lookup
  emptyLoaded: number | null; // from lookup
  yardLocation: number | null; // from lookup
  cleanliness: number | null; // from lookup
  remarks: string;
  damageDetails?: any[];
  isCheckIn: boolean;
}

export interface ContainerOutInspectionInterface {
  ciiNo?: string;
  inspectedDate: string;
  inspectedTime: string;
  inspector: string;
  containerNo: string;
  shippingLines: number | null; // from lookup
  sizeType: number | null; // from lookup
  class: number | null; // from lookup
  manufactureDate: string;
  emptyLoaded: string;
  booking: string;
  shipperName: string;
  plateNumber: string;
  sealNumber: string;
  remarks: string;
}
