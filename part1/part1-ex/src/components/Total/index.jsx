import React from "react";

function Total({parts}) {
    const arrayNumber = parts.map((value) => value.exercises);
    const total = arrayNumber[0] + arrayNumber[1] + arrayNumber[2];

    return <h2>total :{total}</h2>;
}

export default Total;
