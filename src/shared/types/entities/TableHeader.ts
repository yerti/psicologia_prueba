export interface TableHeader<T> {
  label: string;
  value: (item: (T)) => string | number | React.JSX.Element;
  width: string;
}