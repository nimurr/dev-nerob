'use client';
import { useEffect, useRef } from 'react';

export default function Skills() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);

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

    useEffect(() => {
        if (!window.gsap || !window.ScrollTrigger) return;

        const gsap = window.gsap;
        const ScrollTrigger = window.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Animate title letters
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

            // Animate skill cards with scale, rotation, and stagger
            gsap.from(".skill-card", {
                y: 60,
                opacity: 0,
                scale: 0.8,
                rotation: 15,
                stagger: 0.1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 90%",
                    end: "bottom 60%",
                }
            });

            // Optional subtle hover effect on scroll
            gsap.to(".skill-card", {
                rotationY: 10,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="skills"
            className="min-h-[80vh] px-6 py-20 flex flex-col justify-center "
        >
            {/* Header */}
            <h2
                ref={titleRef}
                className="skills-title text-3xl md:text-[100px] text-center font-bold text-white mb-10"
            >
                My Skills
            </h2>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-10">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="skill-card flex flex-col items-center justify-center p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-primary shadow-xl cursor-pointer transform transition duration-300 hover:scale-105 hover:rotate-3"
                    >
                        <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-16 h-16 object-contain mb-2"
                        />
                        <p className="text-white text-sm font-medium">{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
