import { api } from "./service.helpers"

const createSession = async ()=>{
    const data = await api.get('/createsession');
    return data;
}
const listProducts = async () =>{
    const { data } = await api.get('/products');
    return data;
}
const searchProducts = async (name:string) =>{
    const { data } = await api.get(`/search?name=${name}`);
    return data;
}
const addToCart = async (id:string) =>{
    const data = await api.post(`/add-to-cart?id=${id}`);
    return data;
}
const viewCart = async () =>{
    const { data } = await api.get('/view-cart');
    return data;
}
const subtractFromCart = async (id:string) =>{
    const data = await api.post(`/subtract-from-cart?id=${id}`);
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