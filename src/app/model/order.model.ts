import Address from "./address.model";
import Customer from "./customer.model";
import Employee from "./employee.model";
import FilledProduct from "./filled-product.model";

export default class Order {
    orderId!: string;
    orderDate!: string;
    customerId!: string;
    employeeId!: string;
    orderOtp!: number;
    orderTotalprice!: number;
    filledProductId!: string;
    addressId!: string;
    orderStatus!: string;
    address!: Address;
    customer!: Customer;
    employee!: Employee;
    filledProduct!: FilledProduct;
}