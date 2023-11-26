import { useEffect, useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { cartService } from '../services/cart.service';
import { IProductionCardType } from '@/types/Type';
interface IProps {
  openModal: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = ({ openModal, setOpenModal }: IProps) => {
  const [viewCartData, setViewCartData] = useState<IProductionCardType[]>([]);
  const getViewCart = async () => {
    try {
      const data = await cartService.viewCart();
      setViewCartData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getViewCart();
  }, []);
  return (
    <div>
      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Basket Information'}
        </DialogTitle>
        <DialogContent>
          {viewCartData ?
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 550 }} aria-label="simple table">
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#EFEFEF' }}>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {viewCartData?.map((row: IProductionCardType) => (
                    <TableRow
                      key={row?.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row?.name}
                      </TableCell>
                      <TableCell align="right">{row?.price}</TableCell>
                      <TableCell align="right">{row?.quantity}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            : <Box textAlign='center'>Empty basket</Box>}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenModal(false)}>Close</Button>

        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Modal;
