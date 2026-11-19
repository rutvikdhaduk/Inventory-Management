import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  constructor() {}
}

export class inventoryItems {
  id?: string;
  name?: string;
  quantity?: number;
  price?: number;
  sellingPrice?: number;
  pakagingType?: string;
}
