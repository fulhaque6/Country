const CountryCard = ({ country }) => {
  return (
    <div className="card" key={country.id}>
      <div className="container-card bg-yellow-box">
        <p className="card-title">{country.countryName}</p>
        <p>
          <span className="card-description">Capital:</span>
          {country.capital}
        </p>
        <p>
          <span className="card-description">Population:</span>
          {country.population}
        </p>
        <p>
          <span className="card-description">Interesting Fact:</span>
          {country.interestingFact}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
