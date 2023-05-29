import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Queue } from 'src/app/shared/models/interfaces/queue.model';
import { ServiceProvider } from 'src/app/shared/models/interfaces/sp.model';
import { LoggedUser, AuthService } from 'src/app/shared/services/auth-services/auth.service';
import { QueuesResponse, ServiceProviderOwnerService } from 'src/app/shared/services/sp-owner.service';

@Component({
  selector: 'app-owner-profile',
  templateUrl: './owner-profile.component.html',
  styleUrls: ['./owner-profile.component.scss']
})
export class OwnerProfileComponent implements OnInit{

  @Input({required: true}) loggedInUser!: LoggedUser;

  private serviceProvider!: ServiceProvider;

  protected queues: Queue[] = []

  constructor(private spOwnerService: ServiceProviderOwnerService, private authService: AuthService ,private router: Router){}

  ngOnInit(): void {
    this.spOwnerService.getQueues(this.loggedInUser.id).subscribe( (res: QueuesResponse) => {
      this.queues = res.data.queues
      this.serviceProvider = res.data.serviceProvider
      // this.handleSPOwner();
      // this.handleQueues();
      this.spOwnerService.serviceProvider = this.serviceProvider

      console.log("Queues", this.queues)
    })
  }

  fetchServiceProvider(){

  }

  // handleQueues(){
  //   if(this.queues.length < 1){
  //     this.queues = [
  //       {
  //         _id: "",
  //         name: "Temp Queue1",
  //         serviceProvider: this.serviceProvider,
  //         manager: {username: "Fawzy", role: "manager"},
  //         createdBy: {username: "Fawzy", role: "manager"},
  //         createdAt: "temp created At",
  //         nowServing: 20,
  //         nextServing: 14,
  //         bookCount: 5
  //       },

  //       {
  //         _id: "",
  //         name: "Temp Queue2",
  //         serviceProvider: this.serviceProvider,
  //         manager: {username: "Seif", role: "manager"},
  //         createdBy: {username: "Seif", role: "manager"},
  //         createdAt: "temp created At",
  //         nowServing: 20,
  //         nextServing: 14,
  //         bookCount: 5
  //       }
  //     ]
  //   }
  // }

  // handleSPOwner(){

  //   let username = this.loggedInUser.username
  //   let id = this.loggedInUser.id

  //   if(!this.serviceProvider){
  //     this.serviceProvider = {
  //       workingHours: null,
  //       workingDays: null,
  //       name: "Temp SP owner 1",
  //       category: "Temp Category",
  //       owner: username,
  //       long: 121212,
  //       lat: 232323,
  //       createdBy: username,
  //       createdAt: "temp At",
  //       address: "Temp Address",
  //       phone: "Temo phone",
  //       _id: id,
  //       _v: 244
  //     }
  //   }
  // }

  navToDetails(index?: number){
    if(index){
      this.router.navigate(["queue-details"], {queryParams : {id: this.queues[index]._id}})
    }else{
      this.router.navigate(["queue-details"])
    }
  }
}
