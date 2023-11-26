import {Box,Card,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Rating,
  Stack,
  Typography,
  Button
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useState,useEffect  } from 'react'
import { IListProductsType } from "@/types/Type";
import { cartService } from "../services/cart.service";

interface IProps {
  props: IListProductsType
}
const Carts = ({ props }: IProps) => {
  // const [counter2, setCounter2] = useState(0)
  const [counter, setCounter] = useState(0)

  const count = async () => {
    const data = await cartService.viewCart();
  }
  useEffect(() => {
    count()
  }, [])
  
  const handleIncrease = async (id:string) => {
    setCounter(count => count + 1)
      await cartService.addToCart(id);
  }

  const handleSubtraction = async (id:string) => {
    if (counter > 0) {
      setCounter(count => count - 1);
      await cartService.subtractFromCart(id);
    }
  }
  return (
        <Card sx={{ maxWidth: 400, position: 'relative' }} >
          <CardMedia
            component="img"
            alt={props?.name}
            height="auto"
            sx={{ backgroundColor: '#EFEFEF' }}
            image={props?.image}
          />
          <Chip
            label={props.discount}
            sx={{
              position: 'absolute',
              top: 15,
              left: 15,
              backgroundColor: '#C24B5A',
              '& .MuiChip-label': {
                color: '#fff'
              }
            }}
          />
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="h6">{props?.name}</Typography>
              <Stack direction="row" alignItems="center" gap={1}>
                <Rating name="card-rating" value={props?.rating} readOnly />
                <Typography variant="h6" color="text.secondary">
                  ({props?.rating})
                </Typography>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                gap={1}
                sx={{ marginTop: 1 }}
              >
                <Typography color="#C24B5A" sx={{ fontWeight: 'bold' }}>${props?.price}</Typography>
                <Typography
                  color="text.secondary"
                  sx={{ textDecoration: "line-through", fontWeight: 'bold' }}
                >
                  ${props?.originalPrice}
                </Typography>
              </Stack>
                <Button  onClick={() => handleIncrease(props?.id)} disabled={counter > 0 ? true : false} sx={{mt:'5px'}} variant="contained">Add to Cart</Button>
            </Box>
            <Box>
              <Stack gap={1} alignItems="center">
                {counter <= 0 ? <Box sx={{height:'42px'}}></Box> :
                <IconButton
                aria-label="remove"
                sx={{
                  border: "1px solid #C24B5A",
                  borderRadius: 1,
                }}
                onClick={() => handleSubtraction(props?.id)}
                >
                  <RemoveIcon sx={{ color: "#C24B5A" }} />
                </IconButton>
                }

                <Typography sx={{height:counter <= 0 ?'25px':''}}> { counter <= 0  ? '':counter}</Typography>

                <IconButton
                  aria-label="add"
                  sx={{
                    border: "1px solid #C24B5A",
                    borderRadius: 1,
                  }}
                  onClick={() => handleIncrease(props?.id)}
                >
                  <AddIcon sx={{ color: "#C24B5A" }} />
                </IconButton>
              </Stack>
            </Box>
          </CardContent>
        </Card>
  );
};

export default Carts;