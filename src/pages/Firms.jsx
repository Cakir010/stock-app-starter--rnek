import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";
import useStockCall from "../hooks/useStockCall";
import { flex } from "../styles/globalStyles";

const Firms = () => {
    const {getStockData} = useStockCall()
    const {firms} = useSelector((state)=> state.stock)

    useEffect(()=>{
        getStockData('firms')
    },[])

  return (
    <div>
      <Typography variant="h4" color="primary">
        Firm
      </Typography>
      <Button variant="contained">New Firm</Button>
      <Grid container sx={flex}>
        {firms?.map((firm)=>(
           <Grid item key={firm.id}>
          <FirmCard  firm={firm}/>
        </Grid> 
        ))}
        
      </Grid>
    </div>
  );
};

export default Firms;
