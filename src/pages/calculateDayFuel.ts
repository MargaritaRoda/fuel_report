import {
  FormDataItem,
  FormDataItemDayFuel,
  FormDataItemDayFuelStartEnd,
  FormDataItemDayFuelStartEndMileage,
} from '../store/slicers/fuelTripTypes';

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
  public nextRestFuel: number;
  constructor(defaultValue = 0) {
    this.nextRestFuel = defaultValue;
  }
  get() {
    return this.nextRestFuel;
  }
  set(temp: number) {
    this.nextRestFuel = temp;
  }
}
//нужно добавить ключ dayFuel
export const addDayFuel = (arr: FormDataItem[]): FormDataItemDayFuel[] => {
  return arr.map((day) => {
    const dayFuel = (day.distance * 7.2) / 100;
    return { ...day, dayFuel };
  });
};
//const addedDayFuel = addDayFuel(fuelFromState);
//console.log(addedDayFuel);

//добавляем 2 поля топливо в начале и в конце дня
export const setStartEndDayFuel = (
  arr: FormDataItemDayFuel[],
  restFuel: number,
): FormDataItemDayFuelStartEnd[] => {
  //const copyArr = [...arr];
  const copyArr: FormDataItemDayFuelStartEnd[] = arr.map((item) => ({
    ...item,
    startDayFuel: 0,
    endDayFuel: 0,
  }));
  const tempRestFuel = new TempRestFuelNextStep();
  let startDayFuel: number;
  let endDayFuel: number;
  for (let i = 0; i < copyArr.length; i++) {
    if (i === 0) {
      tempRestFuel.set(restFuel + 0.5);
    }
    startDayFuel = tempRestFuel.get();
    copyArr[i].startDayFuel = startDayFuel;
    if (copyArr[i].fuel) {
      endDayFuel = startDayFuel + copyArr[i].fuel - copyArr[i].dayFuel + 0.5;
    } else {
      endDayFuel = startDayFuel + copyArr[i].fuel - copyArr[i].dayFuel;
    }

    copyArr[i].endDayFuel = endDayFuel;
    tempRestFuel.set(endDayFuel);
  }
  return copyArr as FormDataItemDayFuelStartEnd[];
};
//const addedStartEndDayFuel = setStartEndDayFuel(addedDayFuel, 19);
//console.log(addedStartEndDayFuel);

export const setStartEndDayMileage = (
  arr: FormDataItemDayFuelStartEnd[],
  startMileage: number,
): FormDataItemDayFuelStartEndMileage[] => {
  const copyArr: FormDataItemDayFuelStartEndMileage[] = arr.map((item) => ({
    ...item,
    startDayMileage: 0,
    endDayMileage: 0,
  }));
  const tempRestMileage = new TempRestFuelNextStep();
  let startDayMileage: number;
  let endDayMileage: number;
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
  return copyArr as FormDataItemDayFuelStartEndMileage[];
};

//console.log(setStartEndDayMileage(addedStartEndDayFuel, 0));
