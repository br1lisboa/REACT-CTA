import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes";
import { ThemeConfig } from "./config";
import { Container } from "@mui/material";
function App() {
  return (
    <ThemeConfig>
      <BrowserRouter>
        <Container maxWidth="xl">
          <AppRouter />
        </Container>
      </BrowserRouter>
    </ThemeConfig>
  );
}

export default App;
