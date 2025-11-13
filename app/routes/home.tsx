import { NavLink } from "react-router";

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <h1>Les communes françaises</h1>
      <div>
        <NavLink to="/cities" end>
          Liste des communes
        </NavLink>
      </div>
    </div>
  );
}
