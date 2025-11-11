import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Industry from "./pages/Industry";
// import Publications from "./pages/Publications";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Volunteering from "./pages/Volunteering";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 space-y-8 py-10">
        <Home />
        <Research />
        <Education />
  {/* <Publications /> */}
        <Industry />
        <Projects />
        <Volunteering />
        <Resume />
        <Contact />
      </main>
    </div>
  );
};

export default App;
