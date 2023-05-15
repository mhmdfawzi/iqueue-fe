import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-badge',
  templateUrl: './category-badge.component.html',
  styleUrls: ['./category-badge.component.scss']
})
export class CategoryBadgeComponent {

  @Input() categoryName!: string;
}
