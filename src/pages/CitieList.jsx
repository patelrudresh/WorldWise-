import CityItem from "./CityItem";

function CitieList({cities,isLoading}) {
  if(isLoading) return <h1>loading...</h1>
  if(!cities.length) return "please add more city";
  return (
    <ul>
      {cities.map(city => (
        <CityItem city={city} key={city.id}/>
      ))}
    </ul>
  )
}

export default CitieList;
