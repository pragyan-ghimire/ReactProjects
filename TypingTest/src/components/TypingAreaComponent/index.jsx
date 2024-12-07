import React, { useEffect, useState } from "react";
import data from "../../assets/data";

const TypingAreaComponent = (props) => {
  return (
    <div className="flex flex-col items-center bg-slate-100">
      <div className="relative w-2/3 text-4xl bg-slate-50 font-roboto overflow-hidden">
        <h3 className="p-5 text-3xl w-fit bg-slate-800 text-slate-50">
          {props.time}
        </h3>
        <p className=" text-justify leading-loose tracking-wider  text-slate-500">
          {data[0].text}
        </p>
        <textarea
          className="text-justify p-5 w-full bg-slate-400 leading-loose tracking-wider overflow-hidden"
          type="text"
          name="typedText"
          value={props.text}
          onChange={props.onChange}
          disabled={props.disable}
        />
      </div>
    </div>
  );
};

export default TypingAreaComponent;
