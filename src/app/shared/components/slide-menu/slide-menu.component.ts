import { Component } from '@angular/core';
import { SlideService } from './slide.service';

@Component({
  selector: 'app-slide-menu',
  templateUrl: './slide-menu.component.html',
  styleUrls: ['./slide-menu.component.scss']
})
export class SlideMenuComponent {

  constructor(private slideService: SlideService){}

  linkClicked(){
    this.slideService.showSlide.next(false)
  }

}
