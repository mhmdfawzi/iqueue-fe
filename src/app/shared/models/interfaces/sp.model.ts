// export interface ServiceProvider{
//   _id: string,
//   name: string,
//   category: {
//     name: string
//   },
//   owner: {
//     username: string,
//     role: "basic" | "manager" | "owner" | "admin"
//   },
//   long: number,
//   lat: number,
//   createdBy: {
//     username: string,
//     role: "basic" | "manager" | "owner" | "admin"
//   },
//   createdAt: string,
//   address: string,
//   phone: number,
//   queues: any,
//   thumbnail?: string
// }

export interface ServiceProvider{
  workingHours: null,
  workingDays: null,
  name: string,
  category: string,
  owner: string,
  long: number,
  lat: number,
  createdBy: string,
  createdAt: string | Date,
  address: string,
  phone: string

}
