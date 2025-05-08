import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Fighter from "./Fighter/Fighter";

const UsersOverview = () => {
  return (
    <Tabs
      defaultValue="Fighter"
      className="w-full h-[82vh] bg-white border border-[#D9D9D9] overflow-y-scroll rounded-[4px]"
    >
      <div className="pt-4 pb-2">
        <TabsList className="px-5 py-4 bg-white shadow-none border-none">
          <TabsTrigger
            value="Fighter"
            className="text-[15px] max-w-[197px] font-semibold border-b-2 border-[#808080] pb-1 text-center text-[#808080] rounded-none px-10"
          >
            Athlete (Fighter)
          </TabsTrigger>
          <TabsTrigger
            value="Coach"
            className="text-[15px] max-w-[197px] font-semibold border-b-2 border-[#808080] pb-1 text-center text-[#808080] rounded-none px-10"
          >
            Coach
          </TabsTrigger>
          <TabsTrigger
            value="Gym Owner"
            className="text-[15px] max-w-[197px] font-semibold border-b-2 border-[#808080] pb-1 text-center text-[#808080] rounded-none px-10"
          >
            Gym Owner
          </TabsTrigger>
          <TabsTrigger
            value="Promoter"
            className="text-[15px] max-w-[197px] font-semibold border-b-2 border-[#808080] pb-1 text-center text-[#808080] rounded-none px-10"
          >
            Promoter
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="Fighter">
        <Fighter/>
      </TabsContent>

      <TabsContent value="Create Service">
        <h1>ggggg</h1>
      </TabsContent>
    </Tabs>
  );
};

export default UsersOverview;