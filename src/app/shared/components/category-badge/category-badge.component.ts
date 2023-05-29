import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../models/interfaces/categories.model';

@Component({
  selector: 'app-category-badge',
  templateUrl: './category-badge.component.html',
  styleUrls: ['./category-badge.component.scss']
})
export class CategoryBadgeComponent {
  @Output() categoryClicked: EventEmitter<string> = new EventEmitter<string>();

  @Input({required: true}) category!: Category;
  @Input({required: true}) active: boolean = false;


  clickCategory(categoryId: string){
    this.categoryClicked.emit(categoryId)
  }
}
