import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { BG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { updateProfile } from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { Navigate } from "react-router-dom";

const Login = () => {
    const [isSignInForm, setisSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const [name, setName] = useState("");
    const email = useRef(null);
    const password = useRef(null);
    const dispatch = useDispatch();

    //useRef will create an object, in which current.value stores the data.
    const handleButtonClick = () => {
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);

        if (message) return;

        //Sign-In/Sign-Up Logic
        if (!isSignInForm) {
            //Sign-Up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    /// ✅ Update the displayName
                    return updateProfile(user, {
                        displayName: name
                    }).then(() => {
                        // ✅ Dispatch updated user manually
                        dispatch(addUser({
                            uid: user.uid,
                            email: user.email,
                            displayName: name
                        }));

                        // ✅ Navigate manually instead of relying on Header
                        Navigate("/browser");
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " - " + errorMessage);
                });
        }
        else {
            //Sign In Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                });
        }
    }
    const toggleSignInForm = () => {
        setisSignInForm(!isSignInForm);

    };
    return (
        <div>
            <Header />
            <div className="absolute">
                <img className="w-screen" src={BG_URL} alt="logo"></img>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="w-4/12 absolute p-12 bg-black m-24 my-30 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-90">
                <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {
                    !isSignInForm && (
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700" />
                    )
                }
                <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-600" />
                <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-600" />
                <p className="text-red-500">{errorMessage}</p>
                <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>Sign In</button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In now"}</p>
            </form>
        </div>
    );
};
export default Login;
