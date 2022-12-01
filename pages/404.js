import { FaExclamationTriangle } from "react-icons/fa";

function NotFoundPage() {
  return (
    <div className="flex flex-col gap-5 lg:gap-10 justify-center items-center h-[450px] lg:h-[650px] bg-gray-100 ">
      <div className="mt-[146px] flex items-center gap-3 text-[40px] lg:text-[60px] font-semibold text-[#cc0000]">
        <span>
          <FaExclamationTriangle />
        </span>

        <h1>404!</h1>
      </div>
      <h1 className="text-[30px] lg:text-[40px] font-semibold text-red-500">
        Page Not Found
      </h1>
    </div>
  );
}

NotFoundPage.pageDetails = {
  title: "Page Not Found",
  description: "Page Not Found",
  keywords: "Page Not Found",
};

export default NotFoundPage;
