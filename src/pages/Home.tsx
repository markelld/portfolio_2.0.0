import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import useLocale from '../locale/useLocale'

const Home: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showResume, setShowResume] = useState(false); 
  const { getLocale } = useLocale();

  return (
    <>
      <header className="bg-bg pt-10 lg:pt-8 pb-0 lg:pb-16">
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

        <div className='flex flex-col md:flex-row'>
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-4 md:p-8 mt-8">
            <h1 className="text-xl lg:text-2xl font-medium leading-snug mb-8 lg:mb-16 text-center">{getLocale("home.hero.title")}</h1>
            <button onClick={() => setShowResume(!showResume)} className="bg-primary hover:bg-transparent px-8 py-4 border border-solid border-primary text-white hover:text-primary text-center font-medium rounded-full transition-colors duration-150">View my resume</button>
          </div>
          <div className='w-full md:w-1/2 flex justify-center items-center p-4 md:p-8 mt-8'>
            <img
              className="max-w-full h-auto rounded-xl"
              src="/images/md_portrait.jpeg"
              alt=""
            />
          </div>
        </div>
      </header>
      {showResume && (
        <section className="flex justify-center py-8 bg-bg">
          <img src="/images/resume.png" alt="Resume" className="max-w-full" />
        </section>
      )}
      {/* <section>
        <div className="w-full overflow-hidden flex whitespace-nowrap text-3xl lg:text-4xl font-medium uppercase">
          <div className="animate-marquee">
            <span className="ml-10">Featured projects</span>
            <span className="ml-10">Featured projects</span>
            <span className="ml-10">Featured projects</span>
            <span className="ml-10">Featured projects</span>
            <span className="ml-10">Featured projects</span>
          </div>
          <div className="animate-marquee">
            <span className="ml-10">Featured projects</span>
            <span className="ml-10">Featured projects</span>
            <span className="ml-10">Featured projects</span>
            <span className="ml-10">Featured projects</span>
            <span className="ml-10">Featured projects</span>
          </div>
        </div>
        <div className="container grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-6">
            <Link to="/case-study" className="block relative mb-16 mt-32">
              <img className="relative -z-10" src="/images/work_thumbnail_1.jpg" alt="" />
              <div className="bg-white w-10/12 pt-4 pr-4 -mt-24">
                <p>Salonat</p>
                <h3 className="text-lg lg:text-xl font-medium">Premium furniture eCommerce website</h3>
              </div>
            </Link>
            <Link to="/case-study" className="block relative mb-16">
              <img className="relative -z-10" src="/images/work_thumbnail_2.jpg" alt="" />
              <div className="bg-white w-10/12 pt-4 pr-4 -mt-24">
                <p>Zajil</p>
                <h3 className="text-lg lg:text-xl font-medium">AI-based cold mailing SAAS website</h3>
              </div>
            </Link>
          </div>
          <div className="col-span-12 md:col-span-6">
            <Link to="/case-study" className="block relative mb-16">
              <img className="relative -z-10" src="/images/work_thumbnail_3.jpg" alt="" />
              <div className="bg-white w-10/12 pt-4 pr-4 -mt-24">
                <p>JD</p>
                <h3 className="text-lg lg:text-xl font-medium">Portfolio website for an independent designer</h3>
              </div>
            </Link>
            <Link to="/case-study" className="block relative mb-16">
              <img className="relative -z-10" src="/images/work_thumbnail_4.jpg" alt="" />
              <div className="bg-white w-10/12 pt-4 pr-4 -mt-24">
                <p>Bayt Property</p>
                <h3 className="text-lg lg:text-xl font-medium">Real estate services company website</h3>
              </div>
            </Link>
            <div className="flex">
              <Link className="flex items-center font-medium ml-auto" to="/work">
                See all works
                <svg className="ml-4" width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.29289 9.00008L0 1.70718L1.41421 0.292969L10.1213 9.00008L1.41421 17.7072L0 16.293L7.29289 9.00008Z" fill="black"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section> */}
      <section className="pt-16 lg:pt-28 pb-20 lg:pb-40">
        <div className="container relative grid grid-cols-12 gap-8">
          <h2 className="text-xl lg:text-2xl font-medium col-span-12 lg:col-span-6 mb-12">{getLocale('home.services.title')}</h2>
        </div>
        <div className="container relative grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <h3 className="text-lg lg:text-xl font-medium mb-4">{getLocale('home.services.design.heading')}</h3>
            <p>{getLocale('home.services.design.description')}</p>
          </div>
          <div className="col-span-12 md:col-span-4">
            <h3 className="text-lg lg:text-xl font-medium mb-4">{getLocale('home.services.development.heading')}</h3>
            <p>{getLocale('home.services.development.description')}</p>
          </div>
          <div className="col-span-12 md:col-span-4">
            <h3 className="text-lg lg:text-xl font-medium mb-4">{getLocale('home.services.consulting.heading')}</h3>
            <p>{getLocale('home.services.consulting.description')}</p>
          </div>
        </div>
      </section>
      <footer className="pt-24 pb-8 bg-bg">
        <div className="container relative grid grid-cols-12 gap-8">
          <div className="col-start-1 lg:col-start-4 col-span-12 lg:col-span-6 flex flex-col justify-center text-center mb-16 lg:mb-24 ">
            <h2 className="text-2xl lg:text-3xl font-medium">Get in touch</h2>
            <Link to="/contact" className="bg-primary hover:bg-transparent px-16 py-4 border border-solid border-primary text-white hover:text-primary text-center font-medium rounded-full no-underline col-span-2 self-center transition-colors duration-150">Let's talk</Link>
          </div>
          <div className="col-span-12 md:col-span-10 lg:col-span-8 col-start-1 md:col-start-2 lg:col-start-3 flex flex-col md:flex-row items-center justify-start md:justify-between space-y-4 md:space-y-0 text-lg font-medium mb-8">
            <a href="https://github.com/markelld" target="_blank">Github</a>
            <a href="https://www.linkedin.com/in/markell-dehaney/" target="_blank">LinkedIn</a>
          </div>
          {/* <div className="col-span-12 flex flex-col md:flex-row items-center md:items-start justify-start md:justify-between space-y-4 md:space-y-0">
            <p>© 2022 All rights reserved.</p>
            <p>Designed by <a className="font-bold" href="https://www.myoussouf.com/">MYoussouf</a></p>
          </div> */}
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

export default Home;
