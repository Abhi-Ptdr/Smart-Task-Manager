import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Dock() {
  return (
    <div className='flex inline-flex items-center overflow-hidden rounded-lg'>
        <a href='https://github.com/Abhi-Ptdr'><div className="social p-1 github mx-1"><FaGithub /></div></a>
        <a href='https://www.linkedin.com/in/abhiptdr/'><div className="social p-1 linkedin mx-1"><FaLinkedin /></div></a>
        <a href='https://leetcode.com/u/Abhi_ptdr/'><div className="social p-1 leetcode mx-1"><SiLeetcode /></div></a>
        <a href='https://www.instagram.com/_ptdr_abhi_/'><div className="social p-1 instagram mx-1"><FaInstagram /></div></a>
        <a href='https://www.facebook.com/abhishekpatidar.pateliya/'><div className="social p-1 facebook mx-1"><FaFacebook /></div></a>
    </div>
  )
}

export default Dock;
