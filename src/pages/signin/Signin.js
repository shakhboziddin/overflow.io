import React, { useState } from 'react'
import { } from '../../hooks/FirebaseLogin'
import { getAuth, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, createUserWithEmailAndPassword } from "firebase/auth"
import { APP } from '../../firebase/Firebase'
import { useNavigate } from 'react-router-dom';
import IMG from '../../images/image/sign.svg'
import './css/signin.css'
import {FcGoogle} from 'react-icons/fc'


const Signin = () => {
  const Auth = getAuth(APP)
  const provider = new GoogleAuthProvider()
  const providerFacebook = new FacebookAuthProvider();

  // Google |
  const SingInWithGoogle = () => {
    signInWithPopup(Auth, provider)
      .then(res => {
        console.log(res?.user?.displayName)
        localStorage.setItem("Name", res.user.displayName)
        localStorage.setItem("Email", res.user.email)
        localStorage.setItem("Photo", res.user.photoURL)
      })
      .catch(error => console.log(error))
  }


  const [loginEmail, SetLoginEmail] = useState("")
  const [loginPassword, SetLoginPassword] = useState("")


  // Email Login
  const navigate = useNavigate()
  const Login = async () => {

    try {
      const user = await createUserWithEmailAndPassword(Auth, loginEmail, loginPassword)
      console.log(user);
    } catch (err) {
      console.log(err)
    }
    navigate('/')

  }




  return (
    <div>
      <div className="signin">


        <div className="container-fluid">
          <div className="left-row">
            <div className="logo2">
              <svg height="30" viewBox="0 0 158 27" width="170" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="#161637"><path d="m111.461338 23.0990451h3.291072c.101523 0 .183943-.0806741.183943-.1800789v-22.69927868c0-.10921866-.089288-.19548558-.200363-.19548558h-3.259037c-.109518 0-.198807.08626692-.198807.19548558v22.69927868c0 .0994048.081669.1800789.183192.1800789" /><path d="m47.4009651 20.0223044c-2.8038291 0-5.084191-2.2815218-5.084191-5.0846127 0-2.8011928 2.2803619-5.08350555 5.084191-5.08350555 2.8023527 0 5.0827673 2.28231275 5.0827673 5.08350555 0 2.8030909-2.2804146 5.0846127-5.0827673 5.0846127m0-13.80729088c-4.8101194 0-8.7241545 3.91292788-8.7241545 8.72267818 0 4.8104884 3.9140351 8.7241544 8.7241545 8.7241544 4.8094339 0 8.7226781-3.913666 8.7226781-8.7241544 0-4.8097503-3.9132442-8.72267818-8.7226781-8.72267818" /><path d="m125.629204 20.0223044c-2.802049 0-5.08256-2.2815218-5.08256-5.0846127 0-2.8011928 2.280511-5.08350555 5.08256-5.08350555 2.802102 0 5.083352 2.28231275 5.083352 5.08350555 0 2.8030909-2.28125 5.0846127-5.083352 5.0846127m0-13.80729088c-4.810692 0-8.723047 3.91292788-8.723047 8.72267818 0 4.8104884 3.912355 8.7241544 8.723047 8.7241544 4.810745 0 8.723786-3.913666 8.723786-8.7241544 0-4.8097503-3.913041-8.72267818-8.723786-8.72267818" /><path d="m68.742065 6.61615328-4.6042761 11.43336512-4.6076228-11.43336512c-.0294836-.07124671-.1000849-.11973924-.1782829-.11973924h-3.5982743c-.1367401 0-.2300252.139829-.1782828.26676218l6.7435105 16.49870248c.0298555.0708204.1005099.1185669.1787079.1185669h3.2926011c.0793666 0 .1492242-.0477465.1783359-.1185669l6.7431387-16.49870248c.0521142-.12693318-.0411708-.26676218-.1786547-.26676218h-3.6122458c-.078198 0-.1492242.04811951-.1786547.11973924" /><path d="m94.9673937 7.4515142v-.80243842c0-.10440351-.0839991-.18910119-.1875415-.18910119h-3.2943432c-.1039661 0-.1868.08469768-.1868.18910119v16.52891782c0 .1127878.0888717.202452.1999878.202452h3.2683384c.1107453 0 .2003585-.0896642.2003585-.202452v-9.1095933c0-1.4878702.3623189-2.5656561 1.0786417-3.2089526.7442341-.6664736 1.7065164-1.00408944 2.8578761-1.00408944h.6417511c.1073557 0 .1950622-.08806209.1950622-.19705829v-3.24542712c0-.10937002-.0877065-.19785933-.1950622-.19785933h-.6417511c-1.5875089 0-2.9057016.41622555-3.9365178 1.23650068" /><path d="m103.37788 1.57701372c-1.293042 1.17155677-1.948752 2.87737209-1.948752 5.07216532v16.25926626c0 .1052511.088168.1905998.195468.1905998h3.342573c.108486 0 .196223-.0853487.196223-.1905998v-12.9041311h4.231692c.106922 0 .194659-.08576989.194659-.18980999v-3.20797318c0-.10446132-.087737-.18986265-.194659-.18986265h-4.227488c.033359-1.05993481.300073-1.81175088.795237-2.23486131.539949-.45975614 1.470456-.64735475 2.704109-.54779006l.71165.05807501c.113821.01010916.211151-.07787212.211151-.18833574v-3.22218919c0-.09924878-.07933-.18275465-.18124-.18949409l-.612057-.04043663c-2.299-.15684993-4.130104.35982288-5.418566 1.52537735" /><path d="m153.912761 6.63165383-3.083291 10.44197137-3.284484-10.44650068c-.023033-.07843694-.0959-.13071048-.176994-.13071048h-2.955813c-.081146 0-.153217.05227354-.177736.13071048l-3.283741 10.44650068-3.083344-10.44197137c-.024147-.08104796-.095847-.13523979-.178851-.13523979h-3.430536c-.126045 0-.215152.12047958-.17779.24325044l5.063916 16.50852532c.025316.079183.0959.1322558.179276.1322558h3.137689c.081146 0 .152845-.0523268.176993-.1303907l3.252004-10.1968026 3.250519 10.1968026c.024572.0780639.096643.1303907.177789.1303907h3.139547c.081517 0 .15396-.0530728.17816-.1322558l5.064288-16.50852532c.038477-.12277086-.053231-.24325044-.178161-.24325044h-3.430908c-.082632 0-.155499.05419183-.178532.13523979" /><path d="m77.3654037 10.957748c.931498-.8189467 2.1177825-1.23287977 3.5284647-1.23287977 1.2059573 0 2.2747383.39071097 3.1766472 1.16120807.6797505.5798124 1.1589879 1.357065 1.4300351 2.315608h-9.5996761c.2812834-.8838102.7715035-1.6374713 1.4645291-2.2439363zm8.116967 6.9832931c-.0849288-.0506663-.195235-.0307693-.2578254.0461802-.2619838.3302809-.9618336 1.166433-1.5191223 1.4787169-.7085932.3970443-1.5767545.5997094-2.5799063.5997094-1.413721 0-2.6094954-.3891804-3.5553882-1.1525526-.6911596-.5569598-1.1775411-1.2786378-1.4516804-2.1459814h12.8840171c.1046549 0 .1910765-.0773189.2017392-.1797598l.0598714-.5723708c.0428643-.4236969.0648295-.766011.0648295-1.0159647 0-2.3456383-.770757-4.4090759-2.290999-6.13320764-1.5487115-1.75943982-3.6001184-2.65079714-6.0943495-2.65079714-2.5549021 0-4.6821745.84480767-6.3218393 2.51077873-1.6309746 1.65921555-2.4582443 3.74967515-2.4582443 6.21205705 0 2.5066621.8397451 4.6098938 2.4976432 6.2514817 1.6571517 1.6401102 3.8234498 2.4725151 6.434438 2.4725151 1.6146606 0 3.0807357-.3490168 4.3568539-1.0350701 1.101729-.5937456 2.0157934-1.3789149 2.7239601-2.3419439.0629636-.0874521.1664456-.2412982.2468427-.3606807.0610443-.0937854.0329479-.2183928-.0633367-.2747063z" /></g><g transform="translate(.124939 .024202)"><path d="m30.390518 11.719778c-.0022691-.1016785-.0844326-.1823564-.1864905-.1823564h-3.4632677c0 6.3753509-5.1672762 11.5417463-11.5417277 11.5417463-6.37714283 0-11.54478841-5.1663954-11.54478841-11.5417463h-3.46585341c-.10205793 0-.18422142.0806779-.18685994.1816177l-.00153034.0060152c0 .0022689.00153034.0037463.00153034.0067539.10432705 8.2900932 6.88104725 15.0012416 15.19750176 15.0012416 8.3137632 0 15.0867895-6.7126786 15.1914859-15.0012416 0-.0030076.0007388-.0052765.0007388-.0067539 0 0-.0007388-.0030076-.0007388-.0052765" fill="#fb5d2e" /><path d="m15.1969206 0c-6.37339448 0-11.53871376 5.16559084-11.53871376 11.5374216h23.07484316c0-6.37183076-5.1650028-11.5374216-11.5361294-11.5374216" fill="#16b4f2" /><path d="m26.73305 11.5374216c0 6.3732925-5.1650327 11.5374215-11.5362612 11.5374215-6.37349649 0-11.53858196-5.164129-11.53858196-11.5374215z" fill="#2c2c96" /></g></g></svg>
            </div>
            <h4>Communicate your designs like never before.</h4>
            <img src={IMG} className="img" alt="" />
          </div>
          <div className="right-row">
            <h2>Sign in</h2>

            <div className="inputs">
              <div className="input">
                <small className='sm'>Email</small>
                <input className='email' type="text" placeholder='alex@example.com' onChange={(event) => { SetLoginEmail(event.target.value) }} />
              </div>
              <div className="input">
                <div className="forgot">
                  <small>Password</small>
                  <a href="">Forgot Password?</a>
                </div>
                <input className='email' type="password" onChange={(event) => { SetLoginPassword(event.target.value) }} />
              </div>
              <button className='sign-btn' onClick={Login}>Sign In</button>
            </div>
            <p className='or'><span className='line'></span>or<span className='line'></span></p>
            <button className='google'  onClick={SingInWithGoogle}> <FcGoogle className='gi' /> Sign in with Google</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin