import CountryCard from "../components/CountryCard/CountryCard";
import countryData from "../Api/countryData.json";

const About = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the Interesting Facts
        <br />
        we’re proud of
      </h2>
      <div className="gradient-cards">
        {countryData.map((currentCountry) => {
          return (
            <CountryCard country = {currentCountry} />
          );
        })}
      </div>
    </section>
  );
};

export default About;
