'use client';
import AboutMe from '@/Components/Home/AboutMe';
import Contact from '@/Components/Home/Contact';
import Educations from '@/Components/Home/Educations';
import Experience from '@/Components/Home/Experience';
import Hero from '@/Components/Home/Hero';
import Projects from '@/Components/Home/Projects';
import Section from '@/Components/Home/Section';
import Skills from '@/Components/Home/Skills';
import Loading from '@/Components/others/Loading';
import Link from 'next/link';
import React from 'react';

const Page = () => {


    return (
        <div className='container flex flex-col gap-5 md:gap-10 mx-auto'>
            <div className='fixed top-[40%] bg-gray-500/30 p-2 rounded-lg right-5 flex flex-col gap-4'>
                <Link href="https://www.facebook.com/NimurRahmanNerob" target='_blank' className='hover:scale-125 transition-transform'>
                    <img className='w-12' src="https://img.icons8.com/?size=48&id=118497&format=png" alt="" />
                </Link>
                <Link href="https://www.linkedin.com/in/nimur" target='_blank' className='hover:scale-125 transition-transform'>
                    <img className='w-12' src="https://img.icons8.com/?size=96&id=xuvGCOXi8Wyg&format=png" alt="" />
                </Link>
                <Link href="https://wa.me/01708784404" target='_blank' className='hover:scale-125 transition-transform'>
                    <img className='w-12' src="https://img.icons8.com/?size=96&id=BkugfgmBwtEI&format=png" alt="" />
                </Link>
            </div>
            <Section>
                <section id="home">
                    <Hero />
                </section>
            </Section>

            <Section>
                <section id="about">
                    <AboutMe />
                </section>
            </Section>

            <Section>

                <section id="skills">
                    <Skills />
                </section>
            </Section>

            <Section>

                <section id="experience">
                    <Experience />
                </section>
            </Section>

            <Section>
                <section id="projects">
                    <Projects />
                </section>
            </Section>
            <Section>
                <section id="education">
                    <Educations />
                </section>
            </Section>
            <Section>
                <section id="contact">
                    <Contact />
                </section>
            </Section>
        </div>
    );
}

export default Page;
