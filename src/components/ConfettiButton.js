import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import Button from "@mui/material/Button";

const ConfettiButton = () => {
  const [isConfettiVisible, setConfettiVisible] = useState(false);
  const navigate = useNavigate();

  const nextPage = () => {
    setConfettiVisible(true);

    setTimeout(() => {
      setConfettiVisible(false);
      navigate("/mood");
    }, 3000);
  };

  return (
    <div>
      <Button
        size="large"
        variant="contained"
        color="success"
        onClick={nextPage}
      >
        Yes
      </Button>

      {isConfettiVisible && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
        />
      )}
    </div>
  );
};

export default ConfettiButton;