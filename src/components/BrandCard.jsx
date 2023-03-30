import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { btnStyle, flex } from "../styles/globalStyles";
import useStockCall from "../hooks/useStockCall";

const BrandCard = ({ brand, setOpen, setInfo }) => {
  const { deleteStockData } = useStockCall();
  return (
    <Card
      elevation={10}
      sx={{
        p: 2,
        width: "300px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        image={brand?.image}
        sx={{ p: 1, objectFit: "contain", height: "250px" }}
        component="img"
        alt="brand-img"
      />
      <Typography>{brand?.name}</Typography>

      <CardActions sx={flex}>
        <EditIcon
          onClick={() => {
            setInfo(brand);
            setOpen(true);
          }}
          sx={btnStyle}
        />
        <DeleteOutlineIcon
          onClick={() => deleteStockData("brands", brand.id)}
          sx={btnStyle}
        />
      </CardActions>
    </Card>
  );
};

export default BrandCard;
