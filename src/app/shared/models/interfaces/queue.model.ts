import { LoggedUser } from "../../services/auth-services/auth.service";
import { Manager } from "./manager.model";
import { ServiceProvider } from "./sp.model";
import { BasicUser, User } from "./user.model";

export interface Queue{
  id: string,
  name: string,
  serviceProvider: ServiceProvider,
  manager: Manager,
  createdBy: Manager,
  createdAt: string | Date,
  nowServing: number,
  nextServing: number,
  bookCount: number,
  isActive?: boolean
}

export interface QueueForm{
  name: string,
  manager: Manager["sub"],
  serviceProvider: string,
  createdBy: Manager["sub"]

}


export interface ReservingDetails{
  createdAt: string | Date,
  no: number,
  queue: string, // Queue ID
  reserver: string, // ID of user
  __v: number,
  id: number
}

export interface ReservationDetails{
  createdAt: string | Date,
  no: number,
  queue: Queue, // Queue ID
  reserver: BasicUser, // ID of user
  __v: number,
  _id: number
}
