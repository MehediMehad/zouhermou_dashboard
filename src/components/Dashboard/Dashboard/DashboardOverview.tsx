"use client";
import Loading from "@/components/utils/Loading";
import ChartOverview from "./ChartOverview";
import DashboardCard from "./DashboardCard";
import { useGetTotalDetailsQuery } from "@/Redux/Api/userApi";

export interface TDashboardData {
  athletes: number
  coaches: number
  gyms: number
  promoters: number
  totalUsers: number
  stats: TStat[]
}

export interface TStat {
  date: string
  todayRegister: number
}


const DashboardOverview = () => {
  const { data, isLoading } = useGetTotalDetailsQuery(undefined);
  const dashboardData = data?.data as TDashboardData;

  
 
  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Loading />
      </div>
    );
  }
  
  return (
    <>
      <DashboardCard dashboardData={dashboardData} />
      <ChartOverview dashboardData={dashboardData} />
    </>
  );
};

export default DashboardOverview;
