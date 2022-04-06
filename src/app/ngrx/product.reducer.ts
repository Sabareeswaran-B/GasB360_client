import { createReducer, on } from "@ngrx/store";
import FilledProduct from "../model/filled-product.model";
import { product } from "./product.action";


export const initialState = new FilledProduct();

const _productReducer = createReducer(
    initialState,
    on(product, (state: FilledProduct) => state)
)


export function ProductReducer(state: any, product: any) {
    return _productReducer(product, product);
}