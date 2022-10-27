import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Logo from "../../src/Images/eFormLogo.png";
import { db } from "../firebase-config";
import { doc, getDoc } from "firebase/firestore";

function GeneratedForm() {
    const [formData, setFormData] = useState("");
    const [formQuestions, setFormQuestions] = useState([]);

    const { formID } = useParams();

    useEffect(() => {
        const getLinks = async () => {
            const docRef = doc(db, "user", "rh87ciX1RjB0V2CYX4vi", "forms", formID);
            const docData = await getDoc(docRef);
            const data = docData.data();

            setFormData(data);
            setFormQuestions(data.questions);
        };
        getLinks();
    }, []);
    return (
        <div>
            <img src={Logo} alt="" />
            <h1>Gemerated Form Page - {formID}</h1>
            <h1>{formData.form_name}</h1>
            {formQuestions.map((data) => (
                <>
                    <p>{data.question}</p>
                    <p>{data.type}</p>
                </>
            ))}
        </div>
    );
}

export default GeneratedForm;
