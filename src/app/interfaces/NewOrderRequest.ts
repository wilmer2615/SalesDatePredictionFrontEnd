import { OrderDetailsRequest } from "./OrderDetailsRequest";

export interface NewOrderRequest{
    custId: number,
    empId: number,
    orderDate: Date,
    requiredDate: Date,
    shippedDate: Date,
    shipperId: number,
    freight: number,
    shipName: string,
    shipAddress: string,
    shipCity: string,
    shipRegion: string,
    shipPostalCode: string,
    shipCountry: string,
    orderDetailList: OrderDetailsRequest[]
}