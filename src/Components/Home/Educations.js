'use client';
import React, { useRef, useEffect, useState } from 'react';

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
    const [visible, setVisible] = useState([]);

    useEffect(() => {
        const cards = containerRef.current?.querySelectorAll('.edu-card');
        const observer = new IntersectionObserver(
            (entries) => {
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
            id="education"
            ref={containerRef}
            className="min-h-[70vh] flex flex-col items-center justify-center px-6 "
        >
            <h2 className="text-3xl md:text-[100px] text-center font-bold text-white mb-10 md:mb-20">Education</h2>

            <div className="grid lg:grid-cols-2 gap-8 w-full">
                {educationList.map((edu, index) => (
                    <div
                        key={index}
                        className={`edu-card relative p-8 bg-white/10 backdrop-blur-xl border border-primary rounded-3xl
              transform transition-all duration-700 hover:shadow-[0_0px_10px_#80ed99] 
              ${visible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
              hover:scale-105 `}
                    >
                        <h3 className="text-2xl font-semibold text-white">{edu.degree}</h3>
                        <p className="text-sm text-gray-300 my-2">{edu.institution}</p>
                        <p className="text-gray-400 mt-1">{edu.field}</p>
                        <p className="text-gray-400 mt-1">{edu.duration}</p>
                        {edu.grade && (
                            <p className="text-gray-400 mt-1 font-medium">{edu.grade}</p>
                        )}
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

