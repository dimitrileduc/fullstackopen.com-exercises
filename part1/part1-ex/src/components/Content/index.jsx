import React from "react";
import Part from "./Part";

function Content({part1, part2, part3, exercises1, exercises2, exercises3}) {
    return (
        <>
            <h2>Content</h2>
            <Part partName={part1} number={exercises1} />
            <Part partName={part2} number={exercises2} />
            <Part partName={part3} number={exercises3} />
        </>
    );
}

export default Content;
