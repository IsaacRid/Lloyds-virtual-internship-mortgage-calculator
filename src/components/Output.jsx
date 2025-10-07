import { useState } from "react";
import { mortgageTerms } from "../utils/mortgageTerms";

export default function Input(props) {
    const { title, name, value } = props;
    const [showDescription, setShowDescription] = useState(false);

    return (
        <div className="output-label-group">
            <label className="output-label" htmlFor={name}>{title}</label>
            <div className="output-field">
                {"£" + value}
            </div>
            <button className="question-button" type="button" onClick={() => setShowDescription(!showDescription)}>
                <i className="fa-solid fa-question"></i>
            </button>
            <p className="word-description" style={{ display: showDescription ? "block" : "none" }}>
                {mortgageTerms[name]}
            </p>
        </div>
    );
}
