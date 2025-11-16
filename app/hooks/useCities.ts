import { useEffect, useState } from "react";
import type { City, CityFiltersType } from "~/types";

export const useCities = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [filters, setFilters] = useState<CityFiltersType>({
    department: "",
  });
  const [citiesFiltered, setCitiesFiltered] = useState<City[]>([]);

  useEffect(() => {
    const trigger = async () => {
      const res = await fetch(`https://geo.api.gouv.fr/communes`);

      setCities((await res.json()) as City[]);
    };

    void trigger();
  }, []);

  useEffect(() => {
    if (!filters.department) {
      return setCitiesFiltered(cities);
    }

    const filteredCities = cities.filter(
      (city) => city.codeDepartement === filters.department,
    );
    setCitiesFiltered(filteredCities);
  }, [cities, filters.department]);

  const handleChangeFilters = (newFilters: CityFiltersType) => {
    setFilters(newFilters);
  };

  return { cities: citiesFiltered, handleChangeFilters, filters };
};
