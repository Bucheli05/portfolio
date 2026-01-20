import { Hero } from "@components/Hero"
import { Skills } from "@components/Skills"
import { Projects } from "@components/Projects"
import { Experience } from "@components/Experience"
import { Contact } from "@components/Contact"

export const Home = () => {
    return (
        <div className="bg-white">
            <Hero />
            <Skills />
            <div id="projects">
                <Projects />
            </div>
            <Experience />
            <Contact />
        </div>
    )
}
