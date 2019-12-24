import {Component, OnInit} from '@angular/core';
import {RECIPES} from './service/recipes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  recipes = RECIPES;
  recipesToShow = [];
  selectedRecipe;
  total = 0;
  page = 1;
  perPage = 6;


  constructor() {}

  ngOnInit() {
    this.total = this.recipes.length;
  }

  onSelect(recipe) {
    this.selectedRecipe = recipe;
  }

  onBack() {
    this.selectedRecipe = null;
  }

  onPageChange(data) {
    this.page = data.selectedPage;
    this.recipesToShow = data.items;
  }
}
