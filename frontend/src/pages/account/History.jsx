import React from "react";
import "../../components/testimonials/testimonial.css";

const History = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "John Doe",
      mode: "Recieved",
      date: "10/02/2025",
      message: "500",
      image:
        "https://th.bing.com/th?q=Current+Bachelor&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    },
    {
      id: 2,
      name: "Jane Smith",
      mode: "sent",
      date: "01/05/2025",
      message: "900",
      image:
        "https://th.bing.com/th/id/OIP.GKAiW3oc2TWXVEeZAzrWOAHaJF?w=135&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 3,
      name: "John Doe",
      mode: "sent",
      date: "12/02/2025",
      message: "1000",
      image:
        "https://th.bing.com/th?q=Current+Bachelor&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    },
    {
      id: 4,
      name: "Jane Smith",
      mode: "sent",
      date: "10/01/2024",
      message: "1500",
      image:
        "https://th.bing.com/th/id/OIP.GKAiW3oc2TWXVEeZAzrWOAHaJF?w=135&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
  ];

  return (
    <section className="testimonials">
      <h2>Transaction History</h2>
      <div className="testimonial-cards">
        {testimonialsData.map((e) => (
          <div className="testimonial-card" key={e.id}>
            <div className="student-image">
              <img src={e.image} />
            </div>
            <p className="message">{e.message}</p>
            <p className="message">{e.date}</p>
            <div className="info">
              <p className="name">{e.name}</p>
              <p className="position">{e.mode}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default History;
