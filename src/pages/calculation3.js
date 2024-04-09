import {
  addDayFuel,
  setStartEndDayFuel,
  setStartEndDayMileage,
} from './calculateDayFuel.js';

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

const getPeriods = (arr) => {
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
  return tempRes;
};

// allFuel - все полученное топливо за период + остаток топлива restFuel
// и посчитаем сколько км можно проехать на этом топливе allDistance

class TempRestFuel {
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

const filledPeriodsByDistance = (arrMain, restFuel, tempRestFuel) => {
  let newTransformArray = [...arrMain];
  const arr = [...arrMain];
  //const tempRestFuel = new TempRestFuel();
  let nextRestFuel;
  let allFuel = 0;
  let allConstantDistance = 0;
  let dayWithoutDistance = 0;
  for (let i = 0; i < arr.length; i++) {
    const { fuel, distance } = arr[i];
    if (distance === 0) {
      dayWithoutDistance += 1;
    } else {
      allConstantDistance += distance;
    }
    allFuel += fuel;
  }
  // console.log('allFuel', allFuel);
  // console.log('allConstantDistance', allConstantDistance);
  // console.log('dayWithoutDistance', dayWithoutDistance);

  const allDistanceWithAllFuel = ((restFuel + allFuel) * 100) / 7.2;
  if (allDistanceWithAllFuel < allConstantDistance) {
    // console.log('топлива не хватает для введенного километража');
    // return;
    throw new Error('топлива не хватает для введенного километража');
  }
  console.log('allFuel+restFuel', allFuel + restFuel);
  // console.log('allDistanceWithAllFuel', allDistanceWithAllFuel);

  const distanceForOtherDay = allDistanceWithAllFuel - allConstantDistance;
  // console.log('distanceForOtherDay', distanceForOtherDay);

  const distanceForEachDay = distanceForOtherDay / dayWithoutDistance;
  // console.log('distanceForEachDay', distanceForEachDay);
  // console.log('arrMain', arrMain);

  if (distanceForEachDay <= 60) {
    nextRestFuel = 0;
    for (let i = 0; i < newTransformArray.length; i++) {
      if (newTransformArray[i].distance === 0) {
        newTransformArray[i].distance = distanceForEachDay;
      }
    }
  } else {
    const fuelForDistance =
      ((allConstantDistance + 60 * dayWithoutDistance) * 7.2) / 100;

    nextRestFuel = allFuel + restFuel - fuelForDistance;
    console.log('1', nextRestFuel);
    for (let i = 0; i < newTransformArray.length; i++) {
      if (newTransformArray[i].distance === 0) {
        newTransformArray[i].distance = 60;
      }
    }

    //tempRestFuel.set(nextRestFuel);
  }
  return {
    filledArray: arr,
    nextRestFuel,
  };
};
//console.log('result', func1(transformArr[2], 0));

const setDistance = (arr, restFuel) => {
  const tempRestFuel = new TempRestFuel();
  //const restFuel = initialRestFuel; // Initial restFuel value
  let results = [];

  for (let i = 0; i < arr.length; i++) {
    console.log('nextRestFuel', tempRestFuel.get());
    const initialRestFuel = tempRestFuel.get();
    console.log('restFuel', restFuel);
    const result = filledPeriodsByDistance(
      arr[i],
      i === 0 ? restFuel : initialRestFuel,
    );
    console.log('result', result);
    results.push(result.filledArray);
    tempRestFuel.set(result.nextRestFuel);
  }

  return [].concat(...results);
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
  arr,
  initialRestFuel,
  initialMileage,
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

console.log(addDistanceFuelMileageData(arrOfObj, 15, 0));

// передаем результат предыдущей фукции: addDistanceFuelMileageData
export const getFullDistanceFuel = (arr) => {
  const fullDistance = arr.reduce((acc, day) => acc + day.distance, 0);
  const fullGetFuel = arr.reduce((acc, day) => acc + day.fuel, 0);
  const fullFactFuel = arr.reduce((acc, day) => acc + day.dayFuel, 0);

  return {
    fullDistance,
    fullGetFuel,
    fullFactFuel,
  };
};
