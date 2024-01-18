import React from "react";
import jobListData from "../data/jobs";
import JobItem from "./job-item";

function Jobslist() {
  return (
    <ul className="grid max-w-[1440px] lg:grid-cols-2  w-full ">
      {jobListData.map((job, index) => (
        <li key={index}>
          <JobItem job={job} />
        </li>
      ))}
    </ul>
  );
}

export default Jobslist;
