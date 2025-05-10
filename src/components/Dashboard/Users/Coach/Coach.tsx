"use client";
import { useState } from "react";
import Loading from "@/components/utils/Loading";
import CoachTable from "./CoachTable";
import ReusablePagination from "@/components/utils/ReusablePagination";
import { useGetAllCoachQuery } from "@/Redux/Api/userApi";

const Coach = () => {
  const ITEMS_PER_PAGE = 12; // Number of items per page
  const MAX_VISIBLE_BTN = 4; // Maximum number of visible pagination buttons
  const [currentPage, setCurrentPage] = useState(1);

  const queryParams = [
    { name: "page", value: currentPage },
    { name: "limit", value: ITEMS_PER_PAGE },
    { name: "meta", value: true },
  ];
  const { data: getResponse, isLoading } = useGetAllCoachQuery(queryParams); //
  if (isLoading) return <Loading />;
  const coachs = getResponse?.data.data || [];
  const totalPages = getResponse?.data.meta?.total_pages ?? 0;

  const openPagination = coachs.length > 0 && totalPages > 1;

  return (
    <div>
      <CoachTable coachs={coachs} openPagination={openPagination} />

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

export default Coach;
