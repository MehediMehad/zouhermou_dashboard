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
    { label: "Athlete Name", field: "user.name" },
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
          <NoDataFound message="No Coaches Available" customClass="absolute top-500 left-[40%]" />
        )}
      </div>
    </div>
  );
}

// {
//                 "id": "6819d371f21b67662ae44496",
//                 "location": "kkkkl",
//                 "country": null,
//                 "age": null,
//                 "gender": "Other",
//                 "createdAt": "2025-05-06T09:16:33.579Z",
//                 "updatedAt": "2025-05-06T09:16:33.579Z",
//                 "userId": "6819d371f21b67662ae44495",
//                 "user": {
//                     "id": "6819d371f21b67662ae44495",
//                     "email": "cemah21151@harinv.com",
//                     "password": "$2b$12$HyVSSgBHcMSRoH5jZP6d8OQ6TULmS6OzUdgxWSgXqX0kuq44O0c52",
//                     "name": "ffff",
//                     "phoneNumber": null,
//                     "profileImage": "https://fightnet.fra1.digitaloceanspaces.com/1746522992548-1000000018.png",
//                     "isVerified": false,
//                     "isOnline": false,
//                     "fcmToken": null,
//                     "latitude": null,
//                     "longitude": null,
//                     "status": "ACTIVE",
//                     "role": "PROMOTER",
//                     "createdAt": "2025-05-06T09:16:33.121Z",
//                     "updatedAt": "2025-05-06T09:16:33.121Z"
//                 }
//             },