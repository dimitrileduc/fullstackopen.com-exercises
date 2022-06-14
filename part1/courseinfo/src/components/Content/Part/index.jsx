import React from "react";

function Part({partName, number}) {
    return (
        <>
            <p>Part : </p>
            <h3>{partName}</h3>
            <p>{number}</p>
        </>
    );
}

export default Part;
