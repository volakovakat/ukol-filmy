import React from "react";
import "./CastStyles.css";

export const Cast = ({name, as}) => {
    return (
        <>
            <div>
                <h4 className="actor-name">{name}</h4>
                <p className="role-name">as {as}</p>
            </div>

        </>

    )
}

export default Cast;