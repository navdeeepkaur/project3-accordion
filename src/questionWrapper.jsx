import React from "react";
import './questionWrapper.css';
import Question from "./question";

export default function QuestionWrapper(props)
{
    return(
        <div className="questionWrapper">
            <p>FAQ's</p>
            <Question ques="What is ReactJS?" ans="React is a front-end JavaScript library 
                                                            developed by Facebook in 2011. It follows the 
                                                            component based approach which helps in building 
                                                            reusable UI components."/>
            <Question ques="What are ReactJS Components?" ans="Components are the building blocks of a React 
                                                             application’s UI. These components split up the 
                                                             entire UI into small independent and reusable pieces. 
                                                             Then it renders each of these components independent 
                                                             of each other without affecting the rest of the UI."/>
            <Question ques="How many types of components available in ReactJS?" ans="There are 2 types of components in
                                                                                    React. They are Functional Components
                                                                                    and Class Components."/>
            <Question ques="What is JSX?" ans="JSX is a shorthand for JavaScript XML. This is 
                                               a type of file used by React which utilizes the 
                                               expressiveness of JavaScript along with HTML like 
                                               template syntax. "/>
            <Question ques="Why can't browsers read JSX?" ans="Browsers can only read JavaScript objects but 
                                                               JSX in not a regular JavaScript object. Thus to 
                                                               enable a browser to read JSX, first, we need to 
                                                               transform JSX file into a JavaScript object using 
                                                               JSX transformers like Babel and then pass it to the browser."/>
        </div>
    );
}