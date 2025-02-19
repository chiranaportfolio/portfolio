"use client"

import { useEffect, useRef } from "react"
import { ArrowDownIcon } from "@heroicons/react/24/outline"
import { motion } from "framer-motion"

interface CountUpProps {
  end: number
  duration?: number
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 2000 }) => {
  const nodeRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    const node = nodeRef.current
    if (!node) return

    const start = 0
    const increment = end / (duration / 16)
    let current = start

    const updateCounter = () => {
      if (current < end) {
        current += increment
        node.textContent = Math.floor(current).toString()
        requestAnimationFrame(updateCounter)
      } else {
        node.textContent = end.toString()
      }
    }

    requestAnimationFrame(updateCounter)
  }, [end, duration])

  return <span ref={nodeRef}>0</span>
}

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center 
                 bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat relative"
    >
      <div className="absolute inset-0 bg-black/50"></div> {/* Dark overlay */}
      
      <div className="text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold text-white mb-4"
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-white mb-8"
        >
          Crafting digital experiences with passion and precision
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center space-x-8 mb-12"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">
              <CountUp end={2} /> +
            </div>
            <div className="text-gray-200">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">
              <CountUp end={10} /> +
            </div>
            <div className="text-gray-200">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">
              <CountUp end={100} /> %
            </div>
            <div className="text-gray-200">Client Satisfaction</div>
          </div>
        </motion.div>
        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="inline-flex items-center px-6 py-3 border border-transparent 
                     text-base font-medium rounded-md text-primary bg-white 
                     hover:bg-gray-100 transition duration-300 ease-in-out"
        >
          Explore My Work
          <ArrowDownIcon className="ml-2 h-5 w-5" />
        </motion.a>
      </div>
    </section>
  )
}

export default Hero
