import React from "react";
import Header from "../Header";
import Content from "../Content";
import Total from "../Total";

function Course({course}) {
    let courses = course.map(function (element) {
        return <Content parts={element.parts} name={element.name} />;
    });
    return (
        <>
            <Header title={course.name} />

            {courses}
        </>
    );
}

export default Course;

// <Content parts={course.parts} />
