import type { Route } from "./+types/home";
import { CityOverview } from "~/components/CityOverview";

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
        <CityOverview />
      </div>
    </div>
  );
}
