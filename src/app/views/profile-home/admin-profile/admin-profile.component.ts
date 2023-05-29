import { Component, Input } from '@angular/core';
import { LoggedUser } from 'src/app/shared/services/auth-services/auth.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent {
  @Input({required: true}) loggedInUser!: LoggedUser | null;

}
