import React from "react";

const services = [
  {
    title: "Web Development & Social Marketing",
    description:
      "Web development builds and optimizes websites, while social media marketing leverages platforms to enhance brand visibility and audience engagement.",
    image: "/image1.jpeg",
  },
  {
    title: "Branding",
    description:
      "Branding is the process of creating a unique identity for a company or product, shaping how it is perceived by consumers.",
    image: "/image2.jpeg",
  },
  {
    title: "Exclusive Networking & Industry Collaboration",
    description:
      "Exclusive networking and industry collaboration create powerful alliances that drive innovation, enhance business opportunities, and foster growth within a specific sector.",
    image: "/image3.jpeg",
  },
  {
    title: "Client Acquisition & Lead Generation",
    description:
      "Client acquisition and lead generation involve attracting and converting prospects into clients through targeted marketing and effective sales strategies.",
    image: "/image4.jpeg",
  },
  {
    title: "Project Showcasing & Portfolio Management",
    description:
      "Project showcasing and portfolio management involve curating and presenting your best work in a well-organized manner to demonstrate expertise and attract opportunities.",
    image: "/image5.jpeg",
  },
  {
    title: "Hiring & Talent Acquisition",
    description:
      "Hiring and talent acquisition focus on identifying, attracting, and recruiting top talent to meet an organization's staffing needs and drive business success.",
    image: "/image6.jpeg",
  },
  {
    title: "Project Binding & Business Expansion",
    description:
      "Project bidding and business expansion involve submitting competitive bids for projects while pursuing opportunities to grow and diversify the business in new markets.",
    image: "/image7.jpeg",
  },
  {
    title: "Industry Events &  Growth Opportunities",
    description:
      "Industry events and growth opportunities provide platforms for networking, learning, and discovering new avenues for business development and market expansion",
    image: "/image8.jpeg",
  },
  {
    title: "Property Listing (Buy, Sell, Rent and Lease)",
    description:
      "Property listing involves showcasing properties for sale, rent, or lease, helping buyers, sellers, and renters connect to meet their real estate needs.",
    image: "/image9.jpeg",
  },
  {
    title: "Ecommerce",
    description:
      "Ecommerce is the buying and selling of goods and services online, enabling businesses to reach a global audience and streamline transactions.",
    image: "/image10.jpeg",
  },
  
];

const Scrolling = () => {
  return (
    <div className="overflow-x-auto py-10 px-5">
      <div className="flex space-x-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-5 w-96  flex-shrink-0"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-xl font-bold mt-4">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
            <a href="#" className="text-yellow-600 font-semibold mt-3 inline-block">
              View Plans ➜
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scrolling;
