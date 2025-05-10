"use client"
// import { useGetTotalQuery } from "@/Redux/Api/userApi";
import ChartOverview from "./ChartOverview";
import DashboardCard from "./DashboardCard";
// import Loading from "@/components/utils/Loading";

const DashboardOverview = () => {
  // const {data: res, isLoading} = useGetTotalQuery(undefined)

  // if (isLoading) {
  //   return (
  //     <div className="flex items-center justify-center w-full h-full">
  //       <Loading/>
  //     </div>
  //   )
    
  // }

  
  return (
    <>
      <DashboardCard />
      <ChartOverview />
    </>
  );
};

export default DashboardOverview;
