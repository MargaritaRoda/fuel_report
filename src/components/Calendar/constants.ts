const days = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];
const selectedMonth = 10; // значение, полученное от ползователя
const selectedYear = 2023; // значение, полученное от ползователя

function daysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

// Date.prototype.daysInMonth = function (selectedYear: number, selectedMonth: number ): number {
//   return 32 - new Date(selectedYear, selectedMonth, 32).getDate();
// };

//console.log(Date.prototype.daysInMonth()); // количесвто дней в месяце, который выбрал пользователь = num

export const getDaysOfMonthUserSelected = (selectedYear: number, selectedMonth: number): number[] => {
  const num: number = daysInMonth(selectedYear, selectedMonth);
  const days: number[] = Array.from({ length: num }, (_, index) => index + 1);
  return days;
};

console.log(
  'массив для рисования календаря',
  getDaysOfMonthUserSelected(selectedYear, selectedMonth),
);

const getDayOfFirstDate = (year: number, monthIndex: number): number => {
  let date = new Date(year, monthIndex, 1);
  return date.getDay();
};

console.log(
  'день недели 1го числа месяца',
  getDayOfFirstDate(selectedYear, selectedMonth),
);

export const getStylesCalendar = (arr: number[], selectedYear: number, selectedMonth: number) => {
  let col = getDayOfFirstDate(selectedYear, selectedMonth) - 1;// приходит мз функции день недели 1 числа выбранного месяца 3-1
  if (col< 0) {
    col=6
  }
  let res = [];
  let row = 3;
  for (let i = 0; i < arr.length; i++) {
    col++;
    res.push({
      gridArea: `${row}/${col}`,
      placeSelf: 'center',
      padding: '5px',
      cursor: 'pointer',
      borderRadius: '50%',
      width: '36px', // Fixed width for circular area
      height: '36px', // Fixed height for circular area
      lineHeight: '29px',
      '&:hover': {
        color: '#9c27b0',
      },
    });
    if (col > 6) {
      col = 0;
      row++;
    }
  }
  return res;
};
console.log(getStylesCalendar(days, selectedYear, selectedMonth));
