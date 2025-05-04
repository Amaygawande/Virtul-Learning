import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaImage } from 'react-icons/fa';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        try {
            //Create user
            const res = await createUserWithEmailAndPassword(auth, email, password);
            console.log(res.user);
            navigate("/dashboard");
            
            //Create a unique image name
            // const date = new Date().getTime();
            // const storageRef = ref(storage, `${displayName + date}`);

            // const uploadTask = uploadBytesResumable(storageRef, file);

            // uploadTask.on(
            //     "state_changed",
            //     null,
            //     (error) => {
            //         setErr(true);
            //         setLoading(false);
            //         console.log(error);
            //     },
            //     async () => {
            //         try {
            //             const downloadURL = await getDownloadURL(storageRef);
                        
                        
            //             //Update profile
            //             await updateProfile(res.user, {
            //                 displayName,
            //                 photoURL: downloadURL,
            //             });

            //             //create user on firestore
            //             const userDocRef = doc(db, "users", res.user.uid);
            //             await setDoc(userDocRef, {
            //                 uid: res.user.uid,
            //                 displayName,
            //                 email,
            //                 photoURL: downloadURL,
            //                 createdAt: new Date(),
            //             }, { merge: true });

            //             //create empty user chats on firestore
            //             const userChatsRef = doc(db, "userChats", res.user.uid);
            //             await setDoc(userChatsRef, {}, { merge: true });

            //             setLoading(false);
            //             navigate("/dashboard");
            //         } catch (err) {
            //             console.error("Error creating user document:", err);
            //             setErr(true);
            //             setLoading(false);
            //         }
            //     }
            // );
        } catch (err) {
            console.error("Error creating user:", err);
            setErr(true);
            setLoading(false);
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
                    Create your account
                </h2>
                {err && <p className="text-red-500 text-center mb-4">{err}</p>}

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg">
                            <FaUser className="h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                name="username"
                                required
                                className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-500"
                                placeholder="Username"
                            />
                        </div>
                        <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg">
                            <FaEnvelope className="h-5 w-5 text-gray-400" />
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-500"
                                placeholder="Email address"
                            />
                        </div>
                        <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg">
                            <FaLock className="h-5 w-5 text-gray-400" />
                            <input
                                type="password"
                                name="password"
                                required
                                minLength="6"
                                className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-500"
                                placeholder="Password (min 6 characters)"
                            />
                        </div>
                       
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-3 px-4 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {loading ? 'Signing up...' : 'Sign Up'}
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="text-indigo-600 hover:text-indigo-500 font-medium">
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );

}

export default SignUp;
