import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/skills/skills";
import Works from "./components/Works/works";
import Contact  from "./components/Contact/Contact";
import Footer from "./components/Footer/footer";
import Project from "./components/Project/Project";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <Skills/>
      <Works />
      <Project/>
      <Contact/>
      <Footer/>
    </div>
    
  );
}

export default App;
