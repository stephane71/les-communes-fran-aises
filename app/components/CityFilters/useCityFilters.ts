import type { Department } from "~/types";
import { useEffect, useState } from "react";

export const useCityFilters = () => {
  const [departments, setDepartments] = useState<Department[]>([]);

  useEffect(() => {
    const trigger = async () => {
      const res = await fetch(`https://geo.api.gouv.fr/departements`);

      setDepartments((await res.json()) as Department[]);
    };

    void trigger();
  }, []);

  return { departments };
};
