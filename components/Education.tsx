"use client"

import { motion } from "framer-motion"

const educationItems = [
  {
  
    name: " Bachelor of Information Technology ",
    institution: "University of Colombo School of Computing ",
    year: "2023-2026",
  },
  {
   
    name: " Diploma in Master java Developer",
    institution: "IJSE - Institute of Software Engineering",
    year: "2022",
  },
  {
    
    name: "Diploma in Information Technology",
    institution: "University of Colombo School of Computing",
    year: "2023",
  },
  {
    
    name: " Foundation in Information Technology",
    institution: "University of Colombo School of Computing ",
    year: "2023",
  },
]

const Education = () => {
  return (
    <section id="education" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold text-primary mb-8"
        >
          Education
        </motion.h2>
        <div className="space-y-8">
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2 text-primary">{item.name}</h3>
              <p className="text-gray-600">{item.institution}</p>
              <p className="text-gray-500 text-sm">{item.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

