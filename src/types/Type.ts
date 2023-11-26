export interface IInitialStateType {
    basketLength: number;
}
export interface IProductionCardType {
    name: string;
    price: number;
    productId: string;
    quantity: number
}
export interface IListProductsType {
    id: string;
    name: string;
    price: string;
    originalPrice: string;
    rating: number;
    image: string;
    discount: string
}