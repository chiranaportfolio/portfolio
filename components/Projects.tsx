"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Employee Management System",
    description: "A web-based Employee Management System built with React, Node.js, and MySQL. This application allows companies to efficiently manage employee records, departments, and positions. It features CRUD operations, a user-friendly dashboard, and a secure admin login for managing employees and departments with ease.",
    image: "/portfolio/employee.png",
    link: "#",
  },
  {
    title: "Bank System",
    description: "The Banking Application is a Java program designed to manage basic banking operations.",
    image: "/portfolio/bank.jpg",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "A modern and responsive portfolio website built using Next.js and Tailwind CSS. This project showcases personal details, projects, education, and contact information with smooth animations using Framer Motion. It is optimized for fast loading, SEO-friendly, and fully responsive on all devices.",
    image: "/portfolio/myportfoliopic.png",
    link: "#",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold text-primary mb-8"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-primary hover:text-primary-dark font-medium transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
