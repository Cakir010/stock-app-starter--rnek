import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Errorimg from "../assets/404.png";



const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={Errorimg} alt="imic" />
      <Button onClick={() => navigate(-1)} variant="contained">
        Go Back
      </Button>
    </Box>
  );
};
export default NotFound;