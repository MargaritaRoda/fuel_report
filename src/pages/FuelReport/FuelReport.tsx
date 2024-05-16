import React, { useMemo } from 'react';
import { useStyles } from './FuelReportStyles';
import { useSelector } from 'react-redux';
import { selectYear } from '../../store/selectors/year.selector';
import { selectAuto } from '../../store/selectors/auto.selector';
import { selectUser } from '../../store/selectors/user.selector';
import { selectLicense } from '../../store/selectors/license.selector';
import { selectorFuelTripData } from '../../store/selectors/fuelTripData.selector';
import { selectorFuelReserve } from '../../store/selectors/fuelReserve.selector';
import { selectorMileage } from '../../store/selectors/mileage.selector';
import {
  addDistanceFuelMileageData,
  getFullDistanceFuel,
} from '../calculation3';
import { daysSelectorForRender } from '../../store/selectors/days.selector';
import {
  selectMonthForCalculation,
  selectMonthForRender,
} from '../../store/selectors/month.selector';
import { daysInMonth } from '../../components/Calendar/constants';
import { getMonthNameInGenitive, nameMonth } from './constantMonth';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

interface DataForRender {
  fuel: number;
  startDestination: string;
  destination: string;
  distance: number;
  dayFuel: number;
  startDayFuel: number;
  endDayFuel: number;
  startDayMileage: number;
  endDayMileage: number;
}

