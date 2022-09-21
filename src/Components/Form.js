import React, { useRef } from "react";
const Form = () => {
  const inputText = useRef();
  const method = () => {
    console.log(inputText.current);
  };
  return (
    <>
      <input type="text" ref={inputText} />
      <button onClick={method}>Click</button>
    </>
  );
};

export default Form;
