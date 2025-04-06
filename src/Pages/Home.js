import React from "react";
import MainImageElite from "../Assets/MainImage2.jpg";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import project1 from '../Assets/project1.jpg';
import project2 from '../Assets/project2.jpg';
import project3 from '../Assets/project3.jpg';
import project4 from '../Assets/project4.jpg';
import project5 from '../Assets/project5.jpg';
import project6 from '../Assets/project6.jpg';
import project7 from '../Assets/project7.jpg';
import logoImage from '../Assets/LogoWP.png';

function Home() {
  const projectImages = [
    project1,
    project2,
    project3,
    project4,
    project5,
    project6,
    project7,
  ];

  return (
    <main className="elite-landing">
      <Helmet>
        <title>Elevate Your Career: Women's Professional Portfolio Websites</title>
        <meta
          name="description"
          content="Create a stunning online portfolio for women professionals. Showcase skills, experience, and projects. Custom portfolio websites designed to elevate your career. Attract clients and employers with a professional online presence."
        />
        <meta
          name="keywords"
          content="women's portfolio for video production, women's portfolio for fashion design, women's portfolio for interior design, women's portfolio for architecture, women's portfolio for journalism, women's portfolio for publishing, women's portfolio for entrepreneurship, women's portfolio for startup founders, women's portfolio for leadership roles, women's portfolio for speaking engagements, women's portfolio for teaching, women's portfolio for research, women's portfolio for community outreach, women's portfolio for advocacy, women's portfolio for sustainability, women's portfolio for diversity and inclusion, women's portfolio for global careers, women's portfolio for remote work, women's portfolio for digital nomad lifestyle, women's portfolio for career change, women's portfolio for returning to work, women's portfolio for personal branding, women's portfolio for networking, women's portfolio for job searching, women's portfolio for career advancement, women's portfolio for salary negotiation, women's portfolio for professional development, women's portfolio for skill building, women's portfolio for mentorship, women's portfolio for collaboration, women's portfolio for project management, women's portfolio for presentations, women's portfolio for public speaking, women's portfolio for writing, women's portfolio for content creation, women's portfolio for social media, women's portfolio for email marketing, women's portfolio for digital marketing, women's portfolio for branding, women's portfolio for advertising, women's portfolio for sales, women's portfolio for customer relations, women's portfolio for team management, women's portfolio for leadership, women's portfolio for innovation, women's portfolio for problem solving, women's portfolio for decision making, women's portfolio for strategic planning, women's portfolio for time management, women's portfolio for organization, women's portfolio for communication, women's portfolio for negotiation"
        />
        <meta
          name="keywords"
          content="women portfolio, professional portfolio, online portfolio, portfolio website, personal portfolio, women in business, career portfolio, portfolio design, freelance portfolio, consultant portfolio, showcase work, digital portfolio, portfolio services, portfolio development, women professionals, women entrepreneurs, women's career, build portfolio, custom portfolio, best online portfolio for women, create a professional portfolio website for women, women's career portfolio examples, top rated women's portfolio design, build a women's portfolio for freelance work, how to create a standout women's portfolio, women's portfolio for consulting services, professional portfolio website for women executives, women's portfolio for creative professionals, women's portfolio for tech industry, women's portfolio for marketing roles, women's portfolio for finance careers, women's portfolio for legal professionals, women's portfolio for educators, women's portfolio for healthcare professionals, women's portfolio for non-profit careers, women's portfolio for arts and design, women's portfolio for science careers, women's portfolio for engineering roles, women's portfolio for project management, women's portfolio for sales positions, women's portfolio for human resources, women's portfolio for public relations, women's portfolio for communications, women's portfolio for business development, women's portfolio for research, women's portfolio for social media management, women's portfolio for event planning, women's portfolio for writing and editing, women's portfolio for translation services, women's portfolio for coaching, women's portfolio for training and development, women's portfolio for virtual assistance, women's portfolio for customer service, women's portfolio for data analysis, women's portfolio for web development, women's portfolio for graphic design, women's portfolio for photography"
        />
      </Helmet>
      <header className="elite-header">
        <div className="header-content">
        <Link to="/" className="logo">
            <img src={logoImage} alt="Women Professional Portfolio Logo" className="logo-image" />
          </Link>
          <nav></nav>
        </div>
      </header>
      <section className="hero">
        <div
          className="hero-content"
          style={{ backgroundImage: `url(${MainImageElite})` }}
        >
          <div className="hero-text">
            <h1>Craft Your Digital Legacy: Women's Professional Portfolios</h1>
            <p>
              Showcase your achievements, skills, and expertise with a bespoke online portfolio. Tailored for women professionals to elevate their careers and make lasting impressions.
            </p>
            <Link to="https://woaomwebdesign.com/elitevisible" className="learn-more-button">
              Build Your Digital Legacy
            </Link>
          </div>
        </div>
      </section>

      <section className="why-choose">
        <div className="why-choose-content">
          <h2>Why A Powerful Online Portfolio Matters</h2>
          <p>
            In today's digital landscape, your portfolio is your most powerful asset. It's not just a website; it's your story, your brand, and your professional footprint.
          </p>
        </div>

        <div className="features">
          <div className="feature">
            <h3>Bespoke Portfolio Design</h3>
            <p>
              Tailored designs that reflect your unique brand and professional journey.
            </p>
          </div>

          <div className="feature">
            <h3>Impactful Content Strategy</h3>
            <p>
              Strategic content placement to highlight your key strengths and achievements.
            </p>
          </div>

          <div className="feature">
            <h3>Visibility Through SEO</h3>
            <p>
              Optimized for search engines to ensure your portfolio reaches the right audience.
            </p>
          </div>

          <div className="feature">
            <h3>Seamless User Experience</h3>
            <p>
              Mobile-responsive design for a perfect viewing experience on all devices.
            </p>
          </div>

          <div className="feature">
            <h3>Credibility Through Showcasing</h3>
            <p>
              Showcase projects and testimonials to build trust and credibility.
            </p>
          </div>

          <div className="feature">
            <h3>Effortless Portfolio Management</h3>
            <p>
              Easy-to-update platform to keep your portfolio current and relevant.
            </p>
          </div>
        </div>

        <div className="discover-more">
          <Link to="https://woaomwebdesign.com/elitevisible" className="discover-button">
            Unlock Your Portfolio's Potential
          </Link>
        </div>
      </section>

      <section className="project-grid-section">
        <h2>Our Featured Work</h2>
        <div className="project-grid">
          {projectImages.map((image, index) => (
            <img key={index} src={image} alt={`Project ${index + 1}`} className="project-grid-item" />
          ))}
        </div>
      </section>

      <section className="consultation">
        <div className="consultation-content">
          <h2>Ready to Define Your Digital Presence?</h2>
          <p>
            Let's discuss how we can create a portfolio that not only showcases your work but also opens doors to new opportunities.
          </p>
          <a
            href="https://cal.com/woaomwebdesign/15min"
            className="consultation-button"
          >
            Schedule Your Portfolio Strategy Session
          </a>
        </div>
      </section>
      <footer className="elite-footer">
        <p>&copy; {new Date().getFullYear()} Women Portfolio LLC. All rights reserved.</p>
        <nav>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/contact">Contact Us</a>
        </nav>
      </footer>
    </main>
  );
}

export default Home;