import type { Route } from "../+types/root";
import { useEffect, useState } from "react";
import type { City } from "~/types";
import { NavLink } from "react-router";

const City = ({ params }: Route.ComponentProps) => {
  const [city, setCity] = useState<City | null>(null);

  useEffect(() => {
    const trigger = async () => {
      const res = await fetch(
        `https://geo.api.gouv.fr/communes/${params.code}`,
      );

      setCity((await res.json()) as City);
    };

    void trigger();
  }, [params.code]);

  if (!city) return <div>Loading...</div>;

  return (
    <div>
      <div>
        <NavLink to="/cities" end>
          Back to list
        </NavLink>
      </div>

      <div>City: {city.nom}</div>
      <div>departement: {city.codeDepartement}</div>
      <div>departement: {city.population}</div>
    </div>
  );
};

export default City;
