import React from "react";

const Form2 = ()=>{
    return (
        <form>
            <div>
                <div>
                    <label className="mt-6 text-label block">Experience</label>
                </div>
                <div className="flex">
                    <input className="mt-1 mr-2 w-full border text-input-box border-input-border px-2 py-1 outline-0 text-sm font-normal" placeholder="Minimum"></input>
                    <input className="mt-1 ml-2 w-full border text-input-box border-input-border px-2 py-1 outline-0 text-sm font-normal" placeholder="Maximum"></input>
                </div>
            </div>
            <div>
                <div>
                    <label className="mt-6 text-label block">Salary</label>
                </div>
                <div className="flex">
                    <input className="mt-1 mr-2 w-full border text-input-box border-input-border px-2 py-1 outline-0 text-sm font-normal" placeholder="Minimum"></input>
                    <input className="mt-1 ml-2 w-full border text-input-box border-input-border px-2 py-1 outline-0 text-sm font-normal" placeholder="Maximum"></input>
                </div>
            </div>
            <div>
                <label className="mt-6 text-label block">Total employee</label>
                <input className="mt-1 w-full border text-input-box border-input-border px-2 py-1 outline-0 text-sm font-normal" placeholder="ex. Google"></input>
            </div>
            <div>
                <label className="mt-6 text-label block">Apply type</label>
                <input className="mr-1" type="radio" name="applyType"></input>
                <label className="text-input-box text-sm mr-4">Quick apply</label>
                <input type="radio" className="mr-1" name="applyType"></input>
                <label className="text-input-box text-sm">External apply</label>
            </div>
            <button className="bg-sky-600 text-white py-1 px-4 mt-24 rounded float-right">Save</button>
        </form>
    );
}

export default Form2;