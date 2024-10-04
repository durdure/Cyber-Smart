import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from './Footer';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      id: 1,
      title: "Advanced Web Development",
      description: "Master the latest technologies to build dynamic websites.",
      image: "https://i.pinimg.com/564x/bc/ed/07/bced075dd9a8a25a025e598bb8e8c3a8.jpg",
    },
    {
      id: 2,
      title: "Digital Marketing Strategies",
      description: "Learn how to effectively promote your website.",
      image: "https://i.pinimg.com/564x/73/78/c4/7378c49d7c4e608643263f0bf455fc31.jpg", 
    },
    {
      id: 3,
      title: "E-commerce Solutions",
      description: "Set up and manage your online store.",
      image: "https://i.pinimg.com/564x/73/78/c4/7378c49d7c4e608643263f0bf455fc31.jpg",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isVisible) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible, slides.length]);

  return (
    <div className={`slideshow ${isVisible ? 'fade-in' : 'hidden'}`}>
      <div className="slide">
        <img src={slides[currentSlide].image} alt={slides[currentSlide].title} className="w-full h-auto rounded-lg" />
        <h3 className="text-xl md:text-2xl font-bold">{slides[currentSlide].title}</h3>
        <p className="text-sm md:text-base">{slides[currentSlide].description}</p>
      </div>
      <style jsx>{`
        .slideshow {
          position: fixed;
          bottom: 20px;
          right: 20px;
          max-width: 300px;
          width: 90%;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          border-radius: 10px;
          padding: 20px;
          transition: opacity 0.5s ease;
          background-image: url('https://i.pinimg.com/564x/73/78/c4/7378c49d7c4e608643263f0bf455fc31.jpg');
          background-size: cover;
          background-position: center;
        }
        .fade-in {
          opacity: 1;
        }
        .hidden {
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

const AboutUs = () => {
  return (
    <section className="about bg-gray-800 text-white py-20">
      <div className="container mx-auto text-center items-center">
       
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="text-lg mb-4 text-gray-300">
          We are committed to empowering individuals through digital literacy and online safety. Our goal is to equip everyone with the skills needed to thrive in the digital age.
        </p>
        <p className="text-lg mb-4 text-gray-300">
          At Cyber Smart Community, we believe that knowledge is power. We strive to create an inclusive environment where everyone can learn, grow, and connect.
        </p>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img src="https://i.pinimg.com/564x/bc/ed/07/bced075dd9a8a25a025e598bb8e8c3a8.jpg" alt="Empowering Digital Literacy" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-400 mb-4">
              To promote digital literacy and empower individuals to navigate the online world safely and effectively.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
            <ul className="list-disc list-inside text-gray-400 mb-4 decoration-none">
              <li
              style={
                {
                  style:"none"
                }
              }
              >Empowerment: We empower individuals through education.</li>
              <li>Inclusivity: We welcome everyone, regardless of background.</li>
              <li>Community: We foster a supportive community for all.</li>
            </ul>
            
            <h3 className="text-2xl font-semibold mb-4">Our Impact</h3>
            <p className="text-gray-400 mb-4">
              Since our inception, we have reached over 5,000 individuals through our workshops and community events, helping them gain essential digital skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamMember = ()=>{
 const team = [
    {
      name: "Alice Johnson",
      role: "Founder & CEO",
      image: "/team-member1.jpg",
      description: "Alice is passionate about digital literacy and has over 10 years of experience in the tech industry."
    },
    {
      name: "Bob Smith",
      role: "CTO",
      image: "/team-member2.jpg",
      description: "Bob leads our technical team and ensures our programs are up to date with the latest technologies."
    },
    {
      name: "Catherine Lee",
      role: "Program Director",
      image: "/team-member3.jpg",
      description: "Catherine oversees all our workshops and community events to promote digital skills."
    },
  ]
}

export default function Home() {
  return (
    <div>
      <section className="hero bg-gradient-to-b from-black to-gray-900 min-h-screen flex flex-col justify-center items-center text-center text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://i.pinimg.com/564x/bc/ed/07/bced075dd9a8a25a025e598bb8e8c3a8.jpg" alt="Digital Literacy Background" className="w-full h-full object-cover opacity-40" />
        </div>
        <Navbar />
        <div className="relative z-10 p-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-orange-400 drop-shadow-lg">
            Empowering Your Digital Journey
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-300">
            Join us in building a community where everyone can thrive in the digital age—through knowledge, skills, and support.
          </p>

          <div className="mb-6">
            <img src="https://i.pinimg.com/564x/73/78/c4/7378c49d7c4e608643263f0bf455fc31.jpg" alt="Digital Literacy GIF" className="w-3/4 md:w-1/2 mx-auto" />
          </div>

          <a href="/volunteer" className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 px-6 rounded transition duration-300 ease-in-out shadow-lg">
            Become a Volunteer
          </a>
        </div>

        <style jsx>{`
          .hero {
            position: relative;
            overflow: hidden;
          }
          .hero img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 0;
          }
          .hero h1, .hero p, .hero a {
            position: relative;
            z-index: 10;
          }
        `}</style>
      </section>

      <AboutUs />

      <section className="services bg-gray-900 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-lg mb-12 text-gray-300">
            We offer a variety of programs and workshops designed to enhance digital skills and empower individuals to navigate the online world effectively.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="service-item bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-2">Web Development Workshops</h3>
              <p className="text-gray-400">
                Learn the fundamentals of building advanced websites with HTML, CSS, and JavaScript.
              </p>
            </div>
            <div className="service-item bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-2">Search Engine Optimization (SEO)</h3>
              <p className="text-gray-400">
                Understand the principles of SEO to improve your website's visibility.
              </p>
            </div>
            <div className="service-item bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-2">Content Management Systems (CMS)</h3>
              <p className="text-gray-400">
                Explore popular CMS platforms like WordPress and Joomla.
              </p>
            </div>
            <div className="service-item bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-2">E-commerce Solutions</h3>
              <p className="text-gray-400">
                Discover how to set up and manage e-commerce websites.
              </p>
            </div>
            <div className="service-item bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-2">Digital Marketing Strategies</h3>
              <p className="text-gray-400">
                Master the art of digital marketing to drive traffic and conversions.
              </p>
            </div>
            <div className="service-item bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-2">Website Maintenance and Security</h3>
              <p className="text-gray-400">
                Learn about keeping your website secure and up-to-date.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Slideshow />

       {/* <section className="team bg-gray-900 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
        <p className="text-lg mb-12 text-gray-300">
          Our dedicated team is committed to empowering individuals through education and support.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <div key={index} className="team-member bg-gray-800 p-6 rounded-lg shadow-lg">
              <img src={member.image} alt={member.name} className="rounded-full w-32 h-32 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-400 mb-2">{member.role}</p>
              <p className="text-gray-300">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section> */}

       <section className="contact bg-gray-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg mb-12 text-gray-300">
            We would love to hear from you! Reach out to us for any inquiries.
          </p>

          <div className="flex flex-col md:flex-row justify-center mb-12">
            <div className="md:w-1/2 p-4">
              <h3 className="text-2xl font-semibold mb-4">Contact Form</h3>
              <form className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    placeholder="Your Message"
                    className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="md:w-1/2 p-4">
              <h3 className="text-2xl font-semibold mb-4">Contact Details</h3>
              <p className="text-gray-400 mb-2">Phone: (123) 456-7890</p>
              <p className="text-gray-400 mb-2">Email: info@cybersmartcommunity.org</p>
              <p className="text-gray-400 mb-2">Address: 123 Cyber St, Tech City, CA 12345</p>
              
              <h3 className="text-2xl font-semibold mt-8 mb-4">Follow Us</h3>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Instagram</a>
              </div>
            </div>
          </div>

          <div className="mt-12 mb-12">
            <h3 className="text-2xl font-semibold mb-4">Find Us Here</h3>
            <div className="max-w-md mx-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509176!2d144.95373531531728!3d-37.81720997975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f5b9e5f%3A0x5045675218ce6b0!2sCyber%20Smart%20Community!5e0!3m2!1sen!2sus!4v1665113521291!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}