import { Link } from "react-router-dom";
import "../style/CityItem.css"
function CityItem({city}) {

   const {cityName,date ,id,position}=city;
    console.log(position)
    const { lat, lng } = position || {};
     console.log(city)
  return (

   <li className="city-row-li " >

  <Link
        className="city-row"
        to={`${id}?lat=${lat}&lng=${lng}`}
      > <span className="city-name">{cityName}</span>

      <div className="city-right">
        <span className="city-date">{date}</span>
        <button className="city-remove">&times;</button>
      </div>
     </Link>
    </li> 
  )
}

export default CityItem
