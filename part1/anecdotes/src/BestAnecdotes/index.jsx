import React from "react";

function BestAnecdotes({
    anecdotes,
    notes,
    maximumValue,
    setMaximumValue,
    maximumIndex,
}) {
    if (notes[maximumIndex] > 0) {
        return (
            <div>
                <h2>Best anecdote : </h2>
                {anecdotes[maximumIndex]}. has: {notes[maximumIndex]} votes
            </div>
        );
    }
}

export default BestAnecdotes;
