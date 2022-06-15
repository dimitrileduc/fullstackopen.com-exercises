import React from "react";

function BestAnecdotes({
    anecdotes,
    notes,
    maximumValue,
    setMaximumValue,
    maximumIndex,
}) {
    return (
        <div>
            <h2>Best anecdote : </h2>
            {anecdotes[maximumIndex]}. note is: {notes[maximumIndex]}
        </div>
    );
}

export default BestAnecdotes;
