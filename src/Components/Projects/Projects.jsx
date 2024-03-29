import AnimatedText from "../AnimatedText";
import React from "react";
import Layout from "./Layout";
import { Link } from 'react-router-dom';
import GithubIcon  from "../Icons.jsx";
import SwiftServe from "/Logo/IitMandi.png";
import { motion } from "framer-motion";
import Footer from "../Footer/Footer.jsx";

const FramerImage = motion.img;
// import TransitionEffect from "../TransitionEffect";
const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className=" w-full flex items-center justify-between relative rounded-br-2xl
    rounded-3xl border border-solid border-dark bg-black shadow-2xl p-12 
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    "
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%]  rounded-[2.5rem] bg-dark   rounded-br-3xl
      xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
      " />

      <Link
        href={link}
        target="_blank"
        className="w-1/2  cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto" 
        whileHover={{scale:1.05}}
        transition={{duration:0.2}}
        priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        
        
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primaryDark font-medium text-xl
        xs:text-base
        ">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold text-white sm:text-sm">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-gray-500 sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            {" "}
            <GithubIcon />{" "}
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 font-semibold text-lg
            sm:px-4 sm:text-base
            "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border 
      border-solid border-dark bg-light relative p-6  xs:p-4
      "
    >
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%]  rounded-[2rem] bg-dark  rounded-br-3xl
              md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
            " />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto" 
        whileHover={{scale:1.05}}
        transition={{duration:0.2}}
        priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>
        <div className=" w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="ml font-semibold text-lg underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projetcs = () => {
  return (
    <>

      <main className="w-full mb-16 flex flex-col items-center justify-center text-white">
        <Layout className="pt-16">
          <AnimatedText
            text="Creativity surpasses expertise!"
            className="!text-7xl mb-16 !text-white sm:mb-8 sm:!text-6xl xs:!text-4xl m-16 md:m-24 sm:m-28 xs:mt-32"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Services Portal"
                img={SwiftServe}
                summary="A portal for the students of IIT Mandi to avail services provided by other students."
                link="https://services.iitmandi.ac.in/"
                github="www.github.com/vivekaggarwal569/Services-Portal"
                type="FeaturedProject"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Services Portal"
                img={SwiftServe}
                link="https://services.iitmandi.ac.in/"
                github="www.github.com/vivekaggarwal569/Services-Portal"
                type="Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Services Portal"
                img={SwiftServe}
                link="https://services.iitmandi.ac.in/"
                github="www.github.com/vivekaggarwal569/Services-Portal"
                type="Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Services Portal"
                img={SwiftServe}
                summary="A portal for the students of IIT Mandi to avail services provided by other students."
                link="https://services.iitmandi.ac.in/"
                github="www.github.com/vivekaggarwal569/Services-Portal"
                type="FeaturedProject"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Services Portal"
                img={SwiftServe}
                link="https://services.iitmandi.ac.in/"
                github="www.github.com/vivekaggarwal569/Services-Portal"
                type="Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12" >
              <Project
                title="Services Portal"
                img={SwiftServe}
                link="https://services.iitmandi.ac.in/"
                github="www.github.com/vivekaggarwal569/Services-Portal"
                type="Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projetcs;
