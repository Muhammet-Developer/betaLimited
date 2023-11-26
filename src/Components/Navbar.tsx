
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Badge, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import Modal from './Modal';
import { useSelector } from 'react-redux';
import { basketSelector } from '../store/basket';
import { IListProductsType } from '@/types/Type';
import { cartService } from '../services/cart.service';

interface IProps {
    setCardData: React.Dispatch<React.SetStateAction<IListProductsType[]>>
}

const Navbar = ({ setCardData }: IProps) => {
    const [openModal, setOpenModal] = useState(false);
    const [search, setSearch] = useState('');
    const { basketLength } = useSelector(basketSelector);

    const getAllProductsCarts = async () => {
        try {
            const data = await cartService.searchProducts(search);
            setCardData(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        getAllProductsCarts();
    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar style={{ background: 'white' }}>
                        <Box component="div"
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexDirection: { xs: 'column', sm: 'row' },
                                alignItems: 'center',
                                p: 1,
                                gap: 2,
                                m: 1,
                                bgcolor: 'background.paper',
                                borderRadius: 1,
                                width: '100%'
                            }}>
                            <Box textAlign='center'>
                                <img src="/logo.png" alt="" width={130} />
                            </Box>
                            <Box sx={{ display: 'flex', }}>
                                <form onSubmit={handleSubmit}>
                                    <TextField
                                        size="small"
                                        variant="outlined"
                                        placeholder='Searching for...'
                                        fullWidth
                                        onChange={(e) => setSearch(e.target.value)}
                                        InputProps={{
                                            sx: { borderStartStartRadius: 100, borderBottomLeftRadius: 100 },
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <SearchIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                    ></TextField>
                                </form>
                                <Box textAlign='center'>
                                    <Button variant="contained" onClick={() => getAllProductsCarts()} sx={{
                                        borderRadius: '0px', height: '40px', mx: 'auto', background: '#C24B5A',
                                        ':hover':{ background:'#C24B5A' },
                                        borderTopRightRadius: 100, borderBottomRightRadius: 100, width: 100
                                    }}>Search</Button>
                                </Box>
                            </Box>
                            <Box textAlign='center'>
                                <Badge badgeContent={basketLength} color="error" onClick={() => basketLength === 0 ? setOpenModal(false) : setOpenModal(true)} sx={{ cursor: 'pointer' }}>
                                    <ShoppingCartIcon color='action' />
                                </Badge>
                            </Box>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            {openModal && <Modal openModal={openModal} setOpenModal={setOpenModal} />}
        </>
    );
};

export default Navbar;
