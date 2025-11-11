import type { Route } from "./+types/home";
import { CityOverviewCard } from "~/components/CityOverviewCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="p-4">
      <h1>Les communes françaises</h1>
      <div>
        <CityOverviewCard
          src={`/flags/Annecy74010.svg`}
          name={"Annecy"}
          code={"74010"}
        />
      </div>
    </div>
  );
}
