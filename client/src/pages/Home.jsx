import React from 'react'
import HeroSection from '../components/HeroSection';
import CounterSection from '../components/CounterSection';
import FeatureSection from '../components/FeatureSection';
import AboutSection from '../components/AboutSection';
import ClassesSection from '../components/ClassesSection';
import VideoSection from '../components/VideoSection';
import StoriesSection from '../components/StoriesSection';
import InstructorSection from '../components/InstructorsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer'



const Home = () => {
    return (
        <div>
            <HeroSection />
            <CounterSection />
            <FeatureSection />
            <AboutSection />
            <ClassesSection />
            <VideoSection />
            <StoriesSection />
            <InstructorSection />
            <ContactSection />
            <Footer />
        </div>
    )
}

export default Home
