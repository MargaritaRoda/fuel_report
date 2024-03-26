const objOfArrFuel = [
  { fuel: '0', destination: 'Minsk', distance: '' },
  { fuel: '0', destination: 'Borisov', distance: '200' },
  { fuel: '12', destination: 'Zodino', distance: '100' },
  { fuel: '0', destination: 'Minsk', distance: '' },
  { fuel: '0', destination: 'Minsk', distance: '' },
  { fuel: '25', destination: 'Minsk', distance: '' },
  { fuel: '0', destination: 'gomel', distance: '200' },
  { fuel: '0', destination: 'Minsk', distance: '' },
  { fuel: '10', destination: 'Minsk', distance: '' },
  { fuel: '0', destination: 'Minsk', distance: '' },
];
const arr = [{ load: 5 }, { load: 8 }];
const firstFuel = 19;
const fuelconsumption = 7.2;

// высчитаем сколько понадобиться топлива для записанных пробегов
const fuelConsumptionConst = (200 * fuelconsumption) / 100;
const abc = 0.6; // необходимый запас в баке
console.log(fuelConsumptionConst);
// сколько останется топлива на остальные дни
const otherDayFuel =
  firstFuel - fuelConsumptionConst + arr[0].load + arr[1].load - abc;
console.log(otherDayFuel);

const a = (otherDayFuel * 100) / fuelconsumption; // колько километров в сумме на остальные дни

console.log(a);
// разделим на количество дней. получим среднее пробег в день
const b = Math.floor(a / 2);
console.log(b);

// нужно отрезать массив на отрезки  по заправке


const obj1 = {
  '1a': '3',
  '2a': '10',
  '3a': '5',
  '1b': 'minsk',
  '2b': 'borisov',
  '3b': 'hrodna',
  '11a': '3',
  '11b': 'brest',
  '22a': '3',
  '22b': 'gomel',
};
const arr1 = [1, 2, 3, 11, 22];
const autoCompleteObjKey = (obj, fuel, distance, baseCity) => {
  for (let key in obj) {
    if (key.includes(fuel)) {
      if (obj[key] === '') {
        obj[key] = '0';
      }
    }
    if (key.includes(distance)) {
      if (obj[key] === '') {
        obj[key] = baseCity;
      }
    }
  }
  return obj;
};

// console.log(autoCompleteObjKey(obj1, 'a', 'b', 'Minsk'))

const divideObj = (obj, arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    const currentObj = {};
    let currentKey = arr[i];
    for (let key in obj) {
      const changedKey = parseInt(key);
      if (changedKey === currentKey) {
        currentObj[key] = obj[key];
      }
    }
    res.push(currentObj);
  }
  return res;
};

// console.log(divideObj(obj1, arr1));

const arrOfObj = [
  { ['1 fuel']: '0', ['1 destination']: 'Minsk', ['1 distance']: '' },
  { ['4 fuel']: '0', ['4 destination']: 'Borisov', ['4 distance']: '200' },
  { ['5 fuel']: '12', ['5 destination']: 'Zodino', ['5 distance']: '100' },
  { ['12 fuel']: '0', ['12 destination']: 'Minsk', ['12 distance']: '' },
  { ['13 fuel']: '0', ['13 destination']: 'Minsk', ['13 distance']: '' },
  { ['14 fuel']: '10', ['14 destination']: 'Minsk', ['14 distance']: '' },
  { ['15 fuel']: '0', ['15 destination']: 'gomel', ['15 distance']: '200' },
  { ['18 fuel']: '0', ['18 destination']: 'Minsk', ['18 distance']: '' },
  { ['19 fuel']: '10', ['19 destination']: 'Minsk', ['19 distance']: '' },
  { ['20 fuel']: '0', ['20 destination']: 'Minsk', ['20 distance']: '' },
];

const arrDates = [1, 4, 5, 12, 13, '', 14, 15, 18, 19, 20];

function removeNumbersFromKeys(obj) {
  const newObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = key.replace(/\d/g, '').slice(1); // Remove all digits from the key
      newObj[newKey] = obj[key];
    }
  }

  return newObj;
}

