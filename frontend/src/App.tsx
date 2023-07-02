import { Outlet } from "react-router-dom";
import "./App.css";
import Container from "./components/Container";
import Navbar from "./pages/Navbar/Navbar";
import NavbarBrand from "./pages/Navbar/NavbarBrand";
import { Store } from "./Store";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const {
    state: { mode },
  } = useContext(Store);

  return (
    <>
      <div className={`bg-${mode === "light" ? "gray-800" : "white"}`}>
        <div className="d-flex flex-col- vh-100">
          <ToastContainer position="bottom-center" limit={1} />
          <header>
            <Navbar>
              <Container>
                <NavbarBrand to="/">ECOMM NOMIZA</NavbarBrand>
              </Container>
            </Navbar>
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
      </div>
    </>
  );
}

export default App;
