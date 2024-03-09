
import { Footer, Navbar } from "./components/index.js"
import {Home} from "./pages/Home.jsx";
import {Career} from "./pages/Career";
import {Contact} from "./pages/Contact";
import {Portfolio} from "./pages/Portfolio";
import {Service} from "./pages/Service";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element = {<Home/>} />
                    <Route path="/career" element={<Career />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/services" element={<Service />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </BrowserRouter>
            
        </>
    );
};
export default App;