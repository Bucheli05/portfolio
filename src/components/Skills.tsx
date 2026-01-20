import { motion } from "motion/react";

interface SkillCategory {
    title: string;
    skills: string[];
}

export const Skills = () => {
    const skillCategories: SkillCategory[] = [
        {
            title: "Frontend",
            skills: ["React", "TypeScript", "Next.js", "Vite", "Tailwind CSS", "Three.js", "Framer Motion"]
        },
        {
            title: "Backend",
            skills: ["Node.js", "Python", "FastAPI", "PHP", "GO", "PostgreSQL", "MariaDB"]
        },
        {
            title: "Tools & Others",
            skills: ["Git", "Docker", "AWS", "Firebase", "Kubernetes", "n8n", "LangChain"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4 }
        }
    };

    return (
        <div className="w-full py-20 px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto"
            >
                <div className="text-center mb-12">
                    <motion.span
                        className="text-cyan-700 font-medium text-sm tracking-wider uppercase"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        What I Work With
                    </motion.span>
                    <motion.h2
                        className="text-4xl font-bold text-gray-900 mt-2"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Skills & Technologies
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.15 }}
                            whileHover={{ y: -4, boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1)" }}
                        >
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100">
                                {category.title}
                            </h3>
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="flex flex-wrap gap-2"
                            >
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.span
                                        key={skillIndex}
                                        variants={itemVariants}
                                        className="px-3 py-2 bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-900 rounded-lg text-sm font-medium hover:from-cyan-100 hover:to-cyan-200 transition-colors cursor-default"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};
