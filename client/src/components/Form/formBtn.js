import React from "react";

export const Form = props =>
    <button {...props} style={{ float: "right"}} className="btn btn-success">
        {props.children}
    </button>;