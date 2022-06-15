import {useState, useEffect} from "react";
import Anecdote from "./Anecdote";
import BestAnecdotes from "./BestAnecdotes";

const App = () => {
    const anecdotes = [
        "If it hurts, do it more often",
        "Adding manpower to a late software project makes it later!",
        "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        "Premature optimization is the root of all evil.",
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
    ];

    let randomNumber;

    const [notes, setNotes] = useState(Array(7).fill(0));

    const [selected, setSelected] = useState(0);

    const [maximumValue, setMaximumValue] = useState(0);

    const [maximumIndex, setMaximumIndex] = useState(0);

    function setRandom() {
        randomNumber = Math.floor(Math.random() * anecdotes.length);
        setSelected(randomNumber);
    }

    function updateNotes() {
        // copy array notes
        const newArray = [...notes];

        // update value
        newArray[selected] += 1;

        console.log("before setState --->" + newArray);
        setNotes(newArray);
        console.log("after setState ---->" + notes);
    }

    useEffect(() => {
        const copy = [...notes];
        console.log(copy);
        let [min, max] = copy.reduce(
            ([prevMin, prevMax], curr) => [
                Math.min(prevMin, curr),
                Math.max(prevMax, curr),
            ],
            [Infinity, -Infinity],
        );
        console.log("Min:", min);
        console.log("Max:", max);

        console.log("max is " + max);
        setMaximumIndex(notes.indexOf(max));
    }, [notes]);

    //function checkBestAnecdotes() {}

    return (
        <>
            <h2>Anecdote of the day</h2>
            <Anecdote
                anecdotes={anecdotes}
                selected={selected}
                notes={notes}></Anecdote>

            <button onClick={updateNotes}>vote</button>
            <button onClick={setRandom}>next anecdote</button>
            <br></br>

            <BestAnecdotes
                anecdotes={anecdotes}
                notes={notes}
                maximumValue={maximumValue}
                setMaximumValue={setMaximumValue}
                maximumIndex={maximumIndex}
            />
        </>
    );
};

export default App;

/*
<h2>Anecdote with most votes</h2>
            <div>{anecdotes[maximumIndex]}</div>
            <div>has {notes[maximumIndex]} votes </div>
            */
