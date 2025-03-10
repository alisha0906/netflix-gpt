import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignIn, setisSignIn] = useState(true);
    const toggleSignInForm = () => {
        setisSignIn(!isSignIn);
    }
    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1280,h_720,q_75,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs"
                alt="logo"></img>
            </div>
            <form className="w-3/12 absolute p-12 bg-black m-24 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-90">
                <h1 className="font-bold text-3xl py-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {
                    !isSignIn && (
                        <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"/>
                    )
                }
                <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-600" />
                <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-600"/>
                <button className="p-4 my-6 bg-red-700 w-full rounded-lg">Sign In</button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignIn ? "New to Netflix? Sign Up Now" : "Already registered? Sign In now" }</p>
            </form>
        </div>
    );
};
export default Login;
