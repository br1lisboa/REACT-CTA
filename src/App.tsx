import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes";
import { ThemeConfig } from "./config";
import { Container } from "@mui/material";
import { Suspense } from "react";
import Loader from "./commons/loader/Loader";
function App() {
  return (
    <ThemeConfig>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Container maxWidth="xl">
            <AppRouter />
          </Container>
        </Suspense>
      </BrowserRouter>
    </ThemeConfig>
  );
}

export default App;
