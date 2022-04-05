import { ProductCategory } from 'src/app/model/product-category.model';
import Branch from './branch.model';
export default class UnfilledProducts {
    unfilledProductId! :      string;
    productCategoryId! :   string;
    unfilledProductQuantity! : string;
    active!:    string;
    branchId!: string;
    branch!: Branch;
    productcategory!: ProductCategory;
}