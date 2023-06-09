import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Firms from '../pages/Firms';
import { btnStyle, flex } from '../styles/globalStyles';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import EditIcon from "@mui/icons-material/Edit"
import useStockCall from '../hooks/useStockCall';

 function FirmCard({firm  , handleOpen , setOpen , setInfo}) {

const{deleteStockData} = useStockCall()
const handleEdit = () => {
handleOpen() 
 setInfo(firm)
}

  return (
    <Card
    sx={{
      p: 2,
      width: "300px",
      height: "400px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}
  >
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {firm.name}
        </Typography>
        <CardMedia
        sx={{ p: 1, objectFit: "contain", height: "130px" }}
        image={firm?.image}
        title="firm-image"
        component="img"
      />
        <Typography variant="body2" color="text.secondary">
          {firm.address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {firm.phone}
        </Typography>
      </CardContent>
      <CardActions sx={flex}>
      <EditIcon
          onClick={()=>{
            setInfo(firm) 
            handleOpen()
          }}
          sx={btnStyle}
        />
        <DeleteOutlineIcon
          onClick={()=> deleteStockData('firms', firm.id)}
          sx={btnStyle}
        />
      </CardActions>
    </Card>
  );
}

export default FirmCard