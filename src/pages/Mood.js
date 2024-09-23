import { Button, Container, Box } from "@mui/material";
import Text from "../components/Text";
import { useNavigate } from "react-router-dom";

import angry from "../image/angry.png";
import happy from "../image/happy.png";
import horny from "../image/horny.png";
import norm from "../image/norm.png";

const Mood = () => {
  const navigation = useNavigate();
  return (
    <>
      <Container>
        <Text text={"Який в тебе настрій ?"} />
        <Box display="flex" justifyContent="center" gap={2}>
          <Button
            startIcon={<img src={angry} alt="angry" />}
            onClick={() => navigation("/chess")}
          />
          <Button
            startIcon={<img src={norm} alt="norm" />}
            onClick={() => navigation("/chess")}
          />
          <Button
            startIcon={<img src={happy} alt="happy" />}
            onClick={() => navigation("/chess")}
          />
          <Button
            startIcon={<img src={horny} alt="horny" />}
            onClick={() => navigation("/chess")}
          />
        </Box>
      </Container>
    </>
  );
};

export default Mood;
