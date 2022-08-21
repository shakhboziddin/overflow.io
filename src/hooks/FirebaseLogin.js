// import { useState } from 'react'
// import { getAuth, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, createUserWithEmailAndPassword } from "firebase/auth"
// import { APP } from '../firebase/Firebase'



// export const useFirebaseLogin = () => {
//     const Auth = getAuth(APP)
//     const provider = new GoogleAuthProvider()
//     const providerFacebook = new FacebookAuthProvider();

//     // Google |
//     const SingInWithGoogle = () => {
//         signInWithPopup(Auth, provider)
//             .then(res => {
//                 console.log(res?.user?.displayName)
//                 localStorage.setItem("Name", res.user.displayName)
//                 localStorage.setItem("Email", res.user.email)
//                 localStorage.setItem("Photo", res.user.photoURL)
//             })
//             .catch(error => console.log(error))
//     }
//     // Facebook 
//     const SignInWithFacebook = () => {
//         signInWithPopup(Auth, providerFacebook)
//             .then(res => {
//                 // The signed-in user info.
//                 const user = res?.user?.name;
//                 console.log(user)
//                 // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//                 // const credential = FacebookAuthProvider.credentialFromResult(result);
//                 // const accessToken = credential.accessToken;
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     }

//     const [loginEmail, SetLoginEmail] = useState("")
//     const [loginPassword, SetLoginPassword] = useState("")

//     const [signinEmail, SetSigninEmail] = useState("")
//     const [signinPassword, SetSigninPassword] = useState("")

//     // Email Login
//     const Login = async () => {
//         try {
//             const user = await createUserWithEmailAndPassword(Auth, loginEmail, loginPassword)
//             console.log(user);
//         } catch (err) {
//             err
//         }
//     }

//     // Email SignIn
//     const SignIn = async () => {

//     }

//     // Signout
//     const SignOut = async () => {

//     }
//     return [SingInWithGoogle, SignInWithFacebook, SetLoginEmail, SetLoginPassword, SetSigninEmail, SetSigninPassword, Login, SignIn, SignOut]
// }








