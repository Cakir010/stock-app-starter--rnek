import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import BrandCard from "../components/BrandCard";
import BrandModal from "../components/modals/BrandModal";
import useStockCall from "../hooks/useStockCall";

const Brands = () => {
  const {getStockData} = useStockCall();
  const [info , setInfo] = useState({})
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { brands } = useSelector((state) => state.stock);

  useEffect(() => {
    getStockData("brands");
  }, []);
console.log(brands)
  return (
    <div>
      <Typography variant="h4" color="primary" mb={4}>
        Brands
      </Typography>
      <Button onClick={handleOpen} variant="contained">
        New Brands
      </Button>
      <BrandModal info={info} setInfo={setInfo} open={open} handleClose={handleClose} />

      {brands?.map((brand) => (
        <Grid key={brand.id}>
          <BrandCard setInfo={setInfo} brand={brand} />
        </Grid>
      ))}
    </div>
  );
};

export default Brands;
