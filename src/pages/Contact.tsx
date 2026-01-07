import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';


const Contact: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); 

  const [isSending, setIsSending] = useState(false);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    const form = e.currentTarget;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        Swal.fire("Message Sent", "Thanks for reaching out!", "success");
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        Swal.fire("Failed to Send", String(error?.message || error || "Please try again later."), "error");
      })
      .finally(() => {
        setIsSending(false);
      });
  };


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
      <section className="pt-8 md:pt-28 pb-8 lg:pb-40">
        <div className="container grid grid-cols-12 gap-8">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-medium col-span-12 lg:col-span-8 mb-8">Let's start a project together</h1>
        </div>
        <div className="container grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7">
            <form onSubmit={handleFormSubmit}>
              <input type="text" name="name" className="w-full placeholder:text-text text-lg py-4 border-b-2 border-solid border-slate-500 font-medium outline-none focus:border-text mb-8" placeholder="Name" required />
              <input type="email" name="email" className="w-full placeholder:text-text text-lg py-4 border-b-2 border-solid border-slate-500 font-medium outline-none focus:border-text mb-8" placeholder="Email" required />
              <input type="text" name="subject" className="w-full placeholder:text-text text-lg py-4 border-b-2 border-solid border-slate-500 font-medium outline-none focus:border-text mb-8" placeholder="Subject" required />
              <textarea name="message" className="w-full placeholder:text-text text-lg py-4 border-b-2 border-solid border-slate-500 font-medium outline-none focus:border-text mb-8" placeholder="Message" rows={4} required></textarea>
              <button type="submit" disabled={isSending} className="bg-primary hover:bg-transparent px-16 py-4 border border-solid border-primary text-white hover:text-primary text-center font-medium rounded-full no-underline col-span-2 self-center transition-colors duration-150">{isSending ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <div className="mb-24">
              <p className="text-sm mb-4">Contact details</p>
              <a href="mailto:john.doe@email.com" className="block text-base font-medium mb-4">markelldehaney@gmail.com</a>
              <a href="tel:704-555-0127" className="block text-base font-medium mb-4">(305) 731-0040</a>
            </div>
            <div className="mb-24">
              <p className="text-sm mb-4">Socials</p>
              <a href="https://github.com/markelld" target="_blank" rel="noopener noreferrer" className="block text-base font-medium mb-4">Github</a>
              <a href="https://www.linkedin.com/in/markell-dehaney/" target="_blank" rel="noopener noreferrer" className="block text-base font-medium mb-4">Linkedin</a>
            </div>
          </div>
        </div>
      </section>
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

export default Contact; 
