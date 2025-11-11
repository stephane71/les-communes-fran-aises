import type { SyntheticEvent } from "react";

const EMPTY_FLAG = "/no_flag.png";
const FLAG_IMAGE_SIZE = 50;

export type CityOverviewProps = {
  src: string;
  name: string;
  code: string;
};

export const CityOverview = ({ src, name, code }: CityOverviewProps) => {
  const handleError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    target.onerror = null;
    target.src = EMPTY_FLAG;
  };

  return (
    <div className="border rounded-lg p-2 flex gap-2">
      <div className="flex items-center">
        <img
          alt="flag"
          src={src}
          width={FLAG_IMAGE_SIZE}
          height={FLAG_IMAGE_SIZE}
          onError={handleError}
        />
      </div>
      <div className="flex flex-col items-start justify-between">
        <span>{name}</span>
        <span>{code}</span>
      </div>
    </div>
  );
};
