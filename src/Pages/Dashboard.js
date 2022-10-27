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
        };
        getForms();
    }, []);

    return (
        <div>
            <img src={Logo} alt="" className="logo25" />
            <div className="dashboardHeader">
                <h1 className="dashboardTitle">My forms</h1>
                <Link to="/form" className="newFormButton">
                    Create a new form
                </Link>
            </div>
            <div className="recentFormContainer">
                {forms.map((form) => (
                    <div className="formDashboardCard">
                        <Link className="formDashboardCardHeader" to={"../generatedform/" + form.generated_link}>
                            <h3>{form.form_name}</h3>
                        </Link>
                        <div className="formDashboardCardInfo">
                            <p>Info:</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
