import React, { useEffect, useState } from "react";
import data from "../../assets/data";

const TypingAreaComponent = (props) => {
  const [errorCount, setErrorCount] = useState(0);
  const testText = data[0].text;

  // checking character when disable is true
  // function checkCharacters(){
  //   for (let i = 0; i < props.text.length; i++) {
  //     if(!(props.text[i] === testText[i])){
  //       setErrorCount(prev => prev+1);
  //     }
      
  //   }
  // }

  //check for word
  function checkWords(){
    let testWords = testText.split(" ");
    let typedWords = props.text.split(" ");

    // loop with respect to number of typedWords
    for (let i = 0; i < typedWords.length; i++) {

      // if testWord has more letters that typedWord
      if(testWords[i].length > typedWords[i].length){
        for (let j = 0; j < testWords[i].length; j++) {
          // comparing each characters of testWord with typedWord
          if((typedWords[i])[j] !== (testWords[i])[j]){
            setErrorCount(prev => prev+1);
          }
        }
      }
      
      // if typedWord has more letters than testWord
      else if(typedWords[i].length > testWords[i].length){
        for (let j = 0; j < typedWords[i].length; j++) {
          // comparing each characters of typedWord with testWord
          if((testWords[i])[j] !== (typedWords[i])[j]){
            setErrorCount(prev => prev+1);
          }
        }
      }
      
      else{
        for (let j = 0; j < typedWords[i].length; j++) {
          // comparing each characters of typedWord with testWord
          if((typedWords[i])[j] !== (testWords[i])[j]){
            setErrorCount(prev => prev+1);
          }  
        }
        
      }
      
      
    }
  }

  useEffect(()=>{
    if(props.disable){
      // checkCharacters();
      checkWords();
    }

  },[props.disable, props.text]);
  
  useEffect(() => {  
    if(props.onCharCheck){
      props.onCharCheck(errorCount);
    }
    console.log(errorCount);
  }, [errorCount]);

  useEffect(() => {  
    if(props.reset){
      setErrorCount(0);
    }
  }, [props.reset,errorCount]);


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
          className="text-justify p-5 w-full bg-slate-400 leading-loose tracking-wider"
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
// TODO: If one letter is more or less then every following letters will be counted as error