import "../style/CityItem.css";

function CountryItem({ country }) {
  return (
    <li className="city-row-li">
      <div className="city-row">
        <span className="city-name">
          {country}
        </span>

        <div className="city-right">
          <span className="city-remove">&times;</span>
        </div>
      </div>
    </li>
  );
}

export default CountryItem;
