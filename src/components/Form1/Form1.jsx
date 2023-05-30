import React from "react";

const Form1 = ()=>{
    return (
        <form>
            <div>
                <label className="mt-6 text-label block">Job title</label>
                <input className="mt-1 w-full border text-input-box border-input-border px-2 py-1 outline-0 text-sm font-normal" placeholder="ex. UX UI Designer"></input>
            </div>
            <div>
                <label className="mt-6 text-label block">Company name</label>
                <input className="mt-1 w-full border text-input-box border-input-border px-2 py-1 outline-0 text-sm font-normal" placeholder="ex. Google"></input>
            </div>
            <div>
                <label className="mt-6 text-label block">Industry</label>
                <input className="mt-1 w-full border text-input-box border-input-border px-2 py-1 outline-0 text-sm font-normal" placeholder="ex. Information Technology"></input>
            </div>
            <div className="flex">
                <div className="w-full mr-2">
                    <label className="mt-6 text-label block">Location</label>
                    <input className="mt-1 border w-full text-input-box border-input-border px-2 py-1 outline-0 text-sm font-normal" placeholder="ex. Chennai"></input>
                </div>
                <div className="w-full ml-2">
                    <label className="mt-6 text-label block">Remote type</label>
                    <input className="mt-1 border w-full text-input-box border-input-border px-2 py-1 outline-0 text-sm font-normal" placeholder="ex. In-office"></input>
                </div>
            </div>
            <button className="bg-sky-600 text-white py-1 px-4 mt-24 rounded float-right">Next</button>
        </form>
    );
}

export default Form1;