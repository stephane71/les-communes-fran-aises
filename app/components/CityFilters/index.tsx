import { useCityFilters } from "~/components/CityFilters/useCityFilters";
import type { CityFiltersType } from "~/types";

export type CityFiltersProps = {
  value: CityFiltersType;
  onChange: (value: CityFiltersType) => void;
};

export const CityFilters = ({ value, onChange }: CityFiltersProps) => {
  const { departments } = useCityFilters();

  return (
    <div>
      <select
        value={value.department}
        onChange={(e) => onChange({ ...value, department: e.target.value })}
      >
        <option value="">All Departments</option>
        {departments.map(({ nom, code }) => (
          <option key={code} value={code}>
            {`${code} - ${nom}`}
          </option>
        ))}
      </select>
      <div className="flex gap-4">
        <label className="flex flex-col items-start gap-1">
          <span>Population min</span>
          <input
            type="number"
            min={0}
            value={value.populationMin ?? ""}
            onChange={(e) => {
              const next = e.target.value;
              const populationMin = next === "" ? undefined : Number(next);
              onChange({ ...value, populationMin });
            }}
          />
        </label>
        <label className="flex flex-col items-start gap-1">
          Population max
          <input
            type="number"
            min={0}
            value={value.populationMax ?? ""}
            onChange={(e) => {
              const next = e.target.value;
              const populationMax = next === "" ? undefined : Number(next);
              onChange({ ...value, populationMax });
            }}
          />
        </label>
      </div>
    </div>
  );
};
