'use client';
import { useEffect, useRef } from 'react';

export default function AboutMe() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    if (!window.gsap || !window.ScrollTrigger) return;

    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {

      /* ===============================
         HEADER LETTER SLIDE-DOWN
      =============================== */
      const title = titleRef.current;
      const text = title.innerText;
      title.innerText = ""; // clear original text

      const letters = text.split("").map(char => {
        const span = document.createElement("span");
        span.innerText = char === " " ? "\u00A0" : char; // preserve spaces
        span.style.display = "inline-block";
        title.appendChild(span);
        return span;
      });

      gsap.from(letters, {
        y: -100,
        opacity: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
        }
      });

      /* ===============================
         PARAGRAPHS
      =============================== */
      gsap.from(".about-para", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-text",
          start: "top 80%",
        }
      });

      /* ===============================
         SKILLS
      =============================== */
      gsap.from(".about-skill", {
        scale: 0.7,
        opacity: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".about-skills",
          start: "top 90%",
          end: "top 60%",
          scrub: 1,
        }
      });

      /* ===============================
         BUTTONS
      =============================== */
      gsap.from(".about-btn", {
        y: 40,
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-buttons",
          start: "top 85%",
        }
      });

      /* ===============================
         PARALLAX EFFECT FOR TEXT
      =============================== */
      gsap.to(".about-text", {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <div className="flex md:order-1 order-2 justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-[700px] md:h-[700px] rounded-3xl bg-white/10 backdrop-blur-xl shadow-xl flex items-center justify-center">
            <img
              src="/Images/Home/NFV2.png"
              alt="Nimur Rahman Nerob"
              className="w-full h-full rounded-3xl object-contain drop-shadow-[0_0px_10px_#80ed99]"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="about-text text-center md:order-2 order-1 md:text-left">

          {/* HEADER */}
          <h2
            ref={titleRef}
            className="about-title text-3xl md:text-[100px] font-bold text-white md:mb-10"
          >
            About Me
          </h2>

          {/* PARAGRAPHS */}
          <p className="about-para text-gray-400 mb-4">
            Hello! I’m <span className="text-primary">Nimur Rahman Nerob</span>,
            a passionate Software Developer and AI Developer. I love creating
            modern web apps, interactive experiences, and visually engaging projects.
          </p>

          <p className="about-para text-gray-400">
            I focus on writing clean, scalable code and building solutions that are
            both performant and user-friendly. When I’m not coding, I enjoy learning
            new technologies and experimenting with creative digital projects.
          </p>

          {/* SKILLS */}
          <div className="about-skills mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
            {[
              "React.js", "Next.js", "JavaScript", "TypeScript",
              "Node.js", "MongoDB", "Express.js", "Postgres",
              "AWS", "Docker", "Git", "Figma",
            ].map((skill, index) => (
              <span
                key={index}
                className="about-skill px-4 py-2 bg-white/10 backdrop-blur rounded-lg text-primary border border-primary hover:bg-white/20 hover:scale-110 transition transform"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* BUTTONS */}
          <div className=" mt-8 flex gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className=" px-6 py-3 rounded-xl bg-primary text-tertiary font-medium hover:scale-105 transition"
            >
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              className=" px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
            >
              Download CV
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
