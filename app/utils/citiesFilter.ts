import type { City, CityFiltersType } from "~/types";

export const citiesFilter = ({
  cities,
  filters,
}: {
  cities: City[];
  filters: CityFiltersType;
}) => {
  const { department, populationMin, populationMax } = filters;

  return cities.filter((city) => {
    const depOk = department ? city.codeDepartement === department : true;
    const minOk =
      typeof populationMin === "number"
        ? city.population >= populationMin
        : true;
    const maxOk =
      typeof populationMax === "number"
        ? city.population <= populationMax
        : true;
    return depOk && minOk && maxOk;
  });
};
