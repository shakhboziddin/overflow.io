import React, { useState, useEffect } from 'react'
import './css/how.css'
import { GoScreenFull } from 'react-icons/go'
import Aos from 'aos'
import { GrDocumentImage } from 'react-icons/gr'
import { Link } from 'react-router-dom'
// images
import img1 from '../../images/image/how1.svg'
import img2 from '../../images/image/how2.svg'
import img3 from '../../images/image/how3.svg'
import vid1 from '../../images/videos/how.mp4'
import idea from '../../images/image/idea.svg'
import upload from '../../images/image/upload.svg'
import bring from '../../images/image/bring.svg'
import step from '../../images/videos/step.mp4'
import step3 from '../../images/videos/step3.mp4'
import step4 from '../../images/videos/step4.mp4'
import step5 from '../../images/image/how5.png'
import feed from '../../images/image/get-feedback-hiw.png'
import update from '../../images/image/update.jpg'
import design from '../../images/image/design.jpg'

const How = () => {
    const [modal, setModal] = useState()

    const btnClick = () => {
        setModal(true)
    }
    const btnClick2 = () => {
        setModal(false)
    }
    useEffect(() => {
        Aos.init({
            offset: 100,
            duration: 200,
            easing: 'ease-in-out',
            // delay: 100,
        })
    })

    return (
        <div className='how'>
            <div className="hero-1">
                <img src={img1} className="dec1" alt="" />
                <img src={img2} className="dec2" alt="" />
                <img src={img3} className="dec3" alt="" />
                <div className='dec4'></div>
                <div className="dec5"></div>

                <div className="content">
                    <h1>How it works</h1>
                    <button onClick={btnClick}>Watch the video <GoScreenFull className='icon' /> </button>
                </div>
                <div className="modal" onClick={btnClick2} style={{ display: modal ? "flex" : "none" }}>
                    <div className="video">
                        <iframe width="1072" height="603" src="https://www.youtube.com/embed/y7OvIKk3RO8" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <button className='esc' onClick={btnClick2}>X <br /> Close</button>
                    </div>
                </div>

            </div>
            <div className="border"></div>

            <div className="step-1">
                <div className="container">
                    <div className='row'>
                        <div className="box">
                            <h4>STEP 1</h4>
                            <h1>Get Started</h1>
                            <p>Choose one of three possible ways to introduce visuals to your user flow diagram:</p>
                        </div>
                        <div className="how-video">
                            <video src={vid1} autoPlay loop muted ></video>
                        </div>
                    </div>
                    <div className="row-grid">
                        <div className="card">
                            <img src={bring} alt="" />
                            <h2>Bring in your designs</h2>
                            <p>Overflow integrates with Sketch, Figma, Adobe XD, and Photoshop for a streamlined process.</p>
                        </div>
                        <div className="card">
                            <img src={upload} alt="" />
                            <h2>Upload images</h2>
                            <p>Use screenshots of existing apps or websites or any other image to build your user flow.</p>
                        </div>
                        <div className="card">
                            <img src={idea} alt="" />
                            <h2>Ideate using shapes</h2>
                            <p>Use simple shapes and arrows to visualize complexity during the early ideation stage.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="step-2">
                <div className="container">
                    <div className="header2">
                        <h3>STEP 2</h3>
                        <h1>Design</h1>
                        <p>Rearrange your screens and connect them together to create user flow diagrams.</p>
                    </div>
                    <div className="row-2">
                        <div className="contents">
                            <div className="layer">
                                <div className='progress'></div>
                                <div>
                                    <h4>Layers</h4>
                                    <p>Layers are transferred over and can be used to apply connectors when you sync from your design tool.</p>
                                </div>
                            </div>
                            <div className="layer">
                                <div className='progress'></div>
                                <div>
                                    <h4>Hotspots</h4>
                                    <p>Add your own hotspots to imported screenshots or images to apply connectors.</p>
                                </div>
                            </div>
                            <div className="layer">
                                <div className='progress'></div>
                                <div>
                                    <h4>Styles & Annotation</h4>
                                    <p>Style and annotate your diagram to maintain brand consistency across your presentation.</p>
                                </div>
                            </div>
                            <div className="layer">
                                <div className='progress'></div>
                                <div>
                                    <h4>Device Skins</h4>
                                    <p>Apply device skins with just one click. Overflow automatically detects the appropriate device based on screen size.</p>
                                </div>
                            </div>
                        </div>
                        <div className="video-2">
                            <video src={step} autoPlay loop muted></video>
                        </div>
                    </div>
                </div>
            </div>

            <div className="step-2">    {/* ========================== STEP3 `    ====================== */}
                <div className="container">
                    <div className="header2">
                        <h3>STEP 3</h3>
                        <h1>Collaborate</h1>
                        <p>Work together with your team, increase transparency, and achieve a better final result.</p>
                    </div>
                    <div className="row-2">
                        <div className="contents">
                            <div className="layer">
                                <div className='progress'></div>
                                <div>
                                    <h4>Add document editors</h4>
                                    <p>Add your teammates as editors to your documents, so they can add their creative input.</p>
                                </div>
                            </div>
                            <div className="layer">
                                <div className='progress'></div>
                                <div>
                                    <h4>Version history</h4>
                                    <p>Access an unlimited list of your document’s past versions and bookmark the ones you want to keep.</p>
                                </div>
                            </div>
                            <div className="layer">
                                <div className='progress'></div>
                                <div>
                                    <h4>Manage folder access</h4>
                                    <p>Add teammates to your personal folders, so they can easily access your work anytime.</p>
                                </div>
                            </div>
                        </div>
                        <div className="video-2">
                            <video src={step3} autoPlay loop muted></video>
                        </div>
                    </div>
                </div>
            </div>

            <div className="step-2">{/* ========================== STEP4 `    ====================== */}
                <div className="container">
                    <div className="header2">
                        <h3>STEP 4</h3>
                        <h1>Present</h1>
                        <p>Show your user flow diagrams in an engaging, interactive way.</p>
                    </div>
                    <div className="row-2">
                        <div className="contents">
                            <div className="layer">
                                <div className='progress'></div>
                                <div>
                                    <h4>Presentation Mode</h4>
                                    <p>Click on screens and connectors to take your audience through your user journey.</p>
                                </div>
                            </div>
                            <div className="layer">
                                <div className='progress'></div>
                                <div>
                                    <h4>Zooming</h4>
                                    <p>Zoom out to see the bigger picture or go back in to focus on specific details.</p>
                                </div>
                            </div>
                            <div className="layer">
                                <div className='progress'></div>
                                <div>
                                    <h4>Keyboard Shortcuts</h4>
                                    <p>Take advantage of keyboard shortcuts or mouse gestures to present more effectively.</p>
                                </div>
                            </div>
                            <div className="layer">
                                <div className='progress'></div>
                                <div>
                                    <h4>Prototype Mode</h4>
                                    <p>Switch to prototype mode to present using the auto-generated rapid prototype.</p>
                                </div>
                            </div>
                        </div>
                        <div className="video-2">
                            <video src={step4} autoPlay loop muted></video>
                        </div>
                    </div>
                </div>
            </div>

            <div className="step-2"> {/* ========================== STEP5 `    ====================== */}
                <div className="container">
                    <div className="header2">
                        <h3>STEP 5</h3>
                        <h1>Share & Get <br /> Feedback</h1>
                    </div>
                    <div className="row-2 how5">
                        <div className="left-box">
                            <h2>Share your work</h2>
                            <p>Publish on the Cloud and send a public or passphrase-protected publication link to your stakeholders. Choose if version history will be accessible. <br /> Alternatively, try any of these methods: </p>
                            <div className="doc">
                                <div>
                                    <GrDocumentImage className='icon' />
                                    <p>Print to put up on the wall</p>
                                </div>
                                <div>
                                    <GrDocumentImage className='icon' />
                                    <p>Print to put up on the wall</p>
                                </div>
                                <div>
                                    <GrDocumentImage className='icon' />
                                    <p>Print to put up on the wall</p>
                                </div>
                            </div>
                        </div>
                        <div className="right-box">
                            <img src={step5} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container feed">
                <div className="row-2">
                    <div className="img">
                        <img src={feed} alt="" />
                    </div>
                    <div className="content">
                        <h3>Get feedback from stakeholders</h3>
                        <p>Get feedback and engage in design critique discussion using the built-in commenting functionality.</p>
                    </div>
                </div>
            </div>


            <div className="step6">
                <div className="container step-6">
                    <div className="left-box">
                        <div className="header-3">
                            <h3>STEP 6</h3>
                            <h1>Iterate</h1>
                        </div>
                        <div className="box-3">
                            <h2>Re-sync your designs</h2>
                            <p>Take feedback into consideration, make the necessary changes in your designs and sync again. All screens get updated and connectors are left intact.</p>
                        </div>
                        <div className="box-3">
                            <h2>Update publication link with changes</h2>
                            <p>Keep the same publication link updated throughout the whole process, so that you have a single source of truth amongst team and stakeholders.</p>
                        </div>
                    </div>
                    <div className="right-box">
                        <img src={update} alt="" />
                    </div>
                </div>
            </div>

            <div className="container design">
                <div className="img">
                    <img src={design} alt="" />
                </div>
                <div className="card">
                    <h1>Take design communication to the next level</h1>
                    <Link to={"/download"} className="btn">Start for free</Link>
                </div>
            </div>


        </div>
    )
}

export default How