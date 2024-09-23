import { useState } from "react";
import { Button, Container, Box } from "@mui/material";
import ConfettiButton from "../components/ConfettiButton";
import Text from "../components/Text";


const Main = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({});
  const [isMoving, setIsMoving] = useState(false);

  const moveButton = () => {
    if (!isMoving) {
      setIsMoving(true);
    }
    const noButtonWidth = 85;
    const noButtonHeight = 48;
    const x = Math.random() * (window.innerWidth - noButtonWidth);
    const y = Math.random() * (window.innerHeight - noButtonHeight);
    setNoButtonPosition({ left: `${x}px`, top: `${y}px` });
  };

  return (
    <>
      <Container>
        <Text text={"Ти підеш зі мною на побачення ?"} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtZ2JiZDR0a3lvMWF4OG8yc3p6Ymdvd3g2d245amdveDhyYmx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif"
            alt="Cute animated illustration"
          />
        </Box>
        <Box display="flex" justifyContent="center" gap={2}>
          <ConfettiButton size="large" variant="contained" color="success">
            Yes
          </ConfettiButton>
          <Button
            size="large"
            id="noButton"
            color="error"
            variant="contained"
            style={{
              position: isMoving ? "absolute" : "static",
              ...noButtonPosition,
            }}
            onMouseOver={moveButton}
          >
            No
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Main;
