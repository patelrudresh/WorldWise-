import { useParams, useSearchParams } from "react-router-dom";

const formatDate = (date) => {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
};

function City() {
  const { id } = useParams();
  const [searchParam] = useSearchParams();

  const lat = searchParam.get("lat");
  const lng = searchParam.get("lng");

  console.log(id);

  const currentCity = {
    cityName: "Lisbon",
    date: "2027-10-04",
    notes: "my favourite city so far",
  };

  const { cityName, date, notes } = currentCity;

  return (
    <div>
      <h3>
        {cityName}, {notes} — {formatDate(date)}
      </h3>
      <p>
        Lat: {lat} | Lng: {lng}
      </p>
    </div>
  );
}

export default City;
