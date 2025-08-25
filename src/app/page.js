"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full text-white">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 sm:mb-8 leading-tight">
            Lagani Patel
          </h1>
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <span className="text-gray-300">I build </span>
            <span className="text-blue-400 font-bold text-center min-h-[1.5em] flex items-center justify-center">
              <ReactTyped
                strings={[
                  "intelligent systems.",
                  "interactive applications.",
                  "data-driven solutions.",
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
                className="min-h-[1.5em] flex items-center justify-center"
              />
            </span>
          </div>
        </motion.div>
      </section>

      {/* Experience Section - Timeline-Based */}
      {mounted && (
        <motion.section
          id="experience"
          className="min-h-screen flex flex-col items-center justify-center text-black bg-[#173162] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-12 sm:py-16 lg:py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white text-center mb-12 sm:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Experience
          </motion.h1>
          
          {/* Mobile Layout - Stacked Cards */}
          <div className="w-full max-w-4xl space-y-6 sm:hidden">
            {/* Data Scientist Card */}
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <div className="experience-card group bg-white text-black rounded-xl shadow-xl p-6 w-full h-auto min-h-[180px] flex flex-col justify-center transition-all duration-500 ease-in-out hover:h-auto border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Data Scientist</h2>
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">2025</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">NC Museum of Natural Sciences</h3>
                <p className="text-gray-600 text-sm mb-4">Oct 2024 - Present</p>
                <div className="details opacity-0 max-h-0 overflow-y-auto transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:max-h-[400px]">
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Developing AI-driven solutions to improve wildlife monitoring across the United States. By integrating AI into our workflow, we're reducing the need for manual processing and improving classification across large datasets. One of the key aspects of our work involves depth estimation models for calibrated data, processing over 100,000+ camera trap images from diverse ecosystems.

                    Our system improves detection accuracy by 20-30% compared to traditional methods, allowing researchers to extract precise positional data from images captured across 50+ monitoring sites nationwide. Automating these processes has resulted in a 40% reduction in manual labor, ensuring more consistent and reliable wildlife monitoring while accelerating data-driven conservation efforts.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Machine Learning Engineer Card */}
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <div className="experience-card group bg-white text-black rounded-xl shadow-xl p-6 w-full h-auto min-h-[180px] flex flex-col justify-center transition-all duration-500 ease-in-out hover:h-auto border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Machine Learning Engineer</h2>
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">2024</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Dept. of MAE, NC State University</h3>
                <p className="text-gray-600 text-sm mb-4">Feb 2024 - August 2024</p>
                <div className="details opacity-0 max-h-0 overflow-y-auto transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:max-h-[400px]">
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Developed machine learning models to predict thermal conductivity profiles with improved accuracy. Using MATLAB's API Engine with Python, I generated over 30,000 data points, reducing manual processing time by 50% and enhancing model efficiency.

                    To optimize predictions, I implemented Regression algorithms and ensemble learning, improving accuracy by 25% and reducing computational time by 30%. These advancements made thermal modeling more scalable and precise, enabling faster and more reliable simulations.

                    Beyond model development, I refined data processing workflows, accelerating simulation speed by 40% and ensuring a more automated and efficient approach to material behavior analysis.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Software Engineer Intern Card */}
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <div className="experience-card group bg-white text-black rounded-xl shadow-xl p-6 w-full h-auto min-h-[180px] flex flex-col justify-center transition-all duration-500 ease-in-out hover:h-auto border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Software Engineering Intern</h2>
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">2023</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">CaringHumans</h3>
                <p className="text-gray-600 text-sm mb-4">Jan 2023 - May 2023</p>
                <div className="details opacity-0 max-h-0 overflow-y-auto transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:max-h-[400px]">
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Worked on improving the platform frontend and integrating API-driven features. Implemented responsive design using HTML5, CSS3, and JavaScript frameworks and contributed to RESTful API development for real-time profile booking management.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Desktop Layout - 3 Cards Side by Side */}
          <div className="hidden sm:block w-full max-w-7xl mt-12 lg:mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
              {/* Data Scientist Card */}
              <motion.div
                className="experience-item"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                <div className="experience-card group bg-white text-black rounded-xl shadow-xl p-6 h-[220px] lg:h-[240px] flex flex-col justify-center transition-all duration-700 ease-in-out hover:shadow-2xl hover:h-[450px] relative overflow-hidden border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl lg:text-2xl font-bold text-gray-800">Data Scientist</h2>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">2025</span>
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-700 mb-3">NC Museum of Natural Sciences</h3>
                  <p className="text-gray-600 text-sm mb-4">Oct 2024 - Present</p>
                  
                  {/* Expandable Content */}
                  <div className="details opacity-0 max-h-0 overflow-y-auto transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:max-h-[300px] group-hover:mt-4">
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Developing AI-driven solutions to improve wildlife monitoring across the United States. By integrating AI into our workflow, we're reducing the need for manual processing and improving classification across large datasets. One of the key aspects of our work involves depth estimation models for calibrated data, processing over 100,000+ camera trap images from diverse ecosystems.

                      Our system improves detection accuracy by 20-30% compared to traditional methods, allowing researchers to extract precise positional data from images captured across 50+ monitoring sites nationwide. Automating these processes has resulted in a 40% reduction in manual labor, ensuring more consistent and reliable wildlife monitoring while accelerating data-driven conservation efforts.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Machine Learning Engineer Card */}
              <motion.div
                className="experience-item"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                <div className="experience-card group bg-white text-black rounded-xl shadow-xl p-6 h-[220px] lg:h-[240px] flex flex-col justify-center transition-all duration-700 ease-in-out hover:shadow-2xl hover:h-[450px] relative overflow-hidden border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl lg:text-2xl font-bold text-gray-800">Machine Learning Engineer</h2>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">2024</span>
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-700 mb-3">Dept. of MAE, NC State University</h3>
                  <p className="text-gray-600 text-sm mb-4">Feb 2024 - August 2024</p>
                  
                  {/* Expandable Content */}
                  <div className="details opacity-0 max-h-0 overflow-y-auto transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:max-h-[300px] group-hover:mt-4">
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Developed machine learning models to predict thermal conductivity profiles with improved accuracy. Using MATLAB's API Engine with Python, I generated over 30,000 data points, reducing manual processing time by 50% and enhancing model efficiency.

                      To optimize predictions, I implemented Regression algorithms and ensemble learning, improving accuracy by 25% and reducing computational time by 30%. These advancements made thermal modeling more scalable and precise, enabling faster and more reliable simulations.

                      Beyond model development, I refined data processing workflows, accelerating simulation speed by 40% and ensuring a more automated and efficient approach to material behavior analysis.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Software Engineer Intern Card */}
              <motion.div
                className="experience-item"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                <div className="experience-card group bg-white text-black rounded-xl shadow-xl p-6 h-[220px] lg:h-[240px] flex flex-col justify-center transition-all duration-700 ease-in-out hover:shadow-2xl hover:h-[450px] relative overflow-hidden border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl lg:text-2xl font-bold text-gray-800">Software Engineering Intern</h2>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">2023</span>
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-700 mb-3">CaringHumans</h3>
                  <p className="text-gray-600 text-sm mb-4">Jan 2023 - May 2023</p>
                  
                  {/* Expandable Content */}
                  <div className="details opacity-0 max-h-0 overflow-y-auto transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:max-h-[300px] group-hover:mt-4">
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Worked on improving the platform frontend and integrating API-driven features. Implemented responsive design using HTML5, CSS3, and JavaScript frameworks and contributed to RESTful API development for real-time profile booking management.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Education Section */}
      <motion.section 
        id="education" 
        className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#8194B8] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-12 sm:py-16 lg:py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <div className="relative group md:mr-8 lg:mr-12 mb-8 md:mb-0 order-2 md:order-1">
          <Image
            src="/education_test.jpg"
            alt="North Carolina State University Campus"
            width={400}
            height={300}
            className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[450px] rounded-xl shadow-2xl transition duration-300 group-hover:opacity-90"
            priority
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left md:pl-6 lg:pl-8 xl:pl-12 order-1 md:order-2">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black font-extrabold mb-6 sm:mb-8 lg:mb-10 leading-tight"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Education
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-black leading-relaxed"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I'm pursuing a Master of Computer Science at North Carolina State University, where I've been diving deep into Data Analytics, Data Science, Machine Learning, and Software Engineering. My undergraduate studies at Pandit Deendayal Energy University in Information and Communication Technology Engineering laid a strong foundation in Data Structures, Database Management Systems, and Internet of Things.
          </motion.p>
        </div>
      </motion.section>

      {/* Beyond Code Section */}
      <motion.section
        id="beyond code"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#E7EFFF] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <div className="w-full md:w-1/2 text-center md:text-right mb-8 md:mb-0 order-2 md:order-1">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-black mb-6 sm:mb-8 lg:mb-10 leading-tight"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Beyond Code
          </motion.h1>
          <motion.div 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-black space-y-4 sm:space-y-6 lg:space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
              I'm a 22-year-old embracing both the struggles and successes on my journey through the world of data science.
            </p>
            <p className="leading-relaxed">
              Tech is a big part of my life, but beyond coding, I find joy in many different things.
              I work as a part-time event manager at my university's Student Union, where I've managed over 100 events,
              handling everything from logistics and coordinating AV Tech to problem-solving on the fly.
            </p>
            <p className="leading-relaxed">
              I have a passion for photography and filmmaking, I am loving the work of director Mike Flanagan currently.
              I like cooking and reading poems. Lately, I've been on a quest to incorporate more protein into my diet as a vegetarian.
            </p>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image
              src="/test_image.jpg"
              alt="Lagani Patel - Personal Photo"
              width={400}
              height={400}
              className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[450px] rounded-xl shadow-2xl transition duration-300"
              priority
            />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}