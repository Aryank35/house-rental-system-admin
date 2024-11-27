import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyCheckDollar, faInbox } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const links = [
    { to: "/rentPaymentList", label: "Payment Stats", icon: faMoneyCheckDollar },
    { to: "/complaints", label: "Complaints", icon: faInbox },
    { to: "/noticeBoard", label: "Notice Board", icon: faInbox },
    { to: "/electricityBill", label: "Electricity Bill", icon: faInbox },
    { to: "/tenantsDetails", label: "Tenants Details", icon: faInbox },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-blue-50 py-8 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-6xl">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className="transition-transform transform hover:scale-105 shadow-lg rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 flex flex-col items-center justify-center space-y-4 hover:shadow-xl"
          >
            <FontAwesomeIcon icon={link.icon} className="text-4xl" />
            <span className="text-lg font-semibold">{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
