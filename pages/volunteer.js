// pages/volunteer.js

import Navbar from '../components/Navbar';

export default function Volunteer() {
  return (
    <div>
      <Navbar />
      
     
      <section className="hero bg-gradient-to-b from-black to-gray-900 min-h-screen flex flex-col justify-center items-center text-center text-white py-10">
        <h1 className="text-5xl font-extrabold mb-6 text-orange-400">Become a Volunteer</h1>
        <p className="text-lg mb-12 text-gray-400">
          Join us in making a difference in the community through digital literacy programs.
        </p>
        <a href="#signup" className="cta-button bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
          Sign Up Now
        </a>
      </section>

     
      <section className="why-volunteer bg-gray-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Why Volunteer with Us?</h2>
          <p className="text-lg mb-12 text-gray-300">
            Volunteering with Cyber Smart not only helps others but also enhances your skills and connects you with like-minded individuals.
          </p>
          <ul className="list-disc list-inside text-lg text-gray-300">
            <li>Make a positive impact in your community</li>
            <li>Gain valuable experience and skills</li>
            <li>Network with professionals in the field</li>
            <li>Receive training and resources</li>
          </ul>
        </div>
      </section>

      <section id="signup" className="signup bg-gray-900 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-12 text-gray-300">
            Fill out the form below to join our team of dedicated volunteers!
          </p>
          <form className="max-w-lg mx-auto">
            <input type="text" placeholder="Your Name" className="mb-4 p-2 w-full rounded" required />
            <input type="email" placeholder="Your Email" className="mb-4 p-2 w-full rounded" required />
            <textarea placeholder="Why do you want to volunteer?" className="mb-4 p-2 w-full rounded" rows="4" required></textarea>
            <button type="submit" className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
