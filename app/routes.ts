import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("cities", "routes/cities.tsx"),
  route("cities/:code", "routes/city.tsx"),
] satisfies RouteConfig;
