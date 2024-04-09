import React from 'react';
import { useStyles } from './FuelReportStyles';
import { Container } from '../../components/Container';
import { useSelector } from 'react-redux';
import { selectYear } from '../../store/selectors/year.selector';
import { selectAuto } from '../../store/selectors/auto.selector';
import { selectUser } from '../../store/selectors/user.selector';
import { selectLicense } from '../../store/selectors/license.selector';
import classNames from 'classnames';

export const FuelReport = () => {
  const year = useSelector(selectYear);
  const auto = useSelector(selectAuto);
  const driver = useSelector(selectUser);
  const license = useSelector(selectLicense);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 className={classes.rootTitle}>
        {`Путевой лист легкового служебного автомобиля №  за период с 1 по 30 мая
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
        <p className={classes.headerDriver}>{`Водитель ${driver.username}`}</p>
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
          <tr className={classes.tableRows2}>
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
        </thead>
      </table>

      <main></main>
    </div>
  );
};
