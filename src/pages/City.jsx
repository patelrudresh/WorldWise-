import { useNavigate, useParams } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import { useEffect } from "react";
import "../style/City.css";

function formatDate(date) {
  if (!date) return "";
   const onlyDate = date.split("T")[0];
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(onlyDate));
}

function City() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getCity, currentCity, isLoading } = useCities();

  useEffect(() => {
    getCity(id);
  }, [id,getCity]);

  if (isLoading) return <p className="loading">Loading...</p>;
  if (!currentCity) return <p>No city found</p>;

  const { cityName, date, notes, countryName } = currentCity;

  return (
    <div className="city-page">
      <div className="city-card">
        <div className="city-header">
          <h2>{cityName}</h2>
          <span className="country">{countryName}</span>
        </div>

        <div className="city-info">
          <p className="label">Visited on</p>
          <p className="value">{formatDate(date)}</p>

          {notes && (
            <>
              <p className="label">Notes</p>
              <p className="value notes">{notes}</p>
            </>
          )}
        </div>

        <button
          className="btn-back"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
      </div>
    </div>
  );
}

export default City;
