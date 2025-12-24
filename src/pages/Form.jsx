import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/CityForm.css";

function Form() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const newCity = {
      cityName,
      country,
      date,
      notes,
    };

    console.log(newCity);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add New City</h2>

      <div className="form-group">
        <label>City Name</label>
        <input
          type="text"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          placeholder="e.g. Delhi"
        />
      </div>

      <div className="form-group">
        <label>Country</label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="e.g. India"
        />
      </div>

      <div className="form-group">
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Notes</label>
        <input
          type="text"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Your experience…"
        />
      </div>

      <div className="form-buttons">
        <button className="btn primary" type="submit">
          Add
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
