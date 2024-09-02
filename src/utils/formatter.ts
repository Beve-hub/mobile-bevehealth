let DECIMAL_SEPARATOR = '.';
let GROUP_SEPARATOR = ',';

export const formatNumberWithCommas = (numberValue: number): string => {
  return new Intl.NumberFormat('en-US').format(numberValue);
};

export const numberWithCommas = (x: string) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  // return x.replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
};

export const formatNumber = (valString: string, mode = true): string => {
  if (!valString) {
    return '';
  }

  let val = valString.toString();
  const parts = unFormatNumber(val).split(DECIMAL_SEPARATOR);

  const formattedNumber =
    parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, GROUP_SEPARATOR) +
    (parts[1] ? DECIMAL_SEPARATOR + parts[1] : '');

  return formattedNumber;
};

// export const formatNumber = (valString: string, mode = true): string => {
//   if (!valString) {
//     return '';
//   }

//   let val = valString.toString();
//   const parts = unFormatNumber(val).split(DECIMAL_SEPARATOR);

//   const formattedNumber =
//     parts[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, GROUP_SEPARATOR) +
//     (!parts[1] ? '' : DECIMAL_SEPARATOR + parts[1]);

//   return formattedNumber;
// };

// export const formatNumber = (valString: string, mode = true) => {
//   // return num.replace(/\B(?=(?:\d{3})+(?!\d))/g, ',')
//   if (!valString) {
//     return '';
//   }

//   if (mode) {
//     let val = valString.toString();
//     const parts = unFormatNumber(val).split(DECIMAL_SEPARATOR);

//     var res =
//       parts[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, GROUP_SEPARATOR) +
//       (!parts[1] ? '' : DECIMAL_SEPARATOR + parts[1]);

//     return res;
//   } else {
//     let val = valString.toString();

//     const parts = unFormatNumber(val).split(DECIMAL_SEPARATOR);

//     var res =
//       parts[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, GROUP_SEPARATOR) +
//       (!parts[1] ? '' : DECIMAL_SEPARATOR + parts[1]);

//     return res;
//   }
// };

export const unFormatNumber = (val: string) => {
  if (!val) {
    return '';
  }
  val = val.replace(/^0+/, '');

  if (GROUP_SEPARATOR === ',') {
    return val.replace(/,/g, '');
  } else {
    return val.replace(/\./g, '');
  }
};

export const formatDate = (rawDate: any): string => {
  const date = new Date(rawDate);

  let year: number = date.getFullYear();
  let month: number | string = date.getMonth() + 1;
  let day: number | string = date.getDate();

  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;

  return `${year}/${month}/${day}`;
};