
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TEvent } from "@/types";


export default function EventsTable({ upcomingEvents,  openPagination} : {upcomingEvents: TEvent[], openPagination: any}) {


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
              Event Title
              </TableHead>
              <TableHead className="w-[150px] text-[#262626]  text-[16px] px-0 font-semibold">
              Event Date
              </TableHead>
              <TableHead className="w-[150px] text-[#262626] text-[16px] px-0 font-semibold">
              TIme
              </TableHead>
              <TableHead className="w-[150px] text-[#262626] text-[16px]  px-0 font-semibold">
               Joins
              </TableHead>
              <TableHead className="w-[80px] text-[#262626] text-[16px] px-0 font-semibold">
              Event Link
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="">
            {upcomingEvents.map((event: TEvent, index: number) => (
              <TableRow
                key={index}
                className="border-b h-12 hover:bg-[#414141]/5 duration-300"
              >
                <TableCell className="text-[#414141] text-[16px]  px-0">
                  {event.title}
                </TableCell>
                <TableCell className="text-[#414141] text-[16px] px-0">
                 {event.date}
                </TableCell>
                <TableCell className="text-[#414141] text-[16px] px-0">
                  {event.time}
                </TableCell>
                <TableCell className="text-[#414141] text-[16px] px-0">
                  {event.attendees}
                </TableCell>
                <TableCell className="text-[#414141] text-[16px] px-0">
                  <a className="underline hover:text-blue-500 duration-300" href={event.ticketLink} target="_blank" rel="noopener noreferrer">Link</a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {upcomingEvents.length === 0 && (
          <div className="text-center text-[#929292] text-[28px] py-12 absolute top-20 left-[40%]">
            Data Not Found
          </div>
        )}
      </div>
    </div>
  );
}