export const FuelReport = () => {
  const month = useSelector(selectMonthForRender);
  const numberOfMonth = useSelector(selectMonthForCalculation);
  const year = useSelector(selectYear);
  const auto = useSelector(selectAuto);
  const driver = useSelector(selectUser);
  const license = useSelector(selectLicense);
  const initialFuelTripData = useSelector(selectorFuelTripData);
  const initialRestFuel = useSelector(selectorFuelReserve);
  const initialMileage = useSelector(selectorMileage);
  const dates = useSelector(daysSelectorForRender);
  const datesForRender = dates.map((day) => `${day}.${month.numberMonth}`);
  const navigate = useNavigate();
  const monthInGenitive = getMonthNameInGenitive(
    nameMonth,
    numberOfMonth.nameMonth,
  );

  const handleReturnPreviousStep = () => {
    navigate('/FuelTripData');
  };
  const handlePrint = () => {
    window.print();
  };
  const classes = useStyles();

  const fuelDistanceDataForRender: DataForRender[] = useMemo(
    () =>
      addDistanceFuelMileageData(
        [...initialFuelTripData],
        initialRestFuel,
        initialMileage,
      ),
    [initialFuelTripData, initialRestFuel, initialMileage],
  );
  const footerDataTable = getFullDistanceFuel(fuelDistanceDataForRender);

  return (
    <>
      <div className={classes.buttonWrapper}>
        <Button
          variant="contained"
          className={classes.MuiButtonBaseRootMuiButtonRootReturnBtn}
          onClick={handleReturnPreviousStep}
        >
          Нужно поправить
        </Button>
        <Button
          variant="contained"
          className={classes.MuiButtonBaseRootMuiButtonRootReturnBtn}
          onClick={handlePrint}
        >
          Печатаем!
        </Button>
      </div>
      <div className={classes.root}>
        <h1 className={classes.rootTitle}>
          {`Путевой лист легкового служебного автомобиля №  за период с 1 по ${daysInMonth(
            year,
            numberOfMonth.numberMonth,
          )} ${monthInGenitive.monthNameInGenitive}
          ${year} г.`}
        </h1>
        <header className={classes.rootHeader}>
          <div className={classes.headerStamp}>
            <p>штамп(печать) </p>
          </div>

          <p className={classes.headerTitle}>наименование перевозчика</p>
          <p
            className={classes.headerAuto}
          >{`Автомобиль ${auto} (марка, регистрационный знак)`}</p>
          <p
            className={classes.headerDriver}
          >{`Водитель ${driver.username}`}</p>
          <p
            className={classes.headerLicense}
          >{`Водительское удостоверение ${license}`}</p>
        </header>
        <table className={classes.table}>
          <thead className={classes.tableRows}>
            <tr className={classes.tableRows1}>
              <th className={classes.row} rowSpan={3}>
                Дата (число, месяц)
              </th>
              <th colSpan={3}>Время (ч, мин)</th>
              <th colSpan={2}>Показания спидометра</th>
              <th className={classes.row} rowSpan={3}>
                Пробег, км
              </th>
              <th colSpan={7}>Движение топлива</th>
              <th colSpan={2}>Автомобиль технически исправен</th>
              <th colSpan={2}>При возвращении автомобиль</th>
              <th className={classes.row} rowSpan={3}>
                Водитель по состоянию здоровья к управлению допущен (подпись
                (штамп) уполномо-ченного лица)
              </th>
            </tr>
            <tr className={classes.tableRows1}>
              <th className={classes.row} rowSpan={2}>
                выезда
              </th>
              <th className={classes.row} rowSpan={2}>
                возвращения
              </th>
              <th className={classes.row} rowSpan={2}>
                в наряде
              </th>
              <th className={classes.row} rowSpan={2}>
                при выезде
              </th>
              <th className={classes.row} rowSpan={2}>
                при возвращении
              </th>
              <th colSpan={2}>остаток топлива, л</th>
              <th colSpan={2}>заправлено топлива</th>
              <th colSpan={3}>расход топлива, л</th>
              <th className={classes.row} rowSpan={2}>
                выезд разрешен (подпись (штамп) уполномоченного лица)
              </th>
              <th className={classes.row} rowSpan={2}>
                принял (подпись водителя)
              </th>
              <th className={classes.row} rowSpan={2}>
                сдал (подпись водителя)
              </th>
              <th className={classes.row} rowSpan={2}>
                принял (подпись (штамп) уполномоченного лица)
              </th>
            </tr>
            <tr className={classes.tableRows3}>
              <th className={classes.row}>при выезде</th>
              <th className={classes.row}>при возвращении</th>
              <th className={classes.row}>марка и код топлива</th>
              <th className={classes.row}>количество, л</th>
              <th className={classes.row}>по норме</th>
              <th className={classes.row}>фактически</th>
              <th className={classes.row}>экономия (+), перерасход (-)</th>
            </tr>
            <tr className={classes.tableRows2}>
              {Array(19)
                .fill(1)
                .map((item, index) => (
                  <th key={index}>{index + item}</th>
                ))}
            </tr>
          </thead>
          <tbody className={classes.tableBodyRows}>
            <>
              {fuelDistanceDataForRender.map((item, index) => (
                <tr key={index}>
                  <td>{datesForRender[index]}</td>
                  <td>9:00</td>
                  <td>18:00</td>
                  <td>8</td>
                  <td>{Math.round(item.startDayMileage)}</td>
                  <td>{Math.round(item.endDayMileage)}</td>
                  <td>{Math.round(item.distance)}</td>
                  <td>{item.startDayFuel.toFixed(2)}</td>
                  <td>{item.endDayFuel.toFixed(2)}</td>
                  <>{item.fuel ? <td>АИ-95</td> : <td></td>}</>
                  <>{item.fuel ? <td>{item.fuel}</td> : <td></td>}</>
                  <td>{item.dayFuel.toFixed(2)}</td>
                  <td>{item.dayFuel.toFixed(2)}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
            </>
            <tr>
              {Array(19)
                .fill('1')
                .map((item, index) => (
                  <td key={index} className={classes.transparentItem}>
                    {item}
                  </td>
                ))}
            </tr>
            <tr>
              <td colSpan={6}>{`Итого за период 01 по ${daysInMonth(
                year,
                numberOfMonth.numberMonth,
              )}  ${monthInGenitive.monthNameInGenitive}  ${year} г. `}</td>
              <td>{Math.floor(footerDataTable.fullDistance)}</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{footerDataTable.fullGetFuel}</td>
              <td>{Math.floor(footerDataTable.fullFactFuel)}</td>
              <td>{Math.floor(footerDataTable.fullFactFuel)}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <main></main>
      </div>
      <div className={classes.root}>
        <h1 className={classes.rootTitle}>Выполнение задания</h1>
        <table className={classes.table}>
          <thead className={classes.tableRows}>
            <tr className={classes.tableRows1}>
              <th rowSpan={2}>Дата (число, месяц)</th>
              <th rowSpan={2}>Номер поездки</th>
              <th colSpan={2}>Маршрут следования</th>
              <th rowSpan={2}>Пробег, км</th>
            </tr>
            <tr className={classes.tableRows1}>
              <th>Откуда</th>
              <th>Куда</th>
            </tr>
            <tr className={classes.tableRows1}>
              {Array(4)
                .fill(20)
                .map((item, index) => (
                  <th key={index}>{item + index}</th>
                ))}
            </tr>
          </thead>
          <tbody className={classes.tableBodyRows}>
            {
              <>
                {fuelDistanceDataForRender.map((item, index) => (
                  <tr key={index}>
                    <td>{datesForRender[index]}</td>
                    <td>1</td>
                    <td>{item.startDestination}</td>
                    <td>{item.destination}</td>
                    <td>{Math.round(item.distance)}</td>
                  </tr>
                ))}
              </>
            }
          </tbody>
        </table>
      </div>
    </>
  );
};
