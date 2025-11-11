import {
  CityOverview,
  type CityOverviewProps,
} from "~/components/CityOverview";
import { Card } from "~/components/ui/Card";

export type CityOverviewCardProps = CityOverviewProps;

export const CityOverviewCard = (props: CityOverviewCardProps) => {
  return (
    <Card>
      <CityOverview {...props} />
    </Card>
  );
};
