import React, { useEffect, useState } from "react";
import data from "../../assets/data";

const TypingAreaComponent = (props) => {
  const [errorCount, setErrorCount] = useState(0);
  const testText = data[0].text;

  // checking character when disable is true
  function checkCharacters(){
    for (let i = 0; i < props.text.length; i++) {
      if(!(props.text[i] === testText[i])){
        setErrorCount(prev => prev+1);
      }
      
    }
  }

  useEffect(()=>{
    if(props.disable){
      checkCharacters();
    }
  },[props.disable, props.text]);
  
  useEffect(() => {  
    if(props.onCharCheck){
      props.onCharCheck(errorCount);
    }
    console.log(errorCount);
  }, [errorCount]);

  return (
    <div className="flex flex-col items-center bg-slate-100">
      <div className="relative w-2/3 text-4xl bg-slate-50 font-roboto overflow-hidden">
        <h3 className="p-5 text-3xl w-fit bg-slate-800 text-slate-50">
          {props.time}
        </h3>
        <p className=" text-justify leading-loose tracking-wider  text-slate-500">
          {testText}
        </p>
        <textarea
          className="text-justify p-5 w-full bg-slate-400 leading-loose tracking-wider overflow-hidden"
          id="typingArea"
          type="text"
          name="typedText"
          value={props.text}
          onChange={props.onChange}
          disabled={props.disable}
          autoFocus
        />
      </div>
    </div>
  );
};

export default TypingAreaComponent;
