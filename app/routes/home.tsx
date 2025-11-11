import type { Route } from "./+types/home";
import { CityOverviewCard } from "~/components/CityOverviewCard";
import cities from "~/assets/cities.json";
import type { City } from "~/types";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [selectedCity, setSelectedCity] = useState("");

  return (
    <div className="p-4">
      <h1>Les communes françaises</h1>
      {selectedCity && <div>Selected city: {selectedCity}</div>}
      <div className="flex flex-col gap-2">
        {(cities as City[]).map(({ nom, code, population }) => (
          <CityOverviewCard
            src={`/flags/${nom}${code}.svg`}
            name={nom}
            code={code}
            population={population}
            onClick={() => {
              setSelectedCity(selectedCity === nom ? "" : nom);
            }}
          />
        ))}
      </div>
    </div>
  );
}
