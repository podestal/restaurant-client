import React from "react"

type TableStatus = "Vacant" | "Occupied" | "Reserved";

interface TableProps {
  tableNumber: string;
  guestName?: string;
  status: TableStatus;
  seats: 2 | 4 | 6 | 8;
}

const Table: React.FC<TableProps> = ({ tableNumber, guestName, status, seats }) => {
  const tableClass = "relative dark:bg-gray-800 bg-slate-100 rounded-2xl flex items-center justify-center border-2 border-slate-900";
  const seatClass = "absolute w-8 h-10 dark:bg-gray-800 bg-slate-200  rounded-full border-[1px] border-slate-900 "; // Seat style

  // Status color classes
  const statusColor = {
    Vacant: "bg-green-500",
    Occupied: "bg-blue-500",
    Reserved: "bg-yellow-500",
  }[status];

  // Position seats based on the number of seats
  const seatPositions = {
    2: ["top-1/2 left-[-18px] transform -translate-y-1/2", "top-1/2 right-[-18px] transform -translate-y-1/2"],
    4: ["top-[-18px] left-1/2 transform  w-[2.5rem] h-[32px] -translate-x-1/2", "bottom-[-18px] left-1/2 w-[2.5rem] h-[32px] transform -translate-x-1/2", "top-1/2 left-[-18px] transform -translate-y-1/2", "z-0 top-1/2 right-[-18px] transform -translate-y-1/2"],
    6: ["top-3 left-0 transform -translate-x-1/2", "bottom-3 left-0 transform -translate-x-1/2", "top-1/2 left-[-18px] transform -translate-y-1/2", "top-1/2 right-[-18px] transform -translate-y-1/2", "top-3 left-[78px] transform -translate-x-1/2", "bottom-3 left-[78px] transform -translate-x-1/2"],
    8: ["top-0 left-1/4", "top-0 right-1/4", "bottom-0 left-1/4", "bottom-0 right-1/4", "top-1/2 left-0 transform -translate-y-1/2", "top-1/2 right-0 transform -translate-y-1/2", "top-0 left-1/2 transform -translate-x-1/2", "bottom-0 left-1/2 transform -translate-x-1/2"]
  }[seats];

  return (
    <div className={`cursor-pointer shadow-2xl shadow-gray-700 ${tableClass} ${seats === 2 ? "w-24 h-20" : seats === 4 ? "w-32 h-[5.6rem]" : seats === 6 ? "w-20 h-48" : "w-40 h-20"}`}>
      {/* Seats */}
      {seatPositions.map((position, index) => (
        <div key={index} className={`${seatClass} ${position}`} />
      ))}

      {/* Table Content */}
      <div className={`flex flex-col items-center p-2 text-white`}>
        <div className={`${statusColor} w-[16px] h-full absolute top-0 right-4 z-10`} />
        <span className="text-xs font-bold dark:text-slate-400 text-slate-800">T{tableNumber}</span>
        {guestName && <span className="text-xs z-20 dark:text-slate-50 text-black mt-2">{guestName}</span>}
      </div>
    </div>
  );
};

export default Table;
