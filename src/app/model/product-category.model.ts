import Type from "./type.model";

export default class ProductCategory {
    productId!: string;
    productName!: string;
    productWeight!: number;
    productPrice!: number;
    typeId!: string;
    active!: string;
    type!: Type;
}