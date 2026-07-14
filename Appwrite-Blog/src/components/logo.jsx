import React from "react";

function Logo({ width = "100px" }) {
    return (
        <div
            style={{ width }}
            className="text-2xl font-extrabold tracking-wide text-blue-600"
        >
            Blogify
        </div>
    );
}

export default Logo;