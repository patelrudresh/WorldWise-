import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
// import AppPage from "./component/AppPage";
import AppLayOut from "./pages/AppLayOut"
import LogIn from "./pages/LogIn";
import CitieList from "./pages/CitieList";

import CountryList from "./pages/CountryList";
import City from "./pages/City";
import Form from "./pages/Form";
const Base_url = "http://localhost:9000";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${Base_url}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("there was something wrong");
      } finally {
        setIsLoading(false);
      }
    } fetchCities();
  }, []);

  return (
    <>



      <Routes>
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="price" element={<Pricing />} />
        <Route path="app" element={<AppLayOut />} >
          <Route
            index
            element={<CitieList cities={cities} isLoading={isLoading} />}
          />
          <Route path="city/:id" element={<City />} />

          <Route path="city" element={<CitieList cities={cities} isLoading={isLoading} />} />
          <Route path="country" element={<CountryList cities={cities} isLoading={isLoading} />} />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="logIn" element={<LogIn />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </>
  );
}

export default App;
