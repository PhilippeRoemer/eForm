import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Form from "./Pages/Form";
import GeneratedForm from "./Pages/GeneratedForm";
import Error from "./Pages/Error";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/form" element={<Form />} />
                <Route path="/:formID" element={<GeneratedForm />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
}

export default App;
