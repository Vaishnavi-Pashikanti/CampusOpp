import React from 'react'
import '../../styles/HomePage.css'
import logo from '../../assets/logo.jpeg';

function Homepage() {
  return (
    <body className='homepage-body'>
      {/* nav bar */}
      <nav>
        <img src={logo}  alt="" className='logo'/>
        <ul className='nav-list'>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Internships</a></li>
          <li><a href="">Scholarships</a></li>
          <li><a href="">Events</a></li>
          <li><a href="">Contact Us</a></li>
        </ul>
        <ul className='log-list'>
          <li><a href="">Login</a></li>
          <li><a href="">Register</a></li>
        </ul> 
      </nav>

      {/* header */}
      <header>
        <div className='header-content'>
        <h1 style={{ marginBottom: "3px" }}>Campus Oppurtuna</h1>
        <h3 style={{ marginBottom: "3px" }}>Learn Explore Grow</h3>
        <p>CampusOppurtuna empowers students and professionals through learning, and career opportunities, helping them explore, grow, and achieve success effortlessly.</p>
        </div>
      </header>

      
      
    </body>
  );
}

export default Homepage;