const cutNumberInObjKeys = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const modifiedObj = removeNumbersFromKeys(arr[i]);
    newArr.push(modifiedObj);
  }

  return newArr;
};

// Example usage:
const originalObject = {
  key1: 'value1',
  key2: 'value2',
  key3_with_123: 'value3',
  key4_with_456: 'value4',
};
// const modifiedObject = removeNumbersFromKeys(originalObject);
//
// console.log('Modified Object:', modifiedObject);
console.log(cutNumberInObjKeys(arrOfObj));
const modObj = cutNumberInObjKeys(arrOfObj);

let stateRestFuel = {
  restFuel: 17,
};

const autocompleteDistance = (arr) => {
  // let restFuel = 18; // переменная, полученная из state

//  let restFuel = stateRestFuel.restFuel;

  let res = [];
  let currArr = [];
  for (let i = 0; i < arr.length; i++) {
    let restFuel = stateRestFuel.restFuel;
    if (arr[i].fuel === '0') {
      currArr.push(arr[i]);
    } else {
      //добавить условие  последний отрезок  если последняя заправка была нев последний день

      const filledPart = autoCompleteFuel(currArr, restFuel)[0];
      res.push(filledPart);

      stateRestFuel.restFuel = autoCompleteFuel(currArr, restFuel)[1];
      currArr = [];
      currArr.push(arr[i]);
    }
  }
  return res;
};

console.log('autocompleteDistance', autocompleteDistance(modObj));

function autoCompleteFuel(currArr, restFuel) {
  console.log('restFuel current', restFuel)
  let newRestFuel;
  let resultDistance = 0; // значение поля distance, для незаполненных полей
  const newCurrArr = [...currArr];
  let numDay = 0; // количество дней, где не проставлен пробег
  let allFuel = restFuel-1; // все топливо на период (количество дней) 1 литр оставляем в запасе, потому что в баке не может быть 0
  let constantDistance = 0; // пробег, который внес пользователь, константный
  for (let j = 0; j < currArr.length; j++) {
    allFuel += parseFloat(currArr[j].fuel); // полное количество топлива на отрезок до следующей заправк

    if (currArr[j].distance !== '') {
      numDay = currArr.length -1;
      constantDistance += currArr[j].distance * 1; // весь пробег, который внес пользователь на отрезке между заправками
    }
  }

  // количесвто топлива, после расхода на обязательную (внесенную пользователем) дистанцию. с запасом 1 л., чтобы не было пустого бака
  // allFuel - (constantDistance*7.2/100) - 1

  //сколько км можно проехать на остатке топлива
  // (allFuel - (constantDistance*7.2/100) - 1)*100/7.2

  // currArr.length это количество дней до дня заправки
  // сколько в день можно проехать если в сумме столько км осталось. вот этой переменной заполняем поле distance, если
  //значение не больше 60. если больше 60, то пишем 60
  resultDistance = Math.floor(
    ((allFuel - (constantDistance * 7.2) / 100) * 100) /
      7.2 / numDay,
  );
  // если пробег в день больше 60, нужно обрезать км и пенести остаток топлива в остаток топлива новое значение
  // !!!!!!!!!! ((100* (allFuel - (constantDistance*7.2/100) - 1)/7.2) - (currArr.length -numDay)*60))*7.2/100
  // newRestFuel =
  //     allFuel -
  //     ((constantDistance * 7.2) / 100 + 1) -
  //     (currArr.length - numDay) * 60 * 7.2 / 100;

  if (resultDistance > 60) {
    resultDistance = 60;
    newRestFuel =
      allFuel +1 - (numDay*60 + constantDistance)*7.2/100
  } else {
    newRestFuel = 1;
  }



  for (let k = 0; k < newCurrArr.length; k++) {
    if (newCurrArr[k].distance === '') {
      newCurrArr[k].distance = resultDistance;
    }
    if (newCurrArr[k].fuel === '0') { // на данном этапе, заполнять топливо заполняется для расчетов
      newCurrArr[k].fuel = (newCurrArr[k].distance*7.2/100).toFixed(1);
    }
  }

  return [newCurrArr, newRestFuel];
}
