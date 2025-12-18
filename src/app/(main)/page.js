'use client';
import AboutMe from '@/Components/Home/AboutMe';
import Experience from '@/Components/Home/Experience';
import Hero from '@/Components/Home/Hero';
import Projects from '@/Components/Home/Projects';
import Section from '@/Components/Home/Section';
import Skills from '@/Components/Home/Skills';
import Loading from '@/Components/others/Loading';
import React from 'react';

const Page = () => {


    return (
        <div className='container flex flex-col gap-5 md:gap-10 mx-auto'>
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
        </div>
    );
}

export default Page;
