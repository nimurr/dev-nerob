'use client';
import React, { useEffect, useRef, useState } from "react";

const experiences = [
    {
        company: "Sprak Tech",
        duration: "1 Year 2 Months",
        role: "Full Stack Developer",
        details: [
            "Developed full-stack web applications using React, Node.js, and MongoDB",
            "Implemented responsive and modern UI designs",
            "Worked on REST APIs and database integrations",
        ],
    },
    {
        company: "Hollow Digital",
        duration: "4 Months",
        role: "Web Developer",
        details: [
            "Built dynamic websites using HTML, CSS, JavaScript, and React",
            "Collaborated with designers to implement UI/UX designs",
            "Optimized website performance and SEO",
        ],
    },
    {
        company: "Bangladeshi Software , Dinajpur",
        duration: "4 Months",
        role: "Web Developer",
        details: [
            "Built dynamic websites using HTML, CSS, JavaScript, and React",
            "Collaborated with designers to implement UI/UX designs",
            "Optimized website performance and SEO",
        ],
    },
];

export default function Experience() {
    const containerRef = useRef(null);
    const [visible, setVisible] = useState([]);

    useEffect(() => {
        const cards = containerRef.current?.querySelectorAll(".timeline-card");
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setVisible(prev => {
                            const newVisible = [...prev];
                            newVisible[index] = true;
                            return newVisible;
                        });
                    }
                });
            },
            { threshold: 0.3 }
        );

        cards?.forEach(card => observer.observe(card));
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="experience"
            className="min-h-screen flex flex-col items-center justify-center px-6 "
        >

            <h2 className="text-3xl md:text-[100px] font-bold text-white mb-10 md:mb-20">Experience</h2>

            <div ref={containerRef} className="relative w-full flex flex-col items-center">

                {/* Vertical timeline line */}
                {/* <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-1 bg-primary"></div> */}

                {experiences.map((exp, index) => {
                    const isLeft = index % 2 === 0; // alternate left/right
                    return (
                        <div
                            key={index}
                            className={`timeline-card relative w-full md:w-1/2 p-6 bg-white/10 backdrop-blur-xl border border-primary rounded-2xl shadow-xl mb-12
                transform transition-all duration-700
                ${isLeft ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"}
              `}
                        >
                            {/* Timeline dot */}
                            <div
                                className={`absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-primary rounded-full z-20`}
                            ></div>

                            <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                            <p className="text-sm text-gray-300 my-2">{exp.company} | {exp.duration}</p>
                            <ul className="text-gray-400 list-disc list-inside text-left mt-5 space-y-1">
                                {exp.details.map((detail, idx) => (
                                    <li key={idx}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
