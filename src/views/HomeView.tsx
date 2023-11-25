import { IListProductsType } from '@/types/Type';
import Carts from '../Components/Carts'
import {Grid} from "@mui/material";
import { useState, useEffect } from 'react'
import { cartService } from '../services/cart.service';

const HomeView = () => {
    const [cardData, setCardData] = useState<IListProductsType[]>([])

    const getCart = async () => {
        return await cartService.listProducts().then(res => {
            const promiseResult = res;
            setCardData(promiseResult.data)
            return promiseResult
        });
    }

    useEffect(() => {
        getCart()
    }, [])

    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12}} >
            {cardData.map((item, key) => (
                <Carts item={item} key={key} />
            ))}
        </Grid >
    );
};

export default HomeView
