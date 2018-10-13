import React from "react";
import "./Button.css";

// Props are to pass on all props into this element making it unnecessary to define each one individually
export const DeleteBtn = props =>
<span className = "delete-btn" {...props}>
    X
</span>;
