import Order from "./order.model";

export default class Delivery {
    active!: string;
    deliveryDate!: string;
    deliveryId!: string;
    deliveryStatus!: string;
    order!: Order;
    orderId!: string;
}