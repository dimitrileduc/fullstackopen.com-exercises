import React from "react";

function Title({name, exercises}) {
    return (
        <>
            <div>
                <span>{name} :</span>
                <span>{exercises}</span>
            </div>
        </>
    );
}

export default Title;
