import {useEffect,useState} from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { cartService } from '../services/cart.service';
import { IProductionCardType } from '@/types/Type';
import { useDispatch } from 'react-redux';
import { SET_BASKET_LENGTH } from '../store/basket';

interface IProps{
    open:boolean
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = ({open,setOpen}:IProps) => {
    const [viewCartData, setViewCartData] = useState<IProductionCardType[]>([]);
    const dispatch = useDispatch();
    const getViewCart = async () => {
        const data = await cartService.viewCart();
        setViewCartData(data)
        dispatch(SET_BASKET_LENGTH(data.length))
    }
    
    useEffect(() => {
      getViewCart()
    }, [])
    console.log(viewCartData)
  return (
    <div>
       <Dialog
        open={open}
        onClose={()=>setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Basket Information"}
        </DialogTitle>
        <DialogContent>
          {viewCartData  ?
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 550 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{backgroundColor:'#EFEFEF'}}>
            <TableCell>Name</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {viewCartData?.map((row:IProductionCardType) => (
            <TableRow
            key={row?.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {row?.quantity === 0 ? '' :
                <>
              <TableCell component="th" scope="row">
                {row?.name}
              </TableCell>
              <TableCell align="right">{row?.name}</TableCell>
              <TableCell align="right">{row?.price}</TableCell>
              <TableCell align="right">{row?.quantity}</TableCell>
              </>
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        :<Box textAlign='center'>Empty basket</Box>}
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setOpen(false)}>Close</Button>
         
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Modal
