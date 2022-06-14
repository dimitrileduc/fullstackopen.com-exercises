import React from "react";
import Part from "./Part";

function Content({parts}) {
    const arrayNames = parts.map((value) => value.name);
    const arrayNumber = parts.map((value) => value.exercises);
    return (
        <>
            <h2>Content</h2>
            <Part partName={arrayNames[0]} number={arrayNumber[0]} />
            <Part partName={arrayNames[1]} number={arrayNumber[1]} />
            <Part partName={arrayNames[2]} number={arrayNumber[2]} />
        </>
    );
}

export default Content;
