import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TableProps {
  columns: { label: string; field: string }[]; // Define column headers and their corresponding fields
  data: any[]; // Data to be displayed in the table
}

const ReusableTable: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <Table className="w-full">
      <TableHeader className="border-none" style={{ height: "60px" }}>
        <TableRow>
          {columns.map((column, index) => (
            <TableHead
              key={index}
              className="w-[150px] text-[#262626] text-[16px] px-0 font-semibold"
            >
              {column.label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, index) => (
          <TableRow
            key={index}
            className="border-b h-12 hover:bg-[#414141]/5 duration-300"
          >
            {columns.map((column, colIndex) => (
              <TableCell
                key={colIndex}
                className="text-[#414141] text-[16px] px-0"
              >
                {row[column.field]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ReusableTable;
