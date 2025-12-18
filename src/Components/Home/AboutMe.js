'use client';
import React from 'react';

export default function AboutMe() {
    return (
        <section
            className="min-h-screen flex items-center justify-center px-6 "
        >

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center md:justify-end">
                    <div className="relative w-64 h-64 md:w-[700px] md:h-[700px] rounded-3xl bg-white/10 backdrop-blur-xl shadow-xl flex items-center justify-center">
                        <img
                            src="/Images/Home/NFV2.png"
                            alt="Nimur Rahman Nerob"
                            className="w-full h-full rounded-lg object-contain drop-shadow-[0_0px_10px_#80ed99]"
                        />
                    </div>
                </div>

                {/* Text Content */}
                <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-[100px] font-bold text-white md:mb-10">
                        About Me
                    </h2>
                    <p className="text-gray-400 mb-4">
                        Hello! I’m <span className="text-primary">Nimur Rahman Nerob</span>,
                        a passionate Software Developer and AI Developer. I love creating
                        modern web apps, interactive experiences, and visually engaging projects.
                    </p>
                    <p className="text-gray-400">
                        I focus on writing clean, scalable code and building solutions that are
                        both performant and user-friendly. When I’m not coding, I enjoy learning
                        new technologies and experimenting with creative digital projects.
                    </p>

                    {/* Skills/Buttons */}
                    <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
                        {[
                            "React.js",
                            "Next.js",
                            "JavaScript",
                            "TypeScript",
                            "Node.js",
                            "MongoDB",
                            "Express.js",
                            "Postgres",
                            "AWS",
                            "Docker",
                            "Git",
                            "Figma",
                            // web reletad skills more add

                        ].map((skill, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-white/10 backdrop-blur rounded-lg text-primary border border-primary hover:bg-white/20 hover:scale-105 transition transform"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>


                </div>

                {/* Image / Illustration */}


            </div>
        </section>
    );
}
