import {useState} from "react";

import FeedB from "./components/FeedB";
import Statistics from "./components/Statistics";

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
        <>
            <FeedB
                setGood={setGood}
                setNeutral={setNeutral}
                setBad={setBad}
                good={good}
                neutral={neutral}
                bad={bad}
            />

            <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
        </>
    );
};

export default App;
