/* eslint-disable react-hooks/purity */
import { motion } from "motion/react";

export const Hero = () => {
    // Generate floating shapes
    const shapes = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        size: Math.random() * 40 + 20,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 15 + 15,
        delay: Math.random() * 2,
    }));

    return (
        <div className="w-full  flex flex-col overflow-hidden relative px-6 lg:px-12">
            {/* Subtle animated background */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                {shapes.map((shape) => (
                    <motion.div
                        key={shape.id}
                        className="absolute rounded-full bg-linear-to-br from-cyan-50 to-cyan-100 opacity-30"
                        style={{
                            width: shape.size,
                            height: shape.size,
                            left: `${shape.x}%`,
                            top: `${shape.y}%`,
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.2, 0.3, 0.2],
                            x: [0, 20, -10, 0],
                            y: [0, -20, 10, 0],
                        }}
                        transition={{
                            duration: shape.duration,
                            delay: shape.delay,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}

                <motion.div
                    className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-cyan-100 via-cyan-50 to-transparent opacity-30"
                    initial={{ scale: 0, x: 100, y: 100 }}
                    animate={{ scale: 1, x: 0, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                />
            </div>

            {/* Main content */}
            <div className="flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full py-20">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
                    {/* Left: Text content */}
                    <motion.div
                        className="flex-1 flex flex-col gap-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.span
                            className="text-cyan-700 font-medium text-sm tracking-wider uppercase"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Full Stack Developer
                        </motion.span>

                        <motion.h1
                            className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            Hi, I'm{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-cyan-900">
                                Jose Luis
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-lg text-gray-600 max-w-xl leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            I build efficient, scalable web applications with modern technologies.
                            Passionate about clean code, great user experiences, and continuous learning.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-wrap gap-4 mt-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                        >
                            <motion.a
                                href="#projects"
                                className="px-6 py-3 bg-cyan-950 text-white rounded-lg font-medium hover:bg-cyan-800 transition-colors"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                View My Work
                            </motion.a>
                            <motion.a
                                href="#contact"
                                className="px-6 py-3 border-2 border-cyan-950 text-cyan-950 rounded-lg font-medium hover:bg-cyan-50 transition-colors"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Contact Me
                            </motion.a>
                        </motion.div>

                        <motion.div
                            className="flex gap-4 mt-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                        >
                            <motion.a
                                href="https://github.com/Bucheli05"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-cyan-950 transition-colors"
                                whileHover={{ scale: 1.1 }}
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/jose-luis-hincapie-bucheli-41b52528a"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-cyan-950 transition-colors"
                                whileHover={{ scale: 1.1 }}
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </motion.a>
                            <motion.a
                                href="mailto:jose.9496h@gmail.com"
                                className="text-gray-500 hover:text-cyan-950 transition-colors"
                                whileHover={{ scale: 1.1 }}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="flex flex-col gap-6"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { number: "1+", label: "Years Experience" },
                                { number: "4+", label: "Projects Built" },
                                { number: "10+", label: "Technologies" },
                                { number: "100%", label: "Commitment" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-5 text-center shadow-sm"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 + index * 0.1 }}
                                    whileHover={{ y: -4, boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1)" }}
                                >
                                    <div className="text-3xl font-bold text-cyan-950">{stat.number}</div>
                                    <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                >
                    <motion.div
                        className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <motion.div
                            className="w-1.5 h-3 bg-gray-400 rounded-full mt-2"
                            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

