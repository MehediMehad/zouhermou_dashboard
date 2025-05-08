import CustomerOverview from "@/components/Dashboard/Customer/CustomerOverview";
import DashboardContent from "@/components/shared/DashboardContent";

const CustomerListPage = () => {
  return (
    <DashboardContent>
    <div className="flex w-full flex-col border-[1px] bg-[#D9D9D9]/20 border-[#747474] rounded-sm max-h-[calc(100vh-120px)] min-h-[calc(100vh-120px)] overflow-y-auto">
      <main className="flex flex-1 flex-col px-4 pt-4 border h-full">
      <CustomerOverview/>
      </main>
    </div>
  </DashboardContent>
  );
};

export default CustomerListPage;