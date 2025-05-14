import ReusableTable from "@/components/shared/ReusableTable";
import NoDataFound from "@/components/shared/ReusableTable/NoDataFound";

export default function GymOwnerTable({
  promoters,
  openPagination,
}: {
  promoters: any;
  openPagination: any;
}) {
  // Define the columns you want to display
  const columns = [
    { label: "Promoter Name", field: "user.name" },
    { label: "Email", field: "user.email" },
    { label: "Gender", field: "gender" },
    { label: "Country", field: "country" },
    { label: "Location", field: "location" },
  ];

  // Format the data to match the column structure
  const formattedPromoters = promoters.map((promoter: any) => ({
    "user.name": promoter.user?.name || "N/A",
    "user.email": promoter.user?.email || "N/A",
    // "user.gender": promoter.user?.gender || "N/A",
    gender: promoter.gender || "Unknown",
    country: promoter.country || "Unknown",
    location: promoter.location || "Not Provided",
  }));

  return (
    <div className={`${openPagination ? "" : "min-h-[calc(100vh-240px)]"}`}>
      <div className="relative">
        <ReusableTable columns={columns} data={formattedPromoters} />
        {promoters.length === 0 && (
          <NoDataFound
            message="No Coaches Available"
            customClass="absolute top-500 left-[40%]"
          />
        )}
      </div>
    </div>
  );
}
