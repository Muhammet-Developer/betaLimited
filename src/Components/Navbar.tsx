
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { InputAdornment, TextField,useMediaQuery } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const Navbar = () => {
    const isSmallScreen = useMediaQuery('(max-width:750px)');
    const isExtraSmallScreen = useMediaQuery('(max-width:380px)');
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar style={{ background: 'white' }}>
                    <Box component="div"
                     sx={{
                        display: 'flex',
                        flexDirection:isSmallScreen ?'column':'',
                        p: 1,
                        m: 1,
                        bgcolor: 'background.paper',
                        borderRadius: 1,
                        width: '100%'
                    }}>
                        <Box sx={{
                            mx:isSmallScreen ? 'auto':'',
                            mb:isSmallScreen ? '10px':''
                        }}>
                            <img src="/logo.png" alt="" width={130} />
                        </Box>
                        <Box sx={{
                            mx: 'auto',
                            display: 'flex',
                            flexDirection:isExtraSmallScreen?'column':'',
                            width:isSmallScreen?'20':'500px'
                        }}>
                            <TextField
                                size="small"
                                variant="outlined"
                                placeholder='Searching for...'
                                fullWidth
                                InputProps={{
                                    sx: { borderStartStartRadius: 100, borderBottomLeftRadius: 100,borderRadius:isExtraSmallScreen ? 100:'',  mb:isSmallScreen?'10px':''},
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    )
                                }}
                            ></TextField>
                            <Box textAlign='center'>
                            <Button variant="contained" sx={{ borderRadius: '0px', height: '40px' , mx: 'auto',background:'#C24B5A',
                            borderTopRightRadius: 100,borderBottomRightRadius:100,borderStartStartRadius:isExtraSmallScreen? 100:'', borderBottomLeftRadius:isExtraSmallScreen? 100:'',width:100}}>Search</Button>
                            </Box>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
