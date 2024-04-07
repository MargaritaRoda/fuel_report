const fuelFromState = [
  { fuel: 0, destination: 'Minsk', distance: 50 },
  { fuel: 0, destination: 'Borisov', distance: 200 },
  { fuel: 12, destination: 'Zodino', distance: 100 },
  { fuel: 0, destination: 'Minsk', distance: 33.33333333333333 },
  { fuel: 0, destination: 'Minsk', distance: 33.33333333333333 },
  { fuel: 16, destination: 'Minsk', distance: 11.111111111111114 },
  { fuel: 0, destination: 'gomel', distance: 200 },
  { fuel: 0, destination: 'Minsk', distance: 11.111111111111114 },
  { fuel: 10, destination: 'Minsk', distance: 60 },
  { fuel: 0, destination: 'Minsk', distance: 60 },
];

class TempRestFuelNextStep {
  constructor(defaultValue = 0) {
    this.nextRestFuel = defaultValue;
  }
  get() {
    return this.nextRestFuel;
  }
  set(temp) {
    this.nextRestFuel = temp;
  }
}
//нужно добавить ключ dayFuel
export const addDayFuel = (arr) => {
  return arr.map((day) => {
    day['dayFuel'] = (day.distance * 7.2) / 100;
    return day;
  });
};
const addedDayFuel = addDayFuel(fuelFromState);
//console.log(addedDayFuel);

//добавляем 2 поля топливо в начале и в конце дня
export const setStartEndDayFuel = (arr, restFuel) => {
  let copyArr = [...arr];
  const tempRestFuel = new TempRestFuelNextStep();
  let startDayFuel;
  let endDayFuel;
  for (let i = 0; i < copyArr.length; i++) {
    if (i === 0) {
      tempRestFuel.set(restFuel);
    }
    startDayFuel = tempRestFuel.get();
    copyArr[i]['startDayFuel'] = startDayFuel;
    endDayFuel = startDayFuel + copyArr[i].fuel - copyArr[i].dayFuel;
    copyArr[i]['endDayFuel'] = endDayFuel;
    tempRestFuel.set(endDayFuel);
  }
  return copyArr;
};
const addedStartEndDayFuel = setStartEndDayFuel(addedDayFuel, 19);
//console.log(addedStartEndDayFuel);

export const setStartEndDayMileage = (arr, startMileage) => {
  let copyArr = [...arr];
  const tempRestMileage = new TempRestFuelNextStep();
  let startDayMileage;
  let endDayMileage;
  for (let i = 0; i < copyArr.length; i++) {
    if (i === 0) {
      tempRestMileage.set(startMileage);
    }
    startDayMileage = tempRestMileage.get();
    copyArr[i]['startDayMileage'] = startDayMileage;
    endDayMileage = startDayMileage + copyArr[i].distance;
    copyArr[i]['endDayMileage'] = endDayMileage;
    tempRestMileage.set(endDayMileage);
  }
  return copyArr;
};

//console.log(setStartEndDayMileage(addedStartEndDayFuel, 0));
