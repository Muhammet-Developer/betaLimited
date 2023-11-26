export interface IInitialStateType {
    basketLength:number;
    search:string;
    searchData:IListProductsType;
}

export interface IProductionCardType {
    name:string;
    price:number;
    productId:string;
    quantity:number
}
export interface IListProductsType {
    id:string;
    name:string;
    price:string;
    originalPrice:string;
    rating:number;
    image:string;
    discount:string
}

// export interface ISearchProductsType {
//     id:string;
//     name:string;
//     price:string;
//     originalPrice:string;
//     rating:number;
//     image:string;
//     discount:string
// }