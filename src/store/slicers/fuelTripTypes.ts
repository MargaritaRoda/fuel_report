export type FormDataObject = Record<
  string,
  {
    destination: string;
    distance: string;
    fuel: string;
  }
>;
export interface FormDataItem {
  destination: string;
  distance: number;
  fuel: number;
}
