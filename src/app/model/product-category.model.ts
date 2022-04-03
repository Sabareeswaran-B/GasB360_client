import Type from "./type.model";

export  class ProductCategory {
    productId! :      string;
    productName! :   string;
    productWeight! : string;
    productPrice!:    string;
    typeId!: string;
    active!: string;
    type!: Type;

  constructor() {}
}