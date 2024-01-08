import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  ViewChild,
  ElementRef,
  inject,
  OnInit,
} from '@angular/core';
import { CustomToasterService } from 'src/app/shared/services/custom-toaster.service';

@Component({
  selector: 'app-custom-toast',
  templateUrl: './custom-toast.component.html',
  styleUrls: ['./custom-toast.component.scss'],
  animations: [
    trigger('openClose', [
      state('closed', style({ visibility: 'hidden', right: '-400px' })),
      state('open', style({ right: '-3px' })),
      transition('open <=> closed', [animate('0.5s ease-in-out')]),
    ]),
  ],
})
export class CustomToastComponent implements OnInit {
  @ViewChild('element', { static: false }) progressBar!: ElementRef;

  toastService = inject(CustomToasterService);
  progressInterval!: NodeJS.Timer;

  ngOnInit(): void {
    this.toastService.open.subscribe((data) => {
      console.log('DATA', data);
      if (data.show) {
        this.countDown();
      }
    });
  }

  countDown() {
    this.progressBar.nativeElement.style.width =
      this.toastService.data.progressWidth;

    this.progressInterval = setInterval(() => {
      const width = parseInt(this.progressBar.nativeElement.style.width, 10);

      if (width <= 0) {
        this.toastService.hide();
        this.stopCountDown(); // <<
        return;
      }

      this.toastService.data.progressWidth = String(width - 1);
      this.progressBar.nativeElement.style.width =
        this.toastService.data.progressWidth + '%';
    }, 40); // Toaster will hide once the progress bar width is 0 .. we deleted from the width each 50 MS
  }

  stopCountDown() {
    clearInterval(this.progressInterval);
  }
}
