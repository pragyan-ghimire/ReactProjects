import React from "react";

const ResultComponent = (props) => {
  const totalCharacterTyped = props.totalCharacterCount;
  const correctCharcterTyped = (totalCharacterTyped - props.errorCharacterCount);
  const wpm = ((totalCharacterTyped/5)/0.5).toFixed(0); // for 30 seconds
  const accuracy = totalCharacterTyped == 0 ? 0 :((correctCharcterTyped/totalCharacterTyped) * 100).toFixed(0);
  return (
    <div className="h-full bg-slate-700 text-white flex flex-col gap-12 justify-center items-center ">
      <div className=" text-white flex gap-12 justify-center items-center ">
        <div className="text-4xl text-center p-6 bg-slate-900 rounded-xl">
          <h2 className="mb-4">WPM</h2>
          <h3 className="text-3xl">{wpm}</h3>
        </div>
        <div className="text-4xl text-center p-6 bg-slate-900 rounded-xl">
          <h2 className="mb-4">Accuracy</h2>
          <h3 className="text-3xl">{accuracy} %</h3>
        </div>
        <div className="text-4xl text-center p-6 bg-slate-900 rounded-xl">
          <h2 className="mb-4">Total Characters</h2>
          <h3 className="text-3xl">{totalCharacterTyped}</h3>
        </div>
        <div className="text-4xl text-center p-6 bg-slate-900 rounded-xl">
          <h2 className="mb-4">Error characters</h2>
          <h3 className="text-3xl">{props.errorCharacterCount}</h3>
        </div>
      </div>
      <div>
        <button className="py-3 px-6 bg-slate-900 rounded-lg" onClick={props.resetToDefault}>Reset</button>
      </div>
    </div>
  );
};

export default ResultComponent;
