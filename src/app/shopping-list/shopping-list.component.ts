import { Component, OnInit } from '@angular/core';
import {ShoppingListAddComponent} from './shopping-list-add.component'
import { Ingredient } from 'app/shared/ingredient';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  items: Ingredient[];
  selectedItem: Ingredient = null;

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
    this.items = this.sls.getItem();
  }


  onSelectItem(item: Ingredient)
  {
    this.selectedItem = item;
  }

  onCleared()
  {
    this.selectedItem = null;
  }
}
