import React from "react";
import { useParams } from "react-router-dom";

function GeneratedForm() {
    let { formID } = useParams();
    return (
        <div>
            <h1>Gemerated Form Page - {formID}</h1>
        </div>
    );
}

export default GeneratedForm;
