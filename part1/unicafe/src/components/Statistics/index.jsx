import React from "react";
import StatisticLine from "./StatisticLine";

function Statistics(props) {
    const total = props.good + props.neutral + props.bad;
    const average =
        (props.good * 1 + props.neutral * 0 + props.bad * -1) / total;
    const positive = (props.good / total) * 100;

    if (total <= 0) {
        return <div>No feedback given</div>;
    }
    return (
        <>
            <h2>Statistics</h2>

            <table>
                <tbody>
                    <StatisticLine number={props.good} name="good" />
                    <StatisticLine number={props.neutral} name="neutral" />
                    <StatisticLine number={props.bad} name="bad" />
                    <StatisticLine number={total} name="all" />
                    <StatisticLine number={average} name="average" />
                    <StatisticLine number={positive + "%"} name="positive" />
                </tbody>
            </table>
        </>
    );
}

export default Statistics;
