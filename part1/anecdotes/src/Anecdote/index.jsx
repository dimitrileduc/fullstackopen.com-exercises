import React from "react";

function Anecdote({anecdotes, selected, notes}) {
    return (
        <>
            {" "}
            <div>{anecdotes[selected]}</div>
            <div>has {notes[selected]} votes </div>
        </>
    );
}

export default Anecdote;
