import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/ui/Loader";
import { CountryCard } from "../components/layout/CountryCard";
import { SearchFilter } from "../components/ui/SearchFilter";

export const Country = () => {
  const [ispending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
    // usetransition is a react hook taht lets you update the state without blocking the UI.
  }, []);

  if (ispending) return <Loader />;

  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

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
        {filterCountries.map((curCountry, index) => {
          return <CountryCard country={curCountry} key={index} />;
        })}
      </ul>
    </section>
  );
};
