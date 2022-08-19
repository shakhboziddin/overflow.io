import React, { useEffect } from 'react'
import './css/home.css'
import { Link } from 'react-router-dom'
import Video from '../../images/videos/home.mp4'
import { GrBarChart } from 'react-icons/gr'
import { AiOutlineRight } from 'react-icons/ai'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Swiperjs from '../../components/Swiper/Swiper'
import Footer from '../../components/Footer/Footer'
// images below
import Partner1 from '../../images/image/amazon.svg'
import Partner2 from '../../images/image/facebook.svg'
import Partner3 from '../../images/image/microsoft.svg'
import Partner4 from '../../images/image/netflix.svg'
import Partner5 from '../../images/image/spotify.svg'
import Partner6 from '../../images/image/yahoo.svg'
import Invite from '../../images/image/invite.png'
import Infinite1 from '../../images/image/infinte-1.svg'
import captivate from '../../images/image/captivate.png'
import Publish from '../../images/image/Publish.png'


const Home = () => {

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 400,
      // easing: 'ease-in-out',
      // delay: 100,
    })
  })


  return (
    <div className='home'>
      <div className="container">
        <div className="header">
          <h1>
            Every journey <br />
            deserves a great story.
          </h1>
          <p>
            Create beautiful user flows and design presentations to <br /> narrate your design story like never before.
          </p>

          <div className="btns">
            <Link to={'/download'} className="btn1">Start free trial</Link>
            <Link to={'/examples'} className="btn-light">See examples</Link>
          </div>
        </div>
        <div className="video">
          <video autoPlay loop muted src={Video}></video>

          <div className="tool">

            <p>Sync your work from design tools <GrBarChart /> <GrBarChart /> <GrBarChart /> <GrBarChart /> </p>
          </div>
        </div>

        <div className="design" data-aos="fade-up">
          <div className="box" >
            <div className="icon">
              <GrBarChart className='icon' />
            </div>
            <div className="text">
              <h3>Interactive user flow diagrams</h3>
              <p>Transform your screens into interactive user flows to narrate powerful user experience stories. Show a holistic view of your user journey, navigate through it effortlessly, and communicate your work effectively to your team and stakeholders.</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <GrBarChart className='icon' />
            </div>
            <div className="text" >
              <h3>Interactive user flow diagrams</h3>
              <p>Create professional design presentations to engage your audience in design critique. Use only the screens you want to share, organize and group them efficiently, and add additional content or branding cues for a seamless presentation experience..</p>
            </div>
          </div>
        </div>

        <div className="partners" data-aos='fade-up'>
          <div><img src={Partner1} alt="" /></div>
          <div><img src={Partner2} alt="" /></div>
          <div><img src={Partner4} alt="" /></div>
          <div><img src={Partner3} alt="" /></div>
          <div><img src={Partner5} alt="" /></div>
          <div><img src={Partner6} alt="" /></div>
        </div>
        <p className="trust" data-aos="fade-up">
          Trusted by more than 500,000 designers and product managers across the globe
        </p>


        <div className="invite" data-aos="fade-up">
          <div className="left">
            <img src={Invite} alt="" />
          </div>
          <div className="right">
            <h2>Invite teammates and collaborate</h2>
            <p>Invite teammates to collaborate on your documents and build more impactful design presentations together. Organize your documents and publications in private or shared folders, depending on your team’s security needs.</p>

            <div className="btn">
              <Link to={""} className="see">See how  </Link> <AiOutlineRight className="icon" />
            </div>
          </div>
        </div>

      </div>
      <div className="infinite">
        <div className="img">
          <img src={Infinite1} alt="" />
        </div>
        <div className="content">
          <h1>Learn how Infinite Red uses Overflow to improve asynchronous communication with their clients.</h1>

          <div className="btn"><Link to={""} className="see"> See how </Link> <AiOutlineRight className="icon" /></div>
        </div>
      </div>

      <div className="container">
        <div className="captivate" data-aos="fade-up">
          <div className="left-cont">
            <h1>Captivate your audience with breathtaking design presentations</h1>
            <p>Keep your audience engaged from start to finish in design critique meetings with Overflow's interactive presentation features. Navigate between screens with ease using your mouse or keyboard. Zoom out for a bird's eye view of the user journey as a whole or switch to a rapid prototype view to focus on design details.</p>

            <div className="btn"><Link to={""} className="see"> See how </Link> <AiOutlineRight className="icon" /></div>

          </div>
          <div className="right-cont">
            <img src={captivate} alt="" />
          </div>

        </div>
      </div>

      <div className="captivate publishmain" data-aos="fade-up">
        <div className="right-cont right2">
          <img src={Publish} className="publish" alt="" />

        </div>
        <div className="left-cont left-short">
          <h1>Publish, share, and get feedback</h1>
          <p>Publish and share your user flow or design presentation online and allow your team and clients to navigate your work freely on any device and provide asynchronous design feedback.</p>

          <div className="btn"><Link to={""} className="see"> See how </Link> <AiOutlineRight className="icon" /></div>

        </div>

      </div>

      <section className='swsection'>
        
      <div className="container sw">
        <div className="swiper">
          <Swiperjs></Swiperjs>
        </div>
      </div>

      </section>




      <Footer></Footer>
    </div>

  )
}

export default Home 