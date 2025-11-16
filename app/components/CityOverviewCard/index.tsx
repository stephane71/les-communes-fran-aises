import {
  CityOverview,
  type CityOverviewProps,
} from "~/components/CityOverview";
import { Card } from "~/components/ui/Card";
import { memo } from "react";

export type CityOverviewCardProps = CityOverviewProps & {
  onClick: (name: string) => void;
};

export const CityOverviewCard = memo(
  ({ onClick, ...props }: CityOverviewCardProps) => {
    return (
      <Card onClick={() => onClick(props.code)}>
        <CityOverview {...props} />
      </Card>
    );
  },
);
