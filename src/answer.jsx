import React from "react";
import './answer.css';

export default function Answer(props)
{
    return(
        <div className="answer">
            {props.ans}
        </div>
    );
}