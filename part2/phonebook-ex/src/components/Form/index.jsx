import React from "react";

function Form({addPersons, handleNameChange, handleNumberChange, newName}) {
    return (
        <div>
            <form onSubmit={addPersons}>
                <div>
                    name:{" "}
                    <input
                        aria-label="search"
                        value={newName}
                        onChange={handleNameChange}
                    />
                </div>
                <label htmlFor="phone">Enter a phone number:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="123-1234567"
                    pattern="[0-9]{3}-[0-9]{7}"
                    required
                    onChange={handleNumberChange}></input>
                <small>Format: 123-4567898</small>
                <div>
                    <button type="submit">add</button>
                </div>
                <div>debug: {newName}</div>
            </form>
        </div>
    );
}

export default Form;
