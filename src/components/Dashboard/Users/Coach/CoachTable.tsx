import ReusableTable from "@/components/shared/ReusableTable";
import NoDataFound from "@/components/shared/ReusableTable/NoDataFound";

export default function CoachTable({
  coachs,
  openPagination,
}: {
  coachs: any;
  openPagination: any;
}) {
  const columns = [
    { label: "Athlete Name", field: "name" },
    { label: "Martial Arts", field: "martialArtsGym" },
    { label: "(AVG) Rating", field: "averageRating" },
    { label: "Country", field: "country" },
    { label: "Location", field: "location" },
  ];

  return (
    <div className={`${openPagination ? "" : "min-h-[calc(100vh-240px)]"}`}>
      <div className="relative">
        <ReusableTable columns={columns} data={coachs} />
        {coachs.length === 0 && (
          <NoDataFound message="No Coaches Available" customClass="absolute top-500 left-[40%]" />
        )}
      </div>
    </div>
  );
}
