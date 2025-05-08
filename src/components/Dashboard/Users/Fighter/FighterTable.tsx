import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";


export default function FighterTable({ fighters,  openPagination} : {fighters: any, openPagination: any}) {
  return (
    <div
      className={` ${
        openPagination ? "" : "min-h-[calc(100vh-240px)]"
      }`}
    >
      <div className="relative">
        <Table className="w-full">
          <TableHeader className="border-none" style={{ height: "60px" }}>
            <TableRow className="">
              <TableHead className="w-[150.6666666666667px] text-[#262626] text-[16px] px-0 font-semibold">
              Athlete Name
              </TableHead>
              <TableHead className="w-[150px] text-[#262626]  text-[16px] px-0 font-semibold">
              Wins
              </TableHead>
              <TableHead className="w-[150px] text-[#262626]  text-[16px] px-0 font-semibold">
              Losses
              </TableHead>
              <TableHead className="w-[150px] text-[#262626] text-[16px] px-0 font-semibold">
              Draws
              </TableHead>
              <TableHead className="w-[150px] text-[#262626] text-[16px]  px-0 font-semibold">
              (AVG) Rating
              </TableHead>
              <TableHead className="w-[80px] text-[#262626] text-[16px] px-0 font-semibold">
              Martial Arts
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="">
            {fighters.map((fighter: any, index: number) => (
              <TableRow
                key={index}
                className="border-b h-12 hover:bg-[#414141]/5 duration-300"
              >
                <TableCell className="text-[#414141] text-[16px]  px-0">
                  {fighter.name}
                </TableCell>
                <TableCell className="text-[#414141] text-[16px] px-0">
                 {fighter.wins}
                </TableCell>
                <TableCell className="text-[#414141] text-[16px] px-0">
                 {fighter.losses}
                </TableCell>
                <TableCell className="text-[#414141] text-[16px] px-0">
                  {fighter.draws}
                </TableCell>
                <TableCell className="text-[#414141] text-[16px] px-0">
                  {fighter.averageRating}
                </TableCell>
                <TableCell className="text-[#414141] text-[16px] px-0">
                  {fighter.martialArts}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {fighters.length === 0 && (
          <div className="text-center text-[#929292] text-[28px] py-12 absolute top-20 left-[40%]">
            Data Not Found
          </div>
        )}
      </div>
    </div>
  );
}
