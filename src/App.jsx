import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import "./App.css";


// import Homepage from "./pages/Homepage";
// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import AppLayOut from "./pages/AppLayOut";
// import LogIn from "./pages/LogIn";
// import PageNotFound from "./pages/PageNotFound";

   const Homepage=lazy(()=>import("./pages/Homepage"))
   const Product=lazy(()=>import("./pages/Product"))
   const Pricing=lazy(()=>import("./pages/Pricing"))
   const AppLayOut=lazy(()=>import("./pages/AppLayOut"))
   const LogIn=lazy(()=>import("./pages/LogIn"))
   const PageNotFound=lazy(()=>import("./pages/PageNotFound"))
   
import CitieList from "./pages/CitieList";
import CountryList from "./pages/CountryList";
import City from "./pages/City";
import Form from "./pages/Form";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import { Suspense } from "react";
import Spinnerfullpage from "./pages/Spinnerfullpage";


function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <Suspense fallback={<Spinnerfullpage/>}>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="price" element={<Pricing />} />

          <Route
            path="app"
            element={
              <ProtectedRoute>
                <AppLayOut />
              </ProtectedRoute>
            }
          >
            <Route index element={<CitieList />} />
            <Route path="city/:id" element={<City />} />
            <Route path="city" element={<CitieList />} />
            <Route path="country" element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>

          <Route path="login" element={<LogIn />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        </Suspense>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
