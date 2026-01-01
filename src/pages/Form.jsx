import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../style/CityForm.css";
import useMapPosition from "../Hooks/useMapPosition";
import { useCities } from "../contexts/CitiesContext";

function getFlagUrl(countryCode) {
  if (!countryCode) return "";

  return `https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`;
}
const BASE_URL =
  "https://api.bigdatacloud.net/data/reverse-geocode-client";


function Form() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [flagUrl, setFlagUrl] = useState("");
 const  {createCity}=useCities()

  const { lat, lng } = useMapPosition();
  const navigate = useNavigate();
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);

 async function handleSubmit(e) {
    e.preventDefault();

    if (!cityName || !date) return;

    const newCity = {
      cityName,
      country,
      date,
      notes,
      position: { lat, lng }
    };

   await createCity(newCity);
    navigate("/app/city")
  }

  useEffect(() => {
    if (!lat && !lng) return "";

    async function fetchCityData() {
      try {
        setIsLoadingGeocoding(true);
        const res = await fetch(
          `${BASE_URL}?latitude=${lat}&longitude=${lng}&localityLanguage=en`
        );
        const data = await res.json();
        console.log(data);
        setCityName(data.city || data.locality || "");
        setCountry(data.countryName)
        setFlagUrl(getFlagUrl(data.countryCode));

      } catch (err) {
        console.error("Failed to fetch city data", err);
      } finally {
        setIsLoadingGeocoding(false);
      }
    }
    fetchCityData();
  }, [lat, lng]);



  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add New City</h2>
      <div className="form-group">
        <label>City Name</label>

        <div className="input-wrapper">
          <input id={date}
            type="text"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            className="input-with-flag"
          />

          {flagUrl && (
            <img
              src={flagUrl}
              alt="country flag"
              className="flag-inside"
            />
          )}
        </div>
      </div>



      <div className="form-group">
        <label>Country</label>


        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>When will you go {cityName}</label>
        {/* <input
          type="date"
          value={date}
          
        /> */}

        <DatePicker onChange={date => setDate(date)}
          selected={date} dateFormat="dd/MM/yyyy" />

      </div>

      <div className="form-group">
        <label>Notes</label>
        <input
          type="text"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      <div className="form-buttons">
        <button
          className="btn primary"
          type="submit"
          disabled={isLoadingGeocoding}
        >
          {isLoadingGeocoding ? "Detecting..." : "Add"}
        </button>

        <button
          className="btn secondary"
          type="button"
          onClick={() => navigate(-1)}
        >
          &larr; Back
        </button>
      </div>
    </form>
  );
}

export default Form;
