import { CityOverviewCard } from "~/components/CityOverviewCard";
import cities from "~/assets/cities.json";
import type { City } from "~/types";
import { useCallback, useState } from "react";

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [selectedCity, setSelectedCity] = useState("");

  const handleClick = useCallback(
    (name: string) => {
      setSelectedCity(selectedCity === name ? "" : name);
    },
    [selectedCity],
  );

  return (
    <div className="p-4">
      <h1>Les communes françaises</h1>
      {selectedCity && <div>Selected city: {selectedCity}</div>}
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
}
