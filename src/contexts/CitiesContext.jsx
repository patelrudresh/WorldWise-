import { createContext, useCallback, useContext, useEffect, useReducer } from "react";


const CitiesContext = createContext();
const Base_url = "http://localhost:9000";

const initializer = {
    cities: [],
    isLoading: false,
    currentCity: null
}

function reducer(state, action) {
    switch (action.type) {
        case "loading":
            return { ...state, isLoading: true };

        case "cities/loaded":
            return {
                ...state,
                isLoading: false,
                cities: action.payload
            };

        case "city/loaded":
            return {
                ...state,
                isLoading: false,
                currentCity: action.payload
            };

        case "city/created":
            return {
                ...state,
                isLoading: false,
                cities: [...state.cities, action.payload]
            };

        case "city/deleted":
            return {
                ...state,
                isLoading: false,
                cities: state.cities.filter(
                    city => city.id !== action.payload
                )
            };

        case "error":
            return { ...state, isLoading: false };

        default:
            console.error("Unknown action type:", action.type);
            return state;
    }
}


function CitiesProvider({ children }) {
    const [{ cities, isLoading, currentCity }, dispatch] = useReducer(reducer, initializer)
    // const [cities, setCities] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [currentCity, setCurrentCity] = useState(null);


    useEffect(() => {
        async function fetchCities() {
            dispatch({ type: "loading" });
            try {
                const res = await fetch(`${Base_url}/cities`);
                const data = await res.json();
                dispatch({ type: "cities/loaded", payload: data });
            } catch {
                dispatch({ type: "error" });
            }
        }
        fetchCities();
    }, []);

     const getCity= useCallback( async function getCity(id) {
        if(Number(id)===currentCity?.id) return;
        dispatch({ type: "loading" });
        try {

            const res = await fetch(`${Base_url}/cities/${id}`);
            const data = await res.json();
            dispatch({ type: "city/loaded", payload: data });
        } catch {
            dispatch({ type: "error" });
        }
    },[currentCity?.id])

    async function createCity(newcity) {
        dispatch({ type: "loading" });
        try {

            const res = await fetch(`${Base_url}/cities`, {
                method: "POST",
                body: JSON.stringify(newcity),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await res.json();
            dispatch({ type: "city/created", payload: data });
        } catch {
            dispatch({ type: "error" });
        }
    }

    async function deleteCity(id) {
        dispatch({ type: "loading" });
        try {

            await fetch(`${Base_url}/cities/${id}`, {
                method: "DELETE"
            });

            dispatch({ type: "city/deleted", payload: id });
        } catch {
            dispatch({ type: "error" });
        }
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