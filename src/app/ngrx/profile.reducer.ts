import { createReducer, on } from "@ngrx/store";
import Customer from "../model/customer.model";
import { profile } from "./profile.action";


export const initialState = new Customer();

const _profileReducer = createReducer(
    initialState,
    on(profile, (state: Customer) => state)
)


export function ProfileReducer(state: any, profile: any) {
    return _profileReducer(profile, profile);
}