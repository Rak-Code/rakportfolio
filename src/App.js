
import './App.css';
import AboutMe from './components/AboutMe';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import SkillsExpertise from './components/SkillsExpertise';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <AboutMe/>
      <SkillsExpertise/>
      <Projects/>
      <ContactUs/>
      <Footer/>
      
    </div>
  );
}

export default App;
