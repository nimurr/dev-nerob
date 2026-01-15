'use client';
import React, { useRef, useEffect } from 'react';

const educationList = [
    {
        degree: "B.Sc in CSE",
        institution: "Dhaka International University",
        field: "Computer Science and Engineering",
        duration: "January 2024 - Present",
    },
    {
        degree: "Diploma in Engineering",
        institution: "Thakurgaon Polytechnic Institute",
        field: "Computer Science and Engineering",
        duration: "June 2019 - December 2023",
        grade: "CGPA: 3.46",
    },
];

export default function Educations() {
    const containerRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        if (!window.gsap || !window.ScrollTrigger) return;

        const gsap = window.gsap;
        const ScrollTrigger = window.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        // ------------------------
        // Animate Header Text
        // ------------------------
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

        // ------------------------
        // Animate Education Cards
        // ------------------------
        const cards = containerRef.current.querySelectorAll('.edu-card');
        gsap.from(cards, {
            y: 50,
            opacity: 0,
            scale: 0.95,
            stagger: 0.2,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            }
        });

    }, []);

    return (
        <section
            id="education"
            ref={containerRef}
            className="min-h-[70vh] flex flex-col items-center justify-center px-6 relative"
        >
            {/* Header */}
            <h2
                ref={titleRef}
                className="text-3xl md:text-[100px] text-center font-bold text-white mb-10 md:mb-20"
            >
                Education
            </h2>

            {/* Cards */}
            <div className="grid lg:grid-cols-2 gap-8 w-full">
                {educationList.map((edu, index) => (
                    <div
                        key={index}
                        className="relative p-8 bg-white/10 backdrop-blur-xl border border-primary rounded-3xl hover:shadow-[0_0px_10px_#80ed99] hover:scale-105 transition transform duration-500"
                    >
                        <h3 className="text-2xl font-semibold text-white">{edu.degree}</h3>
                        <p className="text-sm text-gray-300 my-2">{edu.institution}</p>
                        <p className="text-gray-400 mt-1">{edu.field}</p>
                        <p className="text-gray-400 mt-1">{edu.duration}</p>
                        {edu.grade && <p className="text-gray-400 mt-1 font-medium">{edu.grade}</p>}
                    </div>
                ))}
            </div>

            {/* Optional background pattern */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="w-full h-full bg-[url('/images/grid-pattern.png')] bg-repeat opacity-10 animate-[moveGrid_40s_linear_infinite]"></div>
            </div>
        </section>
    );
}
