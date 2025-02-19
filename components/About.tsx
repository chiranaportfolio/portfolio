"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Download } from "lucide-react"

const CVDownloadButton = () => {
  return (
    <a
      href="/portfolio/cvchirana2.pdf" // Updated CV file name
      download="cvchirana2.pdf"
      className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white transition-all rounded-lg bg-gradient-to-r from-teal-500 to-rose-500 hover:from-teal-600 hover:to-rose-600 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900"
    >
      <Download className="w-5 h-5" />
      <span>Download CV</span>
    </a>
  )
}

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold text-primary mb-8"
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg dark:prose-invert"
          >
            <p>
              Hello! I'm a passionate web developer with a keen eye for design and a love for creating seamless user
              experiences. With expertise in modern web technologies, I bring ideas to life through clean, efficient,
              and scalable code.
            </p>
            <p>
              My journey in web development has equipped me with a diverse skill set, allowing me to tackle complex
              problems and deliver innovative solutions. I'm always excited to take on new challenges and push the
              boundaries of what's possible on the web.
            </p>
            {/* ✅ Download CV Button */}
            <div className="mt-6">
              <CVDownloadButton />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="w-64 h-64 bg-gradient-to-br from-primary via-accent to-secondary animate-gradient rounded-full overflow-hidden shadow-lg">
              <Image
                src="/profile.png" // Path to the image in the public folder
                alt="Profile Picture"
                width={256} // Adjust as needed
                height={256} // Adjust as needed
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
