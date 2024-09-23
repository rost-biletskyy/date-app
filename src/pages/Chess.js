import { Container, Box, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Puzzle } from "react-chess-puzzle";
import Confetti from "react-confetti";
import Text from "../components/Text";

const puzzles = [
  {
    fen: "4kb1r/p2r1ppp/4qn2/1B2p1B1/4P3/1Q6/PPP2PPP/2KR4 w k - 0 1",
    moves: ["Bxd7+", "Nxd7", "Qb8+", "Nxb8", "Rd8#"],
  },
  {
    fen: "1kr4r/ppN1bppp/4pnq1/3p4/3P1Q2/2P2N1P/PPB2PP1/1KR4R w - - 0 1",
    moves: ["Na6+", "Ka8", "Qb8+", "Rxb8", "Nc7#"],
  },
  {
    fen: "r4rk1/1pp1bppp/1qb3N1/p7/1n6/1BN2P1Q/PPP3P1/2KR4 w - - 0 1",
    moves: ["Nxe7+", "Kh8", "Qxh7+", "Kxh7", "Rh1#"],
  },
];

const Chess = () => {
  const [puzzleIndex, setPuzzleIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const navigate = useNavigate();

  const handleNextPuzzle = () => {
    if (puzzleIndex === puzzles.length - 1) {
      setIsFinished(true);
    } else {
      setPuzzleIndex((puzzleIndex + 1) % puzzles.length);
    }
  };

  const currentPuzzle = puzzles[puzzleIndex];

  useEffect(() => {
    if (isFinished) {
      const timer = setTimeout(() => {
        navigate("/map");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isFinished, navigate]);

  return (
    <>
      <Box>
        <Text text={"Пограємо в Шахи)"} />
      </Box>
      <Container sx={{ width: 600, height: 600 }}>
        <Puzzle.Root puzzle={currentPuzzle}>
          <Puzzle.Board />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <>
              <Puzzle.Reset asChild>
                <Button variant="contained" color="error">
                  Restart
                </Button>
              </Puzzle.Reset>
              <Puzzle.Reset
                asChild
                puzzle={puzzles[(puzzleIndex + 1) % puzzles.length]}
                onReset={handleNextPuzzle}
              >
                <Button variant="contained" color="success">
                  Next
                </Button>
              </Puzzle.Reset>
            </>
          </Box>
        </Puzzle.Root>
      </Container>

      {isFinished && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1000,
          }}
        >
          <Confetti />
          <Text text={"Congratulations! You've solved all puzzles!"} />
        </Box>
      )}
    </>
  );
};

export default Chess;
