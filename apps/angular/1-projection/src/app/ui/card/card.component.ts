import { Component, EventEmitter, input, Output } from '@angular/core';
import { CardType } from '../../model/card.model';
import { ListItemComponent } from '../list-item/list-item.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  imports: [ListItemComponent, NgClass],
})
export class CardComponent {
  @Output() newItemAdded = new EventEmitter<void>();
  @Output() itemDeleted = new EventEmitter<number>();

  readonly imgSrc = input.required<string>();
  readonly list = input<any[] | null>(null);
  readonly type = input.required<CardType>();
  readonly customClass = input('');

  addNewItem() {
    this.newItemAdded.emit();
  }

  deleteItem(id: number) {
    this.itemDeleted.emit(id);
  }
}
