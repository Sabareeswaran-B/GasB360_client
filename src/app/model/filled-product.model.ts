import ProductCategory from 'src/app/model/product-category.model';
import Branch from './branch.model';
export default class FilledProducts {
    filledProductId!: string;
    productCategoryId!: string;
    filledProductQuantity!: number;
    active!: string;
    branchId!: string;
    branch!: Branch;
    productCategory!: ProductCategory;
}