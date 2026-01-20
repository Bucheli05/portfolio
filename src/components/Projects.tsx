import { motion } from "motion/react";

interface Project {
    title: string;
    description: string;
    technologies: string[];
    image?: string;
    link?: string;
}

export const Projects = () => {
    const projects: Project[] = [

        {
            title: "3D Portfolio",
            description: "Interactive 3D portfolio built to explore React Three Fiber capabilities and physics integration.",
            technologies: ["React", "Three.js", "React Three Fiber", "TypeScript", "Drei", "Rapier"],
            image: `${import.meta.env.BASE_URL}portfolio3d.png`,
            link: "https://portfolio-jose-luis.vercel.app/"
        },
        {
            title: "Crops Observatories",
            description: "Built new observatories with ETL pipelines and AI RAG system for retrieving and processing scientific agricultural data.",
            technologies: ["ETL", "AI/RAG", "Data Engineering", "Scientific Data", "Python", "Pandas", "FastAPI"],
            image: `${import.meta.env.BASE_URL}obs.png`,
            link: "https://cropobservatoriesalliance.org/es"
        },
        {
            title: "Personal Portfolio",
            description: "My personal portfolio website showcasing my projects and experience as a full stack developer.",
            technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Motion"],
            image: `${import.meta.env.BASE_URL}personalPortfolio.png`,
            link: "https://bucheli05.github.io/portfolio/"
        },
        {
            title: "Stock Analysis Dashboard",
            description: "Real-time stock analysis dashboard with interactive charts and financial data visualization.",
            technologies: ["React", "TypeScript", "Chart.js", "Financial APIs", "GO", "Tailwind"],
            image: `${import.meta.env.BASE_URL}stockDashboard.png`,
            link: ""
        },
        {
            title: "Visual Novel with 3D Scenes",
            description: "Interactive visual novel featuring immersive 3D scenes with physics-based interactions and real-time rendering.",
            technologies: ["React Three Fiber", "Drei", "Rapier", "TypeScript", "Tailwind", "Firebase", "Vite"],
            image: `${import.meta.env.BASE_URL}saekano.png`,
            link: "https://github.com/Bucheli05/Saekano-vn"
        },



    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className="w-full h-fit py-20 px-6">
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
                        My Portfolio
                    </motion.span>
                    <motion.h2
                        className="text-4xl font-bold text-gray-900 mt-2"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.p
                        className="text-gray-600 mt-4 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Here are some of the projects I've worked on, showcasing my skills in full-stack development and modern web technologies.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                        >
                            {project.image && (
                                <motion.div
                                    className="w-full h-48 overflow-hidden"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            )}

                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-cyan-50 text-cyan-900 rounded-full text-xs"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {project.link && (
                                    <motion.a
                                        href={project.link}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="text-cyan-950 hover:text-cyan-800 text-sm font-medium inline-flex items-center"
                                    >
                                        View Project →
                                    </motion.a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};
