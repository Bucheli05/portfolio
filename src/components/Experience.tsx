import { motion } from "motion/react";

interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    description: string;
    technologies: string[];
}

export const Experience = () => {
    const experiences: ExperienceItem[] = [
        {
            role: "Full Stack Developer",
            company: "Alliance Bioversity & CIAT",
            period: "Feb 2025 - Dec 2025",
            description: "Developing and maintaining web applications for agricultural data management. Building ETL pipelines and integrating AI solutions using modern web technologies and Python frameworks.",
            technologies: ["PHP", "Next.js", "TypeScript", "Pandas", "NumPy", "FastAPI", "LangChain"]
        },
        {
            role: "Software Development Intern",
            company: "Alliance Bioversity & CIAT",
            period: "Sep 2024 - Feb 2025",
            description: "Maintained the Crops Observatory platform, resolving critical bugs and improving system stability. Worked across legacy PHP codebases and modern Next.js applications.",
            technologies: ["PHP", "Next.js", "TypeScript", "Git"]
        },
        {
            role: "Systems Engineering Student",
            company: "Universidad del Valle",
            period: "Feb 2021 - Present",
            description: "Pursuing Systems Engineering degree with specialization in software development, artificial intelligence, and natural language processing. Strong foundation in algorithms and data structures.",
            technologies: ["Python", "TypeScript", "Scala", "C", "AI/ML", "NLP", "Data Structures"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <div className="w-full min-h-screen  px-6 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
            >
                <div className="text-center mb-12">
                    <motion.span
                        className="text-cyan-700 font-medium text-sm tracking-wider uppercase"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        My Journey
                    </motion.span>
                    <motion.h2
                        className="text-4xl font-bold text-gray-900 mt-2"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Experience & Education
                    </motion.h2>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Timeline line */}
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="relative pl-12"
                            >
                                {/* Timeline dot */}
                                <motion.div
                                    className="absolute left-2 top-6 w-5 h-5 bg-cyan-950 rounded-full border-4 border-white shadow-sm"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 * index, duration: 0.3 }}
                                />

                                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                                            <p className="text-cyan-950 font-medium">{exp.company}</p>
                                        </div>
                                        <span className="text-sm text-gray-500 mt-2 md:mt-0">{exp.period}</span>
                                    </div>

                                    <p className="text-gray-600 mb-4">{exp.description}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, techIndex) => (
                                            <motion.span
                                                key={techIndex}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.1 * techIndex }}
                                                className="px-3 py-1 bg-cyan-50 text-cyan-900 rounded-full text-xs"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};
