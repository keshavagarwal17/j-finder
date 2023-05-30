import React from "react";

const JobCard = ({data}) =>{
    return (
        <div className="flex shadow bg-white py-4 px-6 m-3">
            <div className="mr-2">
                <img src="images/logo.png" alt="" />
            </div>
            <div className="text-[#212121] text-base">
                <div className="text-2xl">{data.jobTitle}</div>
                <div>{data.companyName} - {data.industry}</div>
                <div className="text-[#4D4D4D]">{data.location} ({data.remoteType})</div>
                <div className="mt-5">
                    <div className="my-1">Part-Time ({data.timing} IST)</div>
                    <div className="my-1">Experience ({data.experience.minimum} - {data.experience.maximum} years)</div>
                    <div className="my-1">INR (₹) {data.salary.minimum} - {data.salary.maximum} / Month</div>
                    <div className="my-1">{data.employee} employees</div>
                    <div className="mt-5">
                    {
                        data.applyType ? 
                            <button className="text-[#00A1FF] border border-[#00A1FF] px-4 py-2 font-medium rounded-md cursor-pointer shadow-sm">External Apply</button>
                            :
                            <button className="bg-[#00A1FF] text-white px-4 py-2 font-medium rounded-md cursor-pointer shadow-sm">Apply Now</button>
                    }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobCard;