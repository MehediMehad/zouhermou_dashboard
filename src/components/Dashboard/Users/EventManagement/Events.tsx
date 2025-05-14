"use client";
import { useState } from "react";
import Loading from "@/components/utils/Loading";
import ReusablePagination from "@/components/utils/ReusablePagination";
import EventsTable from "./EventsTable";
import { useGetAllEventQuery } from "@/Redux/Api/userApi";

const Events = () => {
  const ITEMS_PER_PAGE = 12; // Number of items per page
  const MAX_VISIBLE_BTN = 4; // Maximum number of visible pagination buttons
  const [currentPage, setCurrentPage] = useState(1);

  const queryParams = [
    { name: "page", value: currentPage },
    { name: "limit", value: ITEMS_PER_PAGE },
    { name: "meta", value: true },
  ];
  const { data: getResponse, isLoading } = useGetAllEventQuery(queryParams); 
  if (isLoading) return <Loading />;
  console.log(getResponse);
  const events = getResponse?.data.data || [];
  const totalPages = getResponse?.data.meta?.total_pages ?? 0;

  const openPagination = events.length > 0 && totalPages > 1;



  return (
    <div>
      <EventsTable upcomingEvents={events} openPagination={openPagination} />

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

export default Events;
