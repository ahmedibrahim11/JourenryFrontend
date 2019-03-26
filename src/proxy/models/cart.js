export interface OrderItemModel {
  id: number;
  orderId: number;
  serviceTypeId: number;
  data: Object;
  //..Audit
}

export interface OrderModel {
  id: number;
  customerId: number;
  items: OrderItemModel[];
  parentServiceId: number;
  sideServiceId: number;
  isCreated: boolean;
  latitude: number;
  longitude: number;
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
  latitude: number;
  longitude: number;
  address:string;
  addressType:string;
}
