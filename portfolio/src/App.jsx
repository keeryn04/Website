import { BrowserRouter, Routes, Route } from "react-router-dom";import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProjectPage from "./pages/projects";
import Header from "./assets/header";

function App() {
  return (
    
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;