import { api } from "./service.helpers"

const createSession = async ()=>{
    const data = api.get('/createsession');
    return data;
}
const listProducts = async () =>{
    const data = api.get('/products');
    return data;
}
const searchProducts = async (name:string) =>{
    const data = api.get(`/search?name=${name}`);
    return data;
}
const addToCart = async (id:number) =>{
    const data = api.post(`/add-to-cart?id=${id}`);
    return data;
}
const viewCart = async () =>{
    const data = api.get('/view-cart');
    return data;
}
const subtractFromCart = async (id:number) =>{
    const data = api.post(`/subtract-from-cart?id=${id}`);
    return data;
}

export const cartService = ({
    createSession,
    listProducts,
    searchProducts,
    addToCart,
    viewCart,
    subtractFromCart,
})