import { FormDataItem } from '../store/slicers/fuelTripTypes';

const arrOfObj: FormDataItem[] = [
  { fuel: 0, startDestination: 'Minsk', destination: 'Minsk', distance: 0 },
  { fuel: 0, startDestination: 'Minsk', destination: 'Borisov', distance: 200 }, //200
  { fuel: 12, startDestination: 'Minsk', destination: 'Zodino', distance: 100 }, //100
  { fuel: 0, startDestination: 'Minsk', destination: 'Minsk', distance: 0 },
  { fuel: 0, startDestination: 'Minsk', destination: 'Minsk', distance: 0 },
  { fuel: 25, startDestination: 'Minsk', destination: 'Minsk', distance: 0 },
  { fuel: 0, startDestination: 'Minsk', destination: 'gomel', distance: 200 }, //200
  { fuel: 0, startDestination: 'Minsk', destination: 'Minsk', distance: 0 }, //25
  { fuel: 10, startDestination: 'Minsk', destination: 'Minsk', distance: 0 },
  { fuel: 0, startDestination: 'Minsk', destination: 'Minsk', distance: 0 },
];

const getPeriods = (arr: FormDataItem[]) => {
  const tempRes: FormDataItem[][] = [];
  let currArr: FormDataItem[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].fuel === 0) {
      currArr.push(arr[i]);
    } else {
      tempRes.push(currArr);
      currArr = [];
      currArr.push(arr[i]);
    }
    if (i === arr.length - 1) {
      tempRes.push(currArr);
    }
  }
  return tempRes;
};
const entity = getPeriods(arrOfObj);
// allFuel - все полученное топливо за период + остаток топлива restFuel
// и посчитаем сколько км можно проехать на этом топливе allDistance

const func1 = (arrMain: FormDataItem[], restFuel: number) => {
  const arr = [...arrMain];
  let nextRestFuel = 0;
  let allFuel = 0;
  let allConstantDistance = 0;
  let dayWithoutDistance = 0;
  for (let i = 0; i < arr.length; i++) {
    const { fuel, distance }: FormDataItem = arr[i];
    if (distance === 0) {
      dayWithoutDistance += 1;
    } else {
      allConstantDistance += distance;
    }
    allFuel += fuel;
  }
  const allDistanceWithAllFuel = ((restFuel + allFuel) * 100) / 7.2;
  const distanceForOtherDay = allDistanceWithAllFuel - allConstantDistance;
  const distanceForEachDay = distanceForOtherDay / dayWithoutDistance;
  if (distanceForEachDay <= 60) {
    for (let i = 0; i < arrMain.length; i++) {
      if (arrMain[i].distance === 0) {
        arrMain[i].distance = distanceForEachDay;
      }
    }
  } else {
    for (let i = 0; i < arrMain.length; i++) {
      if (arrMain[i].distance === 0) {
        arrMain[i].distance = 60;
      }
    }
    nextRestFuel =
      allFuel - ((60 * dayWithoutDistance + allConstantDistance) * 7.2) / 100;
  }
  return {
    filledArray: arr,
    nextRestFuel,
  };
};
