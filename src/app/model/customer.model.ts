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
<<<<<<< HEAD
    role!: string;
    type!: string;
    customerImage!: string;
=======
    customerImage!: string;
    role!: Role;
    type!: Type;
>>>>>>> 0be6e9a36ec0806d27a065922c20b7b0627dd2e9
}