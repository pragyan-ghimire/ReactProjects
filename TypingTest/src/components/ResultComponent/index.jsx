import React from "react";

const ResultComponent = () => {
  return (
    <div className="h-full bg-slate-700 text-white flex flex-col gap-12 justify-center items-center ">
      <div className=" text-white flex gap-12 justify-center items-center ">
        <div className="text-4xl text-center p-6 bg-slate-900 rounded-xl">
          <h2 className="mb-4">WPM</h2>
          <h3 className="text-3xl">54</h3>
        </div>
        <div className="text-4xl text-center p-6 bg-slate-900 rounded-xl">
          <h2 className="mb-4">Accuracy</h2>
          <h3 className="text-3xl">86 %</h3>
        </div>
        <div className="text-4xl text-center p-6 bg-slate-900 rounded-xl">
          <h2 className="mb-4">Total Characters</h2>
          <h3 className="text-3xl">287</h3>
        </div>
        <div className="text-4xl text-center p-6 bg-slate-900 rounded-xl">
          <h2 className="mb-4">Error characters</h2>
          <h3 className="text-3xl">53</h3>
        </div>
      </div>
      <div>
        <button className="py-3 px-6 bg-slate-900 rounded-lg">Reset</button>
      </div>
    </div>
  );
};

export default ResultComponent;
