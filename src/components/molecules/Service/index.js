import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BiPalette } from "react-icons/bi";
import { DiAtom } from "react-icons/di";
import { FiServer } from "react-icons/fi";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../../hooks/useAnimation";
import { BottomLine } from "../../../components";

const Service = () => {
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  const services = [
    {
      id: 1,
      title: "Full Stack Development",
      icon: <DiAtom />,
      description:
        "As a Full Stack developer, I would love to develope any front-end and back-end application and API using MERN, MEAN, MEVN and PHP etc.",
    },
    {
      id: 2,
      title: "Ecommerce & Shopify Development",
      icon: <FiServer />,
      description:
        "I can build Ecommerce sites such as B2B, C2C, C2B, B2C Commerce. I am very familiar with WooCommerce, BigCommerce and payment such as Paypal or Stripe.",
    },
    {
      id: 3,
      title: "Web Design",
      icon: <BiPalette />,
      description:
        "I also provide Fully Responsive Static Website Design with HTML, CSS, Bootstrap, Tailwind, Figma",
    },
    {
      id: 4,
      title: "Web Management",
      icon: <FiServer />,
      description:
        "I will manage any kinds of website. Data Management, Component management, Service management and so on.",
    },
    {
      id: 5,
      title: "Backend Development",
      icon: <FiServer />,
      description:
      "MVC Architectural Backend Development with Mongoose (Schema, Model etc) to manage the server easily.",
    },
    {
      id: 6,
      title: "Database Management",
      icon: <FiServer />,
      description:
        "Connecting Web Database to the server. Fixing All kinds of issue with related to database with database advanced operators.",
    },
  ];
  return (
    <div className="py-20 parent"
    // style={{ backgroundColor: "#313131" }}
    >
      <motion.div
        className="mb-12"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-center text-neutral">What I Provide</h3>
        <h1 className="text-4xl font-semibold text-center">
          My <span className="text-primary">Services</span>
        </h1>
        <BottomLine />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        ref={ref}
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={sectionBodyAnimation}
      >
        {services?.map((service) => (
          <div
            key={service.id}
            className={`${service.id % 2 === 0
              ? "bg-accent shadow-lg"
              : "bg-[#313131] shadow-md"
              } rounded-lg p-6 hover:shadow-primary cursor-pointer duration-300`}
          >
            <div className="mb-4 text-center">
              <span className="inline-block text-5xl text-primary">
                {service.icon}
              </span>
            </div>
            <h2 className="mb-4 text-2xl font-semibold text-center">
              {service.title}
            </h2>
            <p className="text-neutral">{service.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Service;
