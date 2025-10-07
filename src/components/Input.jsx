import { useState } from "react";
import { mortgageTerms } from "../utils/mortgageTerms";

export default function Input(props) {
    const { title, name, value, onChange, placeholder, type } = props;
    const [showDescription, setShowDescription] = useState(false);

    return (
        <div className="input-label-group">
            <label className="input-label" htmlFor={name}>{title}</label>
            <input
                className="input-field"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                type={type}
                id={name}
            />
            <button className="question-button" type="button" onClick={() => setShowDescription(!showDescription)}>
                <i className="fa-solid fa-question"></i>
            </button>
            <p className="word-description" style={{ display: showDescription ? "block" : "none" }}>
                {mortgageTerms[name]}
            </p>
        </div>
    );
}