import React, { useEffect, useState } from 'react'
import Aos from 'aos'
import './css/download.css'
import { Button } from 'react-bootstrap'
import img1 from '../../images/image/download.png'
import { IoMdGitPullRequest } from 'react-icons/io'
import { AiOutlineRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

// images
import facebook from '../../images/image/facebook.svg'
import amazon from '../../images/image/amazon.svg'
import spotify from '../../images/image/spotify.svg'
import netflix from '../../images/image/netflix.svg'
import microsoft from '../../images/image/microsoft.svg'
import yahoo from '../../images/image/yahoo.svg'

const Download = () => {
  const [main, setMain] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setMain(true)
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 400,
      // easing: 'ease-in-out',
      // delay: 100,
    })
  })
  return (
    <div className='download' style={{ display: main ? 'block' : 'none' }} >
      <div className="container">
        <div className="left-row">
          <h1>Try Overflow for free</h1>
          <p className='main-p'>Overflow is a UX app that helps you create, edit, and share captivating user flow diagrams and stunning design presentations. Bring in your designs from your favorite design tool (Figma, Sketch, Adobe XD) and create beautiful interactive user flows to experience your user journey in just minutes. Work together with your team, and collaborate to build design presentations that communicate your designs to stakeholders with ease.</p>
          <div className="btns">
            <button className='btn'>Download for Windows 🪟</button>
            <a className='mac'>Download for Mac</a>
          </div>
          <p className='min'>Compatible with Windows 10 or above. Min 4GB RAM.</p>
        </div>
        <div className="right-row" data-aos="fade-up">
          <img src={img1} alt="" />
        </div>
      </div>

      <div className="how" data-aos="fade-up">
        <div className="card">
          <div className='header'>
            <h2><IoMdGitPullRequest className='icon1' /> How it Works</h2>
          </div>
          <div className="min-cont">
            <p>A step-by-step guide to help you build your first Overflow diagram or design presentation in minutes.</p>
            <Link className='link' to={'/how-it-works'}>Learn More <AiOutlineRight className='icon' /> </Link>
          </div>
        </div>

        <div className="card">
          <div className='header'>
            <h2><IoMdGitPullRequest className='icon1' /> How it Works</h2>
          </div>
          <div className="min-cont">
            <p>A step-by-step guide to help you build your first Overflow diagram or design presentation in minutes.</p>
            <Link className='link' to={'/how-it-works'}>Learn More <AiOutlineRight className='icon' /> </Link>
          </div>
        </div>

        <div className="card">
          <div className='header'>
            <h2><IoMdGitPullRequest className='icon1' /> How it Works</h2>
          </div>
          <div className="min-cont">
            <p>A step-by-step guide to help you build your first Overflow diagram or design presentation in minutes.</p>
            <Link className='link' to={'/how-it-works'}>Learn More <AiOutlineRight /> </Link>
          </div>
        </div>
      </div>

      <div className="trust" data-aos="fade-up">
        <p>Trusted by more than 500,000 designers and product managers across the globe</p>

        <div className="imgs">
          <div><img src={amazon} alt="" /></div>
          <div><img src={netflix} alt="" /></div>
          <div><img src={spotify} alt="" /></div>
          <div><img src={microsoft} alt="" /></div>
          <div><img src={facebook} alt="" /></div>
          <div><img src={yahoo} alt="" /></div>
        </div>
      </div>
    </div>
  )
}

export default Download