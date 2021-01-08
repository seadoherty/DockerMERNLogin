import React from 'react';

const Input = props => {
    const { name, type, value, handleChange, error, label, submitValue } = props;

    return (

        type !== "submit" ?
            <div className="inputWrapper">

                <label>{label}</label>

                <input
                    className="generalInput"
                    type={type}
                    value={value}
                    name={name}
                    onChange={handleChange}
                />
                <span className="text-danger">{error ? error.message : ""}</span>

            </div>
            :
            <input type="submit" className="generalInput" value={submitValue} />
    )
}

export default Input;