import { IListProductsType } from '../types/Type';
import Carts from '../Components/Carts';
import { Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import { cartService } from '../services/cart.service';
import { Button, Box } from '@mui/material';
import Navbar from '../Components/Navbar';
const HomeView = () => {
    const [cardData, setCardData] = useState<IListProductsType[]>([]);
    const getAllCart = async () => {
        try {
            const data = await cartService.listProducts();
            setCardData(data);
        } catch (error) {
            console.log(error);
        }

    };
    useEffect(() => {
        getAllCart();
    }, []);

    return (
        <>
            <Navbar setCardData={setCardData} />
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}
                justifyContent='center'
            >
                {cardData.map((item, key) => (
                    <Grid item xs={2} sm={4} md={3} mt={5} key={key}>
                        <Carts props={item} />
                    </Grid>
                ))}
            </Grid >
            <Box textAlign='center'>
                <Button variant='contained' sx={{ background: '#C24B5A', mt: '100px', ':hover': { background: '#C24B5A' }, }}>Load More...</Button>
            </Box>
        </>
    );
};

export default HomeView;
