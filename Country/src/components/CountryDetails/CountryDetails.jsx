import { useEffect, useState, useTransition } from "react";
import { useParams,NavLink } from "react-router-dom";
import { getCountryIndData } from "../../Api/apiPost";

const CountryDetails = () => {
  const [isPending, startTransition] = useTransition();
  const [countryDetails, setCountryDetails] = useState();
  const params = useParams();
  useEffect(() => {
    startTransition(async () => {
      const countryData = await getCountryIndData(params.id);
      setCountryDetails(countryData.data[0]);
    });
  }, []);

  if (isPending) {
    return (
      <>
        <div className="loader"></div>
      </>
    );
  }

  return (
    <section className="card country-details-card container">
      <div className="container-card bg-white-box">
        {countryDetails && (
          <div className="country-image grid grid-two-cols">
            <img
              src={countryDetails.flags.svg}
              alt={countryDetails.flags.alt}
              className="flag"
            />
            <div className="country-content">
              <p className="card-title"> {countryDetails.name.official} </p>

              <div className="infoContainer">
                <p>
                  <span className="card-description"> Native Names:</span>
                  {Object.keys(countryDetails.name.nativeName)
                    .map((key) => countryDetails.name.nativeName[key].common)
                    .join(", ")}
                </p>
                <p>
                  <span className="card-description"> Population: </span>
                  {countryDetails.population.toLocaleString()}
                </p>
                <p>
                  <span className="card-description"> Region:</span>
                  {countryDetails.region}
                </p>
                <p>
                  <span className="card-description"> Sub Region:</span>
                  {countryDetails.subregion}
                </p>
                <p>
                  <span className="card-description"> Capital:</span>
                  {countryDetails.capital}
                </p>

                <p>
                  <span className="card-description">Top Level Domain:</span>
                  {countryDetails.tld[0]}
                </p>
                <p>
                  <span className="card-description"> Currencies: </span>
                  {Object.keys(countryDetails.currencies)
                    .map((curElem) => countryDetails.currencies[curElem].name)
                    .join(", ")}
                </p>
                <p>
                  <span className="card-description">Languages: </span>
                  {Object.keys(countryDetails.languages)
                    .map((key) => countryDetails.languages[key])
                    .join(", ")}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="country-card-backBtn">
          <NavLink to="/country" className="backBtn">
            <button>Go Back</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
