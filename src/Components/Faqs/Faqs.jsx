import React from "react";
import Faq from "react-faq-component";
import '../../index';
import AnimatedText from "../AnimatedText";

const data = {
  title: "",
  rows: [
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
    arrowColor: "red",
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
    <div className="container mx-auto my-48 p-4">
      <div className="bg-blue px-8  rounded-md shadow-md">
        <AnimatedText text ="Frequently Asked Questions"  className="text-6xl font-semibold text-center mb-16 "></AnimatedText>
        <Faq data={data} styles={data.styles} config={config} />
      </div>
    </div>
  );
};

export default Faqs;
