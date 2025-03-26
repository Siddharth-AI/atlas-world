import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/ui/Loader";
import { CountryCard } from "../components/layout/CountryCard";

export const Country = () => {
  const [ispending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
    // usetransition is a react hook taht lets you update the state without blocking the UI.
  }, []);

  if (ispending) return <Loader />;

  return (
    <section className="country-section">
      <ul className="grid grid-four-cols">
        {countries.map((curCountry, index) => {
          return <CountryCard country={curCountry} key={index} />;
        })}
      </ul>
    </section>
  );
};
