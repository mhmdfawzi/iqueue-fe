import { Manager } from "./manager.model";
import { ServiceProvider } from "./sp.model";

export interface Queue{
  _id: string,
  name: string,
  serviceProvider: ServiceProvider,
  manager: Manager,
  createdBy: Manager,
  createdAt: string | Date,
  nowServing: number,
  nextServing: number,
  bookCount: number
}


