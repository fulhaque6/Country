import { NavLink } from "react-router-dom";

const CountryDataCard = ({ country }) => {
  return (
    <li className="country-card card">
      <div className="container-card bg-yellow-box">
        <img src={country.flags.svg} alt={country.flags.alt} />
        <div className="countryInfo">
          <p className="card-title">
            {country.name.common.length > 10
              ? country.name.common.slice(0, 10) + "..."
              : country.name.common}
          </p>
          <p>
            <span className="card-description">Population:</span>
            {country.population.toLocaleString()}
          </p>
          <p>
            <span className="card-description">Region:</span> {country.region}
          </p>
          <p>
            <span className="card-description">Capital:</span>
            {country.capital[0]}
          </p>
          <NavLink to={`/country/${country.name.common}`}>
            <button>Read More</button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};

export default CountryDataCard;
