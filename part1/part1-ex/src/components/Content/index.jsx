import React from "react";

function Content({part1, part2, part3, exercises1, exercises2, exercises3}) {
    return (
        <>
            <h2>Content</h2>
            <h3>{part1}</h3>
            <p>{exercises1}</p>
            <h3>{part2}</h3>
            <p>{exercises2}</p>
            <h3>{part3}</h3>
            <p>{exercises3}</p>
        </>
    );
}

export default Content;
