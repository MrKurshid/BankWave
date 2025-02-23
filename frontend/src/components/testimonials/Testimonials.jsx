import React from "react";
import "./testimonial.css";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "John Doe",
      position: "Customer",
      message:
        "I recently had the opportunity to use your banking website, and I must say I’m impressed with the experience. The website is user-friendly, and navigation is smooth and intuitive, which makes it easy to find what I need. The clean design and well-organized layout add to the overall pleasant experience.",
      image:
        "https://th.bing.com/th?q=Current+Bachelor&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Customer",
      message:
        "I recently had the opportunity to use your banking website, and I must say I’m impressed with the experience. The website is user-friendly, and navigation is smooth and intuitive, which makes it easy to find what I need. The clean design and well-organized layout add to the overall pleasant experience.",
      image:
        "https://th.bing.com/th/id/OIP.GKAiW3oc2TWXVEeZAzrWOAHaJF?w=135&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 3,
      name: "John Doe",
      position: "Customer",
      message:
        "I recently had the opportunity to use your banking website, and I must say I’m impressed with the experience. The website is user-friendly, and navigation is smooth and intuitive, which makes it easy to find what I need. The clean design and well-organized layout add to the overall pleasant experience.",
      image:
        "https://th.bing.com/th?q=Current+Bachelor&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    },
    {
      id: 4,
      name: "Jane Smith",
      position: "Customer",
      message:
        "I recently had the opportunity to use your banking website, and I must say I’m impressed with the experience. The website is user-friendly, and navigation is smooth and intuitive, which makes it easy to find what I need. The clean design and well-organized layout add to the overall pleasant experience.",
      image:
        "https://th.bing.com/th/id/OIP.GKAiW3oc2TWXVEeZAzrWOAHaJF?w=135&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
  ];

  return (
    <section className="testimonials">
      <h2>What our costomers say</h2>
      <div className="testimonial-cards">
        {testimonialsData.map((e) => (
          <div className="testimonial-card" key={e.id}>
            <div className="student-image">
              <img src={e.image} />
            </div>
            <p className="message">{e.message}</p>
            <div className="info">
              <p className="name">{e.name}</p>
              <p className="position">{e.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
