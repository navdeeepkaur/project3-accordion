import React, {useState} from "react";
import './question.css';
import Answer from "./answer";

export default function Question(props)
{
    var [reveal, setReveal]=useState(false);
    var [style, setStyle]=useState("question");
    var [btn, setBtn]=useState("fa-solid fa-plus");

    const handleClick=()=>{
    setReveal(!reveal);
    {(style=="question")?setStyle("question2"):setStyle("question")}
    {(btn=="fa-solid fa-plus")?setBtn("fa-solid fa-xmark"):setBtn("fa-solid fa-plus")}
    }
    
    return(
        <>
            <div className={style}>
                <span>{props.ques}</span>
                <i  className={btn} onClick={handleClick}></i>
            </div>
            {reveal?<Answer ans={props.ans}/>:null}
        </>
    );
}