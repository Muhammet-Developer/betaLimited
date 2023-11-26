import { IListProductsType } from '@/types/Type';
import Carts from '../Components/Carts'
import {Grid} from "@mui/material";
import { useState, useEffect } from 'react'
import { cartService } from '../services/cart.service';

const HomeView = () => {
    const [cardData, setCardData] = useState<IListProductsType[]>([])

    const getCart = async () => {
        const data = await cartService.listProducts();
        setCardData(data)
    }

    useEffect(() => {
        getCart()
    }, [])
    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12}} >
            {cardData.map((item, key) => (
                <Grid item xs={2} sm={4} md={3} mt={5} key={key} style={{marginLeft:'auto',marginRight:'auto' }}>
                <Carts props={item}  />
                </Grid>
            ))}
        </Grid >
    );
};

export default HomeView
