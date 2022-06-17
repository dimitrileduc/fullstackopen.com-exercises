import React from "react";

function Person({person}) {
    return (
        <div>
            <li>
                {" "}
                {person.name} --- number : {person.number}
            </li>
        </div>
    );
}

export default Person;
