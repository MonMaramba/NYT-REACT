import React from "react";
import "./Button.css";

// Props are to pass on all props into this element making it unnecessary to define each one individually
export const SaveBtn = props =>
    <span className="save-btn" {...props}>
        <i className="fa fa-star"></i>
    </span>;
    