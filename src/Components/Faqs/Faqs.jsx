import React, { useState } from "react";
import Faq from "react-faq-component";
import "../../index";
import AnimatedText from "../AnimatedText";
import ContactForm from "./ContactForm";

const data = {
  title: "",
  rows: [
    // Existing FAQs
    {
      title: "What services do you offer?",
      content: `We provide a range of services to cater to different needs. Our offerings include web development, mobile app development, UI/UX design, and consulting services.`,
    },
    {
      title: "How can I contact support?",
      content:
        "You can reach our support team by emailing support@example.com or by visiting our contact page on the website.",
    },
    {
      title: "Is there a trial period for your services?",
      content: `Yes, we offer a trial period for our services. You can sign up for a trial on our website to experience our offerings.`,
    },
    {
      title: "What payment methods do you accept?",
      content: `We accept various payment methods, including credit cards, debit cards, and online payment gateways. Please check our payment options on the checkout page for more details.`,
    },
    {
      title: "How secure is my data?",
      content: `We take data security seriously. Our systems are designed to ensure the confidentiality and integrity of your data. For more details, you can review our privacy policy.`,
    },
    // Additional FAQs
    {
      title: "Do you provide maintenance services for websites or applications?",
      content: `Yes, we offer maintenance services to ensure that your website or application stays up-to-date and functions smoothly.`,
    },
    {
      title: "Can you help with search engine optimization (SEO) for websites?",
      content: `Yes, we provide SEO services to improve your website's visibility and ranking on search engines.`,
    },
    {
      title: "Do you offer hosting solutions for websites or applications?",
      content: `Yes, we provide hosting solutions tailored to your specific needs, ensuring optimal performance and security for your website or application.`,
    },
    {
      title: "What technologies do you specialize in?",
      content: `We specialize in a wide range of technologies, including but not limited to React.js, Node.js, Python, Java, and more. Feel free to contact us to discuss your specific requirements.`,
    },
    {
      title: "Do you offer custom development solutions?",
      content: `Yes, we offer custom development solutions tailored to your unique requirements. Our experienced team will work closely with you to deliver a solution that meets your needs.`,
    },
    {
      title: "What is your approach to project management?",
      content: `We follow agile methodologies for project management, ensuring flexibility, transparency, and collaboration throughout the development process.`,
    },
    {
      title: "Can you provide examples of your previous work?",
      content: `Yes, we have a portfolio showcasing our previous projects. Please visit our website to view our portfolio and see examples of our work.`,
    },
    {
      title: "What are your pricing models?",
      content: `Our pricing models vary depending on the scope and complexity of the project. We offer flexible pricing options to accommodate different budgets and project requirements.`,
    },
    {
      title: "How long does it take to complete a project?",
      content: `The time to complete a project depends on various factors such as project size, complexity, and client requirements. We work closely with our clients to establish realistic timelines and deliver projects on time.`,
    },
    {
      title: "Do you provide post-launch support for projects?",
      content: `Yes, we offer post-launch support to address any issues or concerns that may arise after the project is completed. Our support team is available to assist you whenever you need help.`,
    },
    {
      title: "Can you integrate third-party services or APIs into my project?",
      content: `Yes, we have experience integrating third-party services and APIs into projects to enhance functionality and provide additional features.`,
    },
  ],
  styles: {
    bgColor: '#0a0918',
    titleTextColor: 'white',
    titleTextSize: '52px',
    rowTitleColor: 'white',
    rowTitleTextSize: 'medium',
    rowContentColor: 'grey',
    rowContentTextSize: '16px',
    rowContentPaddingTop: '10px',
    rowContentPaddingBottom: '10px',
    rowContentPaddingLeft: '50px',
    rowContentPaddingRight: '150px',
    arrowColor: "#00D1FF",
    transitionDuration: "1s",
    timingFunc: "ease"
  }
};

const styles = {
  titleTextColor: "",
  rowTitleColor: "",
};

const config = {
  animate: true,
  arrowIcon: "V",
  openOnload: 0,
  expandIcon: "+",
  collapseIcon: "-",
};

const Faqs = () => {
  return (
    <div className="container mx-auto my-48 mb-64 p-4">
      <div className="bg-blue px-8 py-8 mb-12 rounded-md shadow-md">
        <AnimatedText
          text="Frequently Asked Questions"
          className="!text-7xl !font-semibold !text-white !text-center !mb-16"
        />
        <div className="mt-20">
          <Faq data={data} styles={data.styles} config={config} />
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default Faqs;
