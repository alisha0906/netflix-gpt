import { useNavigate, Link } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState, useRef } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, userLOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const user = useSelector((store) => store.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful
        }).catch((error) => {
            console.error(error);
        });
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                
                console.log("Updated displayName:", auth.currentUser.displayName);

                dispatch(addUser({ uid, email, displayName }));
                navigate("/browser");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        return () => unsubscribe();
    }, []);

    const handleGPTSearch = () => {
        dispatch(toggleGptSearchView());
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className="absolute flex flex-col md:flex-row justify-between w-screen px-2 py-2 bg-gradient-to-b from-black z-10">
            <img className="w-40 mx-auto md:mx-0" src={LOGO} alt="logo" />
            {user && (
                <div className="flex items-center p-2 mr-14">
                    <button 
                        className="py-2 px-4 m-2 bg-purple-800 text-white rounded-lg"
                        onClick={handleGPTSearch}>
                        GPT Search
                    </button>

                    <div className="relative" ref={dropdownRef}>
                        <div 
                            className="flex items-center cursor-pointer" 
                            onClick={toggleDropdown}
                        >
                            <img 
                                className="w-12 h-12 p-1 m-3 rounded-md hover:border-2 hover:border-white" 
                                alt="usericon" 
                                src={userLOGO}
                            />
                            <span className="text-white">▼</span>
                        </div>

                        {showDropdown && (
                            <div className="absolute right-0 mt-2 w-48 bg-black bg-opacity-90 rounded-md shadow-lg border border-gray-700 text-white z-50">
                                <div className="py-1">
                                    
                                        <p className="px-4 py-2 text-sm text-gray-300 border-b border-gray-700">
                                            {user?.displayName || user?.name || "Guest"}
                                        </p>
                                
                                    <div 
                                        onClick={() => setShowDropdown(false)} 
                                        className="w-full text-left block px-4 py-2 text-sm hover:bg-gray-800 cursor-pointer"
                                    >
                                        <Link to="/account" className="w-full inline-block">
                                            Account
                                        </Link>
                                    </div>
                                    <div 
                                        onClick={() => setShowDropdown(false)} 
                                        className="w-full text-left block px-4 py-2 text-sm hover:bg-gray-800 cursor-pointer"
                                    >
                                        <Link to="/settings" className="w-full inline-block">
                                            Settings
                                        </Link>
                                    </div>
                                    <button 
                                        onClick={handleSignOut} 
                                        className="w-full text-left block px-4 py-2 text-sm hover:bg-red-700 rounded-b-md"
                                    >
                                        Sign Out
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
