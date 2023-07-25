import React from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";

const Priority = () => {
  return (
    <Layout>
      <div className="lg:pl-64 lg:pr-64 lg:pt-28 bg-gray-900 m-auto lg:py-8 min-h-screen ">
        <div className="flex flex-wrap lg:flex-nowrap lg:flex-row gap-4 pl-6 pr-6 lg:pl-32 lg:pr-32">
        <Link
            to="/priority/preemptive"
            className="flex flex-col bg-amber-50 hover:bg-amber-100 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 hover:scale-105 lg:mr-10"
          >
            <img
              src={require("../assets/Priority Preemptive.png")}
              className="max-w-full rounded-md transition"
              alt=""
            />
            <h2 className="text-xl font-semibold mb-2 mt-3">
              Priority Scheduling <br /> <span className="text-xs text-neutral-400">(Pre-emptive)</span>
            </h2>
            <p className="text-gray-700">
              Simulate the Priority Scheduling CPU scheduling algorithm.
            </p>
          </Link>
        <Link
            to="/priority/non-preemptive"
            className="flex flex-col bg-amber-50 hover:bg-amber-100 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 hover:scale-105 lg:ml-10"
          >
            <img
              src={require("../assets/Priority Non Preemptive.png")}
              className="max-w-full rounded-md transition"
              alt=""
            />
            <h2 className="text-xl font-semibold mb-2 mt-3">
              Priority Scheduling <br /> <span className="text-xs text-neutral-400">(Non Pre-emptive)</span>
            </h2>
            <p className="text-gray-700">
              Simulate the Priority Scheduling CPU scheduling algorithm.
            </p>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Priority;
