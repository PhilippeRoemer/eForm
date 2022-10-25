import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Form() {
    const [toggleQuestion, setToggleQuestion] = useState(false);
    const [formTitle, setFormTitle] = useState("Untitled Form");
    const [toggleEditFormTitle, setToggleEditFormTitle] = useState(false);
    const [questions, setQuestions] = useState([]);

    const addMultipleChoiceQuestion = () => {
        setQuestions([...questions, { type: "Multiple Choice", options: 1 }]);
    };

    const addTextQuestion = () => {
        setQuestions([...questions, { type: "Text" }]);
    };

    const addRatingQuestion = () => {
        setQuestions([...questions, { type: "Rating" }]);
    };

    return (
        <div>
            <div>
                <Link to="/dashboard" className="defaultButton">
                    Back
                </Link>

                {toggleEditFormTitle === false ? <h1 onClick={() => setToggleEditFormTitle(!toggleEditFormTitle)}>{formTitle}</h1> : <input type="text" defaultValue={formTitle} onChange={(e) => setFormTitle(e.target.value)} onBlur={() => setToggleEditFormTitle(!toggleEditFormTitle)} autoFocus />}

                <div className="defaultButton" onClick={() => setToggleQuestion(!toggleQuestion)}>
                    {toggleQuestion === true ? "- " : "+ "}Add new
                </div>
                {toggleQuestion === true ? (
                    <div className="formOptionsContainer">
                        <div onClick={addMultipleChoiceQuestion}>
                            <p>Multiple Choice</p>
                        </div>
                        <div onClick={addTextQuestion}>
                            <p>Text</p>
                        </div>
                        <div onClick={addRatingQuestion}>
                            <p>Rating</p>
                        </div>
                    </div>
                ) : null}
                {questions.map((question, i) => {
                    if (i > 0) {
                        return (
                            <div className="addedQuestion">
                                <p id={i}>
                                    {question.type}
                                    {question.options}
                                </p>
                                <div>Up</div>
                                <div>Down</div>
                            </div>
                        );
                    } else {
                        return (
                            <div className="addedQuestion">
                                <p id={i}>
                                    {question.type}
                                    {question.options}
                                </p>
                                <div>Down</div>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
}

export default Form;
