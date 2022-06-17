import React from "react";

function Total({course}) {
    console.log(course);
    const totalCourse = course.reduce(function (acc, item) {
        return acc + item.exercises;
    }, 0);

    return <div>total of {totalCourse} exercices </div>;
}

export default Total;
