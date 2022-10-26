import React, { useEffect, useState } from "react";
import Logo from "../../src/Images/eFormLogo.png";
import { Link } from "react-router-dom";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";

function Dashboard() {
    const [forms, setForms] = useState([]);

    useEffect(() => {
        const getForms = async () => {
            const data = await getDocs(collection(db, "user", "rh87ciX1RjB0V2CYX4vi", "forms"));
            console.log("Data docs:");
            console.log(data);
            console.log(data.docs);
            const allForms = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            console.log(allForms);
            setForms(allForms);
            console.log(allForms[0].questions.question1);
        };
        getForms();
    }, []);

    return (
        <div>
            <img src={Logo} alt="" className="logo25" />

            <Link to="/form" className="defaultButton">
                Create a new form
            </Link>
            <p>Recent</p>
            <p>My forms</p>
            {forms.map((form) => (
                <>
                    <p>{form.form_name}</p>
                    <p>{form.id}</p>
                </>
            ))}
        </div>
    );
}

export default Dashboard;
