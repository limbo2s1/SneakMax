import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { Home } from "./pages/Home";
import { Layout } from "./components/Layout";
import Basket from "./pages/basket/BasketDetails";
import SneakerDetails from "./pages/details/SneakerDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="sneaker/:id" element={<SneakerDetails />} />
            <Route path="basket" element={<Basket />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
