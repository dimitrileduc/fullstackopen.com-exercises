import React from "react";
import Title from "../Part";
import Total from "../Total";

function Content({parts, name}) {
    let contentParts = parts.map(function (element) {
        return (
            <>
                <Title
                    key={element.id}
                    name={element.name}
                    exercises={element.exercises}
                />
            </>
        );
    });

    console.log(parts);
    return (
        <>
            <h2>{name}</h2>
            {contentParts}
            <Total course={parts} />
        </>
    );
}

export default Content;
