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
        onChange={(e) => onChange({ department: e.target.value })}
      >
        <option value="">All Departments</option>
        {departments.map(({ nom, code }) => (
          <option key={code} value={code}>
            {`${code} - ${nom}`}
          </option>
        ))}
      </select>
    </div>
  );
};
