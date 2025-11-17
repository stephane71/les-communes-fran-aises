export const CityOverviewCardSkeleton = () => {
  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <div className="animate-pulse flex items-center justify-between gap-4">
        <div className="flex-1">
          <div className="h-5 w-2/3 bg-gray-200 rounded mb-2" />
          <div className="h-4 w-1/3 bg-gray-200 rounded" />
        </div>
        <div className="h-8 w-24 bg-gray-200 rounded" />
      </div>
    </div>
  );
};
