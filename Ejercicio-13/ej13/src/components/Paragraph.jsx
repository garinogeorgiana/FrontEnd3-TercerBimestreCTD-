import React from "react";

const Paragraph = (props) => {
    return (
        <p style={{ fontWeight: props.weight }}>{props.text}</p>
    )
}

export default Paragraph;

