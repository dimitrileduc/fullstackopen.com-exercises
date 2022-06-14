import React from "react";
import {useState} from "react";

function Button(props) {
    function onclick(e) {
        props.setState(props.state + 1);
    }

    return <button onClick={onclick}>{props.nameB}</button>;
}

export default Button;
