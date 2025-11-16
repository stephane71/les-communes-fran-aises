import { useCallback } from "react";
import { CityOverviewCard } from "~/components/CityOverviewCard";
import type { City } from "~/types";
import { NavLink, useNavigate } from "react-router";
import { CityFilters } from "~/components/CityFilters";
import { useCities } from "~/hooks/useCities";

const Cities = () => {
  const { cities, filters, handleChangeFilters } = useCities();

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
        <div className="flex justify-between sticky top-0 bg-white p-2 shadow">
          <CityFilters value={filters} onChange={handleChangeFilters} />
          <div>{`Nombre de communes: ${cities.length}`}</div>
        </div>
        <div className="flex flex-col gap-2">
          {(cities as City[]).map(({ nom, code, population }) => (
            <CityOverviewCard
              key={code}
              name={nom}
              code={code}
              population={population}
              onClick={handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cities;
