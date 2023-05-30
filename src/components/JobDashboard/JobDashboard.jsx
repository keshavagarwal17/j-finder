import React from "react";
import { data } from "../../data/data";
import JobCard from "../JobCard/JobCard";

const JobDashboard = () =>{
    return (
        <div className="flex flex-wrap m-4">
            {
                data.map((jobData,index)=><div className="flex-[1_0_34%]" key={index}><JobCard data={jobData}/></div>)
            }
        </div>
    );
}

export default JobDashboard;