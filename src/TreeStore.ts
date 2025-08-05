type ItemId = number | string;
type ItemParentId = ItemId | null;

export interface Item {
  id: ItemId;
  parent: ItemParentId;
  label: string;
}

export class TreeStore {
  constructor(items: Item[]) {
    this.items = items;
  }
  items: Item[];
}
