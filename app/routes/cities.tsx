import { useCallback } from "react";
import { CityOverviewCard } from "~/components/CityOverviewCard";
import cities from "~/assets/cities.json";
import type { City } from "~/types";
import { NavLink, useNavigate } from "react-router";

const Cities = () => {
  const navigate = useNavigate();

  const handleClick = useCallback(
    (code: string) => {
      navigate(`/cities/${code}`);
    },
    [navigate],
  );

  return (
    <div className="p-4">
      <h1>Les communes françaises</h1>
      <div>
        <NavLink to="/" end>
          Back to home
        </NavLink>
      </div>

      <div className="flex flex-col gap-2">
        {(cities as City[]).map(({ nom, code, population }) => (
          <CityOverviewCard
            key={code}
            src={`/flags/${nom}${code}.svg`}
            name={nom}
            code={code}
            population={population}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Cities;
