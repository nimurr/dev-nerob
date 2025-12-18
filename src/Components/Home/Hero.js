'use client';
import React from "react";

export default function Hero() {
    return (
        <section
            className="min-h-screen flex items-center justify-center px-6"
        >
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className="text-center md:text-left">
                    <p className="text-base uppercase tracking-widest text-primary mb-3">
                        Hello, I’m
                    </p>

                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                        Nimur Rahman <span className="text-primary">Nerob</span>
                    </h1>

                    <h2 className="mt-4 text-xl md:text-2xl text-gray-300">
                        Web Developer & AI Developer
                    </h2>

                    <p className="mt-6 text-gray-400 max-w-xl">
                        I build modern web applications, interactive experiences, and
                        scalable software with a focus on performance and clean design.
                    </p>
                    <p className="mt-6 text-gray-400 max-w-xl">
                        I’m committed to creating impactful digital experiences that blend performance with modern design and usability.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="#projects"
                            className="px-6 py-3 rounded-xl bg-primary text-tertiary font-medium hover:scale-105 transition"
                        >
                            View Resume
                        </a>

                        <a
                            href="#contact"
                            className="px-6 py-3 rounded-xl border border-white/20 text-white backdrop-blur hover:bg-white/10 transition"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* Right Visual */}
                <div className="flex justify-center md:justify-end ">
                    <div className="relative flex overflow-hidden justify-end items-end w-64 h-64 md:w-[700px] md:h-[700px] backdrop-blur-sm bg-white/10 rounded-3xl shadow-[0_0_10px_#80ed99] ">
                        {/* drop shadow apply in this png image  */}
                        <img
                            src="/Images/Home/my.png"
                            alt=""
                            className="
                            w-full h-full object-contain
                            drop-shadow-[0_0_80px_#80ed99]
                            "
                        />

                    </div>
                </div>
            </div>
        </section>
    );
}
