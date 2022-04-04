import Branch from "./branch.model";
import ProductCategory from "./product-category.model";

export default class FilledProduct {
    filledProductId!: string;
    productCategoryId!: string;
    filledProductQuantity!: number;
    branchId!: string;
    branch!: Branch;
    productCategory!: ProductCategory;
}