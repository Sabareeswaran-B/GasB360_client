import ProductCategory from 'src/app/model/product-category.model';
import Branch from './branch.model';
export default class FilledProducts {
    filledProductId!: string;
    productCategoryId!: string;
    filledProductQuantity!: string;
    active!: string;
    branchId!: string;
    branch!: Branch;
    productcategory!: ProductCategory;
}