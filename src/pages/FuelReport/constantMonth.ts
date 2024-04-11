interface MonthData {
  monthName: string;
  monthNumber: string;
  monthNameInGenitive: string;
}

export const nameMonth: MonthData[] = [
  {
    monthName: 'Январь',
    monthNumber: '0',
    monthNameInGenitive: 'января',
  },
  {
    monthName: 'Февраль',
    monthNumber: '1',
    monthNameInGenitive: 'февраля',
  },
  { monthName: 'Март', monthNumber: '2', monthNameInGenitive: 'марта' },
  {
    monthName: 'Апрель',
    monthNumber: '3',
    monthNameInGenitive: 'апреля',
  },
  { monthName: 'Май', monthNumber: '4', monthNameInGenitive: 'мая' },
  { monthName: 'Июнь', monthNumber: '5', monthNameInGenitive: 'июня' },
  { monthName: 'Июль', monthNumber: '6', monthNameInGenitive: 'июля' },
  {
    monthName: 'Август',
    monthNumber: '7',
    monthNameInGenitive: 'августа',
  },
  {
    monthName: 'Сентябрь',
    monthNumber: '8',
    monthNameInGenitive: 'сентября',
  },
  {
    monthName: 'Октябрь',
    monthNumber: '9',
    monthNameInGenitive: 'октября',
  },
  {
    monthName: 'Ноябрь',
    monthNumber: '10',
    monthNameInGenitive: 'ноября',
  },
  {
    monthName: 'Декабрь',
    monthNumber: '11',
    monthNameInGenitive: 'декабря',
  },
];
export const getMonthNameInGenitive = (
  arr: MonthData[],
  monthName: string,
): MonthData => {
  const foundMonth = arr.find((i) => i.monthName === monthName);
  return (
    foundMonth || { monthName: '', monthNumber: '', monthNameInGenitive: '' }
  );
};
