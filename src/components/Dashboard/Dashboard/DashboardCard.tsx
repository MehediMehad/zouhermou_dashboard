import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BsArrowUp } from "react-icons/bs";
import { CiMoneyCheck1 } from "react-icons/ci";

const DashboardCard = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

    <Card className="shadow-none border-[#74747480]">
      <CardContent className="p-6">
        <div className="flex items-center justify-between ">
          <div className="flex flex-col justify-between w-full space-y-2">
            <div className="h-11 w-11 p-1 border rounded-full border-[#D9D9D9] flex items-center justify-center">
              <CiMoneyCheck1 className="h-6 w-6 text-primary" />
            </div>
            <p className="text-[#808080] text-[1rem]">
              Total Athlete
            </p>
            <div className="flex justify-between items-baseline gap-1">
              <h3 className="text-4xl font-bold leading-[100%] tracking-[-3%]">
                 500 
              </h3>
              {/*TODO: hidden */}
              <Badge className="bg-[#E9FFEC] text-[#023621] shadow-none border-[1px] border-[#023621] hover:bg-[#E9FFEC] px-1 hidden">
                <span className="pr-[2px]">
                  <BsArrowUp />
                </span>
                2.63%
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    <Card className="shadow-none border-[#74747480]">
      <CardContent className="p-6">
        <div className="flex items-center justify-between ">
          <div className="flex flex-col justify-between w-full space-y-2">
            <div className="h-11 w-11 p-1 border rounded-full border-[#D9D9D9] flex items-center justify-center">
              <CiMoneyCheck1 className="h-6 w-6 text-primary" />
            </div>
            <p className="text-[#808080] text-[1rem]">
            Total Coach
            </p>
            <div className="flex justify-between items-baseline gap-1">
              <h3 className="text-4xl font-bold leading-[100%] tracking-[-3%]">
                500
              </h3>
              {/*TODO: hidden */}
              <Badge className="bg-[#E9FFEC] text-[#023621] shadow-none border-[1px] border-[#023621] hover:bg-[#E9FFEC] px-1 hidden">
                <span className="pr-[2px]">
                  <BsArrowUp />
                </span>
                2.63%
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    <Card className="shadow-none border-[#74747480]">
      <CardContent className="p-6">
        <div className="flex items-center justify-between ">
          <div className="flex flex-col justify-between w-full space-y-2">
            <div className="h-11 w-11 p-1 border rounded-full border-[#D9D9D9] flex items-center justify-center">
              <CiMoneyCheck1 className="h-6 w-6 text-primary" />
            </div>
            <p className="text-[#808080] text-[1rem]">
            Total Gym Owner
            </p>
            <div className="flex justify-between items-baseline gap-1">
              <h3 className="text-4xl font-bold leading-[100%] tracking-[-3%]">
                500
              </h3>
              {/*TODO: hidden */}
              <Badge className="bg-[#E9FFEC] text-[#023621] shadow-none border-[1px] border-[#023621] hover:bg-[#E9FFEC] px-1 hidden">
                <span className="pr-[2px]">
                  <BsArrowUp />
                </span>
                2.63%
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    <Card className="shadow-none border-[#74747480]">
      <CardContent className="p-6">
        <div className="flex items-center justify-between ">
          <div className="flex flex-col justify-between w-full space-y-2">
            <div className="h-11 w-11 p-1 border rounded-full border-[#D9D9D9] flex items-center justify-center">
              <CiMoneyCheck1 className="h-6 w-6 text-primary" />
            </div>
            <p className="text-[#808080] text-[1rem]">
           Total Promoter
            </p>
            <div className="flex justify-between items-baseline gap-1">
              <h3 className="text-4xl font-bold leading-[100%] tracking-[-3%]">
                500
              </h3>
              {/* <Badge className="bg-[#E9FFEC] text-[#023621] shadow-none border-[1px] border-[#023621] hover:bg-[#E9FFEC] px-1">
                <span className="pr-[2px]">
                  <BsArrowUp />
                </span>
                2.63%
              </Badge> */}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

  </div>
  );
};

export default DashboardCard;