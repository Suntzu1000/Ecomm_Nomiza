import { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";
import Container from "./components/Container";
import Navbar from "./pages/Navbar/Navbar";
import { Store } from "./Store";
import NavbarBrand from "./pages/Navbar/NavbarBrand";
import Nav from "./pages/Navbar/Nav";

function App() {

  return (
    <>
      <div className="d-flex flex-col- vh-100">
        <header >
          <Navbar  >
            <Container>
              <NavbarBrand href="/" >ECOMM NOMIZA</NavbarBrand>
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
    </>
  );
}

export default App;
