import React from "react";

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-teal-700 text-white p-4 flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-2">
          <img src="/favicon.ico" alt="Logo" className="w-10 h-10 rounded-full" />
          <span className="text-xl font-bold">Your Brand</span>
        </div>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#features" className="hover:underline">Features</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-20 bg-teal-600 text-white">
        <h1 className="text-4xl font-bold">Welcome to Your Website</h1>
        <p className="mt-4">A place to showcase your amazing services.</p>
        <button className="mt-6 bg-white text-teal-700 px-6 py-2 rounded-full font-semibold shadow-md hover:bg-gray-200">Get Started</button>
      </header>

      {/* Features Section */}
      <section id="features" className="p-10 text-center">
        <h2 className="text-3xl font-bold">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-6 bg-white shadow rounded-lg">Feature 1</div>
          <div className="p-6 bg-white shadow rounded-lg">Feature 2</div>
          <div className="p-6 bg-white shadow rounded-lg">Feature 3</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2025 Your Brand. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
