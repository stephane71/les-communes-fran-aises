import {
  CityOverview,
  type CityOverviewProps,
} from "~/components/CityOverview";
import { Card } from "~/components/ui/Card";

export type CityOverviewCardProps = CityOverviewProps & {
  onClick?: () => void;
};

export const CityOverviewCard = ({
  onClick,
  ...props
}: CityOverviewCardProps) => {
  if (props.population < 100000) {
    return null;
  }

  return (
    <Card onClick={onClick}>
      <CityOverview {...props} />
    </Card>
  );
};
