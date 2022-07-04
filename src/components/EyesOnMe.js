// Code EyesOnMe Component Here
import React from "react"; 

function EyesOnMe () {
    function handleBlur(event) {
        console.log("Hey! Eyes on me!");
      }
      function handleFocus(event) {
        console.log("Good!"); 
      }
    
      return (
        <div>
          <button onBlur={() => handleBlur()} onFocus={() => handleFocus()} >Eyes on me</button>
        </div>
      );
}




export default EyesOnMe; 