import { useEffect, useState, useTransition } from "react";
import { getCountyData } from "../Api/apiPost";
import CountryDataCard from "../components/CountryDataCard/countryDataCard";
import SearchFilter from "../components/SearchFilter/SearchFilter";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const countryData = await getCountyData();
      setCountries(countryData.data);
    });
  }, []);

  if (isPending) {
    return (
      <>
        <div className="loader"></div>
      </>
    );
  }

  const getCountriesBySearch = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const getCountriesByFilter = (country)=>{
    if (filter==="all") {
      return country;
    }
    return country.region === filter;
  }

  const filterCountries = countries.filter((country) => {
    return getCountriesBySearch(country) && getCountriesByFilter(country);
  });

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />
      <ul className="grid grid-four-cols">
        {filterCountries.map((currentCountry, index) => {
          return <CountryDataCard country={currentCountry} key={index} />;
        })}
      </ul>
    </section>
  );
};

export default Country;
