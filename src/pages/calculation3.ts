import {
  addDayFuel,
  setStartEndDayFuel,
  setStartEndDayMileage,
} from './calculateDayFuel';
import {
  FormDataItem,
  FormDataItemDayFuel,
} from '../store/slicers/fuelTripTypes';

const transformArr = [
  [
    { fuel: 0, destination: 'Minsk', distance: 0 },
    { fuel: 0, destination: 'Borisov', distance: 200 },
  ],
  [
    { fuel: 12, destination: 'Zodino', distance: 100 },
    { fuel: 0, destination: 'Minsk', distance: 0 },
    { fuel: 0, destination: 'Minsk', distance: 0 },
  ],
  [
    { fuel: 16, destination: 'Minsk', distance: 0 },
    { fuel: 0, destination: 'gomel', distance: 200 },
    { fuel: 0, destination: 'Minsk', distance: 0 },
  ],
  [
    { fuel: 10, destination: 'Minsk', distance: 0 },
    { fuel: 0, destination: 'Minsk', distance: 0 },
  ],
];

const arrOfObj = [
  { fuel: 0, destination: 'Minsk', distance: 0 },
  { fuel: 0, destination: 'Borisov', distance: 200 }, //200
  { fuel: 12, destination: 'Zodino', distance: 100 }, //100
  { fuel: 0, destination: 'Minsk', distance: 0 },
  { fuel: 0, destination: 'Minsk', distance: 0 },
  { fuel: 25, destination: 'Minsk', distance: 0 },
  { fuel: 0, destination: 'gomel', distance: 200 }, //200
  { fuel: 0, destination: 'Minsk', distance: 0 }, //25
  { fuel: 10, destination: 'Minsk', distance: 0 },
  { fuel: 0, destination: 'Minsk', distance: 0 },
];

interface filledPeriodsByDistanceResult {
  filledArray: FormDataItem[];
  nextRestFuel: number;
}
export class LittleFuelException extends Error {}

const getPeriods = (arr: FormDataItem[]) => {
  const tempRes = [];
  let currArr = [];
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
  return tempRes; // return FormDataItem[][]
};

// allFuel - все полученное топливо за период + остаток топлива restFuel
// и посчитаем сколько км можно проехать на этом топливе allDistance

