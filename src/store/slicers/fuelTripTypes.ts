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
