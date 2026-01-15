'use client';
import { useEffect, useRef } from "react";

export default function Hero() {
    const sectionRef = useRef(null);

    useEffect(() => {
        if (!window.gsap || !window.ScrollTrigger) return;

        const gsap = window.gsap;
        const ScrollTrigger = window.ScrollTrigger;

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {

            // LEFT CONTENT STAGGER
            gsap.from(".hero-left > *", {
                y: 60,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                stagger: 0.15,
            });

            // BUTTON POP
            // gsap.from(".hero-btn", {
            //     scale: 0.8,
            //     opacity: 0,
            //     duration: 0.6,
            //     stagger: 0.2,
            //     ease: "back.out(1.7)",
            //     delay: 0.6,
            // });

            // IMAGE REVEAL
            gsap.from(".hero-image", {
                scale: 0.8,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                delay: 0.3,
            });

            // IMAGE PARALLAX (scroll)
            gsap.fromTo(
                ".hero-image img",
                { y: 80, scale: 0.3 },   // start position
                {
                    y: -80,            // end position
                    scale: 2,        // end scale
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,      // smooth scrubbing
                    }
                }
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="min-h-screen flex items-center justify-center px-6 md:py-0 py-10"
        >
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* LEFT */}
                <div className="hero-left text-center md:text-left">
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

                    <p className="md:mt-6 mt-2 text-gray-400 max-w-xl">
                        I’m committed to creating impactful digital experiences that blend
                        performance with modern design and usability.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="https://drive.google.com/file/d/1EdPCiAkCesG5XWaK1vrDkaVcnKJQv0xu/view"
                            target="_blank"
                            className="hero-btn px-6 py-3 rounded-xl bg-primary text-tertiary font-medium hover:scale-105 transition"
                        >
                            View Resume
                        </a>

                        <a
                            href="#contact"
                            className="hero-btn px-6 py-3 rounded-xl border border-white/20 text-white backdrop-blur hover:bg-white/10 transition"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex justify-center md:justify-end">
                    <div className="hero-image relative flex overflow-hidden justify-end items-end w-64 h-64 md:w-[700px] md:h-[700px] backdrop-blur-sm bg-white/10 rounded-3xl shadow-[0_0_10px_#80ed99]">
                        <img
                            src="/Images/Home/my.png"
                            alt="Nerob"
                            className="w-full h-full object-contain drop-shadow-[0_0_80px_#80ed99]"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
