import { useCities } from "../contexts/CitiesContext";
import CountryItem from "./CountryItem";

function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <h1>Loading...</h1>;
  if (!cities.length) return <p>Please add more country</p>;

  // ✅ unique country list
  const countries = [
    ...new Set(cities.map(city => city.country))
  ];

  return (
    <ul>
      {countries.map(country => (
        <li key={country}>   {/* ✅ key on LI */}
          <CountryItem country={country} />
        </li>
      ))}
    </ul>
  );
}

export default CountryList;
