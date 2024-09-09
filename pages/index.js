import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="hero">
        <h1>Welcome to Cyber Smart Volunteers!</h1>
        <p>Join us in promoting digital literacy and empowerment.</p>
        <a href="/volunteer" className="cta-button">Become a Volunteer</a>
      </section>
    </div>
  );
}