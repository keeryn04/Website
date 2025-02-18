import { BrowserRouter, Routes, Route } from "react-router-dom";
import Workpage from "./pages/work";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import Header from "./assets/header";

function App() {
  return (
    
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Workpage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;