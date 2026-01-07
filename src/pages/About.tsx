import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import useLocale from '../locale/useLocale'

const About: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); 
  const {getLocale} = useLocale();
 
  return (
    <>
      <header className="pt-10 lg:pt-8">
        <div className="container">
          <nav className="flex justify-between font-medium">
            <Link to="/">Markell Dehaney</Link>
            <Link className="hidden md:inline" to="/">Home</Link>
            <Link className="hidden md:inline" to="/about">About</Link>
            <Link className="hidden md:inline" to="/contact">Contact</Link>
            <button onClick={() => setMobileMenuOpen(true)} className="inline md:hidden">
              <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.5" width="24" height="4" fill="#201F27" />
                <rect x="12" y="10.5" width="12" height="4" fill="#201F27" />
              </svg>
            </button>
          </nav>
        </div>
      </header>
      <section className="mt-8 lg:mt-24 pb-16">
        <div className="container grid grid-cols-12 gap-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 col-span-full mb-8">
            <h2 className="text-xl font-medium max-w-sm mb-4 lg:mb-0">Who am I and a bit of me.</h2>
            <p>{getLocale('about.description')}</p>
          </div>
        </div>
      </section>
      <footer className="pt-24 pb-8 bg-bg">
        <div className="container relative grid grid-cols-12 gap-8">
          <div className="col-start-1 lg:col-start-4 col-span-12 lg:col-span-6 flex flex-col justify-center text-center mb-16 lg:mb-24 ">
            <h2 className="text-2xl lg:text-3xl font-medium">Get in touch</h2>
            <Link to="/contact" className="bg-primary hover:bg-transparent px-16 py-4 border border-solid border-primary text-white hover:text-primary text-center font-medium rounded-full no-underline col-span-2 self-center transition-colors duration-150">Let's talk</Link>
            <div className="col-span-12 md:col-span-10 lg:col-span-8 col-start-1 md:col-start-2 lg:col-start-3 flex flex-col md:flex-row items-center justify-start md:justify-between space-y-4 md:space-y-0 text-lg font-medium mt-8">
              <a href="#">Github</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
      <div className={`w-full bg-primary text-white flex flex-col justify-center text-2xl space-y-4 fixed right-0 top-0 bottom-0 z-50 pl-8 transition-transform duration-500 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={() => setMobileMenuOpen(false)} className="absolute top-10 right-4 flex items-center text-base">close <svg className="ml-4" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2.12109" y="0.454041" width="24" height="3" transform="rotate(45 2.12109 0.454041)" fill="#fff" /><rect y="17.4246" width="24" height="3" transform="rotate(-45 0 17.4246)" fill="#fff" /></svg></button>
        <Link to="/">Home</Link>
        <Link to="/work">Work</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </>
  );
};

export default About;