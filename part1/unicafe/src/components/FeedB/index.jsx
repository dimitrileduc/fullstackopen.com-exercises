import React from "react";
import Button from "../Button";

function FeedB(props) {
    return (
        <>
            <h2>Feedback</h2>
            <Button nameB="good" state={props.good} setState={props.setGood} />
            <Button
                nameB="neutral"
                state={props.neutral}
                setState={props.setNeutral}
            />
            <Button nameB="bad" state={props.bad} setState={props.setBad} />
        </>
    );
}

export default FeedB;
