export interface OrderItemModel {
    id: number;
    orderId: number;
    serviceTypeId: number;
    data: Object;
    latitude: number;
    longitude: number;
    //..Audit
}

export interface OrderModel {
    id: number;
    customerId: number;
    items: OrderItemModel[];
    parentServiceId: number;
    sideServiceId: number;
    isCreated: boolean;
    //..Audit
}

export interface CartModel {
    cart: OrderModel;
}

export interface RequestItemModel {
    id?: number;
    serviceTypeId: number;
    data: Object;
}
export interface RequestModel {
    id?: number;
    customerId: number;
    items: RequestItemModel[];
}

export interface RequestsDto {
    requests: RequestModel[]
}

export interface BidModel {
    id: number;
    requestId: number;
    vendorId: number;
    data: string;
    vendorName: string;
}