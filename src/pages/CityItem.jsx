import { Link } from "react-router-dom";
import "../style/CityItem.css";
import { useCities } from "../contexts/CitiesContext";


export function formatDate(date) {
  if (!date) return "";

  const onlyDate = date.split("T")[0]; // remove time
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(onlyDate));
}

function CityItem({ city }) {
  const { currentCity ,deleteCity} = useCities();
  

  const { cityName, date, id, position } = city;
  const { lat, lng } = position || {};

  const isActive = currentCity?.id === id;

  function handleClick(e){
    e.preventDefault();
      deleteCity(id)
  }

  return (
    <li className={`city-row-li ${isActive ? "cityItem-active" : ""}`}>
      <Link to={`${id}?lat=${lat}&lng=${lng}`}>
        <span className="city-name">{cityName}</span>

        <div className="city-right">
          <span className="city-date"> {formatDate(date)}</span>
          <button className="city-remove"
              onClick={handleClick}
          >&times;</button>
        </div>
      </Link>
    </li>
  );
}

export default CityItem;
 