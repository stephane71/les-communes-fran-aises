import {
  CityOverview,
  type CityOverviewProps,
} from "~/components/CityOverview";
import { Card } from "~/components/ui/Card";

export type CityOverviewCardProps = CityOverviewProps;

export const CityOverviewCard = (props: CityOverviewCardProps) => {
  if (props.population < 100000) {
    return null;
  }

  return (
    <Card>
      <CityOverview {...props} />
    </Card>
  );
};
