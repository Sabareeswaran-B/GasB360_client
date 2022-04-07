import Role from "./role.model";
import Type from "./type.model";

export default class Customer {
    customerId!: string;
    customerName!: string;
    customerEmail!: string;
    customerPhone!: string;
    password!: string;
    roleId!: string;
    typeId!: string;
    customerConnection!: number;
    allowedLimit!: number;
    requested!: string;
    customerImage!: string;
    role!: Role;
    type!: Type;
}