class TempRestFuel {
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

const filledPeriodsByDistance = (arrMain: FormDataItem[], restFuel: number) => {
  const newTransformArray: FormDataItem[] = [...arrMain];
  const arr = [...arrMain];
  const finalArray = [];

  let nextRestFuel;
  let allFuel = 0;
  let allConstantDistance = 0;
  let dayWithoutDistance = 0; //обработай ситуацию, котгда остался 0. на 0 делить нельзя
  for (let i = 0; i < arr.length; i++) {
    const { fuel, distance } = arr[i];
    if (distance === 0) {
      dayWithoutDistance += 1;
    } else {
      allConstantDistance += distance;
    }
    if (fuel) {
      allFuel += fuel - 0.5;
    } else {
      allFuel += fuel;
    }
  }
  // console.log('allFuel', allFuel);
  // console.log('allConstantDistance', allConstantDistance);
  // console.log('dayWithoutDistance', dayWithoutDistance);

  const allDistanceWithAllFuel = ((restFuel + allFuel) * 100) / 7.2;
  if (allDistanceWithAllFuel < allConstantDistance) {
    throw new LittleFuelException(
      'Топлива не хватает для введенного километража',
    );
  }
  //console.log('allFuel+restFuel', allFuel + restFuel);
  if (allFuel + restFuel > 55) {
    throw new Error(
      'Кличество тплива превышает обьем бака. Уменьшите остаток топлива или увеличьте пробег во время командировки',
    );
  }
  //console.log('allDistanceWithAllFuel', allDistanceWithAllFuel);

  const distanceForOtherDay = allDistanceWithAllFuel - allConstantDistance;
  // console.log('distanceForOtherDay', distanceForOtherDay);
  let distanceForEachDay;
  if (dayWithoutDistance) {
    distanceForEachDay = distanceForOtherDay / dayWithoutDistance;
    // console.log('distanceForEachDay', distanceForEachDay);
    // console.log('arrMain', arrMain);
  } else {
    const fuelForDistance = (allConstantDistance * 7.2) / 100;
    nextRestFuel = allFuel + restFuel - fuelForDistance;
    for (let i = 0; i < newTransformArray.length; i++) {
      const finalObj: FormDataItem = {} as FormDataItem;
      finalObj.fuel = newTransformArray[i].fuel;
      finalObj.startDestination = newTransformArray[i].startDestination;
      finalObj.destination = newTransformArray[i].destination;
      finalObj.distance = newTransformArray[i].distance;
      finalArray.push(finalObj);
    }
    return {
      filledArray: finalArray, // return
      nextRestFuel,
    };
  }

  if (distanceForEachDay <= 60) {
    nextRestFuel = 0;
    for (let i = 0; i < newTransformArray.length; i++) {
      const finalObj = {} as FormDataItem;
      if (newTransformArray[i].distance === 0) {
        finalObj.fuel = newTransformArray[i].fuel;
        finalObj.startDestination = newTransformArray[i].startDestination;
        finalObj.destination = newTransformArray[i].destination;
        finalObj.distance = distanceForEachDay;
      } else {
        finalObj.fuel = newTransformArray[i].fuel;
        finalObj.startDestination = newTransformArray[i].startDestination;
        finalObj.destination = newTransformArray[i].destination;
        finalObj.distance = newTransformArray[i].distance;
      }

      finalArray.push(finalObj);
    }
  } else {
    const fuelForDistance =
      ((allConstantDistance + 60 * dayWithoutDistance) * 7.2) / 100;
    nextRestFuel = allFuel + restFuel - fuelForDistance;
    for (let i = 0; i < newTransformArray.length; i++) {
      const finalObj: FormDataItem = {} as FormDataItem;
      if (newTransformArray[i].distance === 0) {
        finalObj.fuel = newTransformArray[i].fuel;
        finalObj.startDestination = newTransformArray[i].startDestination;
        finalObj.destination = newTransformArray[i].destination;
        finalObj.distance = 60;
      } else {
        finalObj.fuel = newTransformArray[i].fuel;
        finalObj.startDestination = newTransformArray[i].startDestination;
        finalObj.destination = newTransformArray[i].destination;
        finalObj.distance = newTransformArray[i].distance;
      }

      finalArray.push(finalObj);
    }
  }
  return {
    filledArray: finalArray, // return filledPeriodsByDistanceResult
    nextRestFuel,
  };
};
//console.log('result', func1(transformArr[2], 0));

const setDistance = (arr: FormDataItem[][], restFuel: number) => {
  const tempRestFuel = new TempRestFuel();
  //const restFuel = initialRestFuel; // Initial restFuel value
  const results = [] as FormDataItem[][];

  for (let i = 0; i < arr.length; i++) {
    //console.log('nextRestFuel', tempRestFuel.get());
    const initialRestFuel = tempRestFuel.get();
    //console.log('restFuel', restFuel);
    const result: filledPeriodsByDistanceResult = filledPeriodsByDistance(
      arr[i],
      i === 0 ? restFuel - 0.5 : initialRestFuel,
    );
    // console.log('result', result);
    results.push(result.filledArray);
    tempRestFuel.set(result.nextRestFuel);
  }

  return ([] as FormDataItem[]).concat(...results);
};

//console.log(setDistance(transformArr, 18));

// const periods = getPeriods(arrOfObj);
// console.log('periods', periods);
//
// console.log('setDistance', setDistance(periods, 15));

//arr -исходный обьект из селектора
// initialRestFuel - исходный остаток топлива из селектора (не забудь сделать -1)
// initialMileage - исходный пробег из селектора
export const addDistanceFuelMileageData = (
  arr: FormDataItem[],
  initialRestFuel: number,
  initialMileage: number,
) => {
  const periods = getPeriods(arr);
  const addedDistance = setDistance(periods, initialRestFuel);

  const addedDistanceAndDayFuel = addDayFuel(addedDistance);
  const addedDistanceAndDayFuelStartEnd = setStartEndDayFuel(
    addedDistanceAndDayFuel,
    initialRestFuel,
  );
  return setStartEndDayMileage(addedDistanceAndDayFuelStartEnd, initialMileage);
};

//console.log(addDistanceFuelMileageData(arrOfObj, 15, 0));

// передаем результат предыдущей фукции: addDistanceFuelMileageData
export const getFullDistanceFuel = (arr: FormDataItemDayFuel[]) => {
  const fullDistance: number = arr.reduce((acc, day) => acc + day.distance, 0);
  const fullGetFuel: number = arr.reduce((acc, day) => acc + day.fuel, 0);
  const fullFactFuel: number = arr.reduce((acc, day) => acc + day.dayFuel, 0);

  return {
    fullDistance,
    fullGetFuel,
    fullFactFuel,
  };
};
