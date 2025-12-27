import React from "react";
import Button from "./Button";

const Form = ({ reqType, setReqType }) => {
  return (
    <form onSubmit={(e)=>{e.preventDefault()}}>
		  <Button
			  buttonText="users"
			  setReqType={setReqType}
			  reqType={reqType}
		  />
		  	  <Button
			  buttonText="comments"
			  setReqType={setReqType}
			  reqType={reqType}
		  />
		  	  <Button
			  buttonText="post"
			  setReqType={setReqType}
			  reqType={reqType}
		  />
    </form>
  );
};

export default Form;
