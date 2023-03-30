import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import useStockCall from "../../hooks/useStockCall";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BrandModal = ({ open, handleClose, info, setInfo }) => {
    const {postStockData , putStockData} = useStockCall()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.id) {
      putStockData("brands", info);
    } else {
      postStockData("brands", info);
    }
    handleClose()
    setInfo({})
  };

  return (
    <div>
      <Modal
          open={open}
          onClose={() => {
            handleClose()
            setInfo({ name: "", phone: "", address: "", image: "" })
          }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box onSubmit={handleSubmit} sx={style} component="form">
          <TextField
            variant="outlined"
            label="Brand Name"
            name="name"
            id="name"
            type="text"
            value={info?.name || ""}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            label="ımage Url"
            name="image"
            id="image"
            type="url"
            value={info?.image || ""}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" color="primary">
            Save Brand
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default BrandModal;
