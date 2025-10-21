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
              {mounted ? (
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
              ) : (
                <span className="min-h-[1.5em] flex items-center justify-center">intelligent systems.</span>
              )}
            </span>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="min-h-screen flex flex-col items-center justify-start bg-[#0C2851] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 pt-0 sm:pt-2 lg:pt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <motion.h1 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center w-full max-w-7xl mb-4 sm:mb-6 lg:mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Technical Skills
        </motion.h1>
        
        <div className="w-full max-w-7xl">
          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Machine Learning Skills */}
            <motion.div
              className="bg-[#11346A] rounded-xl p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Machine Learning</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white font-bold text-sm flex-shrink-0">P</div>
                  <div>
                    <p className="text-white font-bold">PyTorch</p>
                    <p className="text-gray-400 text-sm">Deep Learning Framework</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center text-white font-bold text-sm flex-shrink-0">😊</div>
                  <div>
                    <p className="text-white font-bold">Hugging Face</p>
                    <p className="text-gray-400 text-sm">Transformer Library</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center text-white font-bold text-sm flex-shrink-0">T</div>
                  <div>
                    <p className="text-white font-bold">TensorFlow</p>
                    <p className="text-gray-400 text-sm">Deep Learning Framework</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white font-bold text-xs flex-shrink-0">SK</div>
                  <div>
                    <p className="text-white font-bold">SKLearn</p>
                    <p className="text-gray-400 text-sm">ML Toolkit</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Backend Skills */}
            <motion.div
              className="bg-[#11346A] rounded-xl p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Backend</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center text-white font-bold text-xs flex-shrink-0">node</div>
                  <div>
                    <p className="text-white font-bold">Node.js</p>
                    <p className="text-gray-400 text-sm">JavaScript runtime</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center text-white font-bold text-xs flex-shrink-0">E</div>
                  <div>
                    <p className="text-white font-bold">Express.js</p>
                    <p className="text-gray-400 text-sm">JS Backend Framework</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-black font-bold text-xs flex-shrink-0">F</div>
                  <div>
                    <p className="text-white font-bold">Flask</p>
                    <p className="text-gray-400 text-sm">Backend Framework</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center text-white font-bold text-xs flex-shrink-0">DJ</div>
                  <div>
                    <p className="text-white font-bold">Django</p>
                    <p className="text-gray-400 text-sm">Backend Framework</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Databases Skills */}
            <motion.div
              className="bg-[#11346A] rounded-xl p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Databases</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center text-white font-bold text-sm flex-shrink-0">🍃</div>
                  <div>
                    <p className="text-white font-bold">MongoDB</p>
                    <p className="text-gray-400 text-sm">NoSQL Database</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-pink-500 rounded flex items-center justify-center text-white font-bold text-xs flex-shrink-0">Q</div>
                  <div>
                    <p className="text-white font-bold">GraphQL</p>
                    <p className="text-gray-400 text-sm">API Query Language</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs flex-shrink-0">🐘</div>
                  <div>
                    <p className="text-white font-bold">PostgreSQL</p>
                    <p className="text-gray-400 text-sm">Relational Database</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white font-bold text-xs flex-shrink-0">M</div>
                  <div>
                    <p className="text-white font-bold">MySQL</p>
                    <p className="text-gray-400 text-sm">Relational Database</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* DevOps Skills */}
            <motion.div
              className="bg-[#11346A] rounded-xl p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">DevOps</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white font-bold text-sm flex-shrink-0">🐳</div>
                  <div>
                    <p className="text-white font-bold">Docker</p>
                    <p className="text-gray-400 text-sm">Container Creation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs flex-shrink-0">⚓</div>
                  <div>
                    <p className="text-white font-bold">Kubernetes</p>
                    <p className="text-gray-400 text-sm">Container Orchestration</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gray-400 rounded flex items-center justify-center text-white font-bold text-xs flex-shrink-0">☁</div>
                  <div>
                    <p className="text-white font-bold">AWS, Azure, GCP</p>
                    <p className="text-gray-400 text-sm">Cloud Services</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Frontend Skills */}
            <motion.div
              className="bg-[#11346A] rounded-xl p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Frontend</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white font-bold text-sm flex-shrink-0">N</div>
                  <div>
                    <p className="text-white font-bold">Next.js</p>
                    <p className="text-gray-400 text-sm">Rendering Framework</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-sm flex-shrink-0">⚛</div>
                  <div>
                    <p className="text-white font-bold">React.js</p>
                    <p className="text-gray-400 text-sm">Web UI Library</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center text-white font-bold text-sm flex-shrink-0">T</div>
                  <div>
                    <p className="text-white font-bold">Tailwind CSS</p>
                    <p className="text-gray-400 text-sm">CSS Framework</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mobile Skills */}
            <motion.div
              className="bg-[#11346A] rounded-xl p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Mobile</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-black font-bold text-xs flex-shrink-0">RN</div>
                  <div>
                    <p className="text-white font-bold">React Native + Expo</p>
                    <p className="text-gray-400 text-sm">Mobile Dev Framework</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white font-bold text-xs flex-shrink-0">🐦</div>
                  <div>
                    <p className="text-white font-bold">Swift</p>
                    <p className="text-gray-400 text-sm">iOS Development</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center text-white font-bold text-xs flex-shrink-0">C</div>
                  <div>
                    <p className="text-white font-bold">Jetpack Compose</p>
                    <p className="text-gray-400 text-sm">Android Development</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="min-h-screen flex flex-col items-center justify-start bg-[#173162] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 pt-0 sm:pt-2 lg:pt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white text-center mb-8 sm:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h1>

        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Project 1 - AI Image Compression */}
            <motion.div
              className="bg-[#1F4284] rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-white mb-3">AI-Driven Image Compression</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Trained and evaluated generative models (VQ-VAE, GANs, Diffusion) for domain-specific image compression, achieving a 15% improvement in SSIM and reducing perceptual loss by 20% over JPEG/WebP.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-orange-500 text-white text-sm rounded-full">PyTorch</span>
                <span className="px-3 py-1 bg-purple-500 text-white text-sm rounded-full">VQ-VAE</span>
                <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full">GANs</span>
                <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full">Diffusion Models</span>
              </div>
              <div className="flex gap-3">
                <span className="text-blue-400 hover:text-blue-300 cursor-pointer">View Details →</span>
              </div>
            </motion.div>

            {/* Project 2 - Interactive Digital Book */}
            <motion.div
              className="bg-[#1F4284] rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-3">Interactive Digital Book</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Designed and implemented an E-Textbook platform with normalized MySQL schemas, reducing data redundancy by 35% and supporting over 10,000 assessment records across user roles and course mappings.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full">Python</span>
                <span className="px-3 py-1 bg-orange-500 text-white text-sm rounded-full">MySQL</span>
                <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full">PostgreSQL</span>
                <span className="px-3 py-1 bg-purple-500 text-white text-sm rounded-full">Database Design</span>
              </div>
              <div className="flex gap-3">
                <span className="text-blue-400 hover:text-blue-300 cursor-pointer">View Details →</span>
              </div>
            </motion.div>

            {/* Project 3 - Antar iOS App */}
            <motion.div
              className="bg-[#1F4284] rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-white mb-3">Antar iOS App</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                iOS app for scheduling posts for Instagram. Features automated posting, content calendar management, and analytics tracking to optimize social media presence and engagement.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full">Swift</span>
                <span className="px-3 py-1 bg-purple-500 text-white text-sm rounded-full">iOS</span>
                <span className="px-3 py-1 bg-pink-500 text-white text-sm rounded-full">Instagram API</span>
                <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full">Social Media</span>
              </div>
              <div className="flex gap-3">
                <span className="text-blue-400 hover:text-blue-300 cursor-pointer">View Details →</span>
              </div>
            </motion.div>

            {/* Project 4 - Python Code Comment Generator */}
            <motion.div
              className="bg-[#1F4284] rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-white mb-3">Python Code Comment Generator</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                A Streamlit app that uses Groq's LLaMA 3 model to automatically add explanatory comments to Python code. Features include code upload, line-by-line comments, and free Groq API integration.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full">Streamlit</span>
                <span className="px-3 py-1 bg-purple-500 text-white text-sm rounded-full">LLaMA 3</span>
                <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full">Groq API</span>
                <span className="px-3 py-1 bg-orange-500 text-white text-sm rounded-full">Python</span>
              </div>
              <div className="flex gap-3">
                <span className="text-blue-400 hover:text-blue-300 cursor-pointer">View Details →</span>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* Experience Section - Timeline-Based */}
      <motion.section
        id="experience"
        className="min-h-screen flex flex-col items-center justify-start text-black bg-[#4C638D] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 pt-20 sm:pt-24 lg:pt-28 overflow-visible"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white text-center mb-8 sm:mb-10 lg:mb-12"
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
              <div className="experience-card group bg-white text-black rounded-xl shadow-xl p-6 w-full h-auto min-h-[180px] flex flex-col justify-center hover:h-auto border border-gray-200 transform-gpu">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Data Scientist</h2>
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">2025</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">NC Museum of Natural Sciences</h3>
                <p className="text-gray-600 text-sm mb-4">Oct 2024 - Present</p>
                <div className="details">
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
              <div className="experience-card group bg-white text-black rounded-xl shadow-xl p-6 w-full h-auto min-h-[180px] flex flex-col justify-center hover:h-auto border border-gray-200 transform-gpu">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Machine Learning Engineer</h2>
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">2024</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Dept. of MAE, NC State University</h3>
                <p className="text-gray-600 text-sm mb-4">Feb 2024 - August 2024</p>
                <div className="details">
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
              <div className="experience-card group bg-white text-black rounded-xl shadow-xl p-6 w-full h-auto min-h-[180px] flex flex-col justify-center hover:h-auto border border-gray-200 transform-gpu">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Software Engineering Intern</h2>
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">2023</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">CaringHumans</h3>
                <p className="text-gray-600 text-sm mb-4">Jan 2023 - May 2023</p>
                <div className="details">
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
                <div className="experience-card group bg-white text-black rounded-xl shadow-xl p-6 h-[220px] lg:h-[240px] flex flex-col justify-center hover:shadow-2xl relative overflow-hidden border border-gray-200 transform-gpu">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl lg:text-2xl font-bold text-gray-800">Data Scientist</h2>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">2025</span>
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-700 mb-3">NC Museum of Natural Sciences</h3>
                  <p className="text-gray-600 text-sm mb-4">Oct 2024 - Present</p>
                  
                  {/* Expandable Content */}
                  <div className="details group-hover:mt-4">
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
                <div className="experience-card group bg-white text-black rounded-xl shadow-xl p-6 h-[220px] lg:h-[240px] flex flex-col justify-center hover:shadow-2xl relative overflow-hidden border border-gray-200 transform-gpu">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl lg:text-2xl font-bold text-gray-800">Machine Learning Engineer</h2>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">2024</span>
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-700 mb-3">Dept. of MAE, NC State University</h3>
                  <p className="text-gray-600 text-sm mb-4">Feb 2024 - August 2024</p>
                  
                  {/* Expandable Content */}
                  <div className="details group-hover:mt-4">
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
                <div className="experience-card group bg-white text-black rounded-xl shadow-xl p-6 h-[220px] lg:h-[240px] flex flex-col justify-center hover:shadow-2xl relative overflow-hidden border border-gray-200 transform-gpu">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl lg:text-2xl font-bold text-gray-800">Software Engineering Intern</h2>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">2023</span>
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-700 mb-3">CaringHumans</h3>
                  <p className="text-gray-600 text-sm mb-4">Jan 2023 - May 2023</p>
                  
                  {/* Expandable Content */}
                  <div className="details group-hover:mt-4">
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Worked on improving the platform frontend and integrating API-driven features. Implemented responsive design using HTML5, CSS3, and JavaScript frameworks and contributed to RESTful API development for real-time profile booking management.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

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
            <p className="leading-relaxed">
              I'm 23, and while coding keeps me busy, I try to keep life balanced with passions that go beyond the screen.
            </p>
            <p className="leading-relaxed">
              At my university's Student Union, I've worked as a part-time event manager, running 100+ events where I got to juggle logistics, AV tech, and the kind of problem-solving that doesn't come with a manual.
            </p>
            <p className="leading-relaxed">
              Outside of work, I enjoy photography and filmmaking (currently obsessed with Mike Flanagan's storytelling style). I also love cooking, experimenting with vegetarian recipes, and reading poetry when I need to slow down.
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