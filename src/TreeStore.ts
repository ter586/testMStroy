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
  getAllChildren(id: ItemId): Item[] {
    let result: Item[] = [];
    let queue: ItemId[] = [id];
    while (queue.length > 0) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].parent === queue[0]) {
          result.push(this.items[i]);
          queue.push(this.items[i].id);
        }
      }
      queue.shift();
    }
    return result;
  }
  getAllParents(id: ItemId): Item[] {
    let result: Item[] = [];
    let queue: ItemParentId[] = [id];
    while (queue.length > 0) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].id === queue[0]) {
          result.push(this.items[i]);
          if (this.items[i].parent != null) {
            queue.push(this.items[i].parent);
          }
          break;
        }
      }
      queue.shift();
    }
    return result;
  }
  addItem(item: Item): void {
    this.items.push(item);
  }
}
