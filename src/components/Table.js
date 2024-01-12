// src/Table.js
import React from "react";

const Table = ({ data }) => {
  return (
    <div className="container mx-auto relative overflow-x-auto">
      <table className="min-w-full bg-white  border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-2 border-b">Advocate name</th>
            <th className="py-2 px-2 border-b">Enrollment</th>
            <th className="py-2 px-2 border-b">Plan choosed</th>
            <th className="py-2 px-2 border-b">Amount</th>
            <th className="py-2 px-2 border-b">Paid on</th>
            <th className="py-2 px-2 border-b">Membership status</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr className="text-center" key={item.id}>
              <td className="py-2 px-2 border-b">{item.name}</td>
              <td className="py-2 px-2 border-b">{item.enrollment}</td>
              <td className="py-2 px-2 border-b">{item.plan}</td>
              <td className="py-2 px-2 border-b">{item.amount}</td>
              <td className="py-2 px-2 border-b">{item.paidOn}</td>
              <td className="py-2 px-2 border-b">{item.membershipStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
