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
    const trigger = async () => {
      const res = await fetch(
        `https://geo.api.gouv.fr/departements/${filters.department}/communes`,
      );
      const citiesRes = (await res.json()) as City[];

      const citiesFiltered = citiesFilter({ cities: citiesRes, filters });

      setCities(citiesFiltered);
      setIsLoading(false);
    };

    setIsLoading(true);
    void trigger();
  }, [filters]);

  const handleChangeFilters = (newFilters: CityFiltersType) => {
    setFilters(newFilters);
  };

  return { cities, handleChangeFilters, filters, isLoading };
};
