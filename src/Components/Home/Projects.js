'use client';
import React, { useRef, useEffect } from 'react';

const projects = [
    {
        title: "E-commerce Website",
        image: "/Images/Projects/projects_3.png",
        tech: ["Next.js", "React", "Tailwind", "Node.js", "MongoDB"],
        link: "https://bongobuy.netlify.app/",
    },
    {
        title: "AI bot landing page",
        image: "/Images/Projects/projects_2.png",
        tech: ["JavaScript", "Next.js", "Tailwind", "Framer Motion"],
        link: "https://ai-bot-langding-page.netlify.app/",
    },
    {
        title: "Tech Company Website",
        image: "/Images/Projects/projects_4.png",
        tech: ["Next.js", "Tailwind", "Framer Motion"],
        link: "https://beeoct.netlify.app/",
    },
    {
        title: "Health Care Website",
        image: "/Images/Projects/projects_5.png",
        tech: ["Next.js", "Tailwind", "Framer Motion", "Node.js", "MongoDB", "Stripe", "Socket.io"],
        link: "https://suplify-website.netlify.app/",
    },
];

export default function Projects() {
    const titleRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        if (!window.gsap || !window.ScrollTrigger) return;
        const gsap = window.gsap;
        const ScrollTrigger = window.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        // Animate header letters
        const title = titleRef.current;
        const text = title.innerText;
        title.innerText = "";
        const letters = text.split("").map(char => {
            const span = document.createElement("span");
            span.innerText = char === " " ? "\u00A0" : char;
            span.style.display = "inline-block";
            title.appendChild(span);
            return span;
        });

        gsap.from(letters, {
            y: -50,
            opacity: 0,
            rotationX: 90,
            stagger: 0.05,
            duration: 0.8,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: titleRef.current,
                start: "top 85%",
            }
        });

        // Animate only images in project cards on scroll
        const images = sectionRef.current.querySelectorAll("img");
        images.forEach(img => {
            gsap.fromTo(img,
                { scale: 1 },
                {
                    scale: 1.5,
                    ease: "none",
                    scrollTrigger: {
                        trigger: img,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                    }
                }
            );
        });

    }, []);

    return (
        <section
            ref={sectionRef}
            id="projects"
            className="min-h-screen flex flex-col items-center justify-center px-6"
        >
            {/* Header with animation */}
            <h2
                ref={titleRef}
                className="text-3xl md:text-[100px] text-center font-bold text-white mb-10 md:mb-20"
            >
                Projects
            </h2>

            {/* Project cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative hover:skew-x-[2deg] hover:shadow-[0_0px_10px_#80ed99] bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-500 hover:scale-105"
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
