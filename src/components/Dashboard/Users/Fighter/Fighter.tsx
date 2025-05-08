"use client";
import { useState } from "react";
import Loading from "@/components/utils/Loading";
import { useGetAllFighterQuery } from "@/Redux/Api/userApi";
import FighterTable from "./FighterTable";
import ReusablePagination from "@/components/utils/ReusablePagination";

const Fighter = () => {
  const ITEMS_PER_PAGE = 12; // Number of items per page
  const MAX_VISIBLE_BTN = 4; // Maximum number of visible pagination buttons
  const [currentPage, setCurrentPage] = useState(1);

  const queryParams = [
    { name: "page", value: currentPage },
    { name: "limit", value: ITEMS_PER_PAGE },
    { name: "meta", value: true },
  ];
  const { data: getResponse, isLoading } = useGetAllFighterQuery(queryParams); //
  if (isLoading) return <Loading />;
  const fighters = getResponse?.data.data || [];
  const totalPages = getResponse?.data.meta?.total_pages ?? 0;
  
  const openPagination = fighters.length > 0 && totalPages > 1;
  
  return (
    <div>
      <FighterTable fighters={fighters} openPagination={openPagination} />

      {/* Pagination */}
      {openPagination && (
        <ReusablePagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          maxVisiblePages={MAX_VISIBLE_BTN}
        />
      )}
    </div>
  );
};

export default Fighter;
