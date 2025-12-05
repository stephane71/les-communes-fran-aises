import { useEffect, useMemo, useState } from "react";
import type { City, CityFiltersType } from "~/types";
import { citiesFilter } from "~/utils/citiesFilter";

const CITY_FILTER_DEFAULT = {
  department: "01",
  populationMin: undefined,
  populationMax: undefined,
};

export const useCities = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [filters, setFilters] = useState<CityFiltersType>(CITY_FILTER_DEFAULT);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const trigger = async () => {
      const res = await fetch(`https://geo.api.gouv.fr/communes`);

      setCities((await res.json()) as City[]);
    };

    void trigger();
  }, []);

  const citiesFiltered = useMemo(() => {
    setIsLoading(true);
    const citiesFiltered = citiesFilter({ cities, filters });
    setIsLoading(false);
    return citiesFiltered;
  }, [cities, filters]);

  const handleChangeFilters = (newFilters: CityFiltersType) => {
    setFilters(newFilters);
  };

  return { cities: citiesFiltered, handleChangeFilters, filters, isLoading };
};
