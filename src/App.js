import "./App.css";
import Header from "./components/header";
import Home from "./components/homePage";
import Footer from "./components/footer";
import axios from "axios";
import { useEffect } from "react";

function App() {
    const getStatus = async () => {
        const resp = await axios.get("http://localhost:8000/testing");
        console.log(resp);
    };

    useEffect(() => {
        getStatus();
    }, []);

    return (
        <div>
            <div id="scrollOnTop">
                <Header />
            </div>
            <Home />
            <Footer />
        </div>
    );
}

export default App;
