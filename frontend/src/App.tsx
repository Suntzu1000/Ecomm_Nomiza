import { Outlet } from "react-router-dom";
import "./App.css";
import Container from "./components/Container";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <>
      <div className="d-flex flex-col- vh-100">
        <header>
          <Navbar />
        </header>
      </div>
      <main>
        <Container className="flex mt-10">
          <Outlet />
        </Container>
      </main>

      <footer>
        <div className="text-center">Todos os direitos reservados</div>
      </footer>
    </>
  );
}

export default App;
