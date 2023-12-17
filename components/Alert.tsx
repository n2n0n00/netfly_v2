import { Alert } from "@/lib/useAlert";
import React from "react";

const AlertComponent: React.FC<Alert> = ({ type, text }) => {
  return (
    <div className="inset-x-0 top-10 flex items-center justify-center m-10">
      <div
        className={`p-2 ${
          type === "danger" ? "bg-red-800" : "bg-blue-800"
        } flex items-center leading-none text-indigo-100 lg:inline-flex lg:rounded-full`}
        role="alert"
      >
        <p
          className={`flex rounded-full ${
            type === "danger" ? "bg-red-500" : "bg-blue-500"
          } mr-3 px-2 py-1 text-xs font-semibold uppercase`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p className="mr-2 text-left">{text}</p>
      </div>
    </div>
  );
};

export default AlertComponent;
