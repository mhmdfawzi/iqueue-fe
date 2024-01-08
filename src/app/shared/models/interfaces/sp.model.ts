// export interface ServiceProvider{
//   workingHours: null,
//   workingDays: null,
//   name: string,
//   category: string,
//   owner: string,
//   long: number,
//   lat: number,
//   createdBy: string,
//   createdAt: string | Date,
//   address: string,
//   phone: string,
//   _id: string,
//   _v: number

// }

export interface ServiceProvider {
  // workingHours: null,
  // workingDays: null,
  // name: string,
  // category: {name: string},
  // logo: string,
  // owner: string,
  // long: number,
  // lat: number,
  // createdBy: {username: string, fullname: string, phone: number, role: "owner"},
  // createdAt: string | Date,
  // address: string,
  // phone: string,
  // _id: string,
  // _v: number

  id: number;
  name: string;
  long: number;
  lat: number;
  address: string;
  phone: string;
  description: string;
  logo: string;
  workingDays: string;
  workingHours: string;
}
