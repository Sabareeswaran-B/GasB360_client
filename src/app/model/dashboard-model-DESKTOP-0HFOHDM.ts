import  Employee  from 'src/app/model/employee.model';
import  Customer  from 'src/app/model/customer.model';
import  UnfilledProducts from 'src/app/model/unfilled-product.model';
import  FilledProduct  from 'src/app/model/filled-product.model';
import ProductCategory from 'src/app/model/product-category.model';
import Order from './order.model';
import Delivery from './delivery.model';


export default class Dashboard {
    productCategory!: ProductCategory[];
    filledProduct!: FilledProduct[]; 
    unfilledProducts!: UnfilledProducts[];
    customer!:Customer[];
    customerRequestCount!:Customer[];
    employee!:Employee[];
    order!:Order[];
    delivery!:Order[];
    customerCount!: number;
    employeeCount!: number;
    orderCount!:number;
    deliveryCount!: number;
}