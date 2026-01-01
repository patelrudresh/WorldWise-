import { Route, Routes } from "react-router-dom";
import "./App.css";
// import { useEffect, useState } from "react";
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
import { CitiesProvider } from "./contexts/CitiesContext";
// const Base_url = "http://localhost:9000";

function App() {
 

  return (
    <CitiesProvider>



      <Routes>
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="price" element={<Pricing />} />
        <Route path="app" element={<AppLayOut />} >
          <Route
            index
            element={<CitieList  />}
          />
          <Route path="city/:id" element={<City />} />

          <Route path="city" element={<CitieList  />} />
          <Route path="country" element={<CountryList />} />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="logIn" element={<LogIn />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </CitiesProvider>
  );
}

export default App;
