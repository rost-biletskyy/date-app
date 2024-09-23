import { Box } from "@mui/material";
import '../index.css'

const Text = ({ text }) => {
  return (
    <>
      <Box>
        <h1 className="text">{text}</h1>
      </Box>
    </>
  );
};

export default Text;
