import "./App.css";
import Header from "./components/header";
import Home from "./components/homePage";
import Footer from "./components/footer";

function App() {
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
