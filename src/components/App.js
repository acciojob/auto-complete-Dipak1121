
import React, { useState } from "react";
import './../styles/App.css';


const App = () => {

  const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

  const [resultArr, setResultArr] = useState(fruits);
  
  const [text, setText] = useState("");


  function handleChange(e){

    setText(e.target.value);

    if(!text){
      setResultArr(fruits);
    }
    else{
      setResultArr(fruits.filter((item)=>{
        if(item.toLowerCase().includes(text.trim().toLowerCase())){
          return true;
        }
        return false;
      }))
    }

    console.log(resultArr);
  }

   return (
    <div>
        <input type="text"
        onChange={handleChange}
        value={text}></input>
        <ul>
          {
            resultArr.map((item, index)=>{
              return(
                <li key={index}>{item}</li>
              )
            })
          }
        </ul>
    </div>
  )
}

export default App
