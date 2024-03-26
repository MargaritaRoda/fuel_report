const arrOfObj = [
  { fuel: '0', destination: 'Minsk', distance: '' },
  { fuel: '0', destination: 'Borisov', distance: '' }, //200
  { fuel: '12', destination: 'Zodino', distance: '' },//100
  { fuel: '0', destination: 'Minsk', distance: '' },
  { fuel: '0', destination: 'Minsk', distance: '' },
  { fuel: '25', destination: 'Minsk', distance: '' },
  { fuel: '0', destination: 'gomel', distance: '' },//200
  { fuel: '0', destination: 'Minsk', distance: '' },//25
  { fuel: '10', destination: 'Minsk', distance: '' },
  { fuel: '0', destination: 'Minsk', distance: '' },
];

const getPeriods = (arr) => {
  let tempRes = [];
  let currArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].fuel === '0') {
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
const arrOfPeriods = getPeriods(arrOfObj);
console.log(arrOfPeriods);
 const restFuel = {restFuel: 18} // получено из state
const fillPeriods = (arr, restFuel) => {
  let newRestFuel = 0;
  let resultDistance = 0; // значение поля distance, для незаполненных полей
 // let numDay = 0; // количество дней, где не проставлен пробег
  let allFuel; // все топливо на период (количество дней) 1 литр оставляем в запасе, потому что в баке не может быть 0
  let constantDistance = 0; // пробег, который внес пользователь, константный

  for (let i = 0; i < arr.length; i++) {
    console.log('newRestFuel', newRestFuel)
    if (i === 0) {
      allFuel = restFuel.restFuel - 1;
    } else {
      allFuel = arr[i].reduce((sum, item) => {
        return sum + parseFloat(item.fuel) + (newRestFuel - 1)
      }, 0);
    }

    constantDistance = arr[i].reduce(( sum, item) => {
      if (item.distance !== '') {
        sum.distance += (item.distance * 1);
        sum.numDay += arr.length - 1;
      } else {
        sum.numDay = arr.length;
      }
      return sum;
    }, {distance: 0, numDay: 0});

    resultDistance = Math.floor(
      ((allFuel - (constantDistance.distance * 7.2) / 100) * 100) /
        7.2 /
        constantDistance.numDay,
    );

    if (resultDistance > 60) {
      resultDistance = 60;
      newRestFuel =
        allFuel + 1 - ((constantDistance.numDay * 60 + constantDistance.distance) * 7.2) / 100;
    } else {
       newRestFuel = 1;
    }

    arr[i].map((item) => {
      if (item.distance === '') {
        return item.distance = resultDistance*1;
      }
    })
  }
  return [arr, newRestFuel];
};
console.log(fillPeriods(arrOfPeriods, restFuel)[0]);