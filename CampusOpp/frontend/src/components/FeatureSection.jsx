import React from 'react';
import FeatureCard from './FeatureCard';
import '../styles/FeatureSection.css';
import feature1 from '../assets/homeimg.jpg';
import feature2 from '../assets/homeimg.jpg';
import feature3 from '../assets/homeimg.jpg';
import feature4 from '../assets/homeimg.jpg';

const features = [
  {
    image: feature1,
    title: "Verified Internships & Scholarships",
    description: "Access a curated list of legitimate opportunities without any hidden costs.",
  },
  {
    image: feature2,
    title: "Free Access to Resources",
    description: "Get all necessary guidance, resume templates, and interview tips for internships and scholarships.",
  },
  {
    image: feature3,
    title: "Hassle-Free Applications",
    description: "Apply for multiple internships and scholarships with just a few clicks.",
  },
  {
    image: feature4,
    title: "24/7 Support & Guidance",
    description: "Need help? Our team and mentors are available to assist you anytime.",
  }
  // {
  //   image: feature5,
  //   title: "Student Community & Networking",
  //   description: "Connect with peers, mentors, and recruiters to build your career network.",
  // },
  // {
  //   image: feature6,
  //   title: "Real-Time Updates & Alerts",
  //   description: "Get notified about new opportunities, deadlines, and selection results instantly.",
  // }
];

function FeatureSection() {
  return (
    <div className="feature-section">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          image={feature.image}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}

export default FeatureSection;
