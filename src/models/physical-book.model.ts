export interface IPhysicalBookRaw {
  pb_id: number;
  pb_name: string;
  pb_publishingdate: Date;
}

export interface IGroupedPhysicalBookRaw {
  pb_name: string;
  pb_publishingdate: Date;
  pb_count: number;
}

export interface IPhysicalBook {
  id: number;
  name: string;
  publishingDate: string;
}

export interface IGroupedPhysicalBook extends IPhysicalBook {
  count: number;
}
