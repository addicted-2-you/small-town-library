import {
  IGroupedPhysicalBook,
  IGroupedPhysicalBookRaw,
  IPhysicalBook,
  IPhysicalBookRaw,
} from '~/models/physical-book.model';

// utils
import { transformDateToMysqlDateString } from './time.utils';

export const formatPhysicalBookRaw = (physicalBookRaw: IPhysicalBookRaw): IPhysicalBook => ({
  id: physicalBookRaw.pb_id,
  name: physicalBookRaw.pb_name,
  publishingDate: `${transformDateToMysqlDateString(physicalBookRaw.pb_publishingdate)}`,
});

export const formatGroupedPhysicalBookRaw = (
  groupedPhysicalBookRaw: IGroupedPhysicalBookRaw,
  id: number,
): IGroupedPhysicalBook => ({
  id,
  name: groupedPhysicalBookRaw.pb_name,
  publishingDate: `${transformDateToMysqlDateString(groupedPhysicalBookRaw.pb_publishingdate)}`,
  count: groupedPhysicalBookRaw.pb_count,
});
