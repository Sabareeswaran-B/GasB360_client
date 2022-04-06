import Type from "./type.model";

export default class ProductCategory {
    productId!: string;
    productName!: string;
    productImage!: string;
    productWeight!: number;
    productPrice!: number;
    typeId!: string;
    type!: Type;
}