import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Events from "./Events";

const EventManagementOverview = () => {
  return (
    <Tabs
      defaultValue="Events"
      className="w-full h-[82vh] bg-white border border-[#D9D9D9] overflow-y-scroll rounded-[4px]"
    >
      <div className="pt-4 pb-2">
        <TabsList className="px-5 py-4 bg-white shadow-none border-none">
          <TabsTrigger
            value="Events"
            className="text-[15px] max-w-[197px] font-semibold border-b-2 border-[#808080] pb-1 text-center text-[#808080] rounded-none px-10"
          >
            Events
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="Events">
        <Events/>
      </TabsContent>
    </Tabs>
  );
};

export default EventManagementOverview;
