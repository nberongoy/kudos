export const lookup = {
  sizeType: (sizeTypeId?: any): any => {
    const dataSizeType = [
      {
        id: 1,
        description: '40 RF - 40 FT. Standard Reffer',
      },
      {
        id: 2,
        description: '45 RI - 40 FT. Reffer',
      },
      {
        id: 3,
        description: '45 UI - 40 FT. Open Top',
      },
      {
        id: 4,
        description: '45 P3 - 40 FT. Flat Track',
      },
      {
        id: 5,
        description: '45 HC - 45 FT. High Cube Dry',
      },
    ];

    return sizeTypeId ? dataSizeType.find((size: any) => size.id === sizeTypeId)?.description : dataSizeType;
  },
  class: (classId?: any): any => {
    const dataClass = [
      {
        id: 1,
        description: 'Class A',
      },
      {
        id: 2,
        description: 'Class B',
      },
      {
        id: 3,
        description: 'Class C',
      },
    ];

    return classId ? dataClass.find((classVal: any) => classVal.id === classId)?.description : dataClass;
  },
  boxCondtion: (boxCondtionId?: any): any => {
    const dataBoxCondtion = [
      {
        id: 1,
        description: 'Good',
      },
      {
        id: 2,
        description: 'Minor Damage',
      },
      {
        id: 3,
        description: 'Major Damage',
      },
    ];

    return boxCondtionId ? dataBoxCondtion.find((dataBox: any) => dataBox.id === boxCondtionId)?.description : dataBoxCondtion;
  },
  emptyLoaded: (emptyLoadedId?: any): any => {
    const dataEmptyLoaded = [
      {
        id: 1,
        description: 'Empty',
      },
      {
        id: 2,
        description: 'Loaded',
      },
    ];

    return emptyLoadedId ? dataEmptyLoaded.find((item: any) => item.id === emptyLoadedId)?.description : dataEmptyLoaded;
  },
  cleanliness: (cleanlinessId?: any): any => {
    const dataCleanliness = [
      {
        id: 1,
        description: 'Clean',
      },
      {
        id: 2,
        description: 'For Water Wash',
      },
      {
        id: 3,
        description: 'For Checking',
      },
    ];

    return cleanlinessId ? dataCleanliness.find((clean: any) => clean.id === cleanlinessId)?.description : dataCleanliness;
  },
  yardLocation: (yardLocationId?: any): any => {
    const dataYardLocation = [
      { id: 1, description: 'CY1' },
      { id: 2, description: 'CY2' },
      { id: 3, description: 'CY3' },
      { id: 4, description: 'CY4' },
    ];

    return yardLocationId ? dataYardLocation.find((yard: any) => yard.id === yardLocationId)?.description : dataYardLocation;
  },
  shippingLines: (shippingLineId?: any): any => {
    const dataShippingLines = [
      { id: 1, description: '2GO' },
      { id: 2, description: '3 FOR 8 TRADING' },
      { id: 3, description: 'A-1 CONCRETE POLES, INC.' },
      { id: 4, description: 'ABOITIZ ONE' },
      { id: 5, description: 'COCA COLA' },
      { id: 6, description: 'COMMONWEALTH INSURANCE' },
      { id: 7, description: 'CXPORT FORWARDER' },
      { id: 8, description: 'DAVAO OIL MILL' },
    ];

    return shippingLineId ? dataShippingLines.find((shipping: any) => shipping.id === shippingLineId)?.description : dataShippingLines;
  },
};
