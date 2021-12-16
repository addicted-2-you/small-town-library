export const getLocaleStringDate = (localeString: string) => localeString.split(',')[0];

export const transformDateToMysqlDateString = (date: Date) =>
  `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
