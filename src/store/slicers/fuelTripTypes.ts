export type FormDataObject = Record<
  string,
  {
    startDestination: string;
    destination: string;
    distance: string;
    fuel: string;
  }
>;
export interface FormDataItem {
  startDestination: string;
  destination: string;
  distance: number;
  fuel: number;
}
export interface FormDataItemDayFuel extends FormDataItem {
  dayFuel: number;
}
export interface FormDataItemDayFuelStartEnd extends FormDataItemDayFuel {
  startDayFuel: number;
  endDayFuel: number;
}
export interface FormDataItemDayFuelStartEndMileage
  extends FormDataItemDayFuelStartEnd {
  startDayMileage: number;
  endDayMileage: number;
}
