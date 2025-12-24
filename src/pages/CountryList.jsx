import CountryItem from "./CountryItem";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <h1>Loading...</h1>;
  if (!cities.length) return <p>Please add more country</p>;

  const countries = cities.reduce((arr, city) => {
    if (!arr.some((e) => e.countryName === city.countryName)) {
      return [...arr, { countryName: city.countryName }];
    }
    return arr;
  }, []);

  return (
    <ul>
      {countries.map((country) => (
        <CountryItem
          key={country.countryName}
          country={country}
        />
      ))}
    </ul>
  );
}

export default CountryList;
