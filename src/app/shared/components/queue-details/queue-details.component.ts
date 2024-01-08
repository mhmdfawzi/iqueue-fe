import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QueueResponse, ResponseManagers, ServiceProviderOwnerService } from '../../services/sp-owner.service';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Queue } from '../../models/interfaces/queue.model';
import { AuthService } from 'src/app/shared/services/auth-services/auth.service';
import { QueuesResponse } from '../../services/profile.service';
import { ServiceProvider } from './../../models/interfaces/sp.model';
import { Manager } from '../../models/interfaces/manager.model';
import { QueueForm } from '../../models/interfaces/queue.model';

@Component({
  selector: 'app-queue-details',
  templateUrl: './queue-details.component.html',
  styleUrls: ['./queue-details.component.scss']
})
export class QueueDetailsComponent implements OnInit{

  serviceProvider!: ServiceProvider;

  state: "add" | "edit" = "add";
  introText: string = "Add form details";
  managers: Manager[] = []
  selectedManager!: Manager["id"];

  queueInView!: Queue;
  queueForm!: FormGroup;

  constructor(private route: ActivatedRoute, private spOwnerService: ServiceProviderOwnerService, private authService: AuthService, private router: Router){}

  ngOnInit(): void {
    this.serviceProvider = this.spOwnerService.serviceProvider;

    this.initializeForm();
    this.checkQueueID();
    this.fetchManagers();
  }

  checkQueueID(){
    this.route.queryParamMap.subscribe(res => {
      const id = res.get("id");

      if(id){
        this.state = "edit";
        this.introText = "Edit Queue"
        this.fetchQueueDetails(id);
      }

    })
  }

  initializeForm(){
    this.queueForm = new FormGroup({
      name: new FormControl("", Validators.required),
      manager: new FormControl("", Validators.required),
      serviceProvider: new FormControl(this.serviceProvider?.id),
      createdBy: new FormControl(this.authService.loggedInUser?.id),
    })
  }

  fetchManagers(){
    this.spOwnerService.getManagers(this.serviceProvider?.id).subscribe( (res: ResponseManagers) => {
      this.managers = res.data
    })
  }


  fetchQueueDetails(id: string){
    this.spOwnerService.getQueue(id).subscribe((res: QueueResponse) => {
      this.queueInView = res.data
    })
  }

  submitQueue(){

    const queueData: QueueForm = {
      name: this.queueForm.get("name")?.value,
      manager: this.queueForm.get("manager")?.value,
      serviceProvider: this.queueForm.get("serviceProvider")?.value,
      createdBy: this.queueForm.get("createdBy")?.value,
    }

    this.spOwnerService.postQueue(queueData).subscribe( (res: QueueResponse) => {
      this.router.navigate(["home"])
    })
  }

  isFormValid(form: FormGroupDirective): boolean{
    if(form.valid){
      return true
    }else{
      return false
    }
  }
}
