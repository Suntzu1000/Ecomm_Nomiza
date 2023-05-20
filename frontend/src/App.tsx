import "./App.css";
import { sampleProducts } from "./data";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <>
      <div className="d-flex flex-col- vh-100">
        <header>
          <Navbar />
        </header>
      </div>
      <main className="flex" >
        <ul>
          {sampleProducts.map((product) => (
            <li key={product.slug}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h2>{product.name}</h2>
              <p>R${product.price}</p>
            </li>
          ))}
        </ul>
      </main>

      <footer>
        <div className="text-center" >
          Todos os direitos reservados
        </div>
      </footer>
    </>
  );
}

export default App;
