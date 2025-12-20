'use client';
import Link from 'next/link';
import React, { useRef, useEffect, useState } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.3 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="contact"
            className={`min-h-[70vh] md:py-0 py-10 border border-primary flex flex-col rounded-t-3xl items-center justify-center px-6 bg-gradient-to-br from-[#1b0d24e1] via-[#1d1d3fe7] to-tertiary
        transition-all duration-700 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
            <h2 className="text-3xl md:text-[100px] text-center font-bold text-white mb-10  md:mb-20">Contact Me</h2>

            <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
                {/* Contact Info */}
                <div className="flex-1 flex flex-col gap-6 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl">
                    <h3 className="text-xl text-white font-semibold">Get in Touch</h3>
                    <p className="text-gray-400">I'm always open to new opportunities and collaborations. Feel free to reach out via email or social media.</p>
                    <div className="flex flex-col gap-3 text-gray-300">
                        <Link target='_blank' href="mailto:nimurnerob404@gmail" className="flex items-center gap-3 hover:text-primary transition">
                            <FaEnvelope /> nimurnerob404@gmail.com
                        </Link>
                        <Link target='_blank' href="tel:+8801708784404" className="flex items-center gap-3 hover:text-primary transition">
                            <FaPhone /> +880 1708784404
                        </Link>
                        <Link target='_blank' href="https://www.linkedin.com/in/nimur/" className="flex items-center gap-3 hover:text-primary transition">
                            <FaLinkedin /> linkedin.com/in/nimur
                        </Link>
                        <Link target='_blank' href="https://github.com/nimurr" className="flex items-center gap-3 hover:text-primary transition">
                            <FaGithub /> github.com/nimurr
                        </Link>
                    </div>
                </div>

                {/* Contact Form */}
                <form className="flex-1 flex flex-col gap-4 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-primary transition"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-primary transition"
                    />
                    <textarea
                        placeholder="Your Message"
                        rows={5}
                        className="p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-primary transition"
                    />
                    <button
                        type="submit"
                        className="mt-2 px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:scale-105 transition transform"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
