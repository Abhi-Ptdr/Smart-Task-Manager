import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  return (
    <div>
        <footer className="footer mt-auto bg-gray-900 w-full">
        <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <div className="col-span-full lg:col-span-1">
                <a className="flex-none text-xl font-semibold text-white focus:outline-none focus:opacity-80" href="/" aria-label="Brand">Task Manager</a>
                <img className="brand mx-2 mt-4" src="/TaskLogo.png" alt="Task Logo" />
            </div>

            <div className="col-span-1">
                <h4 className="font-semibold text-gray-100">Services</h4>

                <div className="mt-3 grid space-y-3">
                <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200" href="#">Web Development</a></p>
                <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200" href="#">Web Design</a></p>
                <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200" href="#">Logo Design</a></p>
                <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200" href="#">Poster Design</a></p>
                </div>
            </div>

            <div className="col-span-1">
                <h4 className="font-semibold text-gray-100">Connect Us</h4>

                <div className="mt-3 grid space-y-3">
                <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200" href="#">GitHub</a></p>
                <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200" href="#">LinkedIn</a></p>
                <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200" href="#">Instagram</a></p>
                <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200" href="#">Facebook</a></p>
                </div>
            </div>

            <div className="col-span-2">
                <h4 className="font-semibold text-gray-100">Stay up to date</h4>

                <form>
                <div className="mt-4">
                    <div className="w-full mt-4">
                    <label htmlFor="hero-input" className="sr-only">Subscribe</label>
                    <input type="text" id="hero-input" name="hero-input" className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Enter your email"/>
                    </div>
                    <a className="button-13 mt-4 sm:w-auto whitespace-nowrap inline-flex justify-center items-center text-sm font-medium rounded-lg border border-transparent text-white focus:outline-none disabled:opacity-50 disabled:pointer-events-none" href="#">
                    Subscribe
                    </a>
                </div>
                </form>
            </div>
            </div>

            <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
            <div className="flex justify-between items-center">
                <p className="text-sm text-gray-400">
                © 2025 Ptdr Abhi.
                </p>
            </div>

            <div className='social-icons'>
                <a className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none" href='https://github.com/Abhi-Ptdr'>
                <FaGithub size={20}/>
                </a>
                <a className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none" href="https://www.linkedin.com/in/abhiptdr/">
                <FaLinkedin size={20}/>
                </a>
                <a className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none" href="https://leetcode.com/u/Abhi_ptdr/">
                <SiLeetcode size={20}/>
                </a>
                <a className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none" href="https://www.instagram.com/_ptdr_abhi_/">
                <FaInstagram size={20}/>
                </a>
                <a className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none" href="https://www.facebook.com/abhishekpatidar.pateliya/">
                <FaFacebook size={20}/>
                </a>
            </div>
            </div>
        </div>
        </footer>
    </div>
  )
}

export default Footer
