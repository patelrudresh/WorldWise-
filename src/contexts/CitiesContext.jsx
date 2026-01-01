import { createContext, useContext, useEffect, useState } from "react";


const CitiesContext = createContext();
const Base_url = "http://localhost:9000";

function CitiesProvider({ children }) {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentCity, setCurrentCity] = useState(null);

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


    async function getCity(id) {
        try {
            setIsLoading(true);
            const res = await fetch(`${Base_url}/cities/${id}`);
            const data =await res.json();
            setCurrentCity(data);
        } catch {
            alert("something went wrong");
        } finally {
            setIsLoading(false);
        }
    }

    async function createCity(newcity) {
        try {
            setIsLoading(true);
            const res = await fetch(`${Base_url}/cities`,{
                method:"POST",
                body:JSON.stringify(newcity),
                headers:{
                    "Content-Type":"application/json"
                }
            });
            const data =await res.json();
                setCities(city=>[...city,data])
        } catch {
            alert("something went wrong");
        } finally {
            setIsLoading(false);
        }
    }

    async function deleteCity(id){
        try{
            setIsLoading(true)
            await fetch(`${Base_url}/cities/${id}`,{
                method:"DELETE"
            });
           
            setCities((cities)=>cities.filter((city)=>city.id!== id))
        }catch{
            alert("something wrong with delelte function")
        }
        setIsLoading(false)
    }


    return (
        <CitiesContext.Provider value={{
            cities,
            isLoading,
            currentCity,
            getCity,
            createCity,
            deleteCity
        }}>
            {children}
        </CitiesContext.Provider>
    );
}


function useCities() {
    const context = useContext(CitiesContext);
    if (context === undefined) throw new Error("citiesContext was used outside the citieprovider")
    return context;
}
export { CitiesProvider, useCities }