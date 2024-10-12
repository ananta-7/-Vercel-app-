
import './HeroSection.css'; // Separate CSS for Hero Section
import Ananta from './assets/OK.png'
const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Alabay</h1>
        <p>Your journey starts here.</p>
        <button className="cta-button">Learn More</button>
      </div>
      <div className="hero-image">
        <img src={Ananta} alt="Hero" />
      </div>
    </section>
  );
};

export default HeroSection;
