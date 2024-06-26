import "./App.css";
import Home from "./components/homePage";
import axios from "axios";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
function App() {
    const getStatus = async () => {
        try {
            const resp = await axios.get("http://localhost:8000/testing");
            console.log(resp);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getStatus();
    }, []);

    return (
        <div>
            {/* <div id="scrollOnTop">
                <Header />
            </div> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
            {/* <Footer /> */}
        </div>
    );
}

export default App;
