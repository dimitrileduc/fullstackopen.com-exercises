import React from "react";
import Person from "../Person";

function PhoneBook({personsToShow}) {
    return (
        <div>
            <ul>
                {personsToShow.map((person) => (
                    <Person key={person.id} person={person} />
                ))}
            </ul>
        </div>
    );
}

export default PhoneBook;
