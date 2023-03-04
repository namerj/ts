export interface MenuItemType {
  icon?: string;
  title: string;
  path: string;
  children?: MenuItemType[];
}
