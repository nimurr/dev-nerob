'use client';
import React from 'react';

// Example skill icons (replace with your own images or SVGs)
const skills = [
    { name: "JavaScript", icon: "https://img.icons8.com/?size=48&id=PXTY4q2Sq2lG&format=png" },
    { name: "TypeScript", icon: "https://img.icons8.com/?size=96&id=wpZmKzk11AzJ&format=png" },
    { name: "React.js", icon: "https://img.icons8.com/?size=160&id=asWSSTBrDlTW&format=png" },
    { name: "Next.js", icon: "https://img.icons8.com/?size=256&id=yUdJlcKanVbh&format=png" },
    { name: "Node.js", icon: "https://img.icons8.com/?size=512&id=54087&format=png" },
    { name: "MongoDB", icon: "https://img.icons8.com/?size=160&id=tBBf3P8HL0vR&format=png" },
    { name: "Express.js", icon: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png" },
    { name: "Postgres", icon: "https://img.icons8.com/?size=512&id=38561&format=png" },
    { name: "AWS", icon: "https://img.icons8.com/?size=512&id=33039&format=png" },
    { name: "Docker", icon: "https://img.icons8.com/?size=160&id=LdUzF8b5sz2R&format=png" },
];

export default function Skills() {
    return (
        <section id="skills" className="min-h-[70vh] px-6 flex flex-col  justify-center ">
            <h2 className="text-3xl md:text-[100px] text-center font-bold text-white mb-5 md:mb-20">My Skills</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col hover:shadow-[0_0px_10px_#80ed99] items-center justify-center p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-primary shadow-xl hover:scale-105 transition transform cursor-pointer"
                    >
                        <img src={skill.icon} alt={skill.name} className="w-16 h-16 object-contain mb-2" />
                        <p className="text-white text-sm font-medium">{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
