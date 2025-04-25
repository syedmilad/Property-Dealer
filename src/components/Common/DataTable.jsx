import React from "react";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline"; // Or use your preferred icon method
import { formatCurrencyToDataTable } from "../../utils/helper";

const DataTable = ({ data, isFirstFormat = false }) => {
  if (!data || data.length === 0) {
    return <p className="text-center text-gray-500 py-4">No data available.</p>;
  }

  const headers = isFirstFormat
    ? [
        {
          key: "description", // Corresponds to the 'description' property in your data objects
          label: "Description", // Text to display in the header column
        },
        {
          key: "invoiceAmount", // Corresponds to the 'invoiceAmount' property (the first 'Amount' column)
          label: "Amount",
        },
        {
          key: "invoiceDate", // Corresponds to the 'invoiceDate' property
          label: "Invoice Date",
        },
        {
          key: "status", // Corresponds to the 'status' property
          label: "Status",
        },
        {
          key: "totalAmount", // Corresponds to the 'totalAmount' property (the second 'Amount' column)
          label: "Amount",
        },
      ]
    : [
        { key: "name", label: "Name" },
        { key: "status", label: "Status" },
        { key: "startDate", label: "Start Date" },
        { key: "endDate", label: "End Date" },
        { key: "rent", label: "Rent" },
      ];

  const renderStatusBadge = (status) => {
    let bgColor = "bg-gray-100";
    let textColor = "text-gray-700";

    console.log("status==>",status.toLowerCase())

    if (status.toLowerCase() === "active") {
      bgColor = "bg-[#70EDE2]"; // Like the image's teal/aqua color
      textColor = "text-white";
    } else if (status.toLowerCase() === "inactive") {
      bgColor = "bg-red-100";
      textColor = "text-white";
    }else if(status.toLowerCase() === "paid"){
        bgColor = "bg-[#70EDE2]"; // Like the image's teal/aqua color
        textColor = "text-white";
    }else if(status.toLowerCase() === "unpaid"){
        bgColor = "bg-[#ffde21]"
        textColor = "text-white";
    }else if(status.toLowerCase() === "hold"){
        bgColor = "bg-[#BDBDBD]"
        textColor = "text-white";
    }else if(status.toLowerCase() === "overdue"){
        bgColor = "bg-[#ED1111]"
        textColor = "text-white";
    }else if(status.toLowerCase() === "bad debt"){
        bgColor = "bg-[#ED1111]"
        textColor = "text-white";
    }

    return (
      <span
        className={`inline-block px-2.5 py-0.5 rounded-md text-xs font-medium ${bgColor} ${textColor}`}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg border border-[#B5DEF2]">
      <table className="w-full text-sm text-left text-gray-700">
        <thead className="text-xs text-gray-700 uppercase bg-sky-50 border-b border-[#B5DEF2]">
          <tr>
            {headers.map((header) => (
              <th
                key={header.key}
                scope="col"
                className="px-4 py-3 font-semibold"
              >
                <div className="flex items-center cursor-pointer justify-start gap-4 text-sm font-medium text-[#272729 ]">
                  {header.label}
                  <button className="text-gray-400 hover:text-gray-600">
                    <ChevronUpDownIcon className="w-4 h-4" />
                  </button>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={item.id || index}
              className="bg-white border-b  border-[#B5DEF2] hover:bg-sky-50/50"
              style={{ backgroundColor: index % 2 !== 0 ? "#F0F9FF" : "white" }} // Adjust color as needed
            >
              <td className="px-4 py-3 text-sm font-medium text-[#272729]">
                {item.name ? item.name : item.description}
              </td>
              <td className="px-4 py-3 text-sm font-medium text-[#272729]">
                {renderStatusBadge(item.status)}
              </td>
              <td className="px-4 py-3 text-sm font-medium text-[#272729]">
                {item.startDate ? item.startDate : item.invoiceDate}
              </td>
              <td className="px-4 py-3 text-sm font-medium text-[#272729]">
                {item.endDate ? item.endDate : item.status}
              </td>
              <td className="px-4 py-3 text-sm font-medium text-[#272729]">
                {item.rent
                  ? formatCurrencyToDataTable(item.rent)
                  : item.invoiceAmount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
