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
  getAll(): Item[] {
    return this.items;
  }
  getItem(id: ItemId): Item | undefined {
    return this.items.find((item) => item.id === id);
  }
  getChildren(id: ItemId): Item[] {
    return this.items.filter((item) => item.parent === id);
  }
}
