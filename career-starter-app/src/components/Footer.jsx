import React from 'react'
import { Link } from 'react-router-dom'
import image from "../img/code.png"
import facbook from "../img/socials/facebook.png"
import twitter from "../img/socials/twitter.png"
import github from "../img/socials/github.png"
import instagram from "../img/socials/instagram.png"


export default function Footer() {
    return (
        <>
            <div className='md:grid grid-cols-3 gap-3 space-x-5 bg-[#121063]'>
                <div className='pl-5'>
                    <div className='pt-3'>
                        <img src={image} alt='logo' width={40} />
                        <h3 className='text-[#e5e7eb] font-bold text-3xl py-3 pl-5'>Career Starters</h3>
                        <p className='text-[#e5e7eb] p-5'>The Zero Gravity Pen can be used to write in any orientation, 
                            including upside-down. It even works in outer space.
                        </p>
                        <div className='flex flex-row space-x-2 pl-5'>
                            <img src={github} alt="github" width={35} />
                            <img src={facbook} alt="" width={35} />
                            <img src={twitter} alt="" width={35} />
                            <img src={instagram} alt="" width={35} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className=''>
                        <h3 className='font-bold text-[#e5e7eb] font-bold text-3xl pt-5'>Sitemap</h3>
                        <ul className='py-3 font-semi-bold text-[#e5e7eb]'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/pages/about">About</Link></li>
                            <li><Link to="/pages/careers">Careers</Link></li>
                            <li><Link to="/pages/resources">Resources</Link></li>
                            <li><Link to="/pages/faqs">FAQs</Link></li>
                            <li><Link to="/pages/privacy">Privacy Policy</Link></li>
                            <li><Link to="/pages/terms">Terms and Conditions</Link></li>
                        </ul>
                    </div>
                </div>
                <div className=''>
                    <h3 className='text-[#e5e7eb] font-bold pt-5 text-3xl'>Subscribe to our newsletters</h3>
                    <form method='post'>
                        <div className='py-3'>
                            <input
                                className='p-2 h-10 w-80 rounded border-2 border-indigo-500'
                                id='email'
                                name='email'
                                placeholder='email'
                            />
                        </div>
                        <button
                            className='btn-primary w-80'
                            type='submit'
                        >
                            submit
                        </button>
                    </form>
                </div>
            </div>
            <div>
                <h4 className="p-5 text-center bg-[#121063] text-[#e5e7eb]">@ {new Date().getFullYear()} Copyright. Career Starters </h4>
            </div>
        </>
    )
}
