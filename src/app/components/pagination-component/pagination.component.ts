import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})

export class PaginationComponent implements OnInit, OnChanges {
  @Input() items;
  @Input() perPage = 6;
  @Input() page = 1;
  @Output() changePage = new EventEmitter();
  paginationArray = [];

  constructor() {}

  ngOnInit() {
    if (this.items && this.items.length) {
      this.setPage(this.page);
      this.fillPaginationArray();
    }
  }

  ngOnChanges(changes) {
    if (changes.items) {
      if (changes.items.currentValue !== changes.items.previousValue) {
        this.setPage(this.page);
        this.fillPaginationArray();
      }
    }
  }

  fillPaginationArray() {
    this.paginationArray = [];
    for (let i = 0; i < Math.ceil(this.items.length / this.perPage); i++ ) {
      this.paginationArray.push(i + 1);
    }
  }

  setPage(page) {
    this.page = page;
    const endInd = page * this.perPage;
    const startInd = endInd - this.perPage;
    const pageOfItems = this.items.slice(startInd, endInd);
    this.changePage.emit({items: pageOfItems, selectedPage: page});
  }
}
