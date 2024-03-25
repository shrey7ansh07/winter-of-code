import React from 'react';

function About() {
    return (
        <section className='about-us-section mt-8 mb-8'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 offset-md-3'>
                        <div className='faq-title text-center pb-4'>
                            <h2 className='text-4xl font-bold mt-56 mb-2'>How It Works</h2>
                            <p className='text-lg text-gray-500'>Engaging Students, Mentors, and Organizations</p>
                        </div>
                    </div>
                    <div className='col-md-6 offset-md-3'>
                        <div className='faq' style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                            <div className='mb-4'>
                                <h3 className='text-2xl font-semibold mt-24 mb-2'>Organizations</h3>
                                <p className='about-paragraph' style={{ textAlign: 'justify' }}>
                                    Organizations serve as the beating heart of our vibrant open-source community. They are the driving force behind the Winter of Code, playing a pivotal role in curating a dynamic environment where innovation thrives. These organizations actively engage in the selection process, identifying and welcoming both potential students and mentors who are passionate about contributing to diverse projects. Within the framework of the Winter of Code, organizations provide a robust platform for collaboration. This collaborative space is where students and mentors come together to embark on a journey of exploration, development, and knowledge-sharing.
                                </p>  
                                <p className='about-paragraph' style={{ textAlign: 'justify' }}>
                                    The role of organizations extends beyond project curation; they act as catalysts for learning and growth. Through mentorship, guidance, and a supportive community, organizations create an environment where students can not only contribute to ongoing projects but also gain valuable insights into the world of open source.
                                </p>
                            </div>

                            <div className='mb-4'>
                                <h3 className='text-2xl font-semibold mt-16 mb-2'>Mentors</h3>
                                <p className='about-paragraph' style={{ textAlign: 'justify' }}>
                                    Mentors play an indispensable role as guiding lights for students navigating the exciting journey of the Winter of Code. With a deep commitment to nurturing talent, mentors actively engage with students throughout the winter, offering unwavering support, valuable insights, and expert guidance.
                                    Throughout the Winter of Code, mentors become trusted companions, sharing their wealth of experience and expertise. They create a collaborative space where questions are welcomed, challenges are transformed into learning opportunities, and each student's journey is personalized for optimal growth.
                                
                                </p>
                            
                                <p className='about-paragraph' style={{ textAlign: 'justify' }}>
                                    In addition to their supportive role, mentors hold a key position in the evaluation process. They provide constructive feedback, assess project milestones, and contribute to shaping the overall progress of each student.
                                </p>
                            </div>

                            <div className='mb-4'>
                                <h3 className='text-2xl font-semibold mt-16 mb-2'>Students</h3>
                                <p className='about-paragraph' style={{ textAlign: 'justify' }}>
                                    Students stand as the dynamic driving force propelling the Winter of Code forward. Their journey commences with the enthusiastic act of filling in the registration form, where they not only express their interest but also showcase their diverse skills. Following a thorough internal screening process, students are presented with the opportunity to take a deeper dive into the world of open-source collaboration. Armed with their unique strengths and aspirations, they have the chance to submit project proposals.
                                </p>                                   
                                <p className='about-paragraph' style={{ textAlign: 'justify' }}>
                                    This pivotal phase aligns students' passions with impactful projects, setting the stage for a winter filled with coding challenges and continuous learning.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
