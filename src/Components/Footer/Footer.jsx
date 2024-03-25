import React from 'react'
import Layout from '../Projects/Layout'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid 
    font-medium  text-lg text-white border-white sm:text-base 
    py-8 md:py-12'  // Increased padding for top and bottom
    >
        <Layout className='flex items-center justify-between lg:flex-col lg:py-6'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
            <div className='flex items-center lg:py-2'>
            Build with <span className='text-primaryDark text-2xl px-1'>&#9825; </span> by &nbsp;
            <Link href="/" className=' underline underline-offset-2'>Tech team</Link>
            </div>
            
            <Link href="/" className=' underline underline-offset-2'>Contact us</Link>
        </Layout>
    </footer>
  )
}

export default Footer
