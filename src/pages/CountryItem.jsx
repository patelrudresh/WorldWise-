import "../style/CityItem.css";

function CountryItem({ country }) {
  
  return (
    <li className="city-row">
      <span className="city-name">
        {country.countryName}
        
      </span>

      <div className="city-right">
       
        <span className="city-remove">&times;</span>
      </div>
    </li>
  );
}

export default CountryItem;
