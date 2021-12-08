import React from "react";
import { BsLinkedin, BsInstagram, BsTwitter, BsGithub } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="container mx-auto">
        <nav className="flex justify-center">
          <a href="https://www.linkedin.com/in/samikhawja/" target="_blank" rel="noopener noreferrer" className="inline-block mb-4" style={{padding: 25}}>
            <BsLinkedin size={50}/>
          </a>
          <a href="https://www.instagram.com/samikhawja/" target="_blank" rel="noopener noreferrer" className="inline-block mb-4" style={{padding: 25}}>
            <BsInstagram size={50}/>
          </a>
          <a href="https://twitter.com/_samikhawja" target="_blank" rel="noopener noreferrer" className="inline-block mb-4" style={{padding: 25}}>
            <BsTwitter size={50}/>
          </a>
          <a href="https://github.com/samikhawja" target="_blank" rel="noopener noreferrer" className="inline-block mb-4" style={{padding: 25}}>
            <BsGithub size={50}/>
          </a>
        </nav>
    </footer>
  );
}