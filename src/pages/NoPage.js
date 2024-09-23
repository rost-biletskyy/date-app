import { Button, Container, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Text from "../components/Text";

export default function NoPage() {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Text text={'Не Махлюй'} />
        <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
          <Button size="large" id="noButton" color="error" variant="contained" onClick={() => navigate("/")}>
            Go Back
          </Button>
        </Box>
      </Container>
    </>
  );
}
