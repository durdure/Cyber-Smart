
import Navbar from '../components/Navbar';
import Footer from './footer';
export default function Home() {
  return (
    <div>
      <Navbar />
      
      
      <section className="hero bg-gradient-to-b from-black to-gray-900 min-h-screen flex flex-col justify-center items-center text-center text-white py-10">
        <h1 className="text-5xl font-extrabold mb-6 text-orange-400">Welcome to Cyber Smart Community</h1>
        <p className="text-lg mb-12 text-gray-400">
          Join us in promoting digital literacy and empowerment.
        </p>
        <a href="/volunteer" className="cta-button bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
          Become a Volunteer
        </a>
      </section>

     
      <section className="about bg-gray-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg mb-4 text-gray-300">
            We are committed to empowering individuals through digital literacy and online safety.
          </p>
          <p className="text-lg text-gray-300">
            Our mission is to create a safer and more informed online community.
          </p>
        </div>
      </section>

    
      <section className="services bg-gray-900 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-lg mb-12 text-gray-300">
            We offer various programs and workshops to enhance digital skills.
          </p>
          <div className="flex justify-center space-x-10">
            <div className="service-item">
              <h3 className="text-2xl font-semibold mb-2">Workshops</h3>
              <p className="text-gray-400">Interactive sessions on digital literacy.</p>
            </div>
            <div className="service-item">
              <h3 className="text-2xl font-semibold mb-2">Webinars</h3>
              <p className="text-gray-400">Online seminars on safe internet practices.</p>
            </div>
            <div className="service-item">
              <h3 className="text-2xl font-semibold mb-2">Community Events</h3>
              <p className="text-gray-400">Engaging events to spread awareness.</p>
            </div>
          </div>
        </div>
      </section>

    
      <section className="contact bg-gray-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg mb-12 text-gray-300">
            We would love to hear from you! Reach out to us for any inquiries.
          </p>
          <a href="/contact" className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
            Contact Us
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
