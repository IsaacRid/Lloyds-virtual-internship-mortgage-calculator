import React, { useState } from "react";
import { mortgageTerms } from "../utils/mortgageTerms";

export default function Input(props) {
    const { label, type, placeholder, id } = props;

    const description = mortgageTerms[id] || "No description available.";
    const [value, setValue] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = (e) => {
        e.preventDefault();
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <div className="input-component">
                <label>{label}</label>
                <input
                    type={type}
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    placeholder={placeholder}
                />
            </div>
            <button className="help-icon" onClick={handleOpenModal}>
                <i className="fa-regular fa-circle-question"></i>
            </button>
            {modalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>{label}</h2>
                        <p>{description}</p>
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                    </div>
                </div>
            )}
        </>
    );
}