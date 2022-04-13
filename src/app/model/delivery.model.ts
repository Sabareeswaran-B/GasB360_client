import Address from "./address.model";
import Customer from "./customer.model";
import Employee from "./employee.model";
import FilledProduct from "./filled-product.model";
import Order from "./order.model";
export default class Delivery {
  deliveryId!:string;
  deliveryDate!: string;
  deliveryStatus!:string;
  orderId!:string;
  order!:Order[];
  address!: Address[];
  customer!: Customer[];
  employee!: Employee[];
  filledProduct!: FilledProduct[];
}
