import { createAction, props } from "@ngrx/store";
import Branch from "../model/branch.model";
import ProductCategory from "../model/product-category.model";

export const product = createAction('[Product Details] product',
    props<{
        filledProductId: string;
        productCategoryId: string;
        filledProductQuantity: number;
        branchId: string;
        branch: Branch;
        productCategory: ProductCategory;
    }>()
);