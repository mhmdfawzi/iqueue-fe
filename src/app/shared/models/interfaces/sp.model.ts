export interface ServiceProviderData{
  _id: string,
  name: string,
  category: {
    name: string
  },
  owner: {
    username: string,
    role: "basic" | "manager" | "owner" | "admin"
  },
  long: number,
  lat: number,
  createdBy: {
    username: string,
    role: "basic" | "manager" | "owner" | "admin"
  },
  createdAt: string,
  address: string,
  phone: number
}
