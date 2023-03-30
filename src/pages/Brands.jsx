import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import BrandCard from "../components/BrandCard";
import BrandModal from "../components/modals/BrandModal";
import useStockCall from "../hooks/useStockCall";
import { flexCenter } from "../styles/globalStyles";

const Brands = () => {
  const { brands } = useSelector((state) => state.stock);
  const {getStockData} = useStockCall();
  const [info , setInfo] = useState({})
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      <Grid container sx={flexCenter} mt={4}>
          {brands?.map((brand) => (
            <Grid item key={brand.id}>
              <BrandCard brand={brand} setOpen={setOpen} setInfo={setInfo} />
            </Grid>
          ))}
        </Grid>
    
    </div>
  );
};

export default Brands;
