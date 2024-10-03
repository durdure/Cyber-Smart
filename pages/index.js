import Navbar from '../components/Navbar';
import Footer from './footer';
import Head from 'next/head';
import { useState, useEffect } from 'react';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      id: 1,
      title: "Advanced Web Development",
      description: "Master the latest technologies to build dynamic websites.",
      image: "/slide1.jpg",
    },
    {
      id: 2,
      title: "Digital Marketing Strategies",
      description: "Learn how to effectively promote your website.",
      image: "/slide2.jpg",
    },
    {
      id: 3,
      title: "E-commerce Solutions",
      description: "Set up and manage your online store.",
      image: "/slide3.jpg",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
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
          width: 90%; /* Responsive width */
          background: rgba(0, 0, 0, 0.7);
          color: white;
          border-radius: 10px;
          padding: 20px;
          transition: opacity 0.5s ease;
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
  const [image, setImage] = useState('');
  const [gif, setGif] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch('https://api.unsplash.com/photos/random?query=digital%20literacy&client_id=YOUR_UNSPLASH_API_KEY');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.urls && data.urls.regular) {
          setImage(data.urls.regular);
        } else {
          console.error("Image URL not found in response:", data);
        }
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    const fetchGif = async () => {
      try {
        const response = await fetch('https://api.giphy.com/v1/gifs/random?tag=digital+literacy&api_key=YOUR_GIPHY_API_KEY');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data && data.data && data.data.images && data.data.images.original) {
          setGif(data.data.images.original.url);
        } else {
          console.error("GIF data structure is not as expected:", data);
        }
      } catch (error) {
        console.error("Error fetching GIF:", error);
      }
    };

    fetchImage();
    fetchGif();
  }, []);

  return (
    <section className="about bg-gray-800 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="text-lg mb-4 text-gray-300">
          We are committed to empowering individuals through digital literacy and online safety. Our goal is to equip everyone with the skills needed to thrive in the digital age.
        </p>
        <p className="text-lg mb-4 text-gray-300">
          At Cyber Smart Community, we believe that knowledge is power. We strive to create an inclusive environment where everyone can learn, grow, and connect.
        </p>
        
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            {image && (
              <img src={image} alt="Empowering Digital Literacy" className="rounded-lg shadow-lg w-full h-auto" />
            )}
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-400 mb-4">
              To promote digital literacy and empower individuals to navigate the online world safely and effectively.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
            <ul className="list-disc list-inside text-gray-400 mb-4">
              <li>**Empowerment**: We empower individuals through education.</li>
              <li>**Inclusivity**: We welcome everyone, regardless of background.</li>
              <li>**Community**: We foster a supportive community for all.</li>
            </ul>
            
            <h3 className="text-2xl font-semibold mb-4">Our Impact</h3>
            <p className="text-gray-400 mb-4">
              Since our inception, we have reached over 5,000 individuals through our workshops and community events, helping them gain essential digital skills.
            </p>
          </div>
        </div>
        
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-4">Learn More with Our Introductory GIF</h3>
          {gif && (
            <img src={gif} alt="Introduction to Digital Literacy" className="rounded-lg shadow-lg w-full max-w-md mx-auto" />
          )}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cyber Smart Community</title>
        <meta name="description" content="Empowering individuals through digital literacy and online safety." />
      </Head>
      
      <section className="hero bg-gradient-to-b from-black to-gray-900 min-h-screen flex flex-col justify-center items-center text-center text-white relative overflow-hidden">
  <div className="absolute inset-0">
    <img src="/hero-background.jpg" alt="Digital Literacy Background" className="w-full h-full object-cover opacity-40" />
  </div>
  <Navbar />
  
  <div className="relative z-10 p-6">
    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-orange-400 drop-shadow-lg">
      Empowering Your Digital Journey
    </h1>
    <p className="text-lg md:text-xl mb-6 text-gray-300">
      Join us in building a community where everyone can thrive in the digital age—through knowledge, skills, and support.
    </p>

    {/* GIF Section */}
    <div className="mb-6">
      <img src="https://media.giphy.com/media/YOUR_GIF_ID/giphy.gif" alt="Digital Literacy GIF" className="w-3/4 md:w-1/2 mx-auto" />
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