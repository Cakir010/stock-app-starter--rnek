import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import useStockCall from "../../hooks/useStockCall";
import { flexColumn, modalStyle } from "../../styles/globalStyles";

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
        <Box sx={modalStyle}>
            <Box sx={flexColumn} onSubmit={handleSubmit}  component="form">
          <TextField
            label="Brand Name"
            name="name"
            id="name"
            type="text"
            variant="outlined"
            value={info?.name || ""}
            onChange={handleChange}
          />
          <TextField
            label="ımage Url"
            name="image"
            id="image"
            type="url"
            variant="outlined"
            value={info?.image || ""}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" color="primary" size='large'>
            Save Brand
          </Button>
        </Box>
        </Box>
        

      </Modal>
    </div>
  );
};

export default BrandModal;
