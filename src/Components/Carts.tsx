import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  IconButton,
  Rating,
  Stack,
  Typography,
  Button
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useState  } from 'react'
import { IListProductsType } from "@/types/Type";

interface IProps {
  item: IListProductsType
  key: number
}
const Carts = ({ item, key }: IProps) => {
  const [counter, setCounter] = useState(0)

  const handleIncrease = () => {
    setCounter(count => count + 1)
  }

  const handleSubtraction = () => {
    if (counter > 0) {
      setCounter(count => count - 1);
    }
  }
  return (
      <Grid item xs={2} sm={4} md={3} mt={5} key={key} style={{marginLeft:'auto',marginRight:'auto' }}>
        <Card sx={{ maxWidth: 400, position: 'relative' }} >
          <CardMedia
            component="img"
            alt="green iguana"
            height="auto"
            sx={{ backgroundColor: '#EFEFEF' }}
            image={item?.image}
          />
          <Chip
            label={item.discount}
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
              <Typography variant="h6">{item?.name}</Typography>
              <Stack direction="row" alignItems="center" gap={1}>
                <Rating name="card-rating" value={item?.rating} readOnly />
                <Typography variant="h6" color="text.secondary">
                  ({item?.rating})
                </Typography>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                gap={1}
                sx={{ marginTop: 1 }}
              >
                <Typography color="#C24B5A" sx={{ fontWeight: 'bold' }}>${item?.price}</Typography>
                <Typography
                  color="text.secondary"
                  sx={{ textDecoration: "line-through", fontWeight: 'bold' }}
                >
                  ${item?.originalPrice}
                </Typography>
              </Stack>
                <Button  onClick={() => handleIncrease()} disabled={counter > 0 ? true : false} sx={{mt:'5px'}} variant="contained">Add to Cart</Button>
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
                onClick={() => handleSubtraction()}
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
                  onClick={() => handleIncrease()}
                >
                  <AddIcon sx={{ color: "#C24B5A" }} />
                </IconButton>
              </Stack>
            </Box>
          </CardContent>
        </Card>
      </Grid>
  );
};

export default Carts;