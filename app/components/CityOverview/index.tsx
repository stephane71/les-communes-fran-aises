export type CityOverviewProps = {
  name: string;
  code: string;
  population: number;
};

export const CityOverview = ({ name, code, population }: CityOverviewProps) => {
  return (
    <div className="flex gap-2">
      <div className="flex flex-col items-start justify-between">
        <span>{name}</span>
        <span>{code}</span>
        {population > 300000 && (
          <span className="text-gray-500">{"> 300 000 habitants"}</span>
        )}
      </div>
    </div>
  );
};
