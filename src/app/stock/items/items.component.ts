import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export class inventoryItems {
  id?: string;
  name?: string;
  quantity?: number;
  price?: number;
  sellingPrice?: number;
  pakagingType?: string;
}

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent {
  items: inventoryItems[] = [
    { id: '1', name: 'Rice', quantity: 120, price: 45, sellingPrice: 55, pakagingType: '5 kg bag' },
    { id: '2', name: 'Cooking Oil', quantity: 85, price: 160, sellingPrice: 185, pakagingType: '1 litre bottle' },
    { id: '3', name: 'Sugar', quantity: 64, price: 42, sellingPrice: 50, pakagingType: '1 kg packet' },
    { id: '4', name: 'Milk', quantity: 38, price: 48, sellingPrice: 58, pakagingType: '500 ml pouch' }
  ];

  searchText = '';
  isFormOpen = false;
  isDeleteOpen = false;
  isEditing = false;
  formItem: inventoryItems = this.emptyItem();
  itemToDelete?: inventoryItems;

  get filteredItems(): inventoryItems[] {
    const term = this.searchText.trim().toLowerCase();

    if (!term) {
      return this.items;
    }

    return this.items.filter((item) =>
      item.name?.toLowerCase().includes(term) ||
      item.pakagingType?.toLowerCase().includes(term)
    );
  }

  openAdd(): void {
    this.isEditing = false;
    this.formItem = this.emptyItem();
    this.isFormOpen = true;
  }

  openEdit(item: inventoryItems): void {
    this.isEditing = true;
    this.formItem = { ...item };
    this.isFormOpen = true;
  }

  closeForm(): void {
    this.isFormOpen = false;
  }

  saveItem(): void {
    if (!this.formItem.name?.trim()) {
      return;
    }

    if (this.isEditing) {
      const index = this.items.findIndex((item) => item.id === this.formItem.id);
      if (index !== -1) {
        this.items[index] = { ...this.formItem };
      }
    } else {
      this.items.unshift({
        ...this.formItem,
        id: String(Date.now())
      });
    }

    this.closeForm();
  }

  openDelete(item: inventoryItems): void {
    this.itemToDelete = item;
    this.isDeleteOpen = true;
  }

  closeDelete(): void {
    this.isDeleteOpen = false;
    this.itemToDelete = undefined;
  }

  confirmDelete(): void {
    if (this.itemToDelete?.id) {
      this.items = this.items.filter((item) => item.id !== this.itemToDelete?.id);
    }
    this.closeDelete();
  }

  private emptyItem(): inventoryItems {
    return {
      name: '',
      quantity: 0,
      price: 0,
      sellingPrice: 0,
      pakagingType: ''
    };
  }
}
