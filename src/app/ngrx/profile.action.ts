import { createAction, props } from "@ngrx/store";

export const profile = createAction('[Header] profile',
    props <{
        customerId: string;
        customerName: string;
        customerEmail: string;
        customerPhone: string;
        password: string;
        roleId: string;
        typeId: string;
        customerConnection: number;
        allowedLimit: number;
        requested: string;
    }>()
);
