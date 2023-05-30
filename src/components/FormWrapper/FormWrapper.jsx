import React from "react";

const FormWrapper = ({step_number,form})=>{
    return (
        <div className="flex justify-center">
            <div className={`w-[577px] p-8 shadow my-4 bg-white`}>
                <div className="flex justify-between align-middle">
                    <h2 className="text-xl text-[#212121]">Create a job</h2>
                    <h3 className="text-base font-medium text-[#212121]">Step {step_number}</h3>
                </div>
                {form}
            </div>
        </div>
    );
}

export default FormWrapper;