import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyCheckDollar, faInbox } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-between mx-2 h-[40vh] items-center">
        <Link
          to="/rentPaymentList"
          className="shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 bg-blue-500 text-white font-bold px-3 py-6 text-sm h-[100px] mt-[30px] rounded-md w-[45%] md:w-[23%] md:h-[120px] md:text-lg text-center "
        >
          <div className=" text-center flex flex-col justify-center items-center">
            <span>
              <FontAwesomeIcon icon={faMoneyCheckDollar} className="text-2xl" />
            </span>
            <span> Payment Stats</span>
          </div>
        </Link>
        <Link
          to="/complaints"
          className="shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 bg-blue-500 text-white font-bold px-5 py-6 text-sm h-[100px] mt-[30px] rounded-md w-[45%] md:w-[23%] md:h-[120px] md:text-lg text-center "
        >
          <div className=" text-center flex flex-col justify-center items-center">
            <span>
              <FontAwesomeIcon icon={faInbox} className="text-2xl" />
            </span>
            <span> Complaints</span>
          </div>
        </Link>

        <Link
          to="/noticeBoard"
          className="shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 bg-blue-500 text-white font-bold px-3 py-6 text-sm h-[100px] mt-[30px] rounded-md w-[45%] md:w-[23%] md:h-[120px] md:text-lg text-center "
        >
          <div className=" text-center flex flex-col justify-center items-center">
            <span>
              <FontAwesomeIcon icon={faInbox} className="text-2xl" />
            </span>
            <span> Notices Board</span>
          </div>
        </Link>
        <Link
          to="/electricityBill"
          className="shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 bg-blue-500 text-white font-bold px-3 py-6 text-sm h-[100px] mt-[30px] rounded-md w-[45%] md:w-[23%] md:h-[120px] md:text-lg text-center "
        >
          <div className=" text-center flex flex-col justify-center items-center">
            <span>
              <FontAwesomeIcon icon={faInbox} className="text-2xl" />
            </span>
            <span> Electricity Bill</span>
          </div>
        </Link>
        <Link
          to="/tenantsDetails"
          className="shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 bg-blue-500 text-white font-bold px-3 py-6 text-sm h-[100px] mt-[30px] rounded-md w-[45%] md:w-[23%] md:h-[120px] md:text-lg text-center "
        >
          <div className=" text-center flex flex-col justify-center items-center">
            <span>
              <FontAwesomeIcon icon={faInbox} className="text-2xl" />
            </span>
            <span> Tenants Details</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
