import React, { useEffect, useRef } from 'react';
import bgVideo from "/Bgcomponents/test1.jpeg";
import Logo from '../Header/HeaderComponents/Logo';

function About() {

    let date = new Date();
    let year = date.getFullYear();

    return (
        <div className='md:h-[700px] h-[500px] relative flex justify-center items-center'>
            <div className="container mx-auto px-48 mt-96">
                <h1 className="text-3xl font-bold mb-4">About Mandi Winter of Code</h1>
                <p>Welcome to Mandi Winter of Code, a platform dedicated to fostering collaboration, innovation, and skill development among the coding enthusiasts of Mandi and beyond. Our initiative aims to provide a conducive environment for individuals passionate about coding to come together, learn, and contribute to meaningful projects.</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
                <p>At Mandi Winter of Code, our mission is to empower individuals with the knowledge, skills, and opportunities they need to thrive in the ever-evolving world of technology. We believe in the transformative power of coding and seek to make it accessible to everyone, regardless of background or experience level.</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">What We Offer</h2>
                <ul>
                    <li>Project Opportunities: We provide a diverse range of projects spanning various domains such as web development, machine learning, mobile app development, and more. Participants have the chance to work on real-world projects, gaining invaluable hands-on experience.</li>
                    <li>Mentorship: Our experienced mentors are here to guide and support participants throughout their coding journey. Whether you're a beginner looking to learn the basics or an experienced coder seeking advice on advanced topics, our mentors are ready to help.</li>
                    <li>Community Engagement: Joining Mandi Winter of Code means becoming part of a vibrant and supportive community of like-minded individuals. Connect with fellow participants, share ideas, collaborate on projects, and build lasting relationships.</li>
                    <li>Skill Development: We believe in the importance of continuous learning and growth. Through workshops, tutorials, and resources, we provide opportunities for participants to expand their skill sets and stay up-to-date with the latest trends and technologies in the world of coding.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">Get Involved</h2>
                <p>Whether you're a student, professional, or coding enthusiast, there's a place for you at Mandi Winter of Code. Join us in our mission to learn, collaborate, and create. Together, we can make a difference in the world through code.</p>
            </div>
        </div>
    );
}

export default About;
