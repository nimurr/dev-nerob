'use client';
import { useEffect, useRef } from "react";

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
    const lineRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        if (!window.gsap || !window.ScrollTrigger) return;

        const gsap = window.gsap;
        const ScrollTrigger = window.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

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

        const cards = containerRef.current.querySelectorAll(".timeline-card");

        // Timeline line animation
        gsap.fromTo(lineRef.current,
            { scaleY: 0, transformOrigin: "top center" },
            {
                scaleY: 1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top+=100",
                    end: "bottom bottom",
                    scrub: true,
                }
            }
        );

        // Animate each card
        cards.forEach((card, i) => {
            const fromDirection = i % 2 === 0 ? -200 : 200;

            gsap.from(card, {
                x: fromDirection,
                y: 50,
                opacity: 0,
                scale: 0.8,
                rotation: i % 2 === 0 ? -5 : 5,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    end: "top 50%",
                    toggleActions: "play none none reverse",
                }
            });
        });
    }, []);

    return (
        <section
            id="experience"
            className="min-h-screen flex flex-col items-center justify-center px-6 relative"
        >
            <h2 
            ref={titleRef}
            className="text-3xl md:text-[100px] font-bold text-white mb-10 md:mb-20 text-center">
                Experience
            </h2>

            <div ref={containerRef} className="relative w-full flex flex-col items-center">

                {/* Vertical timeline line */}
                <div
                    ref={lineRef}
                    className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-primary h-full z-0"
                ></div>

                {experiences.map((exp, index) => {
                    const isLeft = index % 2 === 0;
                    return (
                        <div
                            key={index}
                            className={`timeline-card relative w-full md:w-1/2 p-6 bg-white/10 backdrop-blur-xl border border-primary rounded-2xl shadow-xl mb-12 z-10
                            ${isLeft ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"}`}
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
