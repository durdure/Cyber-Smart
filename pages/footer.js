export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-lg font-bold">Connect with Us</h3>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
  
          <div className="mb-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="flex justify-center space-x-4 mt-2">
              <li><a href="/" className="text-gray-400 hover:text-orange-400">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-orange-400">About Us</a></li>
              <li><a href="/volunteer" className="text-gray-400 hover:text-orange-400">Volunteer</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-orange-400">Contact</a></li>
            </ul>
          </div>
  
          <div>
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Cyber Smart. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
  