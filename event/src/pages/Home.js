import './Home.css';
import heroImg from '../assets/E1.jpg';

export default function Home() {
  const goToEvents = () => (window.location.href = '/events');

  return (
    <main className="home-hero">
      <div className="hero-content">
        <h1>Welcome to Event Manager</h1>
        <p>Discover, create, and manage unforgettable experiences. Our platform makes event planning effortless—from start to finish.</p>
        <button onClick={goToEvents}>Get Started</button>
      </div>
      <div className="hero-image">
         <img src={heroImg} alt="People enjoying event" />
      </div>
    </main>
  );
}
