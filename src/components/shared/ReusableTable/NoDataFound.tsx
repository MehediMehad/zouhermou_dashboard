interface NoDataFoundProps {
  message?: string;
  customClass?: string;
}

const NoDataFound: React.FC<NoDataFoundProps> = ({
  message = "Data Not Found",
  customClass = "",
}) => {
  return (
    <div
      className={`text-center text-[#929292] text-[28px] py-12 ${customClass}`}
    >
      {message}
    </div>
  );
};

export default NoDataFound;
