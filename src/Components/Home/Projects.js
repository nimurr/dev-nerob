'use client';
import React from 'react';

const projects = [
    {
        title: "AI bot langding page",
        image: "/Images/Projects/projects_2.png",
        tech: ["JavaScript", "Next.js", "Tailwind", "Framer Motion"],
        link: "https://ai-bot-langding-page.netlify.app/",
    },
    {
        title: "E-commerce App",
        image: "/Images/Projects/project-1.png",
        tech: ["React", "Node.js", "MongoDB"],
        link: "#",
    },
    {
        title: "Blog Platform",
        image: "/Images/Projects/project-1.png",
        tech: ["Next.js", "React", "CSS"],
        link: "#",
    },
    {
        title: "3D Web Experience",
        image: "/Images/Projects/project-1.png",
        tech: ["Three.js", "React", "Tailwind"],
        link: "#",
    },
    {
        title: "Blog Platform",
        image: "/Images/Projects/project-1.png",
        tech: ["Next.js", "React", "CSS"],
        link: "#",
    },
    {
        title: "3D Web Experience",
        image: "/Images/Projects/project-1.png",
        tech: ["Three.js", "React", "Tailwind"],
        link: "#",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="min-h-screen flex flex-col items-center justify-center px-6 "
        >
            <h2 className="text-3xl md:text-[100px] text-center font-bold text-white mb-10 md:mb-20">Projects</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full ">
                {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative hover:shadow-[0_0px_10px_#80ed99] bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-500 hover:scale-105"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover rounded-t-2xl"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-2 py-1 bg-white/10 backdrop-blur rounded-lg text-white text-xs"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
